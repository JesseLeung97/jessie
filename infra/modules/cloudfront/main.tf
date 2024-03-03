locals {
    s3_origin_id = "personal_site_origin"
}

##########################
# Subdomain CloudFront
##########################

resource "aws_cloudfront_distribution" "www_distribution" {
    origin {
        domain_name = var.www_bucket_regional_domain_name
        origin_access_control_id = aws_cloudfront_origin_access_control.default.id
        origin_id = local.s3_origin_id
    }

    enabled = true
    is_ipv6_enabled = true
    default_root_object = "index.html"

    default_cache_behavior {
        allowed_methods = ["GET", "HEAD"]
        cached_methods = ["GET", "HEAD"]
        target_origin_id = local.s3_origin_id

        viewer_protocol_policy = "redirect-to-https"
    }

    restrictions {
        geo_restriction {
            restriction_type = "none"
        }
    }

    viewer_certificate {
        acm_certificate_arn = var.acm_certificate_arn
        ssl_support_method = "sni-only"
    }

    aliases = ["www.${var.fqdn}"]

    price_class = "PriceClass_200"
}

##########################
# Root Domain CloudFront
##########################

resource "aws_cloudfront_distribution" "root_distribution" {
    origin {
        custom_origin_config {
            origin_protocol_policy = "http-only"
            http_port = "80"
            https_port = "433"
            origin_ssl_protocols = ["TLSv1", "TLSv1.1", "TLSv1.2"]
        }
        domain_name = var.root_bucket_website_endpoint
        origin_id = local.s3_origin_id
    }

    enabled = true
    default_root_object = "index.html"

    default_cache_behavior {
        viewer_protocol_policy = "redirect-to-https"
        allowed_methods = ["GET", "HEAD"]
        cached_methods = ["GET", "HEAD"]
        target_origin_id = var.fqdn
    }

    aliases = [var.fqdn]

    restrictions {
        geo_restriction {
            restriction_type = "none"
        }
    }

    viewer_certificate {
        acm_certificate_arn = var.acm_certificate_arn
        ssl_support_method = "sni-only"
    }
}
