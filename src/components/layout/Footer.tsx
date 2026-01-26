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
                {quickLinks.map((link, i) => {
                  const actualPath = link.isExternal && link.path.includes('magic-qrcode')
                    ? `${link.path}${language === 'mr' ? '?lang=mr' : ''}`
                    : link.path;

                  return (
                    <li key={i}>
                      {link.isExternal ? (
                        <a
                          href={actualPath}
                          onClick={(e) => handleExternalRedirect(e, actualPath)}
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
                  );
                })}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-10 text-accent">{t('contact.tag')}</h4>
              <div className="flex flex-col gap-6">
                <a href="https://wa.me/917447332829" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all border border-transparent hover:border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{t('footer.chat')}</span>
                    <span className="text-gray-300 font-bold text-sm">WhatsApp Chat</span>
                  </div>
                </a>

                <a href="tel:+917447332829" className="flex items-center gap-4 group bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all border border-transparent hover:border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                    <Phone size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{t('contact.info.call')}</span>
                    <span className="text-gray-300 font-bold text-sm">+91 74473 32829</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent flex-shrink-0 shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{t('contact.info.visit')}</span>
                    <span className="text-gray-300 font-black text-[10px] sm:text-xs leading-relaxed uppercase tracking-tight">
                      {t('footer.address')}
                    </span>
                  </div>
                </div>

                <a href="mailto:creativemarkadvertising@gmail.com" className="flex items-center gap-4 group px-4 py-2 opacity-60 hover:opacity-100 transition-opacity">
                  <Mail size={14} className="text-accent" />
                  <span className="text-[10px] font-black uppercase tracking-tighter text-gray-300 truncate">creativemarkadvertising@gmail.com</span>
                </a>
              </div>
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
