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
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const servicesData = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    slug: "digital-marketing",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
    description: "Comprehensive digital marketing solutions to grow your online presence.",
    subServices: [
      { name: "Social Media Marketing (SMM)", description: "Build strong brand presence across Instagram, Facebook, LinkedIn & YouTube" },
      { name: "Search Engine Optimization (SEO)", description: "Rank higher on Google. Get organic traffic that converts" },
      { name: "Performance Marketing (Paid Ads)", description: "Maximize ROI with highly targeted ad campaigns" },
      { name: "Content Marketing", description: "Content that speaks, sells, and builds trust" },
    ],
  },
  {
    icon: Palette,
    title: "Creative & Branding",
    slug: "creative-branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
    description: "Make your brand visually unforgettable.",
    subServices: [
      { name: "Logo & Brand Identity", description: "Professional logo and brand identity design" },
      { name: "Posters, Banners & Creatives", description: "High-impact visual creatives for marketing" },
      { name: "Video Editing & Reels", description: "Professional video content for social media" },
      { name: "Motion Graphics", description: "Animated graphics and visual effects" },
    ],
  },
  {
    icon: PenTool,
    title: "Website Design & Development",
    slug: "web-design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
    description: "Your website is your digital office — make it powerful.",
    subServices: [
      { name: "Business & Portfolio Websites", description: "Professional websites for your business" },
      { name: "Landing Pages for Ads", description: "High-converting landing pages" },
      { name: "Mobile-friendly & Fast Loading", description: "Responsive design for all devices" },
      { name: "SEO-optimized Structure", description: "Built for search engine visibility" },
    ],
  },
];

const ServiceSubItem = ({ service, index }: { service: typeof servicesData[0]["subServices"][0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="p-4 bg-gray-50 rounded-lg hover:bg-accent/10 cursor-pointer transition-all duration-300 group border border-gray-200 hover:border-accent"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 group-hover:text-accent transition-colors">
            {service.name}
          </h4>
          <p className="text-sm text-gray-600 mt-1">{service.description}</p>
        </div>
        <ChevronRight className="flex-shrink-0 text-gray-400 group-hover:text-accent transition-colors mt-1" size={20} />
      </div>
    </motion.div>
  );
};

const ServiceCategory = ({ service, index }: { service: typeof servicesData[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const ServiceIcon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className=""
    >
      {/* Main Service Card */}
      <div
        onClick={() => setExpanded(!expanded)}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
      >
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <ServiceIcon size={80} className="text-accent opacity-20" />
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
              {service.title}
            </h3>
            <motion.div
              animate={{ rotate: expanded ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight className="text-accent" size={24} />
            </motion.div>
          </div>
          <p className="text-gray-600 mb-4">{service.description}</p>
        </div>
      </div>

      {/* Sub Services */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={expanded ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="mt-4 space-y-3">
          {service.subServices.map((subService, idx) => (
            <ServiceSubItem key={subService.name} service={subService} index={idx} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Comprehensive <span className="text-accent">Solutions</span> for Your Success
            </motion.h1>
            <p className="text-base text-gray-400 text-lg">
              From advertising to political campaigns, we offer end-to-end services designed to elevate your brand and achieve measurable results. Click on any service to explore our detailed offerings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {servicesData.map((service, index) => (
              <ServiceCategory key={service.title} service={service} index={index} />
            ))}
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
