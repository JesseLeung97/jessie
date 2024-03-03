##########################
# S3 Buckets
##########################

resource "aws_s3_bucket" "www" {
    bucket = "www.${var.fqdn}"
}

resource "aws_s3_bucket" "root" {
    bucket = "${var.fqdn}"
}

resource "aws_s3_bucket_website_configuration" "root_config" {
    bucket = aws_s3_bucket.domain.id

    redirect_all_requests_to {
        host_name = "www.${var.fqdn}"
        protocol = "https"
    }
}
