import { useRef } from "react";
import { motion } from "framer-motion";
import { Shield, Target, Users, Zap, CheckCircle2, Video, FileText, LayoutDashboard } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import bjpLogo from "@/assets/real_bjp.jpg";
import congressLogo from "@/assets/real_congress_final.png";
import shivSenaLogo from "@/assets/real_shivsena.jpg";
import shivSenaBowLogo from "@/assets/real_shivsena_bow.jpg";
import ncpLogo from "@/assets/real_ncp.jpg";
import tutariLogo from "@/assets/real_tutari.jpg";
import mnsLogo from "@/assets/real_mns.jpg";

const Political = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="bg-background min-h-screen pt-28 md:pt-40 pb-20">
        <div className="container-wide">
          {/* Hero Section */}
          <div className="max-w-4xl mb-32">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-accent font-bold tracking-widest uppercase text-sm mb-6 block"
            >
              {t('political_page.tag')}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="heading-xl mb-10"
            >
              {t('political_page.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light"
            >
              {t('political_page.desc')}
            </motion.p>
          </div>

          {/* Success Story Section (New) */}
          <div className="mb-40 grid lg:grid-cols-2 gap-16 items-center bg-secondary/30 p-8 md:p-16 rounded-3xl border border-border">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                {t('political_page.success_story.tag')}
              </span>
              <h2 className="heading-lg mb-6">
                {t('political_page.success_story.title')}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {t('political_page.success_story.desc')}
              </p>
              <ul className="space-y-4 mb-8">
                {t('political_page.success_story.details').map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-accent text-white p-12 rounded-3xl text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="relative z-10">
                <span className="block text-8xl font-black mb-2 tracking-tighter">
                  {t('political_page.success_story.stat_main')}
                </span>
                <span className="text-xl font-bold uppercase tracking-widest opacity-90 block">
                  {t('political_page.success_story.stat_desc')}
                </span>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm font-medium opacity-80">
                    Creative Mark War Room Effect
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Political Clients Marquee (New) */}
          <div className="mb-40 overflow-hidden">
            <div className="text-center mb-12">
              <span className="text-accent font-bold tracking-widest uppercase text-sm block">
                {t('political_page.clients.title')}
              </span>
            </div>

            <div className="relative w-full mask-gradient-x bg-white py-4">
              <div className="flex items-center animate-scroll whitespace-nowrap w-max">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-10 md:gap-20 items-center px-4">
                    <img loading="lazy" src={bjpLogo} alt="BJP" className="h-24 w-24 md:h-40 md:w-40 object-contain hover:scale-110 transition-transform mix-blend-multiply rounded-full contrast-[1.1] brightness-[1.1]" />
                    <img loading="lazy" src={congressLogo} alt="Congress" className="h-24 w-24 md:h-40 md:w-40 object-contain hover:scale-110 transition-transform mix-blend-multiply rounded-full contrast-[1.1] brightness-[1.1]" />
                    <img loading="lazy" src={shivSenaLogo} alt="Shiv Sena (UBT)" className="h-24 w-24 md:h-40 md:w-40 object-contain hover:scale-110 transition-transform mix-blend-multiply contrast-[1.1] brightness-[1.1]" />
                    <img loading="lazy" src={shivSenaBowLogo} alt="Shiv Sena" className="h-24 w-24 md:h-40 md:w-40 object-contain hover:scale-110 transition-transform mix-blend-multiply rounded-full contrast-[1.1] brightness-[1.1]" />
                    <img loading="lazy" src={ncpLogo} alt="NCP" className="h-24 w-24 md:h-40 md:w-40 object-contain hover:scale-110 transition-transform mix-blend-multiply rounded-full contrast-[1.1] brightness-[1.1]" />
                    <img loading="lazy" src={tutariLogo} alt="NCP SP" className="h-24 w-24 md:h-40 md:w-40 object-contain hover:scale-110 transition-transform mix-blend-multiply rounded-full contrast-[1.1] brightness-[1.1]" />
                    <img loading="lazy" src={mnsLogo} alt="MNS" className="h-24 w-24 md:h-40 md:w-40 object-contain hover:scale-110 transition-transform mix-blend-multiply rounded-full contrast-[1.1] brightness-[1.1]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* War Room Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-40 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-auto lg:aspect-square bg-black rounded-3xl border border-border p-8 md:p-12 relative overflow-hidden group shadow-2xl"
            >
              {/* Background 'Real' Image for Political */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200"
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700"
                  alt="Political War Room"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 text-white">{t('political_page.war_room.title')}</h3>
                <p className="text-lg text-gray-300 mb-12 leading-relaxed font-medium">
                  {t('political_page.war_room.desc')}
                </p>
                <ul className="space-y-6">
                  {t('political_page.war_room.list').map((item: string, i: number) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 font-bold text-white"
                    >
                      <CheckCircle2 className="text-accent" size={24} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { val: "10+", lab: t('political_page.stats.campaigns') },
                { val: "85%", lab: t('political_page.stats.victory') }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-secondary p-8 rounded-2xl text-center"
                >
                  <span className="block text-4xl font-bold mb-2">{stat.val}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.lab}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Offerings Section */}
          <div className="mb-12">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">{t('political_page.tag')}</span>
            <h2 className="heading-lg">End-to-End Campaign Offerings</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-40">
            {[
              { icon: Video, title: t('political_page.features.digital.title'), desc: t('political_page.features.digital.desc') },
              { icon: FileText, title: t('political_page.features.ground.title'), desc: t('political_page.features.ground.desc') },
              { icon: LayoutDashboard, title: t('political_page.features.brand.title'), desc: t('political_page.features.brand.desc') }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-accent rounded-3xl p-8 md:p-24 text-center text-white"
          >
            <h2 className="heading-lg tracking-tight mb-8">{t('political_page.cta.title')}</h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto font-light">
              {t('political_page.cta.desc')}
            </p>
            <Link to="/contact" className="inline-block bg-white text-accent px-12 py-5 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl">
              {t('political_page.cta.btn')}
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};



export default Political;
