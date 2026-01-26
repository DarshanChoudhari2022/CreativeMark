import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations } from "@/data/translations";

type Language = "en" | "mr";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        const saved = localStorage.getItem("preferredLanguage");
        return (saved === "en" || saved === "mr") ? saved : "en";
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("preferredLanguage", lang);
    };

    useEffect(() => {
        document.documentElement.lang = language;
        // Apply a class to body for global CSS targeting
        document.body.className = `lang-${language}`;
    }, [language]);

    // Helper function to get nested object values
    // e.g. t('home.hero.title')
    const t = (path: string): any => {
        const keys = path.split(".");
        let current: any = translations[language];

        for (const key of keys) {
            if (current[key] === undefined) {
                console.warn(`Translation missing for key: ${path} in language: ${language}`);
                return path;
            }
            current = current[key];
        }

        return current;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
