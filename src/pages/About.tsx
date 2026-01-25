import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/context/LanguageContext";
import aboutCulture from "@/assets/about-culture.png";

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="bg-background min-h-screen pt-28 md:pt-40 pb-20">
        <div className="container-wide">
          {/* Header Section */}
          <div className="max-w-4xl mb-32">
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
          <div className="grid lg:grid-cols-2 gap-12 mb-40">
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

            {/* Mobile: Vertical list for values */}
            <div className="lg:hidden">
              <div className="flex flex-col gap-6">
                {t('about.values').map((value: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="w-full bg-white rounded-2xl p-6 shadow-lg border-l-4 border-accent"
                  >
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {value.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
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
          <div className="mb-40">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Our Evolution</h2>
              <div className="hidden md:block w-1/3 h-[1px] bg-border mb-4" />
            </div>

            {/* Mobile: Vertical list for timeline */}
            <div className="md:hidden">
              <div className="flex flex-col gap-6 relative border-l-2 border-border/50 ml-4 pl-8 pb-8">
                {t('about.timeline').map((event: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-2 w-5 h-5 bg-accent rounded-full border-4 border-white shadow-sm z-10" />
                    <span className="text-4xl font-black text-accent/20 block mb-2">{event.year}</span>
                    <h4 className="text-lg font-bold mb-2">{event.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed bg-white p-4 rounded-xl shadow-sm border border-border/50">
                      {event.text}
                    </p>
                  </motion.div>
                ))}
              </div>
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

          {/* Team Section (NEW) */}
          <div className="mb-40">
            <div className="mb-12 md:mb-16">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">{t('about.team.tag')}</span>
              <h2 className="heading-lg">{t('about.team.title')}</h2>
            </div>

            {/* Mobile: Vertical list for team */}
            <div className="md:hidden">
              <div className="flex flex-col gap-8">
                {t('about.team.members').map((member: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="aspect-[4/5] bg-secondary rounded-2xl overflow-hidden mb-4 relative shadow-md">
                      <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="px-2 py-0.5 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest rounded-full">{member.exp}</span>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                    <span className="text-muted-foreground font-medium text-sm block mb-3">{member.role}</span>
                    <p className="text-xs text-muted-foreground line-clamp-3">{member.bio}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-12">
              {t('about.team.members').map((member: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="aspect-[4/5] bg-secondary rounded-2xl overflow-hidden mb-6 relative">
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest rounded-full">{member.exp}</span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-1">{member.name}</h4>
                  <span className="text-muted-foreground font-medium block mb-4">{member.role}</span>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div className="py-24 border-t border-border mt-32">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 opacity-50 grayscale">
              {t('about.awards.items').map((award: string, i: number) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <Award size={40} className="mb-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">{award}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-40 text-center bg-secondary rounded-3xl py-24 md:py-32 px-8"
          >
            <h2 className="heading-lg mb-10 max-w-3xl mx-auto">
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
