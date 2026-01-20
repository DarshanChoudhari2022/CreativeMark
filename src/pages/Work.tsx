import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

const projects = [
  { id: "01", client: "TechFlow", category: "Branding", title: "Corporate Identity Refresh", results: ["40% Brand Recall", "25% Rev Growth"] },
  { id: "02", client: "City Council", category: "Political", title: "Election Victory Campaign", results: ["15% Voter Swing", "Won by 12k Votes"] },
  { id: "03", client: "GreenEarth", category: "Digital", title: "Sustainability Awareness", results: ["2M+ Reach", "150% Engagement"] },
  { id: "04", client: "SpiceRoute", category: "Advertising", title: "Product Launch Strategy", results: ["Sold Out in 3 Days", "10x ROAS"] },
  { id: "05", client: "UrbanHomes", category: "Web Design", title: "Real Estate Portal", results: ["300% Lead Gen", "40% Bounce Rate Drop"] },
  { id: "06", client: "HealthPlus", category: "Multimedia", title: "Patient Care Video Series", results: ["500k Views", "Trust Score Incr."] }
];

const Work = () => {
  return (
    <Layout>
      <section className="bg-background min-h-screen pt-32 pb-20">
        <div className="container-wide">
          <div className="mb-20">
            <span className="text-muted-foreground font-bold tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
            <h1 className="heading-xl mb-6">Success Stories That Shaped Industries</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-secondary rounded-lg mb-6 overflow-hidden border border-border relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="btn-primary py-3 px-6 text-xs">View Case Study</span>
                  </div>
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground/20 font-bold text-9xl select-none">
                    {project.id}
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 border border-border rounded text-muted-foreground">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:underline decoration-2 underline-offset-4 decoration-accent transition-all">
                      {project.title}
                    </h3>
                    <div className="flex gap-4 mt-3">
                      {project.results.map((res, i) => (
                        <div key={i} className="text-xs font-bold bg-secondary px-2 py-1 rounded text-foreground/80">
                          {res}
                        </div>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 text-center">
            <Link to="/contact" className="btn-secondary">
              Let's Create Your Success Story
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
