import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  BarChart3,
  Users,
  MapPin,
  FileText,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

const politicalServices = [
  {
    icon: Target,
    title: "Campaign Strategy",
    description: "Comprehensive campaign planning and strategic positioning for electoral success.",
  },
  {
    icon: BarChart3,
    title: "War Room & Analytics",
    description: "Real-time monitoring, data analysis, and rapid response systems.",
  },
  {
    icon: Users,
    title: "Social Media & Digital Outreach",
    description: "Targeted digital campaigns to reach and engage voters effectively.",
  },
  {
    icon: MapPin,
    title: "Ground Campaign Planning",
    description: "Voter outreach, rally organization, and grassroots mobilization.",
  },
  {
    icon: FileText,
    title: "Content & Speech Writing",
    description: "Compelling messaging, speeches, and communication materials.",
  },
  {
    icon: Shield,
    title: "Crisis Management",
    description: "Rapid response strategies and reputation management during crises.",
  },
];

const benefits = [
  "Proven track record with 50+ successful campaigns",
  "Data-driven strategy and real-time analytics",
  "Expert team of campaign strategists and consultants",
  "Complete end-to-end campaign management",
  "Digital-first approach with ground presence",
  "24/7 war room operations during elections",
];

const Political = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-foreground text-primary-foreground">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Political Campaign Management
            </span>
            <h1 className="heading-xl mb-6">
              Winning Elections Is About <span className="text-accent">Trust</span>
            </h1>
            <p className="text-primary-foreground/70 text-xl mb-10">
              We provide complete political campaign management services including strategy, digital outreach, ground campaigns, branding, war-room operations, and voter engagement.
            </p>
            <Link
              to="/contact"
              className="btn-pill bg-accent text-accent-foreground hover:bg-primary-foreground hover:text-foreground inline-flex items-center gap-2"
            >
              Launch Your Campaign
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">
              Our <span className="text-accent">Political Services</span>
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              End-to-end solutions for winning campaigns at every level of government.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {politicalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-border rounded-2xl hover:border-accent hover:shadow-lg transition-all duration-300 group hover:scale-105"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300 transform group-hover:scale-110">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg mb-8">
                Why Leaders <span className="text-accent">Choose Us</span>
              </h2>
              <p className="text-body mb-10 leading-relaxed">
                With years of experience in political campaign management, we understand the unique challenges of electoral politics and deliver strategies that win.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <CheckCircle
                      size={24}
                      className="text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-lg group-hover:text-accent transition-colors duration-300">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-foreground text-primary-foreground p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl font-bold mb-2 text-accent">50+</div>
                <div className="text-sm text-primary-foreground/70">Campaigns Managed</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-accent text-accent-foreground p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl font-bold mb-2">85%</div>
                <div className="text-sm text-accent-foreground/70">Success Rate</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-accent text-accent-foreground p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl font-bold mb-2">10+</div>
                <div className="text-sm text-accent-foreground/70">States Covered</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-foreground text-primary-foreground p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl font-bold mb-2 text-accent">24/7</div>
                <div className="text-sm text-primary-foreground/70">War Room Support</div>
              </motion.div>
            </motion.div>
          </div>
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
              Ready to <span className="text-accent">Win</span>?
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
              Let's discuss your campaign goals and create a winning strategy together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-pill bg-accent text-accent-foreground hover:bg-primary-foreground hover:text-foreground inline-flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/917447332829"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-all duration-300 hover:shadow-lg"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Political;
