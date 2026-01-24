import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import creativeMarkLogo from "@/assets/logo-original.jpg";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "work", href: "/work" },
  { key: "political", href: "/political" },
  { key: "about", href: "/about" },
  { key: "products", href: "/#products" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 shadow-sm ${isScrolled
        ? "bg-white py-3 border-b border-gray-100"
        : "bg-white py-4 sm:py-6 border-b border-transparent"
        }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={creativeMarkLogo}
            alt="CreativeMark Logo"
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              to={link.href}
              className={`text-[11px] xl:text-sm font-bold tracking-widest transition-colors duration-200 uppercase ${location.pathname === link.href ? "text-black" : "text-gray-500 hover:text-black"
                }`}
            >
              {t(`header.${link.key}`)}
            </Link>
          ))}

          <Link to="/contact" className="ml-2 xl:ml-4 btn-primary px-4 xl:px-6 py-2 xl:py-2.5 text-[10px] xl:text-xs uppercase tracking-widest whitespace-nowrap">
            {t('header.contact')}
          </Link>
        </nav>

        {/* Mobile Controls - Hamburger Only */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-black"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={link.href}
                    className={`block text-4xl font-black tracking-tighter ${location.pathname === link.href ? "text-accent" : "text-black"
                      }`}
                  >
                    {t(`header.${link.key}`)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="w-full max-w-xs mt-12"
              >
                <Link to="/contact" className="btn-primary w-full py-5 text-xl">
                  {t('header.contact')}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
