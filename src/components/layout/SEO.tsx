import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/context/LanguageContext";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

const SEO = ({
    title,
    description,
    keywords,
    image = "/og-image.png",
    url = "https://creativemarkadvertising.com/",
    type = "website",
}: SEOProps) => {
    const { language } = useLanguage();

    const baseTitle = language === "en"
        ? "Creative Mark | Advertising & Political Campaign Agency Pune"
        : "क्रिएटिव्ह मार्क | जाहिरात आणि राजकीय मोहीम एजन्सी पुणे";

    const siteTitle = title ? `${title} | Creative Mark` : baseTitle;

    const defaultDescription = language === "en"
        ? "Creative Mark is a leading advertising agency specializing in digital marketing, branding, and political campaign management in Pune and across India."
        : "क्रिएटिव्ह मार्क ही पुण्यातील एक अग्रगण्य जाहिरात संस्था आहे जी ब्रँडिंग, डिजिटल मार्केटिंग आणि राजकीय मोहीम व्यवस्थापनात तज्ञ आहे.";

    const siteDescription = description || defaultDescription;
    const siteKeywords = keywords || "Advertising Agency, Digital Marketing Agency, Political Campaign Management, Branding Agency in India, Political Advertising";

    return (
        <Helmet>
            {/* Base Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content={siteKeywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
