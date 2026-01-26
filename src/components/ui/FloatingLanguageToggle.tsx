import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const FloatingLanguageToggle = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "mr" : "en");
    };

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            onClick={toggleLanguage}
            className="fixed right-6 bottom-28 z-40 bg-white border-2 border-primary shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group hover:scale-105 active:scale-95 rounded-2xl px-3 py-2.5 min-w-[70px]"
            aria-label="Toggle Language"
        >
            <Globe size={20} className="text-primary mb-1 group-hover:rotate-12 transition-transform" />
            <span className="text-[10px] font-bold text-primary uppercase tracking-wide">
                {language === 'en' ? 'मराठी' : 'EN'}
            </span>
        </motion.button>
    );
};

export default FloatingLanguageToggle;
