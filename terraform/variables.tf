locals {
  common_tags = {
    app         = "personal-site"
    Application = "personal-site"
    Environment = "production"
    ManagedBy   = "terraform"
    Project     = "resume-site"
  }
  bucket_name = "j-personal-site"
  domain      = "jaylowry.com"
  alt_domains = ["www.jaylowry.com"]
  aws-region  = "us-east-1"
}

output "module_bucket_name" {
  value = module.personal-site.bucket_name
}

output "module_cloudfront_distribution_id" {
  value = module.personal-site.cloudfront_distribution_id
}

output "resource_group_name" {
  value       = aws_resourcegroups_group.personal_site.name
  description = "The AWS Resource Group name to view all app resources in AWS Console"
}