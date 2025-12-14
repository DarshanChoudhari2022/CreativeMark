import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Megaphone, Globe, Palette, PenTool, Video, Printer, Vote } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  { icon: Megaphone, title: "Advertising", description: "Print, outdoor, and campaign advertising solutions" },
  { icon: Globe, title: "Digital Marketing", description: "Social media, SEO, and paid advertising" },
  { icon: Palette, title: "Branding", description: "Complete visual identity and brand strategy" },
  { icon: PenTool, title: "Designing", description: "Logos, creatives, and marketing materials" },
  { icon: Video, title: "Multimedia", description: "Video production and motion graphics" },
  { icon: Printer, title: "Printing", description: "High-quality print solutions" },
  { icon: Vote, title: "Political Campaigns", description: "End-to-end campaign management" },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="container-wide">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                 Advertising • Branding • Political Campaigns •Digital Marketing •Multimedia
              </span>
            </motion.div>

            <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="heading-xl mb-6"
>
  Your Growth. Our Creative Power.
  <br />
  <span className="text-accent">Victory, Creatively Marked.</span>
</motion.h1>

            <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="text-body-sm text-lg max-w-2xl mb-10 text-gray-600" // Added text-gray-600 for hierarchy
>
  At Creative Mark Advertising, we don't just offer digital marketing services—
  we create strategies that drive results! Whether you're looking to build your
  online presence, increase website traffic, or boost sales, our expert team is
  here to help you succeed.
</motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn-pill-primary inline-flex items-center gap-2">
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/917447332829"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-outline"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">
                Creative Mark – Your Strategic <span className="text-accent">Partner</span>
              </h2>
              <p className="text-body mb-6">
                Creative Mark is a full-service advertising and digital marketing agency specializing in branding, multimedia, printing, and political campaign management. We deliver end-to-end solutions for businesses, leaders, and organizations across India.
              </p>
              <p className="text-body mb-8">
                Our team combines creativity with strategic thinking to craft campaigns that resonate, influence, and deliver measurable results.
              </p>
              <Link to="/about" className="btn-pill-outline inline-flex items-center gap-2">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-foreground text-primary-foreground p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-sm text-primary-foreground/70">Years Experience</div>
              </div>
              <div className="bg-accent text-accent-foreground p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm text-accent-foreground/70">Projects Completed</div>
              </div>
              <div className="bg-accent text-accent-foreground p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm text-accent-foreground/70">Political Campaigns</div>
              </div>
              <div className="bg-foreground text-primary-foreground p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-primary-foreground/70">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What We Do"
            title={<>Our <span className="text-accent">Services</span></>}
            description="Comprehensive advertising, branding, and campaign solutions tailored to your goals."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-pill-primary inline-flex items-center gap-2">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Political CTA Section */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Political Campaign Management
            </span>
            <h2 className="heading-lg mb-6 max-w-3xl mx-auto">
              Winning Elections Is About <span className="text-accent">Trust</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
              We provide complete political campaign management services including strategy, digital outreach, ground campaigns, branding, war-room operations, and voter engagement.
            </p>
            <Link
              to="/political"
              className="btn-pill bg-accent text-accent-foreground hover:bg-primary-foreground hover:text-foreground inline-flex items-center gap-2"
            >
              Launch Your Campaign
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-6">
              Ready to <span className="text-accent">Start</span>?
            </h2>
            <p className="text-body max-w-xl mx-auto mb-10">
              Let's discuss your project and create something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-pill-primary inline-flex items-center gap-2">
                Get In Touch
                <ArrowRight size={18} />
              </Link>
              <Link to="/work" className="btn-pill-outline">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
