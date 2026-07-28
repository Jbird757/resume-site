locals {
  common_tags = {
    app = "personal-site"
  }
  bucket_name = "j-personal-site"
  domain = "jaylowry.com"
  alt_domains = ["www.jaylowry.com"]
  aws-region = "us-east-1"
}

output module_bucket_name {
  value = module.personal-site.bucket_name
}

output module_cloudfront_distribution_id {
  value = module.personal-site.cloudfront_distribution_id
}