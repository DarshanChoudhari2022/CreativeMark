import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/context/LanguageContext";

import multimediaImg from "@/assets/service-multimedia.png";
import digitalImg from "@/assets/service-digital-new.jpg";
import brandingImg from "@/assets/service-branding.png";

const ServiceDetail = () => {
    const { id } = useParams();
    const { t, language } = useLanguage();

    // Map URL IDs to translation keys if they differ
    const idToKeyMap: Record<string, string> = {
        "digital-marketing": "digital",
        "advertising": "advertising",
        "branding": "branding",
        "multimedia": "multimedia",
        "printing": "branding", // Redirect printing to branding
    };

    const translationKey = id ? idToKeyMap[id] : null;
    const service = translationKey ? t(`services.items.${translationKey}`) : null;

    // Images mapping
    const images: Record<string, string> = {
        "digital": digitalImg,
        "advertising": "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=2000",
        "branding": brandingImg,
        "multimedia": multimediaImg,
    };

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service || !translationKey) {
        return (
            <Layout>
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/" className="btn-primary">Go Home</Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            {/* 1. Hero Section */}
            <section className="bg-background pt-28 md:pt-32 pb-20 overflow-hidden">
                <div className="container-wide">
                    <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground mb-8 transition-colors">
                        <ArrowLeft size={16} /> {t('header.home')}
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-bold uppercase tracking-widest text-foreground mb-6">
                                {t('services.intro_tag')}
                            </div>
                            <h1 className="heading-xl mb-8 leading-[0.9]">{service.title}</h1>
                            <h2 className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-tight">
                                {service.full_title}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                                {service.full_desc}
                            </p>
                            <div className="flex gap-4">
                                <Link to="/contact" className="btn-primary">
                                    {t('contact.form.submit')}
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={images[translationKey]}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Sub-Services Grid */}
            <section className="py-24 bg-secondary">
                <div className="container-wide">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="heading-lg mb-6">{t('services.intro_title')}</h2>
                        <p className="text-muted-foreground text-lg">
                            {t('services.intro_desc')}
                        </p>
                    </div>

                    {/* Mobile: Horizontal scroll for sub-services */}
                    <div className="md:hidden">
                        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 gap-4 snap-x snap-mandatory scrollbar-hide">
                            {service.sub_services?.map((sub: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="min-w-[85vw] snap-center bg-white p-6 rounded-xl border border-border shadow-lg flex-shrink-0"
                                >
                                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mb-4 text-lg font-bold">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{sub.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-5 pb-5 border-b border-gray-100">
                                        {sub.desc}
                                    </p>
                                    <ul className="space-y-2">
                                        {sub.details?.slice(0, 4).map((detail: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-xs font-medium text-foreground/80">
                                                <CheckCircle2 size={14} className="text-accent mt-0.5 flex-shrink-0" />
                                                <span className="line-clamp-1">{detail}</span>
                                            </li>
                                        ))}
                                        {sub.details?.length > 4 && (
                                            <li className="text-xs text-accent font-medium">+{sub.details.length - 4} more</li>
                                        )}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-2">
                            <span className="text-xs text-muted-foreground font-medium">← Swipe to explore →</span>
                        </div>
                    </div>

                    {/* Desktop: Grid layout */}
                    <div className="hidden md:grid md:grid-cols-2 gap-8">
                        {service.sub_services?.map((sub: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-xl border border-border hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6 text-xl font-bold group-hover:bg-accent transition-colors">
                                    {index + 1}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{sub.title}</h3>
                                <p className="text-muted-foreground mb-8 pb-8 border-b border-gray-100">
                                    {sub.desc}
                                </p>

                                <ul className="space-y-3">
                                    {sub.details?.map((detail: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-foreground/80">
                                            <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CTA */}
            <section className="py-32 bg-background border-t border-border">
                <div className="container-wide bg-black rounded-3xl p-8 md:p-20 text-center relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10">
                        <h2 className="heading-lg text-white mb-8">
                            {language === 'en'
                                ? `Ready to dominate with ${service.title}?`
                                : `आपल्या ${service.title} सह वर्चस्व गाजवायला तयार आहात?`}
                        </h2>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-accent hover:text-white transition-all transform hover:scale-105">
                            {t('services.cta.btn')} <ArrowUpRight />
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ServiceDetail;
