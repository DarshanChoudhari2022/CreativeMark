import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Megaphone, Globe, Palette, PenTool, Video, Printer, ArrowUpRight, Code2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { RevealText } from "@/components/ui/RevealText";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useLanguage } from "@/context/LanguageContext";
import SEO from "@/components/layout/SEO";

import projectBranding from "@/assets/project-branding.png";
import heroEnglish from "@/assets/hero-english.png";
import heroMarathi from "@/assets/hero-marathi.png";

import projectDigital from "@/assets/project-digital.png";
import projectMultimedia from "@/assets/project-multimedia.png";
import brandingImg from "@/assets/service-branding.png";
import garageStandee from "@/assets/surajit-garage-standee-hd.png";
import magicQrProduct from "@/assets/magic-qr-product.png";

const Home = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const { t, language } = useLanguage();

  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yHero = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Carousel State
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const serviceImages: Record<string, string> = {
    advertising: "https://images.unsplash.com/photo-1555392336-fb8c3ba8163e?auto=format&fit=crop&q=80&w=800",
    digital: projectDigital,
    branding: projectBranding,
    multimedia: projectMultimedia,
    technology: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  };

  const servicesList = [
    { id: "advertising", icon: Megaphone, title: t('services.items.advertising.title'), desc: t('services.items.advertising.desc'), tag: t('services.items.advertising.tag') },
    { id: "digital-marketing", icon: Globe, title: t('services.items.digital.title'), desc: t('services.items.digital.desc'), tag: t('services.items.digital.tag') },
    { id: "branding", icon: Palette, title: t('services.items.branding.title'), desc: t('services.items.branding.desc'), tag: t('services.items.branding.tag') },
    { id: "multimedia", icon: Video, title: t('services.items.multimedia.title'), desc: t('services.items.multimedia.desc'), tag: t('services.items.multimedia.tag') },
    { id: "technology", icon: Code2, title: t('services.items.technology.title'), desc: t('services.items.technology.desc'), tag: t('services.items.technology.tag') }
  ];

  return (
    <Layout>
      <SEO
        title={language === 'en' ? 'Home' : 'मुख्यपृष्ठ'}
        description={language === 'en' ? 'Creative Mark is a premier advertising agency in Pune specializing in branding, digital marketing, and end-to-end political campaign management.' : 'क्रिएटिव्ह मार्क ही पुण्यातील एक अग्रगण्य जाहिरात संस्था आहे जी ब्रँडिंग, डिजिटल मार्केटिंग आणि राजकीय मोहीम व्यवस्थापनात तज्ञ आहे.'}
      />


      {/* 2. HERO SECTION */}
      <section ref={targetRef} className="relative min-h-screen flex flex-col bg-background pt-36 md:pt-44 lg:pt-48 pb-12 overflow-hidden">



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

              <h1 className={`heading-xl flex flex-col items-center w-full mix-blend-multiply dark:mix-blend-normal ${language === 'en' ? 'uppercase tracking-tighter' : ''}`}>
                <div className="overflow-hidden">
                  <motion.span
                    initial={{ y: "110%", rotate: 2 }}
                    animate={{ y: "0%", rotate: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    className={`block origin-bottom-left ${language === 'mr' ? 'py-1 leading-tight' : 'py-1'}`}
                  >
                    {t('hero.title1')}
                  </motion.span>
                </div>
                <div className="overflow-hidden text-accent relative">
                  <motion.span
                    initial={{ y: "110%", rotate: -2 }}
                    animate={{ y: "0%", rotate: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                    className={`block origin-bottom-right drop-shadow-xl ${language === 'mr' ? 'py-1 leading-tight' : 'py-1'}`}
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
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Link to="/contact" className="btn-primary px-10 py-5 text-base md:text-lg w-full sm:w-auto text-center">
                  {t('hero.cta_primary')}
                </Link>
                <Link to="/services" className="btn-secondary px-10 py-5 text-base md:text-lg w-full sm:w-auto text-center">
                  {t('hero.cta_secondary')}
                </Link>
              </motion.div>
            </div>



          </motion.div>

          {/* Stats Divider - Mobile Optimized 2x2 Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 md:mt-20 pt-8 border-t border-border/60 grid grid-cols-3 gap-2 md:gap-8 text-center max-w-5xl mx-auto px-2"
          >
            {[
              { val: "85%", lab: t('stats.winRatio'), sub: t('stats.winRatioSub') },
              { val: "10+", lab: t('stats.campaigns'), sub: t('stats.campaignsSub') },
              { val: "24/7", lab: t('stats.warRoom'), sub: t('stats.warRoomSub') }
            ].map((stat, i) => (
              <div key={i} className="group cursor-default py-4">
                <span className="block text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-2 md:mb-3 tracking-tight group-hover:scale-110 transition-transform duration-300 ease-out">{stat.val}</span>
                <span className={`text-[10px] md:text-sm font-bold text-muted-foreground block mb-1 ${language === 'en' ? 'uppercase tracking-widest' : ''}`}>{stat.lab}</span>
                <span className="text-[9px] md:text-xs text-muted-foreground/60 block">{stat.sub}</span>
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

          {/* Unified Responsive Flex-Grid for Services */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {servicesList.map((service, i) => (
              <Link
                to={`/services/${service.id}`}
                key={i}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(20%-1.6rem)] perspective-1000 group"
              >
                <div
                  className="card-minimal h-full flex flex-col justify-between bg-white p-6 md:p-8 rounded-3xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-border/50 hover:border-accent/30 relative overflow-hidden"
                >

                  <div>
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 md:mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                      <service.icon size={28} strokeWidth={1.5} className="md:w-8 md:h-8" />
                    </div>
                    <span className="inline-block px-3 py-1 bg-accent/5 text-accent text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                      {service.tag}
                    </span>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-medium">{service.desc}</p>
                  </div>
                  <div className="mt-8 md:mt-10 flex justify-between items-center text-sm font-bold border-t border-gray-50 pt-6">
                    <span className="text-foreground/70 group-hover:text-accent transition-colors uppercase tracking-widest text-[11px]">{t('services.explore')}</span>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-secondary group-hover:bg-accent group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTS SECTION - "MAGIC QR" */}
      <section id="products" className="py-16 md:py-24 lg:py-40 bg-white overflow-hidden">
        <div className="container-wide px-4 md:px-12">
          {/* Mobile: Stack vertically, Tablet+: 2 columns */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-10 lg:gap-24 items-center">

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-2 w-full"
            >
              <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-4 md:mb-6 block">
                {t('products.tag')}
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8 tracking-tighter leading-[1.1]">
                {t('products.title')}
              </h2>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed font-light mb-8 md:mb-12">
                {t('products.desc')}
              </p>

              {/* How It Works - Unified Responsive Component */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-accent/60 mb-4 md:mb-6">{t('products.how_it_works.title')}</h3>

                <div className="relative">
                  {/* Desktop Connecting Line */}
                  <div className="hidden lg:block absolute left-3 top-3 bottom-8 w-[2px] bg-gradient-to-b from-accent/20 via-accent/10 to-transparent" />

                  <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-3 lg:gap-8 -mx-4 px-4 lg:mx-0 lg:px-0 lg:pl-8 scrollbar-hide snap-x snap-mandatory">
                    {[
                      { step: "01", ...t('products.how_it_works.step1') },
                      { step: "02", ...t('products.how_it_works.step2') },
                      { step: "03", ...t('products.how_it_works.step3') }
                    ].map((s, idx) => (
                      <div key={idx} className="relative group min-w-[75vw] sm:min-w-[45vw] lg:min-w-0 snap-center flex-shrink-0">
                        {/* Desktop Dot */}
                        <div className="hidden lg:block absolute -left-[26px] top-1 w-4 h-4 rounded-full bg-white border-2 border-accent shadow-sm group-hover:scale-125 transition-transform" />

                        <div className="bg-secondary/50 p-6 lg:p-5 rounded-2xl lg:rounded-xl border border-border/30 lg:border-transparent lg:group-hover:border-accent/20 lg:group-hover:bg-white lg:group-hover:shadow-lg transition-all duration-300 h-full">
                          <div className="flex items-center gap-3 lg:gap-0 lg:block mb-3 lg:mb-1">
                            <div className="lg:hidden w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mb-0">
                              <span className="text-accent font-bold text-xs">{s.step}</span>
                            </div>
                            <span className="hidden lg:block text-[10px] font-black text-accent uppercase tracking-widest mb-1">{s.step}</span>
                            <h4 className="font-bold text-base text-foreground">{s.title}</h4>
                          </div>
                          <p className="text-sm text-foreground/70 lg:text-muted-foreground leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tablet/Mobile Swipe Text */}
                  <div className="flex lg:hidden flex-col items-center gap-2 mt-2">
                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
                      {language === 'en' ? '← Swipe to explore →' : '← स्वाइप करून अन्वेषण करा →'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex">
                <a
                  href={`https://creative-mark-magic-qrcode.vercel.app/${language === 'mr' ? '?lang=mr' : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-6 md:px-10 py-4 md:py-5 text-base md:text-lg group w-full sm:w-auto"
                >
                  {t('products.btn')}
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Image - Shows second on mobile/tablet, first on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 md:order-1 w-full max-w-sm lg:max-w-none mx-auto"
            >
              <div className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] bg-gradient-to-br from-secondary to-white p-4 md:p-6">
                <img
                  loading="lazy"
                  decoding="async"
                  src={magicQrProduct}
                  alt="Creative Mark Magic QR Standee - Improve Google Reviews for Local Businesses"
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>

              {/* Decorative elements - hide on mobile */}
              <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-[80px]" />
              <div className="hidden md:block absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px]" />
            </motion.div>

          </div>
        </div>
      </section>


      {/* NEW TESTIMONIALS SECTION */}
      <section className="py-20 md:py-32 lg:py-40 bg-secondary border-t border-border overflow-hidden">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">{t('testimonials.tag')}</span>
            <h2 className="heading-lg">{t('testimonials.title')}</h2>
          </div>

          {/* Unified Testimonials Carousel */}
          <div className="w-full px-4 md:px-0">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 md:-ml-6 py-4">
                {t('testimonials.items').map((item: any, i: number) => (
                  <CarouselItem key={i} className="pl-4 md:pl-6 basis-[85%] md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white p-6 md:p-8 rounded-3xl relative h-full flex flex-col border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 group">
                      {/* Star Rating */}
                      <div className="flex gap-0.5 mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <div className="text-4xl text-accent/20 mb-4 font-serif leading-none">"</div>

                      <p className="text-base text-foreground/80 mb-8 italic leading-relaxed flex-grow">
                        {item.quote}
                      </p>

                      <div className="flex items-center gap-4 pt-4 border-t border-gray-50 mt-auto">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-gray-100 flex items-center justify-center font-bold text-accent text-lg shadow-inner ring-2 ring-white">
                          {item.initials || item.author.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-base leading-tight truncate text-foreground">{item.author}</h4>
                          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block truncate mt-1">{item.role}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {language === 'en' ? 'Customer since 2023' : 'ग्राहक २०२३ पासून'}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="-left-4 lg:-left-12 h-12 w-12 border-2 border-border/50 hover:bg-accent hover:text-white hover:border-accent transition-all" />
                <CarouselNext className="-right-4 lg:-right-12 h-12 w-12 border-2 border-border/50 hover:bg-accent hover:text-white hover:border-accent transition-all" />
              </div>

            </Carousel>

            {/* Carousel Dots */}
            <div className="py-2 text-center text-sm text-muted-foreground flex justify-center gap-2 mt-8">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  className={`rounded-full transition-all duration-300 ${i === current - 1 ? "bg-accent w-6 h-2" : "bg-accent/20 w-2 h-2 hover:bg-accent/40"}`}
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Mobile Swipe Hint */}
            <div className="flex md:hidden justify-center items-center gap-2 mt-4 opacity-60">
              <span className="text-[10px] font-black uppercase tracking-widest animate-pulse">
                {language === 'en' ? 'Swipe to explore →' : 'स्वाइप करून अन्वेषण करा →'}
              </span>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Home;
