import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, BarChart3, Users, MapPin, FileText, Shield, ArrowRight, CheckCircle } from "lucide-react";
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
      {/* Hero Section - Fixed with dark gradient background */}
      <section className="w-full py-24 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900/50 to-blue-900/80 pt-20 md:pt-24 text-white">
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
              className="inline-block text-blue-400 text-sm font-medium uppercase tracking-widest mb-4"
            >
              Political Campaign Management
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
            >
              Winning Elections Is About <span className="text-blue-400">Trust</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
            >
              We provide complete political campaign management services including strategy, digital outreach, ground campaigns, branding, war-room operations, and voter engagement.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-lg"
              >
                Launch Your Campaign
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="w-full py-20 md:py-28 bg-white text-gray-900">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-blue-600">Political Services</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end solutions for winning campaigns at every level of government.
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
                whileHover={{ y: -8 }}
                className="p-6 md:p-8 border border-gray-200 hover:border-blue-300 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <service.icon size={28} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-20 md:py-28 bg-gray-900 text-white">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Why Leaders <span className="text-blue-400">Choose Us</span>
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                With years of experience in political campaign management, we understand the unique challenges of electoral politics and deliver strategies that win.
              </motion.p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                    >
                      <CheckCircle size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                    </motion.div>
                    <span className="text-lg group-hover:text-blue-400 transition-colors duration-300">
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
              transition={{ delay: 0.2, duration: 0.6 }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              {[
                { number: "50+", label: "Campaigns Managed", bgColor: "bg-gray-800 text-white" },
                { number: "85%", label: "Success Rate", bgColor: "bg-blue-600 text-white" },
                { number: "10+", label: "States Covered", bgColor: "bg-blue-600 text-white" },
                { number: "24/7", label: "War Room Support", bgColor: "bg-gray-800 text-white" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`p-6 md:p-8 rounded-2xl text-center font-bold shadow-xl hover:shadow-2xl transition-all duration-300 ${stat.bgColor}`}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-28 bg-white text-gray-900">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="text-blue-600">Win</span>?
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's discuss your campaign goals and create a winning strategy together.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl shadow-lg"
                >
                  Get Started
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.a
                href="https://wa.me/917447332829"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-gray-300 hover:border-blue-600 text-gray-900 hover:text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                WhatsApp Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Political;
