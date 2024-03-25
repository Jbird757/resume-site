#------------------------------------------------ S3 Endpoint ------------------------------------------------#

resource aws_s3_bucket" "site_build {
  bucket = "mybucket"

  tags = var.common_tags
}

resource aws_s3_bucket_policy allow_access_from_another_account {
  bucket = aws_s3_bucket.site_build.id
  policy = data.aws_iam_policy_document.allow_access_from_cloudfront.json
}

data aws_iam_policy_document allow_access_from_cloudfront {
  depends_on = [aws_cloudfront_distribution.s3_distribution]

  statement {
    principals {
      type = "AWS"
      service = "cloudfront.amazonaws.com"
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "${aws_s3_bucket.site_build.arn}/*",
    ]

    condition {
      StringEquals {
        AWS:SourceArn = aws_cloudfront_distribution.your_distribution_name.arn
      }
    }
  }
}

#------------------------------------------------ CloudFront Distribution ------------------------------------------------#

locals {
  s3_origin_id = "myS3Origin" #Look into this
}

resource aws_cloudfront_distribution s3_distribution {
  depends_on =[aws_s3_bucket.site_build, aws_acm_certificate.site_tls_cert]

  origin {
    domain_name              = aws_s3_bucket.b.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.s3_oac.id
    origin_id                = local.s3_origin_id
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Some comment"
  default_root_object = "index.html"

  logging_config {
    include_cookies = false
    bucket          = "mylogs.s3.amazonaws.com"
    prefix          = "myprefix"
  }

  aliases = ["mysite.example.com", "yoursite.example.com"] #Look into this

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["US", "CA", "GB", "DE", "JP"]
    }
  }

  tags = var.common_tags

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.site_tls_cert.arn
  }
}

resource aws_cloudfront_origin_access_control s3_oac { #CloudFront OAC
  name                              = "s3_oac"
  description                       = "OAC to connect s3_distribution with the S3 bucket site_build"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

#------------------------------------------------ ACM Certificate ------------------------------------------------#

resource "aws_acm_certificate" "site_tls_cert" {
  domain_name       = "example.com"
  validation_method = "DNS"

  tags = var.common_tags

  lifecycle {
    create_before_destroy = true
  }
}