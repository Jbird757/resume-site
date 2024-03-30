module "personal-site" {
  source = "./modules/s3-cloudfront"

  bucket_name       = local.bucket_name
  common_tags       = local.common_tags
  site_domain_name  = local.domain
  alternate_domains = local.alt_domains
}