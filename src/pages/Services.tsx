import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Check, Disc, Circle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/context/LanguageContext";
import multimediaImg from "@/assets/service-multimedia.png";
import digitalImg from "@/assets/service-digital-new.jpg";
import brandingImg from "@/assets/service-branding.png";
import advertisingImg from "@/assets/service-advertising-new.jpg";

const serviceImages: Record<string, string> = {
  digital: digitalImg,
  advertising: advertisingImg,
  branding: brandingImg,
  multimedia: multimediaImg,
  printing: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
  technology: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
};

const Services = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const { t } = useLanguage();

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const serviceKeys = ['digital', 'advertising', 'branding', 'multimedia', 'technology'];
  const servicesData = serviceKeys.map(key => {
    const data = t(`services.items.${key}`);
    return {
      id: key,
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
        {/* Hero Area - Refined */}
        <div className="pt-32 pb-20 container-wide relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl relative z-10"
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-6 block pl-1">
              {t('services.page_subtitle')}
            </span>
            <h1 className="heading-xl tracking-tighter mb-8">
              {t('services.page_title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              {t('services.intro_desc')}
            </p>
          </motion.div>

          {/* Decorative background element */}
          <div className="absolute top-20 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent -z-10 blur-3xl" />
        </div>

        {/* Services Sections - Massive Design */}
        <div className="flex flex-col gap-0">
          {servicesData.map((section, index) => {
            const isLast = index === servicesData.length - 1;

            return (
              <motion.section
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                className={`py-32 relative ${index % 2 === 0 ? 'bg-secondary/30' : 'bg-background'} border-t border-border`}
              >
                <div className="container-wide">
                  {/* Huge Background Number */}


                  <div className="grid md:grid-cols-12 gap-12 md:gap-16 lg:gap-24">

                    {/* Left Column: Title & Essence */}
                    <div className="md:col-span-5 relative">
                      <div className="md:sticky md:top-32">
                        <div className="mb-8 overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl">
                          <img
                            src={section.image}
                            alt={section.category}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 ease-out"
                          />
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 text-foreground">
                          {section.category}
                        </h2>

                        <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light mb-8">
                          {section.introText}
                        </p>


                      </div>
                    </div>

                    {/* Right Column: Detailed Capabilities */}
                    <div className="md:col-span-7 pt-2 md:pt-12 lg:pt-32">
                      <h3 className="text-2xl font-bold mb-8 lg:mb-12 border-b border-border pb-6">
                        {section.introTitle}
                      </h3>

                      {/* Mobile: Expandable Vertical Stack */}
                      <div className="md:hidden flex flex-col gap-4">
                        {section.items.map((item: any, itemIndex: number) => {
                          const id = `${section.id}-${itemIndex}`;
                          const isOpen = activeAccordion === id;

                          return (
                            <motion.div
                              key={itemIndex}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: itemIndex * 0.1 }}
                              className={`bg-white rounded-2xl transition-all duration-300 border ${isOpen ? 'border-accent shadow-lg' : 'border-border/50 shadow-sm'}`}
                            >
                              <button
                                onClick={() => toggleAccordion(id)}
                                className="w-full text-left p-5 flex justify-between items-center"
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-accent text-white' : 'bg-secondary text-accent'}`}>
                                  </div>
                                  <h4 className={`font-bold transition-colors ${isOpen ? 'text-accent' : 'text-foreground'}`}>{item.title}</h4>
                                </div>
                                <ArrowDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : 'text-muted-foreground'}`} />
                              </button>

                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-5 pb-6">
                                      {item.desc && <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{item.desc}</p>}
                                      <div className="grid grid-cols-1 gap-3 pt-2">
                                        {item.details.map((detail: string, dIndex: number) => (
                                          <div key={dIndex} className="flex items-start gap-3 text-xs font-medium text-foreground/80">
                                            <Disc size={12} className="text-accent mt-0.5 flex-shrink-0" />
                                            <span>{detail}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Desktop: Accordion Style */}
                      <div className="hidden md:block space-y-4">
                        {section.items.map((item: any, itemIndex: number) => {
                          const id = `${section.id}-${itemIndex}`;
                          const isOpen = activeAccordion === id;

                          return (
                            <div
                              key={itemIndex}
                              className={`group border border-border rounded-xl transition-all duration-300 ${isOpen ? 'bg-white shadow-lg border-transparent' : 'bg-transparent hover:border-foreground/30'}`}
                            >
                              <button
                                onClick={() => toggleAccordion(id)}
                                className="w-full flex justify-between items-center p-6 text-left"
                              >
                                <span className={`text-xl md:text-2xl font-bold transition-colors ${isOpen ? 'text-accent' : 'text-foreground'}`}>
                                  {item.title}
                                </span>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-accent text-white rotate-180' : 'bg-secondary text-foreground group-hover:bg-accent group-hover:text-white'}`}>
                                  <ArrowDown size={20} />
                                </div>
                              </button>

                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-6 pb-8 pt-2">
                                      {item.desc && <p className="text-muted-foreground mb-6 text-lg">{item.desc}</p>}
                                      <ul className="grid sm:grid-cols-2 gap-3">
                                        {item.details.map((detail: string, dIndex: number) => (
                                          <li key={dIndex} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                                            <Disc size={10} className="text-accent" />
                                            {detail}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>


                    </div>

                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Brand New CTA Section */}
        <section className="py-40 bg-black text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="container-wide relative z-10 text-center">
            <h2 className="heading-lg text-white mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              {t('services.cta.title')}
            </h2>
            <Link
              to="/contact"
              className="inline-block bg-white text-black px-12 py-6 text-xl font-bold tracking-widest uppercase hover:bg-accent hover:text-white transition-all duration-300 rounded-none transform hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.3)]"
            >
              {t('services.cta.btn')}
            </Link>
          </div>
        </section>

      </section>
    </Layout>
  );
};

export default Services;
