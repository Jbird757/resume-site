locals {
  common_tags = {
    app = "personal-site"
  }
  bucket_name = "jl-personal-site"
  domain = "jaylowry.com"
  alt_domains = ["www.jaylowry.com"]
  aws-region = "us-east-1"
}

output module_bucket_arn {
  value = module.personal-site.bucket_arn
}