variable "aws_region" {
    type = "string"
    description = "The region where the bucket is hosted."
}

variable "fqdn" {
    type = "string"
    description = "The FQDN of my personal site."
}

variable "root_distribution_domain_name" {
    type = string
    description = "The CloudFront distribution domain name."
}

variable "root_distribution_hosted_zone_id" {
    type = string
    description = "The CloudFront distribution hosted zone ID."
}
