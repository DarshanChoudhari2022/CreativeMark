import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Megaphone,
  Globe,
  Palette,
  PenTool,
  Video,
  Printer,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const servicesData = [
  {
    icon: Megaphone,
    title: "Advertising",
    description: "Strategic advertising campaigns that capture attention and drive results.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e9e5e1c2?w=400&h=400&fit=crop",
    features: [
      "Print & Outdoor Advertising",
      "Hoardings, Banners, Flex",
      "Campaign Planning & Execution",
      "Media Buying & Placement",
    ],
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Data-driven digital strategies to grow your online presence.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
    features: [
      "Social Media Management",
      "Paid Ads (Meta & Google)",
      "SEO & Lead Generation",
      "Email Marketing Campaigns",
    ],
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Create a powerful brand identity that resonates with your audience.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
    features: [
      "Business Branding",
      "Product Branding",
      "Visual Identity Design",
      "Brand Strategy & Guidelines",
    ],
  },
  {
    icon: PenTool,
    title: "Designing",
    description: "Creative designs that communicate your message effectively.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
    features: [
      "Logo Design",
      "Brochures & Flyers",
      "Ad Creatives",
      "Social Media Graphics",
    ],
  },
  {
    icon: Video,
    title: "Multimedia",
    description: "Engaging video content that tells your story.",
    image: "https://images.unsplash.com/photo-1533050487297-3b1ce256679c?w=400&h=400&fit=crop",
    features: [
      "Video Editing & Production",
      "Promotional Videos",
      "Reels & Motion Graphics",
      "Documentary Production",
    ],
  },
  {
    icon: Printer,
    title: "Printing",
    description: "High-quality printing solutions for all your business needs.",
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=400&fit=crop",
    features: [
      "Visiting Cards",
      "Posters & Banners",
      "Corporate Printing",
      "Packaging Design",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const headingVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-3">
              Our Services
            </span>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              Comprehensive <span className="text-accent">Solutions</span> for Your Success
            </motion.h1>
            <p className="text-base text-gray-400 text-lg">
              From advertising to political campaigns, we offer end-to-end services designed to elevate your brand and achieve measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {servicesData.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <Link
                    to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block h-full cursor-pointer"
                  >
                    <div className="bg-gray-900 rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300">
                      {/* Image Section */}
                      <div className="relative h-40 overflow-hidden bg-secondary">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                      </div>

                      {/* Content Section */}
                      <div className="p-5 flex-1 flex flex-col">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-lg bg-accent/20 text-accent flex items-center justify-center mb-3 flex-shrink-0">
                          <ServiceIcon size={24} />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-400 mb-4 flex-grow">
                          {service.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-2">
                          {service.features.slice(0, 2).map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-xs text-gray-300"
                            >
                              <CheckCircle
                                size={16}
                                className="text-accent flex-shrink-0 mt-0.5"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* View More */}
                        <div className="flex items-center gap-2 text-accent text-sm font-semibold mt-4 pt-4 border-t border-gray-800 group-hover:gap-3 transition-all">
                          View More <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Political CTA */}
      <section className="py-16 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Looking for <span className="text-accent">Political Campaign</span> Services?
            </h2>
            <p className="text-gray-300 text-base max-w-2xl mx-auto mb-8">
              We specialize in complete political campaign management with proven strategies for winning elections.
            </p>
            <Link
              to="/political"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full hover:bg-primary-foreground hover:text-foreground transition-all duration-300 font-semibold"
            >
              Explore Political Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Ready to Get <span className="text-accent">Started</span>?
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto mb-8">
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-all duration-300 font-semibold"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-accent text-accent rounded-full hover:bg-accent/10 transition-all duration-300 font-semibold"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
