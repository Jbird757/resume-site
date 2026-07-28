module "personal-site" {
  source = "./modules/s3-cloudfront"

  bucket_name       = local.bucket_name
  common_tags       = local.common_tags
  site_domain_name  = local.domain
  alternate_domains = local.alt_domains
}

#------------------------------------------------ AWS Resource Group ------------------------------------------------#

resource "aws_resourcegroups_group" "personal_site" {
  name        = "personal-site-resources"
  description = "Unified Resource Group for Jay Lowry personal site resources"

  resource_query {
    query = jsonencode({
      ResourceTypeFilters = ["AWS::AllSupported"]
      TagFilters = [
        {
          Key    = "Application"
          Values = ["personal-site"]
        }
      ]
    })
  }

  tags = local.common_tags
}