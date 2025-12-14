import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const portfolioItems = [
  {
    category: "Branding",
    projects: [
      { title: "Corporate Identity Design", description: "Complete visual identity for a leading manufacturing company", type: "Branding" },
      { title: "Restaurant Brand Launch", description: "Logo, packaging, and menu design for a new restaurant chain", type: "Branding" },
      { title: "Healthcare Brand Refresh", description: "Modernizing the visual identity of a hospital network", type: "Branding" },
    ],
  },
  {
    category: "Digital Campaigns",
    projects: [
      { title: "E-commerce Growth Campaign", description: "300% increase in online sales through targeted ads", type: "Digital Marketing" },
      { title: "Real Estate Lead Generation", description: "Generated 1000+ qualified leads in 3 months", type: "Digital Marketing" },
      { title: "App Launch Campaign", description: "50,000+ downloads in the first month", type: "Digital Marketing" },
    ],
  },
  {
    category: "Advertising",
    projects: [
      { title: "Outdoor Billboard Campaign", description: "City-wide visibility for a new product launch", type: "Advertising" },
      { title: "Festival Season Campaign", description: "Multi-platform advertising for retail client", type: "Advertising" },
      { title: "Corporate Event Promotion", description: "Complete event marketing and collateral", type: "Advertising" },
    ],
  },
  {
    category: "Political Campaigns",
    projects: [
      { title: "State Election Campaign", description: "Complete campaign management for state elections", type: "Political" },
      { title: "Municipal Campaign", description: "Ground campaign and digital strategy", type: "Political" },
      { title: "Leadership Branding", description: "Personal brand building for political leaders", type: "Political" },
    ],
  },
];

const Work = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Our Portfolio
            </span>
            <h1 className="heading-xl mb-6">
              Our Work <span className="text-accent">Speaks</span>
            </h1>
            <p className="text-body text-xl">
              Explore our portfolio of successful projects across branding, digital marketing, advertising, and political campaigns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="section-padding">
        <div className="container-wide space-y-24">
          {portfolioItems.map((section, sectionIndex) => (
            <div key={section.category}>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="heading-md mb-8 flex items-center gap-3"
              >
                <span className="text-accent">0{sectionIndex + 1}</span>
                {section.category}
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.projects.map((project, projectIndex) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
                    className="group bg-secondary rounded-2xl overflow-hidden card-hover"
                  >
                    <div className="aspect-[4/3] bg-foreground/5 flex items-center justify-center">
                      <span className="text-6xl font-bold text-foreground/10">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">
                        {project.type}
                      </span>
                      <h3 className="font-semibold text-lg mt-2 mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">
              Let's Create Your <span className="text-accent">Success Story</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
              Ready to start your project? We'd love to hear about your goals and how we can help achieve them.
            </p>
            <Link
              to="/contact"
              className="btn-pill bg-accent text-accent-foreground hover:bg-primary-foreground hover:text-foreground inline-flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
