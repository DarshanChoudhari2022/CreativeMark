import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import creativeMarkLogo from "@/assets/logo-original.jpg";
import { useLanguage } from "@/context/LanguageContext";
import { Loader2 } from "lucide-react";

const navLinks = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "political", href: "/political" },
  { key: "about", href: "/about" },
  { key: "products", href: "https://creative-mark-magic-qrcode.vercel.app/", isExternal: true },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location, language]); // Close menu on route or language change

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "mr" : "en");
  };

  const handleExternalRedirect = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsRedirecting(true);

    // Smooth buffer before opening in new tab
    setTimeout(() => {
      window.open(href, '_blank', 'noopener,noreferrer');
      setIsRedirecting(false);
    }, 800);
  };

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1001] bg-accent text-white px-4 py-2 rounded-lg font-bold">
        Skip to content
      </a>
      <AnimatePresence>
        {isRedirecting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center text-white"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative">
                <Loader2 className="w-16 h-16 text-accent animate-spin" strokeWidth={1} />
                <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full" />
              </div>
              <div className="text-center">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-accent mb-2">Redirecting</p>
                <h2 className="text-3xl font-bold tracking-tighter">Magic QR Code</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 shadow-sm ${isScrolled
          ? "bg-white py-3 border-b border-gray-100"
          : "bg-white py-4 sm:py-6 border-b border-transparent"
          }`}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 relative z-[60]">
            <img
              src={creativeMarkLogo}
              alt="Creative Mark Logo"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain relative z-[60]"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/favicon.png";
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => {
              const actualHref = link.isExternal && link.key === 'products'
                ? `${link.href}${language === 'mr' ? '?lang=mr' : ''}`
                : link.href;
              const isActive = !link.isExternal && (
                link.href === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.href)
              );

              return link.isExternal ? (
                <a
                  key={link.key}
                  href={actualHref}
                  onClick={(e) => handleExternalRedirect(e, actualHref)}
                  className="text-[11px] xl:text-sm font-bold tracking-widest transition-colors duration-200 uppercase text-gray-500 hover:text-black inline-flex items-center gap-1"
                >
                  {t(`header.${link.key}`)}
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              ) : (
                <Link
                  key={link.key}
                  to={link.href}
                  className={`text-[11px] xl:text-sm font-bold tracking-widest transition-colors duration-200 uppercase relative pb-1 ${isActive
                    ? "text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent"
                    : "text-gray-500 hover:text-black"
                    }`}
                >
                  {t(`header.${link.key}`)}
                </Link>
              );
            })}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-secondary/50 text-[10px] xl:text-xs font-bold uppercase tracking-wider hover:border-accent hover:bg-accent/5 transition-all"
              aria-label={language === 'en' ? 'Switch to Marathi' : 'Switch to English'}
            >
              <Globe size={14} className="text-accent" />
              {language === 'en' ? 'मराठी' : 'EN'}
            </button>

            <Link to="/contact" className="ml-2 xl:ml-4 btn-primary px-4 xl:px-6 py-2 xl:py-2.5 text-[10px] xl:text-xs uppercase tracking-widest whitespace-nowrap">
              {t('header.contact')}
            </Link>
          </nav>

          {/* Mobile Controls - Hamburger Only */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-12 h-12 flex items-center justify-center text-black hover:bg-black/5 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 top-0 bg-white z-[60] lg:hidden overflow-y-auto px-6 py-24"
            >
              {/* Close Button in Fullscreen Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-8 right-6 p-2 text-black"
              >
                <X size={32} />
              </button>

              <nav className="flex flex-col gap-6 items-center text-center">
                {/* Mobile Language Toggle */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={toggleLanguage}
                  className="mb-8 flex items-center gap-2 px-6 py-2 rounded-full border border-gray-100 bg-secondary/50 text-sm font-bold uppercase tracking-widest"
                >
                  <Globe size={16} className="text-accent" />
                  {language === 'en' ? 'मराठी' : 'English'}
                </motion.button>

                {navLinks.map((link, index) => {
                  const actualHref = link.isExternal && link.key === 'products'
                    ? `${link.href}${language === 'mr' ? '?lang=mr' : ''}`
                    : link.href;

                  return (
                    <motion.div
                      key={link.key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="w-full"
                    >
                      {link.isExternal ? (
                        <a
                          href={actualHref}
                          onClick={(e) => {
                            setIsMobileMenuOpen(false);
                            handleExternalRedirect(e, actualHref);
                          }}
                          className={`inline-flex items-center justify-center gap-2 py-2 text-2xl md:text-3xl font-black text-black ${language === 'en' ? 'tracking-[0.1em] uppercase' : ''}`}
                        >
                          {t(`header.${link.key}`)}
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`relative inline-block py-2 text-2xl md:text-3xl font-black ${location.pathname === link.href
                            ? "text-accent after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-accent"
                            : "text-black"} ${language === 'en' ? 'tracking-[0.1em] uppercase' : ''}`}
                        >
                          {t(`header.${link.key}`)}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.08 }}
                  className="w-full max-w-xs mt-12"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary w-full py-5 text-sm font-black tracking-widest uppercase"
                  >
                    {t('header.contact')}
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
