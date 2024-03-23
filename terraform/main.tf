resource "aws_instance" "demo" {
  ami                 = ami-0c101f26f147fa7fd
  instance_type = t2.micro

  tags = {
    name = "My VM"
  }
}