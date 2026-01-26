import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/context/LanguageContext";

const Privacy = () => {
    const { t } = useLanguage();

    return (
        <Layout>
            <section className="bg-background min-h-screen pt-32 pb-20">
                <div className="container-wide max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="space-y-12">
                            <div className="relative">
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-foreground">Privacy Policy</h1>
                                <div className="w-20 h-1.5 bg-accent rounded-full mb-12" />
                            </div>

                            <div className="grid gap-8">
                                <section className="card-minimal border-l-4 border-l-accent">
                                    <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                                    <p className="text-foreground/85 leading-relaxed">
                                        Welcome to Creative Mark Advertising ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at creativemarkadvertising@gmail.com.
                                    </p>
                                </section>

                                <section className="card-minimal">
                                    <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                                    <p className="text-foreground/85 mb-4">
                                        We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services.
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-4">
                                        <li className="flex items-center gap-3 bg-secondary/30 p-3 rounded-lg text-sm font-medium">
                                            <div className="w-2 h-2 rounded-full bg-accent" />
                                            Name and Contact Data
                                        </li>
                                        <li className="flex items-center gap-3 bg-secondary/30 p-3 rounded-lg text-sm font-medium">
                                            <div className="w-2 h-2 rounded-full bg-accent" />
                                            Business Information
                                        </li>
                                        <li className="flex items-center gap-3 bg-secondary/30 p-3 rounded-lg text-sm font-medium">
                                            <div className="w-2 h-2 rounded-full bg-accent" />
                                            Contact Form Data
                                        </li>
                                    </ul>
                                </section>

                                <section className="card-minimal">
                                    <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                                    <div className="space-y-4">
                                        {[
                                            "To facilitate account creation and logon process.",
                                            "To send administrative information to you.",
                                            "To fulfill and manage your requests.",
                                            "To post testimonials (with your consent).",
                                            "To protect our Services."
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                                <p className="text-foreground/85 text-sm">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section className="card-minimal">
                                    <h2 className="text-2xl font-bold text-foreground mb-4">4. Sharing Your Information</h2>
                                    <p className="text-foreground/85 leading-relaxed">
                                        We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                                    </p>
                                </section>

                                <section className="card-minimal">
                                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                                    <p className="text-foreground/85 leading-relaxed">
                                        We aim to protect your personal information through a system of organizational and technical security measures. However, no electronic transmission over the internet can be guaranteed to be 100% secure.
                                    </p>
                                </section>
                            </div>

                            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground pt-8 border-t border-border">
                                Last updated: January 26, 2026
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default Privacy;
