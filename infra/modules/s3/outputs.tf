output "regional_domain_name" {
    value = aws_s3_bucket.www.bucket_regional_domain_name
    description = "The regional domain name of the subdomain bucket."
}
