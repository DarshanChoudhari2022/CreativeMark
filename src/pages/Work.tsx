import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/context/LanguageContext";

const Work = () => {
  const { t } = useLanguage();

  const projects = t('work.items');

  return (
    <Layout>
      <section className="bg-background min-h-screen pt-40 pb-20">
        <div className="container-wide">
          <div className="max-w-4xl mb-20">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              {t('work.tag')}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="heading-xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
            >
              {t('work.title')}
            </motion.h1>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
            {projects.map((project: any, i: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8 bg-secondary">
                  <img
                    src={`https://images.unsplash.com/photo-${i === 0 ? '1460925895917-afdab827c52f' : i === 1 ? '1573167101669-476636b96cea' : i === 2 ? '1542601906990-b4d3fb778b09' : i === 3 ? '1551288049-bebda4e38f71' : i === 4 ? '1560518883-ce09059eeffa' : '1504868584819-f8e90526354c'}?auto=format&fit=crop&q=80&w=1200`}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-accent font-bold text-xs uppercase tracking-widest mb-2 block">
                        {project.client} / {project.category}
                      </span>
                      <h3 className="text-3xl font-bold group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 transform group-hover:-translate-y-1 group-hover:rotate-12">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  {/* Project Results Display (From Audit) */}
                  <div className="flex gap-6 mt-2 pt-6 border-t border-border/50">
                    {project.results.map((result: string, idx: number) => (
                      <div key={idx}>
                        <span className="block text-2xl font-bold text-foreground">{result.split(' ')[0]}</span>
                        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">{result.split(' ').slice(1).join(' ')}</span>
                      </div>
                    ))}
                  </div>

                  <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors mt-4">
                    {t('work.view_case')}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-40 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-10">
              {t('work.cta')}
            </h2>
            <Link to="/contact" className="btn-primary px-12 py-5 text-lg">
              {t('header.contact')}
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
