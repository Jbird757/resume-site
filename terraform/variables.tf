locals {
    common_tags = {
        app = "personal-site"
    }
}

variable "aws_region" {
  type    = string
  default = "us-east-1" 
}