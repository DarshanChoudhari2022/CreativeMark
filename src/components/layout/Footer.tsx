import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoIcon} alt="Creative Mark" className="h-10 w-10 invert" />
              <span className="font-bold text-xl">
                Creative<span className="text-accent">Mark</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Full-service advertising and digital marketing agency specializing in branding, multimedia, printing, and political campaign management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: "Services", href: "/services" },
                { name: "Our Work", href: "/work" },
                { name: "Political Campaigns", href: "/political" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <nav className="space-y-2">
              {[
                "Advertising",
                "Digital Marketing",
                "Branding",
                "Designing",
                "Multimedia",
                "Printing",
              ].map((service) => (
                <span
                  key={service}
                  className="block text-sm text-primary-foreground/70"
                >
                  {service}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="tel:+919890976952"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone size={16} />
                +91 9890976952
              </a>
              <a
                href="tel:+917447332829"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone size={16} />
                +91 7447332829
              </a>
              <a
                href="mailto:creativemarkadvertising@gmail.com"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail size={16} />
                creativemarkadvertising@gmail.com
              </a>
              <a
                href="https://wa.me/917447332829"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 btn-pill bg-accent text-accent-foreground text-sm hover:bg-accent/90"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Creative Mark. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Advertising | Digital Marketing | Branding | Political Campaigns
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
