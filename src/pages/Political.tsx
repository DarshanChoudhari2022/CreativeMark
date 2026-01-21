import { useRef } from "react";
import { motion } from "framer-motion";
import { Shield, Target, Users, Zap, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const Political = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="bg-background min-h-screen pt-40 pb-20">
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
              className="text-5xl md:text-7xl font-bold mb-10 leading-[1.1] tracking-tight"
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

          {/* War Room Section */}
          <div className="grid lg:grid-cols-2 gap-20 mb-40 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-white rounded-3xl border border-border p-12 relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-3xl font-bold mb-8 relative z-10">{t('political_page.war_room.title')}</h3>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed relative z-10">
                {t('political_page.war_room.desc')}
              </p>
              <ul className="space-y-6 relative z-10">
                {t('political_page.war_room.list').map((item: string, i: number) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 font-bold text-foreground"
                  >
                    <CheckCircle2 className="text-accent" size={24} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { val: "50+", lab: t('political_page.stats.campaigns') },
                { val: "85%", lab: t('political_page.stats.victory') },
                { val: "10+", lab: t('political_page.stats.states') },
                { val: "1M+", lab: t('political_page.stats.support') }
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

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-40">
            {[
              { icon: Zap, title: t('political_page.features.digital.title'), desc: t('political_page.features.digital.desc') },
              { icon: Target, title: t('political_page.features.ground.title'), desc: t('political_page.features.ground.desc') },
              { icon: Shield, title: t('political_page.features.brand.title'), desc: t('political_page.features.brand.desc') }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <feature.icon size={32} />
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
            className="bg-accent rounded-3xl p-12 md:p-24 text-center text-white"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">{t('political_page.cta.title')}</h2>
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
