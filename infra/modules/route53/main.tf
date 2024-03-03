##########################
# Route53 Hosted Zone
##########################

resource "aws_route53_zone" "personal_site_zone" {
    name = var.fqdn
}

##########################
# ACM Certificates
##########################

resource "aws_acm_certificate" "www_cert" {
    domain_name = var.fqdn
    validation_method = "DNS"
    lifecycle {
      create_before_destroy = true
    }
}

resource "aws_route53_record" "personal_site_dns" {
    allow_overwrite = true
    name = tolist(aws_acm_certificate.www_cert.domain_validation_options)[0].resource_record_name
    records = [tolist(aws_acm_certificate.www_cert.domain_validation_options)[0].resource_record_value]
    type = tolist(aws_acm_certificate.www_cert.domain_validation_options)[0].resource_record_type
    zone_id = aws_route53_zone.personal_site_zone.zone_id
    ttl = 60
}

resource "aws_acm_certificate_validation" "personal_site_certificate_validation" {
    certificate_arn = aws_acm_certificate.www_cert.arn
    validation_record_fqdns = [aws_route53_record.personal_site_dns.fqdn]
}

resource "aws_route53_record" "root" {
    zone_id = aws_route53_zone.personal_site_zone.id

    name = ""
    type = "A"

    alias {
        name = var.root_distribution_domain_name
        zone_id = var.root_distribution_hosted_zone_id
        evaluate_target_health = false
    }
}
