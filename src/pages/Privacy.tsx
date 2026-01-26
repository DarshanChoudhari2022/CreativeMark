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
                        <h1 className="heading-xl mb-12">Privacy Policy</h1>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/85 space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                                <p>
                                    Welcome to Creative Mark Advertising ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at creativemarkadvertising@gmail.com.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                                <p>
                                    We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the website or otherwise contacting us.
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Name and Contact Data (Phone number, email address, mailing address).</li>
                                    <li>Business Information (Company name, service interest).</li>
                                    <li>Any other information you choose to provide via our contact forms.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                                <p>
                                    We use personal information collected via our website for a variety of business purposes, including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>To facilitate account creation and logon process.</li>
                                    <li>To send administrative information to you.</li>
                                    <li>To fulfill and manage your requests.</li>
                                    <li>To post testimonials (with your consent).</li>
                                    <li>To protect our Services.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">4. Sharing Your Information</h2>
                                <p>
                                    We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                                <p>
                                    We aim to protect your personal information through a system of organizational and technical security measures. However, please remember that we cannot guarantee that the internet itself is 100% secure.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">6. Updates to This Policy</h2>
                                <p>
                                    We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
                                </p>
                            </section>

                            <p className="mt-12 text-sm italic">
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
