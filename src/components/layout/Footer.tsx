import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import creativeMarkLogo from "@/assets/logo-full.png";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="24"
    height="24"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-foreground text-primary-foreground overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-wide pt-24 pb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-6">
              <Link to="/" className="block">
                <img
                  src={creativeMarkLogo}
                  alt="Creative Mark"
                  className="h-20 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-gray-400 text-lg leading-relaxed max-w-sm font-light">
                Full-service agency engineering momentum for brands and political leaders through strategy, design, and digital dominance.
              </p>
            </div>

            <div className="mt-8">
              <motion.a
                href="https://wa.me/917447332829"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "#25D366", color: "white" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 btn-pill bg-white text-black transition-colors text-sm font-bold shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">Explore</h4>
            <nav className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Our Work", href: "/work" },
                { name: "Political Campaigns", href: "/political" },
                { name: "About Us", href: "/about" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">Expertise</h4>
            <nav className="space-y-4">
              {[
                { name: "Advertising", id: "advertising" },
                { name: "Digital Marketing", id: "digital-marketing" },
                { name: "Branding", id: "branding" },
                { name: "Multimedia", id: "multimedia" },
                { name: "Printing", id: "printing" },
              ].map((service) => (
                <Link
                  key={service.name}
                  to={`/services/${service.id}`}
                  className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 w-fit"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:+919890976952"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <Phone size={16} />
                </span>
                <span className="text-lg">+91 9890976952</span>
              </a>
              <a
                href="tel:+917447332829"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <Phone size={16} />
                </span>
                <span className="text-lg">+91 7447332829</span>
              </a>
              <a
                href="mailto:creativemarkadvertising@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <Mail size={16} />
                </span>
                <span className="text-lg">creativemarkadvertising@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <p>
            © {new Date().getFullYear()} Creative Mark. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
