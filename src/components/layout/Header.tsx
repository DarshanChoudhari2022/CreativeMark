import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import creativeMarkLogo from "@/assets/logo-full.png";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "work", href: "/work" },
  { key: "political", href: "/political" },
  { key: "about", href: "/about" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? "bg-white/95 backdrop-blur-md border-gray-100 py-3" : "bg-white border-transparent py-6"
        }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={creativeMarkLogo}
            alt="CreativeMark Logo"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              to={link.href}
              className={`text-sm font-bold tracking-wide transition-colors duration-200 uppercase ${location.pathname === link.href ? "text-black" : "text-gray-500 hover:text-black"
                }`}
            >
              {t(`header.${link.key}`)}
            </Link>
          ))}

          {/* Language Toggle Desktop */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:text-black transition-colors"
          >
            <Globe size={16} />
            {language === 'en' ? 'मराठी' : 'English'}
          </button>

          <Link to="/contact" className="ml-4 btn-primary px-6 py-2.5 text-xs uppercase tracking-widest whitespace-nowrap">
            {t('header.contact')}
          </Link>
        </nav>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-sm font-bold text-gray-600"
          >
            {language === 'en' ? 'मराठी' : 'EN'}
          </button>

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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[70px] bg-white z-40 lg:hidden overflow-y-auto"
          >
            <nav className="container-wide py-8 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={`block text-3xl font-bold tracking-tight py-2 ${location.pathname === link.href ? "text-black" : "text-gray-400"
                      }`}
                  >
                    {t(`header.${link.key}`)}
                  </Link>
                </motion.div>
              ))}
              <Link to="/contact" className="btn-primary text-center mt-8 py-4 text-lg">
                {t('header.contact')}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
