import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/context/LanguageContext";
import aboutCulture from "@/assets/about-culture.png";
import modernChineseLogo from "@/assets/client_modern_chinese.png";
import poonawalaLogo from "@/assets/client_poonawala.png";
import happinessLogo from "@/assets/client_happiness_forever.jpg";
import silkRouteLogo from "@/assets/client_silk_route.jpg";
import domLogo from "@/assets/client_dom.png";
import dishaLogo from "@/assets/disha_astrology.png";
import keyStylishLogo from "@/assets/key_stylish_interiors.png";
import shwetaLogo from "@/assets/shwetas_nail_art.png";
import galaxyLogo from "@/assets/galaxy_path_lab.png";
import metacraftLogo from "@/assets/client_metacraft.jpg";
import poonawalaNewLogo from "@/assets/poonawala_travels.png";

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="bg-background min-h-screen pt-28 md:pt-40 pb-20">
        <div className="container-wide">
          {/* Header Section */}
          <div className="max-w-4xl mb-16 md:mb-32">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-accent font-bold tracking-widest uppercase text-sm mb-6 block"
            >
              {t('about.tag')}
            </motion.span>
            <h1 className="heading-xl mb-12 tracking-tighter">
              {t('about.title_1')}<br />
              <span className="text-accent">{t('about.title_2')}</span> {t('about.title_3')}
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground leading-relaxed font-light max-w-3xl">
              {t('about.desc')}
            </p>

            <div className="flex flex-wrap gap-4 mt-12">
              {t('about.stats_badges').map((badge: string, i: number) => (
                <span key={i} className="px-6 py-3 rounded-full border border-border text-sm font-bold uppercase tracking-widest bg-secondary">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Image / Culture Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 md:mb-40">
            <div className="relative aspect-video lg:aspect-square bg-secondary rounded-3xl overflow-hidden group">
              <img
                src={aboutCulture}
                alt="Our Team"
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <span className="text-xs font-bold uppercase tracking-widest mb-2 block text-accent">{t('about.culture_badge')}</span>
                <h3 className="text-3xl font-bold">Winning Mindset.</h3>
              </div>
            </div>

            {/* Mobile: Vertical list */}
            <div className="lg:hidden flex flex-col gap-6">
              {t('about.values').map((value: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-accent"
                >
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Desktop: Original vertical layout */}
            <div className="hidden lg:flex flex-col justify-center gap-12">
              {t('about.values').map((value: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-l-2 border-accent pl-8 py-2"
                >
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20 md:mb-40">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Our Evolution</h2>
              <div className="hidden md:block w-1/3 h-[1px] bg-border mb-4" />
            </div>

            {/* Mobile: Vertical layout */}
            <div className="md:hidden flex flex-col gap-8 ml-4 border-l-2 border-accent/20 pl-8 relative">
              {t('about.timeline').map((event: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm" />
                  <span className="text-sm font-bold text-accent mb-1 block">{event.year}</span>
                  <h4 className="text-lg font-bold mb-2">{event.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden md:grid md:grid-cols-4 gap-8">
              {t('about.timeline').map((event: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="text-6xl font-black text-secondary block mb-6">{event.year}</span>
                  <h4 className="text-xl font-bold mb-4">{event.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>



          {/* Clients Ribbon Section */}
          <div className="mb-32 overflow-hidden">
            <div className="mb-12 text-center">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">{t('about.clients.tag')}</span>
              <h2 className="heading-lg">{t('about.clients.title')}</h2>
            </div>

            <div className="relative w-full mask-gradient-x">
              {/* Marquee Container */}
              <div className="flex items-center animate-scroll whitespace-nowrap w-max">
                {/* Double the logos for seamless loop */}
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-20 items-center pr-20 bg-white py-8">
                    <img src={modernChineseLogo} alt="Modern Chinese" className="h-28 md:h-32 w-auto object-contain hover:scale-110 transition-transform duration-300 mix-blend-multiply" />
                    <img src={poonawalaLogo} alt="Poonawala Travels" className="h-28 md:h-32 w-auto object-contain hover:scale-110 transition-transform duration-300 mix-blend-multiply" />
                    <img src={poonawalaNewLogo} alt="Poonawala Travels" className="h-28 md:h-32 w-auto object-contain hover:scale-110 transition-transform duration-300 mix-blend-multiply" />
                    <img src={happinessLogo} alt="Happiness Forever" className="h-28 md:h-32 w-auto object-contain hover:scale-110 transition-transform duration-300 mix-blend-multiply" />
                    <img src={silkRouteLogo} alt="The Silk Route" className="h-28 md:h-32 w-auto object-contain hover:scale-110 transition-transform duration-300 mix-blend-multiply" />
                    <img src={domLogo} alt="DOM" className="h-28 md:h-32 w-auto object-contain hover:scale-110 transition-transform duration-300 mix-blend-multiply" />
                    <img src={dishaLogo} alt="Disha Astrology" className="h-28 md:h-32 w-auto object-contain hover:scale-110 transition-transform duration-300 mix-blend-multiply" />
                    <img src={keyStylishLogo} alt="Key Stylish Interiors" className="h-28 md:h-32 w-auto object-contain hover:scale-110 transition-transform duration-300 mix-blend-multiply" />
                    <img src={shwetaLogo} alt="Shweta's Nail Art" className="h-28 md:h-32 w-auto object-contain hover:scale-110 transition-transform duration-300 mix-blend-multiply" />
                    <img src={galaxyLogo} alt="Galaxy Path Lab" className="h-28 md:h-32 w-auto object-contain hover:scale-110 transition-transform duration-300 mix-blend-multiply" />
                    <img src={metacraftLogo} alt="Metacraft Enterprises" className="h-28 md:h-32 w-auto object-contain hover:scale-110 transition-transform duration-300 mix-blend-multiply" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials Section - Marquee Style */}
          <div className="mb-40 overflow-hidden">
            <div className="text-center mb-16">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">{t('testimonials.tag')}</span>
              <h2 className="heading-lg">{t('testimonials.title')}</h2>
            </div>

            {/* Reverse Scroll for visual variety */}
            <div className="relative w-full mask-gradient-x">
              <div className="flex gap-6 items-center animate-scroll-reverse whitespace-normal w-max">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-6">
                    {t('testimonials.items').map((item: any, i: number) => (
                      <div
                        key={i}
                        className="bg-secondary p-6 rounded-2xl relative w-[350px] flex-shrink-0 border border-border/50"
                      >
                        <div className="text-3xl text-accent mb-4">"</div>
                        <p className="text-sm text-muted-foreground mb-6 italic leading-relaxed line-clamp-4">
                          {item.quote}
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-accent shadow-sm border border-border">
                            {item.author.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-sm leading-tight">{item.author}</h4>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">{item.role}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 md:mt-40 text-center bg-secondary rounded-3xl py-16 md:py-32 px-8"
          >
            <h2 className="heading-lg mb-8 max-w-3xl mx-auto">
              {t('cta_section.title')}
            </h2>
            <Link to="/contact" className="btn-primary px-12 py-5 text-lg">
              {t('cta_section.btn_primary')}
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
