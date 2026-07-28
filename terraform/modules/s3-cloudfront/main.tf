#------------------------------------------------ S3 Endpoint ------------------------------------------------#

resource "aws_s3_bucket" "site_build" {
  bucket        = var.bucket_name
  force_destroy = true
  tags          = var.common_tags
}

resource "aws_s3_bucket_public_access_block" "site_build" {
  bucket                  = aws_s3_bucket.site_build.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_policy" "allow_access_from_cloudfront" {
  bucket = aws_s3_bucket.site_build.id
  policy = data.aws_iam_policy_document.allow_access_from_cloudfront.json
}

data "aws_iam_policy_document" "allow_access_from_cloudfront" {
  depends_on = [aws_cloudfront_distribution.s3_distribution]

  statement {
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = ["s3:GetObject"]

    resources = [
      "${aws_s3_bucket.site_build.arn}/*"
    ]

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = ["${aws_cloudfront_distribution.s3_distribution.arn}"]
    }
  }
}

#------------------------------------------------ Security Headers Policy ------------------------------------------------#

resource "aws_cloudfront_response_headers_policy" "security_headers" {
  name    = "personal-site-security-headers"
  comment = "Security headers policy enforcing HSTS, Frame-Options, Content-Type-Options, and Referrer-Policy"

  security_headers_config {
    strict_transport_security {
      access_control_max_age_sec = 31536000
      include_subdomains         = true
      preload                    = true
      override                   = true
    }
    content_type_options {
      override = true
    }
    frame_options {
      frame_option = "DENY"
      override     = true
    }
    referrer_policy {
      referrer_policy = "strict-origin-when-cross-origin"
      override        = true
    }
  }
}

#------------------------------------------------ CloudFront Distribution ------------------------------------------------#

resource "aws_cloudfront_distribution" "s3_distribution" {
  depends_on = [aws_s3_bucket.site_build, aws_acm_certificate.site_tls_cert]

  origin {
    domain_name              = aws_s3_bucket.site_build.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.s3_oac.id
    origin_id                = aws_s3_bucket.site_build.bucket_regional_domain_name
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "CloudFront Distribution for Personal Site"
  default_root_object = "index.html"

  aliases = local.all_domain_names

  default_cache_behavior {
    allowed_methods            = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods             = ["GET", "HEAD"]
    target_origin_id           = aws_s3_bucket.site_build.bucket_regional_domain_name
    response_headers_policy_id = aws_cloudfront_response_headers_policy.security_headers.id

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations = [
        "US", "CA", "GB", "DE", "JP", "KR", "TW", 
        "FR", "NL", "BE", "CH", "AT", "IE", "IT", 
        "ES", "PT", "SE", "NO", "DK", "FI", "LU", 
        "VN"
      ]
    }
  }

  tags = var.common_tags

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.site_tls_cert.arn
    ssl_support_method  = "sni-only"
  }
}

resource "aws_cloudfront_origin_access_control" "s3_oac" { #CloudFront OAC
  name                              = "s3_oac"
  description                       = "OAC to connect s3_distribution with the S3 bucket site_build"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

#------------------------------------------------ ACM Certificate ------------------------------------------------#

resource "aws_acm_certificate" "site_tls_cert" {
  domain_name               = var.site_domain_name
  subject_alternative_names = var.alternate_domains
  validation_method         = "DNS"

  tags = var.common_tags

  lifecycle {
    create_before_destroy = true
  }
}
