import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import creativeMarkLogo from "@/assets/logo-full.png";

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
              <a
                href="https://wa.me/917447332829"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-pill bg-white text-black hover:bg-accent hover:text-white transition-colors text-sm font-bold"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
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
