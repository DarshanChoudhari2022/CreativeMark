import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <section className="bg-background min-h-screen pt-32 pb-20">
        <div className="container-wide">

          {/* Header - Split Layout */}
          <div className="grid lg:grid-cols-2 gap-16 mb-32 items-end">
            <div>
              <span className="text-muted-foreground font-bold tracking-widest uppercase text-sm mb-4 block">Who We Are</span>
              <h1 className="heading-xl">
                Strategy First.<br />
                Creativity <span className="text-accent">Always.</span>
              </h1>
            </div>
            <div>
              <div>
                <p className="text-xl text-muted-foreground leading-relaxed font-light mb-6">
                  Creative Mark is a strategic advertising and digital agency founded on the belief that clarity wins. We don't just make things look good; we make them work. From corporate boardrooms to election war rooms, we drive results.
                </p>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-secondary rounded text-sm font-bold">50+ Campaigns</div>
                  <div className="px-4 py-2 bg-secondary rounded text-sm font-bold">85% Win Rate</div>
                  <div className="px-4 py-2 bg-secondary rounded text-sm font-bold">10+ Years Exp</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image / Banner */}
          <div className="w-full h-[60vh] bg-secondary rounded-lg mb-32 relative overflow-hidden">
            {/* Placeholder for Team/Office Image */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-4xl">
              AGENCY CULTURE
            </div>
          </div>

          {/* Story / Timeline */}
          <div className="max-w-4xl mx-auto mb-32">
            <div className="border-l-2 border-border pl-8 md:pl-16 py-4 space-y-24">
              {[
                { year: "2015", title: "The Beginning", text: "Founded in Pune with a small team and a big vision to revolutionize political advertising. Revenue: ₹0", type: "launch" },
                { year: "2018", title: "Expansion Phase", text: "Expanded services to include digital marketing and corporate branding. Crossed ₹50L Turnover.", type: "growth" },
                { year: "2020", title: "Statewide Dominance", text: "Managed campaigns across Maharashtra. Established 85% election win rate. Revenue grew to ₹2Cr.", type: "milestone" },
                { year: "2024", title: "National Powerhouse", text: "Evolved into a 360-degree agency serving national brands. Targeting ₹10Cr+ valuation.", type: "current" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] md:-left-[73px] top-0 w-5 h-5 bg-background border-4 border-accent rounded-full" />
                  <span className="text-accent font-bold text-lg block mb-2">{item.year}</span>
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 bg-secondary p-16 rounded-lg">
            {[
              { title: "Clarity", desc: "We simplify the complex. Your message should be understood instantly." },
              { title: "Consistency", desc: "Brands are built on repetition. We ensure you show up correctly, every time." },
              { title: "Impact", desc: "We focus on metrics that matter. Does it sell? Does it convince? Did we win?" }
            ].map((val, i) => (
              <div key={i}>
                <span className="text-5xl font-bold text-border block mb-4">0{i + 1}</span>
                <h4 className="text-xl font-bold mb-3">{val.title}</h4>
                <p className="text-muted-foreground">{val.desc}</p>
              </div>
            ))}
          </div>

          {/* Team Section (CRITICAL FIX) */}
          <div className="mb-32 mt-32">
            <div className="text-center mb-16">
              <span className="text-muted-foreground font-bold tracking-widest uppercase text-sm mb-4 block">The Minds Behind The Strategies</span>
              <h2 className="heading-lg">Our Leadership</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Darshan Choudhari", role: "Founder & Chief Strategist", exp: "15+ Years Exp", bio: "The visionary behind Creative Mark's political dominance." },
                { name: "Creative Director", role: "Head of Design", exp: "12+ Years Exp", bio: "Award-winning designer crafting visual narratives." },
                { name: "Campaign Lead", role: "Political Strategy Head", exp: "50+ Campaigns", bio: "Mastermind of ground-level election engineering." }
              ].map((member, i) => (
                <div key={i} className="group">
                  <div className="aspect-[3/4] bg-secondary rounded-lg mb-6 overflow-hidden relative">
                    {/* Placeholder for real photo */}
                    <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-white/20 font-bold text-6xl group-hover:bg-neutral-700 transition-colors">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.exp}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="bg-black text-white p-16 rounded-2xl text-center mb-20">
            <h2 className="heading-md mb-12">Industry Recognition</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {["Best Political Campaign 2022", "Top Digital Agency Pune", "Excellence in Brandy Identity", "Media Innovation Award"].map((award, i) => (
                <div key={i} className="border border-white/20 p-6 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">★</div>
                  <p className="font-bold">{award}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default About;
