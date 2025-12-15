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
    features: [
      "Visiting Cards",
      "Posters & Banners",
      "Corporate Printing",
      "Packaging Design",
    ],
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="heading-xl mb-6">
              Comprehensive <span className="text-accent">Solutions</span> for Your Success
            </h1>
            <p className="text-body text-xl">
              From advertising to political campaigns, we offer end-to-end services designed to elevate your brand and achieve measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-20">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-foreground text-primary-foreground flex items-center justify-center mb-6">
                    <service.icon size={32} />
                  </div>
                  <h2 className="heading-lg mb-4">{service.title}</h2>
                  <p className="text-body mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle size={20} className="text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-secondary rounded-3xl p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-square flex items-center justify-center">
                    <service.icon size={120} className="text-foreground/10" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Political CTA */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">
              Looking for <span className="text-accent">Political Campaign</span> Services?
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
              We specialize in complete political campaign management with proven strategies for winning elections.
            </p>
            <Link
              to="/political"
              className="btn-pill bg-accent text-accent-foreground hover:bg-primary-foreground hover:text-foreground inline-flex items-center gap-2"
            >
              Explore Political Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <SectionHeading
            title={<>Ready to Get <span className="text-accent">Started</span>?</>}
            description="Let's discuss how we can help you achieve your goals."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-pill-primary inline-flex items-center gap-2">
              Contact Us
              <ArrowRight size={18} />
            </Link>
            <Link to="/work" className="btn-pill-outline">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
