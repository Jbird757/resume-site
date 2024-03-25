#--------------------------------------- Inputs to the Module ---------------------------------------#

variable bucket_name {
    type = string
    description = "Name of the S3 bucket to create"
}

variable common_tags {
    type = map(string)
    description = "Map of tags to be applied to all resources"
    default = {}
}

variable alternate_domains {
    type = list(string)
    description = "Alternate domains to add to the ACM certificate"
    default = []
}