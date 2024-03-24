# Define the region where you want to create the bucket
variable "aws_region" {
  type    = string
  default = "us-east-1" # Replace with your desired region
}

# Create a private S3 bucket
resource "aws_s3_bucket" "private_bucket" {
  bucket = "terraforttttttttt" # Replace with your desired name (must be lowercase)

  tags = {
    Name = "Terraform Private Bucket"
  }
}

# Outputs for reference
output "bucket_name" {
  value = aws_s3_bucket.private_bucket.id
}

output "bucket_arn" {
  value = aws_s3_bucket.private_bucket.arn
}