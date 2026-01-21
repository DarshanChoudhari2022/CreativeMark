import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Megaphone, Globe, Palette, PenTool, Video, Printer, ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { RevealText } from "@/components/ui/RevealText";
import { useLanguage } from "@/context/LanguageContext";

const Home = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const { t } = useLanguage();

  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <Layout>
      {/* 2. HERO SECTION - Carepoint Exact Replica */}
      <section ref={targetRef} className="relative min-h-screen flex flex-col justify-center bg-background pt-32 pb-20 overflow-hidden">

        {/* Corner Decor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-32 left-8 md:left-12 hidden md:block"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{t('hero.est')}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-32 right-8 md:right-12 hidden md:block"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{t('hero.agency')}</span>
        </motion.div>

        <div className="container-wide relative z-10">
          <motion.div
            style={{ y: yText }}
            className="max-w-[95%] mx-auto text-center flex flex-col items-center"
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <span className="px-4 py-2 rounded-full border border-black/10 text-xs font-bold uppercase tracking-widest text-muted-foreground bg-white/50 backdrop-blur-sm">
                {t('hero.tagline')}
              </span>
            </motion.div>

            {/* Massive Hero Title - "Framer" Style Reveal */}
            <div className="mb-10 text-center w-full">
              <h1 className="text-[11vw] md:text-[8rem] lg:text-[10rem] font-bold leading-tight md:leading-[1.1] tracking-tighter text-foreground flex flex-col items-center w-full uppercase gap-0">
                <span className="inline-block overflow-hidden px-2 md:px-4 py-4">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                    className="block whitespace-nowrap"
                  >
                    {t('hero.title1')}
                  </motion.span>
                </span>
                <span className="inline-block overflow-hidden text-accent px-2 md:px-4 py-4 -mt-4 md:-mt-8">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.25 }}
                    className="block whitespace-nowrap"
                  >
                    {t('hero.title2')}
                  </motion.span>
                </span>
              </h1>
            </div>

            <div className="max-w-xl mx-auto mb-12 flex justify-center">
              <div className="flex justify-center w-full"> {/* Wrap RevealText in flex center */}
                <RevealText
                  text={t('hero.subtitle')}
                  className="text-xl md:text-2xl text-muted-foreground justify-center text-center leading-relaxed font-light"
                  delay={0.6}
                  tag="p" // Ensure it renders as P
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link to="/contact" className="btn-primary w-full sm:w-auto px-10 py-5 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {t('hero.cta_primary')}
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Divider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-24 pt-12 border-t border-border/60 grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto"
          >
            {[
              { val: "85%", lab: t('stats.winRatio'), sub: t('stats.winRatioSub') },
              { val: "50+", lab: t('stats.campaigns'), sub: t('stats.campaignsSub') },
              { val: "24/7", lab: t('stats.warRoom'), sub: t('stats.warRoomSub') },
              { val: "10+", lab: t('stats.states'), sub: t('stats.statesSub') }
            ].map((stat, i) => (
              <div key={i} className="group cursor-default">
                <span className="block text-5xl font-bold text-foreground mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300 ease-out">{stat.val}</span>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">{stat.lab}</span>
                <span className="text-[10px] text-muted-foreground/60 block">{stat.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES SECTION - "OUR ARSENAL" */}
      <section className="py-32 bg-secondary">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 space-y-6 md:space-y-0">
            <div className="max-w-2xl">
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
            <div className="max-w-md">
              <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                {t('services.intro_desc')}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "advertising", icon: Megaphone, title: t('services.items.advertising.title'), desc: t('services.items.advertising.desc') },
              { id: "digital-marketing", icon: Globe, title: t('services.items.digital.title'), desc: t('services.items.digital.desc') },
              { id: "branding", icon: Palette, title: t('services.items.branding.title'), desc: t('services.items.branding.desc') },
              { id: "multimedia", icon: Video, title: t('services.items.multimedia.title'), desc: t('services.items.multimedia.desc') },
              { id: "printing", icon: Printer, title: t('services.items.printing.title'), desc: t('services.items.printing.desc') },
              { id: "designing", icon: PenTool, title: t('services.items.designing.title'), desc: t('services.items.designing.desc') }
            ].map((service, i) => (
              <Link to={`/services/${service.id}`} key={i} className="block h-full perspective-1000">
                <motion.div
                  initial={{ opacity: 0, y: 50, rotateX: 5 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  className="card-minimal group h-full flex flex-col justify-between bg-white p-8 rounded-2xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-500 border border-transparent hover:border-border/50"
                >
                  <div>
                    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <service.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="mt-8 flex justify-between items-center text-sm font-bold border-t border-gray-100 pt-6">
                    <span className="text-foreground group-hover:text-accent transition-colors">{t('services.explore')}</span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-transparent group-hover:bg-accent group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. POLITICAL CAMPAIGNS - Sticky Parallax Effect */}
      <section className="py-32 bg-background overflow-hidden">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="border border-border rounded-2xl overflow-hidden bg-white shadow-xl relative"
          >
            <div className="grid lg:grid-cols-2 min-h-[600px]">
              <div className="p-10 md:p-20 flex flex-col justify-center order-2 lg:order-1 relative z-10 bg-white">
                <span className="text-accent font-bold tracking-widest uppercase text-xs mb-6 block">{t('political_preview.tag')}</span>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-none tracking-tight">{t('political_preview.title')}</h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-light">
                  {t('political_preview.desc')}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                  {t('political_preview.list').map((item: string, i: number) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="flex items-center gap-3 text-foreground font-bold"
                    >
                      <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <Link to="/political" className="btn-primary self-start px-8 py-4">
                  {t('political_preview.btn')}
                </Link>
              </div>

              {/* Parallax Image Container */}
              <div className="relative order-1 lg:order-2 overflow-hidden bg-secondary">
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1573167101669-476636b96cea?auto=format&fit=crop&q=80&w=1200"
                    alt="Political Campaign Strategy"
                    className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                  />
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-8 left-8 bg-white px-8 py-4 rounded-lg shadow-2xl border border-border"
                >
                  <span className="block text-4xl font-black text-accent text-center">85%</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground">{t('political_preview.float_badge')}</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
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
