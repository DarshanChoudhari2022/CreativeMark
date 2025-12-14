import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import logoIcon from "@/assets/logo-icon.png";

const values = [
  {
    icon: Target,
    title: "Strategic Focus",
    description: "Every project begins with understanding your goals and crafting a strategy to achieve them.",
  },
  {
    icon: Eye,
    title: "Clarity & Transparency",
    description: "Clear communication and transparent processes at every stage of the project.",
  },
  {
    icon: Heart,
    title: "Commitment to Excellence",
    description: "We're dedicated to delivering exceptional results that exceed expectations.",
  },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="heading-xl mb-6">
              Building Brands. <span className="text-accent">Shaping Leadership.</span>
            </h1>
            <p className="text-body text-xl">
              Creative Mark is a creative and strategic agency delivering advertising, branding, digital marketing, and political communication services. Our focus is clarity, consistency, and measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg mb-6">
                Our <span className="text-accent">Story</span>
              </h2>
              <div className="space-y-4 text-body">
                <p>
                  Creative Mark was founded with a simple mission: to help businesses and leaders communicate their vision with clarity and impact.
                </p>
                <p>
                  Over the years, we have grown into a full-service agency offering comprehensive advertising, branding, digital marketing, and political campaign management services.
                </p>
                <p>
                  Our team combines creative thinking with strategic expertise to deliver campaigns that resonate with audiences and achieve measurable results.
                </p>
                <p>
                  Today, we serve clients across India, from growing businesses to established brands and political leaders seeking to connect with their constituents.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 bg-secondary rounded-full flex items-center justify-center">
                <img src={logoIcon} alt="Creative Mark" className="w-40 h-40" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">
              Our <span className="text-accent">Values</span>
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-8 rounded-2xl text-center"
              >
                <div className="w-16 h-16 rounded-full bg-foreground text-primary-foreground flex items-center justify-center mx-auto mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years of Experience" },
              { number: "500+", label: "Projects Delivered" },
              { number: "50+", label: "Political Campaigns" },
              { number: "100+", label: "Happy Clients" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">
              Let's Work <span className="text-accent">Together</span>
            </h2>
            <p className="text-body max-w-xl mx-auto mb-10">
              Ready to start your project? We'd love to hear from you.
            </p>
            <Link to="/contact" className="btn-pill-primary inline-flex items-center gap-2">
              Get In Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
