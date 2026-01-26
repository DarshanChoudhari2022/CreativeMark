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
                        <div className="space-y-12">
                            <div className="relative">
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-foreground">Terms of Service</h1>
                                <div className="w-20 h-1.5 bg-accent rounded-full mb-12" />
                            </div>

                            <div className="grid gap-8">
                                <section className="card-minimal border-l-4 border-l-accent">
                                    <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                                    <p className="text-foreground/85 leading-relaxed">
                                        By accessing our website at Creative Mark Advertising, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                                    </p>
                                </section>

                                <section className="card-minimal">
                                    <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                                    <p className="text-foreground/85 mb-6">
                                        Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only. Under this license you may not:
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            "Modify or copy the materials",
                                            "Use for commercial purposes",
                                            "Reverse engineer any software",
                                            "Remove copyright notations"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 bg-secondary/30 p-3 rounded-lg text-sm font-medium">
                                                <div className="w-2 h-2 rounded-full bg-accent" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section className="card-minimal">
                                    <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
                                    <p className="text-foreground/85 leading-relaxed">
                                        The materials on Creative Mark Advertising's website are provided on an 'as is' basis. Creative Mark Advertising makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
                                    </p>
                                </section>

                                <section className="card-minimal">
                                    <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
                                    <p className="text-foreground/85 leading-relaxed">
                                        In no event shall Creative Mark Advertising or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials.
                                    </p>
                                </section>

                                <section className="card-minimal">
                                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Governing Law</h2>
                                    <p className="text-foreground/85 leading-relaxed">
                                        These terms and conditions are governed by and construed in accordance with the laws of Maharashtra, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
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

export default Terms;
