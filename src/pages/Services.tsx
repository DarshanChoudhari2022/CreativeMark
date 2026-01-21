import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Check, Disc, Circle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/context/LanguageContext";

const serviceImages: Record<string, string> = {
  digital: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  advertising: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800",
  branding: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800",
  multimedia: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
  printing: "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=800",
};

const Services = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const { t } = useLanguage();

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const serviceKeys = ['digital', 'advertising', 'branding', 'multimedia', 'printing'];
  const servicesData = serviceKeys.map(key => {
    const data = t(`services.items.${key}`);
    return {
      category: data.title,
      image: serviceImages[key],
      introTitle: data.full_title,
      introText: data.full_desc,
      items: data.sub_services
    };
  });

  return (
    <Layout>
      <section className="bg-background min-h-screen">
        {/* Hero Area */}
        <div className="pt-40 pb-20 container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-muted-foreground font-bold tracking-widest uppercase text-sm mb-4 block">{t('services.page_subtitle')}</span>
            <h1 className="heading-xl mb-6">{t('services.page_title')}</h1>
          </motion.div>
        </div>

        {/* Services Sections Loop */}
        {servicesData.map((section, index) => {
          const isEven = index % 2 === 0;
          const bgClass = isEven ? "bg-white text-foreground" : "bg-black text-white";
          const borderClass = isEven ? "border-black/10" : "border-white/10";
          const mutedTextClass = isEven ? "text-muted-foreground" : "text-gray-400";
          const headingClass = isEven ? "text-foreground" : "text-white";

          return (
            <motion.section
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`py-24 md:py-32 ${bgClass} transition-colors duration-500`}
            >
              <div className="container-wide grid lg:grid-cols-12 gap-16">

                {/* Left Sticky Header */}
                <div className="lg:col-span-5 relative">
                  <div className="sticky top-32">
                    <span className={`text-xs font-bold uppercase tracking-widest mb-6 block ${mutedTextClass}`}>
                      0{index + 1} / {section.category}
                    </span>
                    <h2 className={`text-4xl md:text-5xl font-bold leading-tight mb-8 ${headingClass}`}>
                      {section.introTitle}
                    </h2>

                    {/* Integrated Image in Stick Header */}
                    <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-2xl">
                      <img
                        src={section.image}
                        alt={section.category}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <p className={`text-lg leading-relaxed ${mutedTextClass}`}>
                      {section.introText}
                    </p>
                    <div className="mt-12 hidden lg:block">
                      <Link to="/contact" className={`inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:text-accent transition-colors ${headingClass}`}>
                        {t('cta_section.btn_primary')} <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Service List */}
                <div className="lg:col-span-7">
                  <div className="space-y-6">
                    {section.items.map((item: any, itemIndex: number) => {
                      const id = `${index}-${itemIndex}`;
                      const isOpen = activeAccordion === id;

                      return (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.05 }}
                          className={`border-b ${borderClass} pb-6`}
                        >
                          <div
                            className="cursor-pointer group select-none"
                            onClick={() => toggleAccordion(id)}
                          >
                            <div className="flex justify-between items-start gap-4">
                              <div>
                                <h3 className={`text-2xl font-bold mb-2 transition-colors ${isOpen ? "text-accent" : headingClass} group-hover:text-accent`}>
                                  {item.title}
                                </h3>
                                <p className={`text-sm ${mutedTextClass}`}>
                                  {item.desc}
                                </p>
                              </div>
                              <div className={`mt-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                                <ArrowDown size={20} className={mutedTextClass} />
                              </div>
                            </div>
                          </div>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                className="overflow-hidden"
                              >
                                <ul className="grid md:grid-cols-2 gap-x-4 gap-y-3">
                                  {item.details.map((detail: string, dIndex: number) => (
                                    <li key={dIndex} className={`flex items-start gap-3 text-sm ${mutedTextClass}`}>
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </motion.section>
          );
        })}


        {/* Pricing Section (NEW) */}
        <section className="py-32 bg-secondary border-t border-black/5">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="text-muted-foreground font-bold tracking-widest uppercase text-sm mb-4 block">{t('services.pricing.tag')}</span>
              <h2 className="heading-lg">{t('services.pricing.title')}</h2>
              <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">{t('services.pricing.desc')}</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden">
                <h3 className="text-2xl font-bold mb-2">{t('services.pricing.starter.name')}</h3>
                <p className="text-muted-foreground mb-6">{t('services.pricing.starter.sub')}</p>
                <div className="text-4xl font-bold mb-8">{t('services.pricing.starter.price')}<span className="text-sm font-normal text-muted-foreground">{t('services.pricing.per_month')}</span></div>
                <ul className="space-y-4 mb-10">
                  {t('services.pricing.starter.features').map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <Check size={16} className="text-accent" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-secondary w-full justify-center">{t('services.pricing.starter.btn')}</Link>
              </div>

              {/* Professional (Highlighted) */}
              <div className="bg-black text-white p-10 rounded-2xl shadow-2xl relative transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg">{t('services.pricing.professional.popular')}</div>
                <h3 className="text-2xl font-bold mb-2">{t('services.pricing.professional.name')}</h3>
                <p className="text-gray-400 mb-6">{t('services.pricing.professional.sub')}</p>
                <div className="text-4xl font-bold mb-8">{t('services.pricing.professional.price')}<span className="text-sm font-normal text-gray-500">{t('services.pricing.per_month')}</span></div>
                <ul className="space-y-4 mb-10 text-gray-300">
                  {t('services.pricing.professional.features').map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <Check size={16} className="text-accent" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary w-full justify-center hover:bg-white hover:text-black hover:border-white">{t('services.pricing.professional.btn')}</Link>
              </div>

              {/* Enterprise */}
              <div className="bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-2">{t('services.pricing.enterprise.name')}</h3>
                <p className="text-muted-foreground mb-6">{t('services.pricing.enterprise.sub')}</p>
                <div className="text-4xl font-bold mb-8">{t('services.pricing.enterprise.price')}<span className="text-sm font-normal text-muted-foreground">{t('services.pricing.per_month')}</span></div>
                <ul className="space-y-4 mb-10">
                  {t('services.pricing.enterprise.features').map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <Check size={16} className="text-accent" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-secondary w-full justify-center">{t('services.pricing.enterprise.btn')}</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-32 bg-background border-t border-black/5">
          <div className="container-wide text-center">
            <h2 className="heading-lg mb-8">{t('services.cta.title')}</h2>
            <Link to="/contact" className="btn-primary shadow-xl hover:shadow-2xl">
              {t('services.cta.btn')}
            </Link>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Services;
