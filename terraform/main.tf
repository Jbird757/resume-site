variable "aws_region" {
  type = string
  default = "us-east-1" # Replace with your desired region
}

# Find the latest Amazon Linux 2 AMI
data "aws_ami" "amazon_linux_2" {
  most_recent = true
  owners      = ["amazon"]
  filter {
    name   = "name"
    values = ["Amazon Linux 2*"]
  }
  filter {
    name   = "architecture"
    values = ["x86_64"]
  }
}

# Create the EC2 instance
resource "aws_instance" "web_server" {
  ami           = data.aws_ami.amazon_linux_2.id
  instance_type = "t2.micro"

  # Assign a public IP address
  associate_public_ip_address = true

  # Security Group (replace with your own rules)
  vpc_security_group_ids = [aws_security_group.allow_ssh.id]

  # Tags for identification
  tags = {
    Name = "Web Server Instance"
  }
}

# Security Group to allow SSH access (replace with your rules)
resource "aws_security_group" "allow_ssh" {
  name = "ssh_access"
  description = "Allows SSH access"

  ingress {
    from_port = 22
    to_port   = 22
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Replace with specific IP range if desired
  }

  egress {
    from_port = 0
    to_port   = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Outputs for reference
output "public_ip" {
  value = aws_instance.web_server.public_ip
}

output "instance_id" {
  value = aws_instance.web_server.id
}