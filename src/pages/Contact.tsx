import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
    const whatsappNumber = "917447332829";
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  const contactInfo = [
    { icon: Phone, label: t('contact.info.call') || "Phone", value: "+91 74473 32829", href: "tel:+917447332829" },
    { icon: Mail, label: t('contact.info.email') || "Email", value: "creativemarkadvertising@gmail.com", href: "mailto:creativemarkadvertising@gmail.com" },
    { icon: MapPin, label: t('contact.info.visit') || "Address", value: t('footer.address'), href: "#" }
  ];

  // Robust way to get options: hardcode keys or try to extract from valid object
  // Since we know the keys in translation, let's use them directly to avoid map errors on objects
  const serviceKeys = ['digital', 'advertising', 'political', 'branding', 'multimedia', 'website', 'other'];

  return (
    <Layout>
      <section className="bg-background min-h-screen pt-28 md:pt-40 pb-12 md:pb-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
            {/* Info Column */}
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-accent font-bold tracking-widest uppercase text-sm mb-6 block"
              >
                {t('contact.tag')}
              </motion.span>
              <h1 className="heading-xl mb-8 md:mb-10 tracking-tight">
                {t('contact.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 md:mb-16 max-w-md">
                {t('contact.desc')}
              </p>

              <div className="space-y-8 md:space-y-10">
                {contactInfo.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 md:gap-6 group min-h-[48px]"
                  >
                    <div className="w-14 h-14 md:w-14 md:h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1">{item.label}</span>
                      <span className="text-lg md:text-xl font-bold group-hover:text-accent transition-colors break-all">{item.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 border border-border shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full" />

              <form className="space-y-6 md:space-y-8 relative z-10" onSubmit={handleSubmit}>
                {/* Mobile: Single Column, Desktop: 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{t('contact.form.name')}</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-secondary border-none rounded-xl px-4 md:px-6 py-4 min-h-[48px] focus:ring-2 focus:ring-accent transition-all outline-none font-medium text-base"
                      placeholder={t('contact.form.placeholders.name') || "Your Name"}
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
                      className="w-full bg-secondary border-none rounded-xl px-4 md:px-6 py-4 min-h-[48px] focus:ring-2 focus:ring-accent transition-all outline-none font-medium text-base"
                      placeholder={t('contact.form.placeholders.email') || "your@email.com"}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{t('contact.form.phone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-secondary border-none rounded-xl px-4 md:px-6 py-4 min-h-[48px] focus:ring-2 focus:ring-accent transition-all outline-none font-medium text-base"
                      placeholder={t('contact.form.placeholders.phone') || "+91 9999999999"}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{t('contact.form.service')}</label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-secondary border-none rounded-xl px-4 md:px-6 py-4 min-h-[48px] focus:ring-2 focus:ring-accent transition-all outline-none font-medium appearance-none text-base"
                    >
                      <option value="" disabled>{t('contact.form.services_opt.default') || "Select Service Interest"}</option>
                      {serviceKeys.map((key) => (
                        <option key={key} value={t(`contact.form.services_opt.${key}`)}>
                          {t(`contact.form.services_opt.${key}`)}
                        </option>
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
                    className="w-full bg-secondary border-none rounded-xl px-4 md:px-6 py-4 focus:ring-2 focus:ring-accent transition-all outline-none font-medium resize-none text-base"
                    placeholder={t('contact.form.placeholders.message') || "Tell us about your project..."}
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary py-5 min-h-[56px] rounded-xl text-base md:text-lg flex items-center justify-center gap-3 group">
                  {t('contact.form.submit')}
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
