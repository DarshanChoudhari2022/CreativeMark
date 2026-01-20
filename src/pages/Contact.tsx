import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    service: "Select Your Service Interest",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, service, message } = formData;

    // Construct WhatsApp Message
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Service:* ${service}%0A*Message:* ${message}`;

    const whatsappUrl = `https://wa.me/917447332829?text=${text}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      <section className="bg-background min-h-screen pt-32 pb-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Left Info */}
            <div>
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
              <h1 className="heading-xl mb-8">Let's Create Magic!</h1>
              <p className="text-xl text-muted-foreground mb-12">
                Ready to dominate your market or win your next election? We are ready to work.
              </p>

              <div className="space-y-12">
                <div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">Call Us</span>
                  <a href="tel:+919890976952" className="text-2xl font-bold hover:text-accent transition-colors block">+91 9890976952</a>
                  <a href="tel:+917447332829" className="text-2xl font-bold hover:text-accent transition-colors block mt-1">+91 7447332829</a>
                </div>

                <div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">Email Us</span>
                  <a href="mailto:creativemarkadvertising@gmail.com" className="text-2xl font-bold hover:text-accent transition-colors block">creativemarkadvertising@gmail.com</a>
                </div>

                <div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">Visit Us</span>
                  <p className="text-2xl font-bold">Pune, India</p>
                  <p className="text-muted-foreground text-lg">Serving clients nationwide</p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-secondary p-8 md:p-16 rounded-lg border border-border">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Name</label>
                    <input
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      className="w-full bg-white border border-border rounded-lg px-4 py-4 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Phone</label>
                    <input
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      className="w-full bg-white border border-border rounded-lg px-4 py-4 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                      placeholder="+91 - 10 digit number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full bg-white border border-border rounded-lg px-4 py-4 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white border border-border rounded-lg px-4 py-4 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none appearance-none"
                  >
                    <option disabled>Select Your Service Interest</option>
                    <option>Digital Marketing</option>
                    <option>Advertising</option>
                    <option>Political Campaign</option>
                    <option>Branding</option>
                    <option>Printing</option>
                    <option>Multimedia</option>
                    <option>Website Design</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Message</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white border border-border rounded-lg px-4 py-4 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us about your project requirements, timeline & budget..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary py-5 text-lg shadow-lg hover:shadow-xl">
                  Get Your Winning Strategy
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
