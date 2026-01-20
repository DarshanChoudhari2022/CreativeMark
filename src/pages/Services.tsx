import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Check, Disc, Circle } from "lucide-react";
import Layout from "@/components/layout/Layout";

// Full Content Data
const servicesData = [
  {
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    introTitle: "We Don’t Just Market Brands — We Build Digital Success Stories.",
    introText: "We transform online visibility into measurable growth through data-driven campaigns that attract, engage, and convert your ideal audience. At Creative Mark Advertising, we help businesses grow online with data-driven digital marketing solutions.",
    items: [
      {
        title: "Social Media Marketing (SMM)",
        desc: "Build strong brand presence across platforms like Instagram, Facebook, LinkedIn & YouTube.",
        details: [
          "Content planning & calendar",
          "Creative posts, reels & video strategy",
          "Paid social media ads",
          "Community management",
          "Growth & engagement optimization"
        ]
      },
      {
        title: "Search Engine Optimization (SEO)",
        desc: "Rank higher on Google. Get organic traffic that converts.",
        details: [
          "Keyword research & competitor analysis",
          "On-page & technical SEO",
          "Local SEO (Google My Business)",
          "Content optimization",
          "Monthly ranking & performance reports"
        ]
      },
      {
        title: "Performance Marketing (Paid Ads)",
        desc: "Maximize ROI with hyper-targeted ad campaigns backed by real-time analytics and A/B testing.",
        details: [
          "Google Ads (Search, Display, YouTube)",
          "Meta Ads (Facebook & Instagram)",
          "Lead generation campaigns",
          "Retargeting & conversion optimization",
          "Budget planning & ad scaling"
        ]
      },
      {
        title: "Content Marketing",
        desc: "Content that speaks, sells, and builds trust.",
        details: [
          "Website content & landing pages",
          "Blog writing & SEO articles",
          "Brand storytelling",
          "Caption & copywriting",
          "Political & campaign content (if applicable)"
        ]
      },
      {
        title: "Creative & Branding",
        desc: "Make your brand visually unforgettable.",
        details: [
          "Logo & brand identity",
          "Posters, banners & creatives",
          "Video editing & reels",
          "Motion graphics",
          "Ad creatives that convert"
        ]
      },
      {
        title: "Website Design & Development",
        desc: "Your website is your digital office — make it powerful.",
        details: [
          "Business & portfolio websites",
          "Landing pages for ads",
          "Mobile-friendly & fast loading",
          "SEO-optimized structure",
          "Conversion-focused design"
        ]
      }
    ]
  },
  {
    category: "Advertising",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800",
    introTitle: "We Create Ads That Don’t Just Appear — They Perform.",
    introText: "In a competitive market, visibility alone is not enough. Your brand needs strategic advertising that reaches the right audience, at the right time, with the right message. At Creative Mark Advertising, we deliver impact-driven advertising solutions that increase brand recall, generate leads, and boost sales.",
    items: [
      {
        title: "Digital Advertising",
        desc: "Smart ads for modern audiences.",
        details: [
          "Google Search, Display & YouTube Ads",
          "Facebook & Instagram Advertising",
          "LinkedIn & Twitter Ads",
          "App promotion campaigns",
          "Retargeting & remarketing ads"
        ]
      },
      {
        title: "Print Advertising",
        desc: "Strong offline presence that builds trust.",
        details: [
          "Newspaper advertisements",
          "Magazine ads",
          "Flyers, pamphlets & brochures",
          "Inserts & local print campaigns",
          "Creative layout & ad design"
        ]
      },
      {
        title: "Outdoor Advertising (OOH)",
        desc: "Maximum visibility in high-traffic areas.",
        details: [
          "Hoardings & billboards",
          "Unipoles & kiosks",
          "Bus shelters & transit ads",
          "Wall paintings & street branding",
          "Location-based planning"
        ]
      },
      {
        title: "Electronic Media Advertising",
        desc: "Mass reach with powerful impact.",
        details: [
          "Television advertising",
          "Radio commercials & jingles",
          "Cable TV promotions",
          "Regional channel campaigns",
          "Media buying & planning"
        ]
      },
      {
        title: "Creative Advertising",
        desc: "Ideas that make your brand memorable.",
        details: [
          "Ad concept & storytelling",
          "Visual creatives & posters",
          "Video ads & short films",
          "Motion graphics & reels",
          "Brand campaigns & launches"
        ]
      },
      {
        title: "Political & Campaign Advertising",
        desc: "Targeted communication that connects with people.",
        details: [
          "Political ad strategy & planning",
          "Digital & offline campaign ads",
          "Creative messaging & slogans",
          "Booth-level & area-specific ads",
          "Election-time media management"
        ]
      }
    ]
  },
  {
    category: "Branding",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800",
    introTitle: "We Don’t Just Create Brands — We Create Powerful Impressions.",
    introText: "Your brand is more than a logo. It’s how people recognize you, trust you, and remember you. At Creative Mark, we craft strong, consistent, and meaningful brand identities that connect emotionally with your audience and stand out in crowded markets.",
    items: [
      {
        title: "Brand Strategy & Positioning",
        desc: "Clear vision. Strong direction.",
        details: [
          "Brand discovery & research",
          "Brand positioning & messaging",
          "Target audience & market analysis",
          "Brand voice & tone development",
          "Long-term brand roadmap"
        ]
      },
      {
        title: "Visual Identity Design",
        desc: "Make your brand instantly recognizable.",
        details: [
          "Logo design & rebranding",
          "Color palette & typography",
          "Brand style guide",
          "Business cards & stationery",
          "Social media brand kits"
        ]
      },
      {
        title: "Brand Communication",
        desc: "Speak with clarity and confidence.",
        details: [
          "Brand storytelling",
          "Taglines & slogans",
          "Brand content & copywriting",
          "Website & campaign messaging",
          "Political & leadership branding"
        ]
      },
      {
        title: "Digital Brand Presence",
        desc: "Consistency across all digital platforms.",
        details: [
          "Social media branding",
          "Website branding & UI direction",
          "Profile optimization",
          "Visual consistency across platforms",
          "Online reputation building"
        ]
      },
      {
        title: "Offline Branding",
        desc: "Strong presence beyond the digital space.",
        details: [
          "Office branding",
          "Storefront & signage branding",
          "Vehicle branding",
          "Event & campaign branding",
          "Print branding materials"
        ]
      },
      {
        title: "Rebranding & Brand Refresh",
        desc: "Evolve without losing identity.",
        details: [
          "Brand audits",
          "Logo & identity refresh",
          "Messaging realignment",
          "Market repositioning",
          "Modern brand transformation"
        ]
      }
    ]
  },
  {
    category: "Multimedia",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
    introTitle: "We Turn Ideas Into Powerful Visual Experiences.",
    introText: "In today’s digital world, visual content speaks louder than words. At Creative Mark, we create high-impact multimedia solutions that engage audiences, strengthen branding, and deliver your message with clarity and emotion.",
    items: [
      {
        title: "Video Production",
        desc: "Videos that connect, engage, and convert.",
        details: [
          "Brand & corporate videos",
          "Promotional & ad videos",
          "Political campaign videos",
          "Event coverage & highlights",
          "Documentary & storytelling videos"
        ]
      },
      {
        title: "Video Editing & Post-Production",
        desc: "Polished visuals with professional finishing.",
        details: [
          "Professional video editing",
          "Color correction & grading",
          "Motion graphics & effects",
          "Subtitles & voice-overs",
          "Short-form & long-form edits"
        ]
      },
      {
        title: "Reels, Shorts & Social Media Videos",
        desc: "Content made for scroll-stopping impact.",
        details: [
          "Instagram reels & Facebook videos",
          "YouTube shorts & ads",
          "Trend-based video creation",
          "Vertical video optimization",
          "High-engagement storytelling"
        ]
      },
      {
        title: "Motion Graphics & Animation",
        desc: "Creative visuals that simplify complex ideas.",
        details: [
          "2D & 3D animations",
          "Explainer videos",
          "Logo animation & intros",
          "Infographics & animated ads",
          "Political & awareness animations"
        ]
      },
      {
        title: "Audio Production",
        desc: "Sound that strengthens your message.",
        details: [
          "Voice-over recording",
          "Jingles & audio ads",
          "Podcast production",
          "Radio commercials",
          "Background music & sound design"
        ]
      },
      {
        title: "Photography & Visual Content",
        desc: "Professional imagery that builds credibility.",
        details: [
          "Product & brand photography",
          "Event & campaign photography",
          "Corporate & profile shoots",
          "Social media photoshoots",
          "Creative & lifestyle photography"
        ]
      }
    ]
  },
  {
    category: "Printing",
    image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=800",
    introTitle: "Printing That Makes Your Brand Tangible & Trustworthy.",
    introText: "In a digital world, print still holds power. At Creative Mark Advertising, we deliver high-quality printing solutions that enhance brand credibility, strengthen visibility, and leave a lasting impression.",
    items: [
      {
        title: "Commercial Printing",
        desc: "Professional prints for business growth.",
        details: [
          "Business cards & visiting cards",
          "Letterheads & envelopes",
          "Brochures & catalogues",
          "Flyers & pamphlets",
          "Company profiles"
        ]
      },
      {
        title: "Promotional Printing",
        desc: "Marketing materials that drive attention.",
        details: [
          "Posters & standees",
          "Banners & flex printing",
          "Danglers & tent cards",
          "Stickers & labels",
          "Promotional leaflets"
        ]
      },
      {
        title: "Corporate & Office Printing",
        desc: "Consistency across all brand materials.",
        details: [
          "ID cards & lanyards",
          "Files & folders",
          "Notepads & diaries",
          "Certificates & reports",
          "Customized stationery"
        ]
      },
      {
        title: "Political & Campaign Printing",
        desc: "High-impact printing for mass outreach.",
        details: [
          "Election posters & banners",
          "Pamphlets & manifesto printing",
          "Booth-level materials",
          "Flags, caps & campaign merchandise",
          "Area-wise distribution support"
        ]
      },
      {
        title: "Creative & Custom Printing",
        desc: "Prints tailored to your brand identity.",
        details: [
          "Custom designs & layouts",
          "Special finishes (lamination, UV, embossing)",
          "Large-format printing",
          "Eco-friendly printing options",
          "Personalized print solutions"
        ]
      }
    ]
  }
];

