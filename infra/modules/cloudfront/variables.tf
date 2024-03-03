variable "fqdn" {
    type = "string"
    description = "The FQDN of my personal site."
}
    
variable "root_bucket_website_endpoint" {
    type = "string"
    description = "The S3 endpoint of the root domain bucket."
}

variable "www_bucket_regional_domain_name" {
    type = "string"
    description = "The regional domain name of the subdomain bucket."
}

variable "root_bucket_regional_domain_name" {
    type = "string"
    description = "The regional domain name of the root domain bucket."
}

variable "acm_certificate_arn" {
    type = "string"
    description = "The ACM certificate for my personal site."
}
