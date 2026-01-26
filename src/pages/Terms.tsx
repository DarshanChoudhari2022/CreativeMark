import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/context/LanguageContext";

const Terms = () => {
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
                        <h1 className="heading-xl mb-12">Terms of Service</h1>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/85 space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                                <p>
                                    By accessing our website at Creative Mark Advertising, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for coordination with any applicable local laws.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                                <p>
                                    Permission is granted to temporarily download one copy of the materials (information or software) on Creative Mark Advertising's website for personal, non-commercial transitory viewing only.
                                </p>
                                <p> This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Modify or copy the materials.</li>
                                    <li>Use the materials for any commercial purpose, or for any public display.</li>
                                    <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
                                    <li>Remove any copyright or other proprietary notations from the materials.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
                                <p>
                                    The materials on Creative Mark Advertising's website are provided on an 'as is' basis. Creative Mark Advertising makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
                                <p>
                                    In no event shall Creative Mark Advertising or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Creative Mark Advertising's website.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
                                <p>
                                    The materials appearing on Creative Mark Advertising's website could include technical, typographical, or photographic errors. Creative Mark Advertising does not warrant that any of the materials on its website are accurate, complete or current.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">6. Links</h2>
                                <p>
                                    Creative Mark Advertising has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Creative Mark Advertising of the site.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">7. Governing Law</h2>
                                <p>
                                    These terms and conditions are governed by and construed in accordance with the laws of Maharashtra, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
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

export default Terms;
