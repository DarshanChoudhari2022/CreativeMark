import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format message for WhatsApp
    const whatsappMessage = `*New Inquiry from Creative Mark Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Message:* ${formData.message}`;

    // Replace with your actual WhatsApp Number
    const whatsappNumber = "919021564567";
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  const contactInfo = [
    { icon: Phone, label: t('contact.info.phone_label'), value: "+91 90215 64567", href: "tel:+919021564567" },
    { icon: Mail, label: t('contact.info.email_label'), value: "creativemarkad@gmail.com", href: "mailto:creativemarkad@gmail.com" },
    { icon: MapPin, label: t('contact.info.address_label'), value: "Pune & Phaltan, Maharashtra", href: "#" }
  ];

  return (
    <Layout>
      <section className="bg-background min-h-screen pt-40 pb-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Info Column */}
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-accent font-bold tracking-widest uppercase text-sm mb-6 block"
              >
                {t('contact.tag')}
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-tight">
                {t('contact.title')}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-16 max-w-md">
                {t('contact.desc')}
              </p>

              <div className="space-y-10">
                {contactInfo.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1">{item.label}</span>
                      <span className="text-xl font-bold group-hover:text-accent transition-colors">{item.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full" />

              <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{t('contact.form.name')}</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-secondary border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-accent transition-all outline-none font-medium"
                      placeholder={t('contact.placeholders.name')}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-secondary border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-accent transition-all outline-none font-medium"
                      placeholder={t('contact.placeholders.email')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{t('contact.form.phone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-secondary border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-accent transition-all outline-none font-medium"
                      placeholder={t('contact.placeholders.phone')}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{t('contact.form.service')}</label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-secondary border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-accent transition-all outline-none font-medium appearance-none"
                    >
                      <option value="" disabled>{t('contact.placeholders.service')}</option>
                      {t('contact.services_opt').map((opt: string, i: number) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-secondary border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-accent transition-all outline-none font-medium resize-none"
                    placeholder={t('contact.placeholders.message')}
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary py-5 rounded-xl text-lg flex items-center justify-center gap-3 group">
                  {t('contact.form.btn')}
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
