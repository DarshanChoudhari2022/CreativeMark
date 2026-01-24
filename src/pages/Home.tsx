import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Megaphone, Globe, Palette, PenTool, Video, Printer, ArrowUpRight, QrCode } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { RevealText } from "@/components/ui/RevealText";
import { useLanguage } from "@/context/LanguageContext";

import projectBranding from "@/assets/project-branding.png";
import heroEnglish from "@/assets/hero-english.png";
import heroMarathi from "@/assets/hero-marathi.png";

import projectDigital from "@/assets/project-digital.png";
import projectMultimedia from "@/assets/project-multimedia.png";

const Home = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const { t, language } = useLanguage();

  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yHero = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const serviceImages: Record<string, string> = {
    advertising: "https://images.unsplash.com/photo-1555392336-fb8c3ba8163e?auto=format&fit=crop&q=80&w=800",
    digital: projectDigital,
    branding: projectBranding,
    multimedia: projectMultimedia
  };

  return (
    <Layout>
      {/* 2. HERO SECTION */}
      <section ref={targetRef} className="relative min-h-screen flex flex-col bg-background pt-36 md:pt-44 lg:pt-48 pb-12 overflow-hidden">

        {/* Background 'Real' Image Overlay with Parallax */}
        <motion.div
          style={{ y: yHero }}
          className="absolute inset-x-0 top-0 h-[100%] w-full pointer-events-none opacity-[0.07] z-0"
        >
          <img
            src={language === 'en' ? heroEnglish : heroMarathi}
            className="w-full h-full object-cover grayscale brightness-50"
            alt="Agency Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
        </motion.div>

        <div className="container-wide relative z-10">
          <motion.div
            style={{ y: yText }}
            className="max-w-full lg:max-w-6xl mx-auto text-center flex flex-col items-center relative z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8 md:mb-12 relative"
            >
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/30 backdrop-blur-xl border border-white/40 shadow-inner group overflow-hidden">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse relative z-10" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-foreground/80 relative z-10">
                  {t('hero.tagline')}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0"
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>

            {/* Massive Hero Title - Redesigned */}
            <div className="mb-8 md:mb-12 w-full relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-gradient-to-r from-accent/5 via-transparent to-accent/5 blur-3xl rounded-full -z-10" />

              <h1 className="heading-xl flex flex-col items-center w-full uppercase tracking-tighter mix-blend-multiply dark:mix-blend-normal">
                <div className="overflow-hidden">
                  <motion.span
                    initial={{ y: "110%", rotate: 2 }}
                    animate={{ y: "0%", rotate: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    className="block origin-bottom-left py-1"
                  >
                    {t('hero.title1')}
                  </motion.span>
                </div>
                <div className="overflow-hidden text-accent relative">
                  <motion.span
                    initial={{ y: "110%", rotate: -2 }}
                    animate={{ y: "0%", rotate: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                    className="block origin-bottom-right drop-shadow-xl py-1"
                  >
                    {t('hero.title2')}
                  </motion.span>

                </div>
              </h1>
            </div>

            {/* Subtitle - Better Spaced */}
            <div className="max-w-2xl lg:max-w-3xl mx-auto mb-10 md:mb-16 px-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-center leading-relaxed font-light"
              >
                {t('hero.subtitle')}
              </motion.p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full mb-12 md:mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Link to="/contact" className="btn-primary px-10 py-5 text-base md:text-lg">
                  {t('hero.cta_primary')}
                </Link>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -bottom-24 md:-bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
            >
              <span className="text-[10px] uppercase tracking-widest">Scroll</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/0 via-muted-foreground/50 to-muted-foreground/0" />
            </motion.div>

          </motion.div>

          {/* Stats Divider - Mobile Optimized 2x2 Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 md:mt-12 pt-8 border-t border-border/60 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center max-w-5xl mx-auto px-4"
          >
            {[
              { val: "85%", lab: t('stats.winRatio'), sub: t('stats.winRatioSub') },
              { val: "50+", lab: t('stats.campaigns'), sub: t('stats.campaignsSub') },
              { val: "24/7", lab: t('stats.warRoom'), sub: t('stats.warRoomSub') },
              { val: "10+", lab: t('stats.states'), sub: t('stats.statesSub') }
            ].map((stat, i) => (
              <div key={i} className="group cursor-default py-4">
                <span className="block text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-3 tracking-tight group-hover:scale-110 transition-transform duration-300 ease-out">{stat.val}</span>
                <span className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-widest block mb-1">{stat.lab}</span>
                <span className="text-[10px] md:text-xs text-muted-foreground/60 block">{stat.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES SECTION - "OUR ARSENAL" */}
      <section className="py-24 md:py-32 lg:py-40 bg-secondary">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 space-y-6 md:space-y-0 text-center md:text-left">
            <div className="max-w-2xl w-full md:w-auto">
              <span className="text-muted-foreground font-bold tracking-widest uppercase text-sm mb-4 block">{t('services.intro_tag')}</span>
              <h2 className="heading-lg text-foreground overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true }}
                  className="block"
                >
                  {t('services.intro_title')}
                </motion.span>
              </h2>
            </div>
            <div className="max-w-md w-full md:w-auto">
              <p className="text-muted-foreground font-medium text-base md:text-lg leading-relaxed">
                {t('services.intro_desc')}
              </p>
            </div>
          </div>

          {/* Mobile: Single Column, Tablet: 2 Columns, Desktop: 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-stretch">
            {[
              { id: "advertising", icon: Megaphone, title: t('services.items.advertising.title'), desc: t('services.items.advertising.desc'), tag: "Impact" },
              { id: "digital-marketing", icon: Globe, title: t('services.items.digital.title'), desc: t('services.items.digital.desc'), tag: "Growth" },
              { id: "branding", icon: Palette, title: t('services.items.branding.title'), desc: t('services.items.branding.desc'), tag: "Identity" },
              { id: "multimedia", icon: Video, title: t('services.items.multimedia.title'), desc: t('services.items.multimedia.desc'), tag: "Visuals" }
            ].map((service, i) => (
              <Link to={`/services/${service.id}`} key={i} className="block h-full perspective-1000">
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="card-minimal group h-full flex flex-col justify-between bg-white p-7 md:p-9 rounded-3xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-border/50 hover:border-accent/30 relative overflow-hidden"
                >
                  {/* Background Number for 'Understandability' */}
                  <span className="absolute -top-4 -right-2 text-8xl font-black text-black/[0.03] group-hover:text-accent/[0.05] transition-colors pointer-events-none">
                    0{i + 1}
                  </span>

                  <div>
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 md:mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                      <service.icon size={28} strokeWidth={1.5} className="md:w-8 md:h-8" />
                    </div>

                    <span className="inline-block px-3 py-1 bg-accent/5 text-accent text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                      {service.tag}
                    </span>

                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-medium">{service.desc}</p>
                  </div>

                  <div className="mt-8 md:mt-10 flex justify-between items-center text-sm font-bold border-t border-gray-50 pt-6">
                    <span className="text-foreground/70 group-hover:text-accent transition-colors uppercase tracking-widest text-[11px]">{t('services.explore')}</span>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary group-hover:bg-accent group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTS SECTION - "MAGIC QR" */}
      <section id="products" className="py-24 md:py-32 lg:py-40 bg-white overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1512428559083-a400a3b8463a?auto=format&fit=crop&q=80&w=1200"
                  alt="Magic QR Code Sample"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-[80px]" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-6 block">
                {t('products.tag')}
              </span>
              <h2 className="heading-lg mb-8 tracking-tighter">
                {t('products.title')}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light mb-12">
                {t('products.desc')}
              </p>

              <div className="space-y-6 mb-12">
                {[
                  "AI-Generated Artistic Patterns",
                  "Perfect Scannability Guaranteed",
                  "Brand-Integrated Designs",
                  "Unlimited Customization"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <Check size={16} />
                    </div>
                    <span className="font-bold text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://creative-mark-magic-qrcode.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 px-10 py-5 text-lg group"
              >
                {t('products.btn')}
                <QrCode className="group-hover:rotate-12 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>



      {/* NEW TESTIMONIALS SECTION */}
      <section className="py-32 bg-secondary border-t border-border">
        <div className="container-wide">
          <div className="mb-16 max-w-2xl">
            <span className="text-muted-foreground font-bold tracking-widest uppercase text-sm mb-4 block">{t('testimonials.tag')}</span>
            <h2 className="heading-lg">{t('testimonials.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t('testimonials.items').map((t: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="text-accent text-6xl font-serif leading-none mb-6 opacity-30">"</div>
                <p className="text-xl font-medium leading-relaxed mb-8 text-foreground/90">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-bold text-foreground">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t.author}</h4>
                    <span className="text-sm text-muted-foreground block">{t.role}</span>
                  </div>
                  <span className="ml-auto text-xs font-bold uppercase tracking-widest px-2 py-1 bg-secondary rounded text-muted-foreground">{t.type}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-40 bg-background border-t border-border">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="container-wide text-center"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">{t('cta_section.title')}</h2>

          <div className="flex justify-center w-full mb-12">
            <RevealText
              text={t('cta_section.text')}
              className="text-2xl text-muted-foreground max-w-2xl text-center leading-relaxed font-light justify-center"
              tag="p"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="btn-primary w-full sm:w-auto px-12 py-5 text-lg shadow-2xl hover:shadow-accent/50 hover:-translate-y-1 transition-transform">
              {t('cta_section.btn_primary')}
            </Link>
            <Link to="/work" className="btn-secondary w-full sm:w-auto px-12 py-5 text-lg">
              {t('cta_section.btn_secondary')}
            </Link>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Home;
