import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";

// Data
const serviceDetails = {
    "digital-marketing": {
        title: "Digital Marketing",
        tagline: "We Don’t Just Market Brands — We Build Digital Success Stories.",
        description: "In today’s fast-moving digital world, your brand needs more than just visibility; it needs strategy, creativity, and results. At Creative Mark Advertising, we help businesses grow online with data-driven digital marketing solutions that attract, engage, and convert the right audience.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
        subServices: [
            {
                title: "Social Media Marketing (SMM)",
                desc: "Build strong brand presence across platforms like Instagram, Facebook, LinkedIn & YouTube.",
                details: ["Content planning & calendar", "Creative posts, reels & video strategy", "Paid social media ads", "Community management", "Growth & engagement optimization"]
            },
            {
                title: "Search Engine Optimization (SEO)",
                desc: "Rank higher on Google. Get organic traffic that converts.",
                details: ["Keyword research & competitor analysis", "On-page & technical SEO", "Local SEO (Google My Business)", "Content optimization", "Monthly ranking & performance reports"]
            },
            {
                title: "Performance Marketing (Paid Ads)",
                desc: "Maximize ROI with highly targeted ad campaigns.",
                details: ["Google Ads (Search, Display, YouTube)", "Meta Ads (Facebook & Instagram)", "Lead generation campaigns", "Retargeting & conversion optimization", "Budget planning & ad scaling"]
            },
            {
                title: "Content Marketing",
                desc: "Content that speaks, sells, and builds trust.",
                details: ["Website content & landing pages", "Blog writing & SEO articles", "Brand storytelling", "Caption & copywriting", "Political & campaign content"]
            }
        ]
    },
    "advertising": {
        title: "Advertising",
        tagline: "We Create Ads That Don’t Just Appear — They Perform.",
        description: "In a competitive market, visibility alone is not enough. Your brand needs strategic advertising that reaches the right audience, at the right time, with the right message. We deliver impact-driven advertising solutions that increase brand recall, generate leads, and boost sales.",
        image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=2000",
        subServices: [
            {
                title: "Digital Advertising",
                desc: "Smart ads for modern audiences.",
                details: ["Google Search, Display & YouTube Ads", "Facebook & Instagram Advertising", "LinkedIn & Twitter Ads", "App promotion campaigns", "Retargeting & remarketing ads"]
            },
            {
                title: "Print Advertising",
                desc: "Strong offline presence that builds trust.",
                details: ["Newspaper advertisements", "Magazine ads", "Flyers, pamphlets & brochures", "Inserts & local print campaigns", "Creative layout & ad design"]
            },
            {
                title: "Outdoor Advertising (OOH)",
                desc: "Maximum visibility in high-traffic areas.",
                details: ["Hoardings & billboards", "Unipoles & kiosks", "Bus shelters & transit ads", "Wall paintings & street branding", "Location-based planning"]
            },
            {
                title: "Electronic Media Advertising",
                desc: "Mass reach with powerful impact.",
                details: ["Television advertising", "Radio commercials & jingles", "Cable TV promotions", "Regional channel campaigns", "Media buying & planning"]
            }
        ]
    },
    "branding": {
        title: "Branding",
        tagline: "We Don’t Just Create Brands — We Create Powerful Impressions.",
        description: "Your brand is more than a logo. It’s how people recognize you, trust you, and remember you. We craft strong, consistent, and meaningful brand identities that connect emotionally with your audience and stand out in crowded markets.",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=2000",
        subServices: [
            {
                title: "Brand Strategy & Positioning",
                desc: "Clear vision. Strong direction.",
                details: ["Brand discovery & research", "Brand positioning & messaging", "Target audience & market analysis", "Brand voice & tone development", "Long-term brand roadmap"]
            },
            {
                title: "Visual Identity Design",
                desc: "Make your brand instantly recognizable.",
                details: ["Logo design & rebranding", "Color palette & typography", "Brand style guide", "Business cards & stationery", "Social media brand kits"]
            },
            {
                title: "Brand Communication",
                desc: "Speak with clarity and confidence.",
                details: ["Brand storytelling", "Taglines & slogans", "Brand content & copywriting", "Website & campaign messaging", "Political & leadership branding"]
            },
            {
                title: "Rebranding & Refresh",
                desc: "Evolve without losing identity.",
                details: ["Brand audits", "Logo & identity refresh", "Messaging realignment", "Market repositioning", "Modern brand transformation"]
            }
        ]
    },
    "multimedia": {
        title: "Multimedia",
        tagline: "We Turn Ideas Into Powerful Visual Experiences.",
        description: "In today’s digital world, visual content speaks louder than words. We create high-impact multimedia solutions that engage audiences, strengthen branding, and deliver your message with clarity and emotion.",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=2000",
        subServices: [
            {
                title: "Video Production",
                desc: "Videos that connect, engage, and convert.",
                details: ["Brand & corporate videos", "Promotional & ad videos", "Political campaign videos", "Event coverage & highlights", "Documentary & storytelling videos"]
            },
            {
                title: "Video Editing & Post-Production",
                desc: "Polished visuals with professional finishing.",
                details: ["Professional video editing", "Color correction & grading", "Motion graphics & effects", "Subtitles & voice-overs", "Short-form & long-form edits"]
            },
            {
                title: "Motion Graphics & Animation",
                desc: "Creative visuals that simplify complex ideas.",
                details: ["2D & 3D animations", "Explainer videos", "Logo animation & intros", "Infographics & animated ads", "Political & awareness animations"]
            },
            {
                title: "Photography & Visual Content",
                desc: "Professional imagery that builds credibility.",
                details: ["Product & brand photography", "Event & campaign photography", "Corporate & profile shoots", "Social media photoshoots", "Creative & lifestyle photography"]
            }
        ]
    },
    "printing": {
        title: "Printing",
        tagline: "Printing That Makes Your Brand Tangible & Trustworthy.",
        description: "In a digital world, print still holds power. We deliver high-quality printing solutions that enhance brand credibility, strengthen visibility, and leave a lasting impression.",
        image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=2000",
        subServices: [
            {
                title: "Commercial Printing",
                desc: "Professional prints for business growth.",
                details: ["Business cards & visiting cards", "Letterheads & envelopes", "Brochures & catalogues", "Flyers & pamphlets", "Company profiles"]
            },
            {
                title: "Promotional Printing",
                desc: "Marketing materials that drive attention.",
                details: ["Posters & standees", "Banners & flex printing", "Danglers & tent cards", "Stickers & labels", "Promotional leaflets"]
            },
            {
                title: "Political & Campaign Printing",
                desc: "High-impact printing for mass outreach.",
                details: ["Election posters & banners", "Pamphlets & manifesto printing", "Booth-level materials", "Flags, caps & campaign merchandise", "Area-wise distribution support"]
            },
            {
                title: "Large Format & Custom",
                desc: "Prints tailored to your brand identity.",
                details: ["Custom designs & layouts", "Special finishes (lamination, UV, embossing)", "Large-format printing", "Eco-friendly printing options", "Vinyl branding"]
            }
        ]
    },
    "designing": {
        title: "Designing",
        tagline: "Design That Speaks Before You Do.",
        description: "Great design is not just about looks; it's about communication. We create stunning visuals for all mediums that caption attention and convey your message instantly.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
        subServices: [
            {
                title: "Graphic Design",
                desc: "Visuals that captivate.",
                details: ["Social media creatives", "Ad banners", "E-book design", "Infographics", "Newsletters"]
            },
            {
                title: "Website UI/UX",
                desc: "User-centric interface design.",
                details: ["Wireframing", "Prototyping", "Mobile-first layouts", "User journey mapping", "Landing page design"]
            },
            {
                title: "Editorial Design",
                desc: "Layouts for publications.",
                details: ["Magazines", "Annual reports", "Company profiles", "Catalogues", "Book covers"]
            }
        ]
    }
};

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = serviceDetails[id as keyof typeof serviceDetails];

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <Layout>
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/" className="btn-primary">Go Home</Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            {/* 1. Hero Section */}
            <section className="bg-background pt-32 pb-20 overflow-hidden">
                <div className="container-wide">
                    <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground mb-8 transition-colors">
                        <ArrowLeft size={16} /> BACK TO HOME
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-bold uppercase tracking-widest text-foreground mb-6">
                                Service Expertise
                            </div>
                            <h1 className="heading-xl mb-8 leading-[0.9]">{service.title}</h1>
                            <h2 className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-tight">
                                {service.tagline}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                                {service.description}
                            </p>
                            <div className="flex gap-4">
                                <Link to="/contact" className="btn-primary">
                                    Start Project
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Sub-Services Grid */}
            <section className="py-24 bg-secondary">
                <div className="container-wide">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="heading-lg mb-6">What We Deliver</h2>
                        <p className="text-muted-foreground text-lg">
                            Tailored solutions designed to achieve your specific goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {service.subServices.map((sub, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-xl border border-border hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6 text-xl font-bold group-hover:bg-accent transition-colors">
                                    {index + 1}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{sub.title}</h3>
                                <p className="text-muted-foreground mb-8 pb-8 border-b border-gray-100">
                                    {sub.desc}
                                </p>

                                <ul className="space-y-3">
                                    {sub.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-foreground/80">
                                            <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CTA */}
            <section className="py-32 bg-background border-t border-border">
                <div className="container-wide bg-black rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10">
                        <h2 className="heading-lg text-white mb-8">Ready to dominate with {service.title}?</h2>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-accent hover:text-white transition-all transform hover:scale-105">
                            Get Your Custom Strategy <ArrowUpRight />
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ServiceDetail;
