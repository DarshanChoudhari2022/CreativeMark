import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import footerLogo from "@/assets/logo-original.jpg";

const Footer = () => {
  const { t, language } = useLanguage();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleExternalRedirect = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsRedirecting(true);
    setTimeout(() => {
      window.open(href, '_blank', 'noopener,noreferrer');
      setIsRedirecting(false);
    }, 1000);
  };

  const expertiseLinks = [
    { name: t('footer.expertise.digital'), path: "/services/digital-marketing" },
    { name: t('footer.expertise.political'), path: "/political" },
    { name: t('footer.expertise.branding'), path: "/services/branding" },
    { name: t('footer.expertise.advertising'), path: "/services/advertising" },
    { name: t('footer.expertise.multimedia'), path: "/services/multimedia" }
  ];

  const quickLinks = [
    { name: t('header.about'), path: "/about" },
    { name: t('header.services'), path: "/services" },
    { name: t('header.political'), path: "/political" },
    { name: t('header.products'), path: "https://creative-mark-magic-qrcode.vercel.app/", isExternal: true },
    { name: t('header.contact'), path: "/contact" }
  ];

  return (
    <>
      <AnimatePresence>
        {isRedirecting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center text-white"
          >
            <div className="flex flex-col items-center gap-6">
              <Loader2 className="w-12 h-12 text-accent animate-spin" />
              <p className="text-xs font-black uppercase tracking-[0.3em] text-accent">Redirecting to Magic QR</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-20">
            {/* Brand Section - Highlighted White Box */}
            <div className="lg:col-span-1 bg-white p-8 rounded-3xl shadow-xl">
              <Link to="/" className="inline-block mb-8">
                <img
                  loading="lazy"
                  src={footerLogo}
                  alt="CreativeMark Logo"
                  className="h-20 w-auto object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
              <p className="text-gray-800 text-base font-bold leading-relaxed mb-8">
                {t('footer.desc')}
              </p>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{language === 'en' ? 'Follow Us' : 'आम्हाला फॉलो करा'}</span>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/creative_mark_advertising"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#E4405F] hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1G4aDVsDxX/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Expertise Links */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-accent">{t('footer.expertise.title')}</h4>
              <ul className="space-y-4">
                {expertiseLinks.map((link, i) => (
                  <li key={i}>
                    <Link to={link.path} className="text-gray-300 hover:text-white transition-colors font-bold text-sm uppercase tracking-wide">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-accent">{t('footer.links_title')}</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    {link.isExternal ? (
                      <a
                        href={link.path}
                        onClick={(e) => handleExternalRedirect(e, link.path)}
                        className="text-gray-300 hover:text-white transition-colors cursor-pointer font-bold text-sm uppercase tracking-wide"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.path} className="text-gray-300 hover:text-white transition-colors font-bold text-sm uppercase tracking-wide">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-accent">{t('contact.tag')}</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-gray-300 font-bold text-sm leading-relaxed">
                    {t('footer.address')}
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone size={20} className="text-accent flex-shrink-0" />
                  <a href="tel:+917447332829" className="text-gray-300 hover:text-white transition-colors font-black text-sm">+91 74473 32829</a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail size={20} className="text-accent flex-shrink-0" />
                  <a href="mailto:creativemarkadvertising@gmail.com" className="text-gray-300 hover:text-white transition-colors break-all font-black text-xs uppercase tracking-tighter">creativemarkadvertising@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
              &copy; {new Date().getFullYear()} CREATIVE MARK ADVERTISING. {t('footer.all_rights')}
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
              <Link to="/privacy" className="hover:text-accent transition-colors">{t('footer.privacy')}</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">{t('footer.terms')}</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