const Services = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <Layout>
      <section className="bg-background min-h-screen">
        {/* Hero Area */}
        <div className="pt-40 pb-20 container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-muted-foreground font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
            <h1 className="heading-xl mb-6">COMPREHENSIVE<br />CAPABILITIES</h1>
          </motion.div>
        </div>

        {/* Services Sections Loop */}
        {servicesData.map((section, index) => {
          const isEven = index % 2 === 0;
          const bgClass = isEven ? "bg-white text-foreground" : "bg-black text-white";
          const borderClass = isEven ? "border-black/10" : "border-white/10";
          const mutedTextClass = isEven ? "text-muted-foreground" : "text-gray-400";
          const headingClass = isEven ? "text-foreground" : "text-white";

          return (
            <motion.section
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`py-24 md:py-32 ${bgClass} transition-colors duration-500`}
            >
              <div className="container-wide grid lg:grid-cols-12 gap-16">

                {/* Left Sticky Header */}
                <div className="lg:col-span-5 relative">
                  <div className="sticky top-32">
                    <span className={`text-xs font-bold uppercase tracking-widest mb-6 block ${mutedTextClass}`}>
                      0{index + 1} / {section.category}
                    </span>
                    <h2 className={`text-4xl md:text-5xl font-bold leading-tight mb-8 ${headingClass}`}>
                      {section.introTitle}
                    </h2>

                    {/* Integrated Image in Stick Header */}
                    <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-2xl">
                      <img
                        src={section.image}
                        alt={section.category}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <p className={`text-lg leading-relaxed ${mutedTextClass}`}>
                      {section.introText}
                    </p>
                    <div className="mt-12 hidden lg:block">
                      <Link to="/contact" className={`inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:text-accent transition-colors ${headingClass}`}>
                        Start a Project <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Service List */}
                <div className="lg:col-span-7">
                  <div className="space-y-6">
                    {section.items.map((item, itemIndex) => {
                      const id = `${index}-${itemIndex}`;
                      const isOpen = activeAccordion === id;

                      return (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.05 }}
                          className={`border-b ${borderClass} pb-6`}
                        >
                          <div
                            className="cursor-pointer group select-none"
                            onClick={() => toggleAccordion(id)}
                          >
                            <div className="flex justify-between items-start gap-4">
                              <div>
                                <h3 className={`text-2xl font-bold mb-2 transition-colors ${isOpen ? "text-accent" : headingClass} group-hover:text-accent`}>
                                  {item.title}
                                </h3>
                                <p className={`text-sm ${mutedTextClass}`}>
                                  {item.desc}
                                </p>
                              </div>
                              <div className={`mt-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                                <ArrowDown size={20} className={mutedTextClass} />
                              </div>
                            </div>
                          </div>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                className="overflow-hidden"
                              >
                                <ul className="grid md:grid-cols-2 gap-x-4 gap-y-3">
                                  {item.details.map((detail, dIndex) => (
                                    <li key={dIndex} className={`flex items-start gap-3 text-sm ${mutedTextClass}`}>
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </motion.section>
          );
        })}


        {/* Pricing Section (NEW) */}
        <section className="py-32 bg-secondary border-t border-black/5">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="text-muted-foreground font-bold tracking-widest uppercase text-sm mb-4 block">Transparent Investment</span>
              <h2 className="heading-lg">Growth Packages</h2>
              <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">Choose the tier that matches your ambition. We deliver value at every level.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-muted-foreground mb-6">For emerging brands</p>
                <div className="text-4xl font-bold mb-8">₹50k - ₹1L<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                <ul className="space-y-4 mb-10">
                  {["Social Media Management", "Basic SEO Setup", "2 Blog Posts/Month", "Monthly Performance Report"].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <Check size={16} className="text-accent" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-secondary w-full justify-center">Get Started</Link>
              </div>

              {/* Professional (Highlighted) */}
              <div className="bg-black text-white p-10 rounded-2xl shadow-2xl relative transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg">Popular</div>
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-gray-400 mb-6">For aggressive growth</p>
                <div className="text-4xl font-bold mb-8">₹1L - ₹2L<span className="text-sm font-normal text-gray-500">/month</span></div>
                <ul className="space-y-4 mb-10 text-gray-300">
                  {["Everything in Starter", "Paid Ad Management", "Content Marketing Strategy", "Video Reels Production", "Bi-Weekly Strategy Calls"].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <Check size={16} className="text-accent" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary w-full justify-center hover:bg-white hover:text-black hover:border-white">Scale Now</Link>
              </div>

              {/* Enterprise */}
              <div className="bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-muted-foreground mb-6">Dominate your industry</p>
                <div className="text-4xl font-bold mb-8">₹2L+<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                <ul className="space-y-4 mb-10">
                  {["Full-Service War Room", "Custom Web Development", "PR & Media Management", "Dedicated Account Manager", "24/7 Priority Support"].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <Check size={16} className="text-accent" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-secondary w-full justify-center">Contact Sales</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-32 bg-background border-t border-black/5">
          <div className="container-wide text-center">
            <h2 className="heading-lg mb-8">Ready to dominate your market?</h2>
            <Link to="/contact" className="btn-primary shadow-xl hover:shadow-2xl">
              Get Started Now
            </Link>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Services;
