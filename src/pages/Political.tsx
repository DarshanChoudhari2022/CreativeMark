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
    description:
      "Comprehensive campaign planning and strategic positioning for electoral success.",
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
      {/* Hero Section – white like reference */}
      <section className="w-full py-24 md:py-32 pt-20 md:pt-24 bg-white text-black">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-xs font-semibold tracking-[0.25em] text-gray-500 mb-4 uppercase"
            >
              Advertising • Political Campaigns • Digital Marketing
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              Winning Elections.
              <br />
              Strategically{" "}
              <span className="text-red-600">Marked.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base md:text-lg text-gray-700 max-w-2xl mb-8 leading-relaxed"
            >
              We design political campaigns that move voters—from sharp positioning
              and messaging to digital, on‑ground, and war‑room execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-black text-white text-sm font-semibold tracking-wide hover:bg-gray-900 transition-all duration-200"
              >
                Let&apos;s Talk
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section – light cards, red accent */}
      <section className="w-full py-20 md:py-28 bg-white text-black border-t border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-3">
              Political Campaign Services
            </motion.h2>
            <motion.p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Strategy, communication, and execution tailored to your constituency.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {politicalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-6 md:p-7 border border-gray-200 rounded-2xl bg-white hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 text-black mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-red-600 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us – light grey band like agency site */}
      <section className="w-full py-20 md:py-28 bg-gray-50 text-black border-t border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Why leaders campaign with{" "}
                <span className="text-red-600">Creative Mark</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-7">
                From local elections to statewide campaigns, our team blends data,
                creativity, and ground intelligence to help you win decisively.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="mt-1 text-red-600" size={20} />
                    <span className="text-sm md:text-base text-gray-700">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              {[
                { number: "50+", label: "Campaigns Managed" },
                { number: "85%", label: "Win Ratio" },
                { number: "10+", label: "States Covered" },
                { number: "24/7", label: "War Room Support" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="p-5 md:p-6 rounded-2xl bg-white border border-gray-200 text-center shadow-sm"
                >
                  <div className="text-2xl md:text-3xl font-bold mb-1 text-black">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section – white, red/black CTAs */}
      <section className="w-full py-20 md:py-24 bg-white text-black border-t border-gray-200">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to plan your{" "}
              <span className="text-red-600">next victory</span>?
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Share your constituency and goals, and we&apos;ll map a campaign
              roadmap tailored to you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-black text-white text-sm font-semibold tracking-wide hover:bg-gray-900 transition-all duration-200"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.a
                whileHover={{ scale: 1.03 }}
                href="https://wa.me/917447332829"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-gray-300 text-sm font-semibold tracking-wide text-black hover:border-red-600 hover:text-red-600 transition-all duration-200"
              >
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Political;
