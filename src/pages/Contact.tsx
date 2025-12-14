import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9890976952",
    href: "tel:+919890976952",
  },
  {
    icon: Phone,
    label: "Alternate Phone",
    value: "+91 7447332829",
    href: "tel:+917447332829",
  },
  {
    icon: Mail,
    label: "Email",
    value: "creativemarkadvertising@gmail.com",
    href: "mailto:creativemarkadvertising@gmail.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 10:00 AM - 7:00 PM",
    href: null,
  },
];

const Contact = () => {
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
              Contact Us
            </span>
            <h1 className="heading-xl mb-6">
              Let's Work <span className="text-accent">Together</span>
            </h1>
            <p className="text-body text-xl">
              Have a project in mind? We'd love to hear about it. Get in touch with us today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-md mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-lg font-medium hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-lg font-medium">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-foreground text-primary-foreground p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3">Quick Response on WhatsApp</h3>
                <p className="text-primary-foreground/70 mb-6">
                  Get an instant response by messaging us on WhatsApp.
                </p>
                <a
                  href="https://wa.me/917447332829"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-[#25D366] text-white hover:bg-[#20BD5A] inline-flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  WhatsApp Now
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-secondary p-8 md:p-10 rounded-2xl">
                <h2 className="heading-md mb-6">Send a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="advertising">Advertising</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="branding">Branding</option>
                      <option value="designing">Designing</option>
                      <option value="multimedia">Multimedia</option>
                      <option value="printing">Printing</option>
                      <option value="political">Political Campaigns</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-pill-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="bg-secondary">
        <div className="container-wide py-8">
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <MapPin size={20} />
            <span>India | Serving clients nationwide</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
