module "personal-site" {
  source = "./modules/s3-cloudfront"

  bucket_name       = "jl-personal-site"
  common_tags       = { app : "personal-site=tf" }
  site_domain_name  = "jaylowry.com"
  alternate_domains = ["www.jaylowry.com"]
}