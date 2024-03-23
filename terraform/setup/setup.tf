# Configure Terraform provider
provider "aws" {
  required_version = "~> 5.40.0" # Required for assume_role_with_web_identity
}

# Configure backend (assuming you already have S3 bucket and DynamoDB table)
terraform {
  backend "s3" {
    bucket = "<your_backend_bucket_name>"
    key    = "terraform.state"
    region = "<your_aws_region>"
  }
}

# OIDC Provider
data "aws_iam_openid_connect_provider_url" "oidc_provider" {
  url = "<your_oidc_provider_url>"
}

# IAM Role with OIDC trust policy
resource "aws_iam_role" "oidc_role" {
  name = "oidc_access_role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Type": "Federated",
        "FederatedArn": "${data.aws_iam_openid_connect_provider_url.oidc_provider.arn}"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "ForUserInfo": {
          "ConditionOperator": "StringLike",
          "Key": "sub",
          "Value": "your_expected_user_identifier_pattern"  # Adjust based on your OIDC provider
        }
      }
    }
  ]
}
EOF
}

# Example IAM Role Policy (replace with your specific permissions)
resource "aws_iam_role_policy" "oidc_role_policy" {
  name = "oidc_role_permissions"
  role = aws_iam_role.oidc_role.id

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::your-s3-bucket"
      ]
    }
  ]
}
EOF
}

# Outputs for reference
output "oidc_role_arn" {
  value = aws_iam_role.oidc_role.arn
}