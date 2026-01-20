import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Political = () => {
  return (
    <Layout>
      <section className="bg-background min-h-screen pt-32 pb-20">
        <div className="container-wide">
          <div className="max-w-4xl mb-24">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Election Management</span>
            <h1 className="heading-xl mb-8">Winning Elections is About Trust. Building Brands is About Clarity.</h1>
            <p className="text-2xl text-muted-foreground leading-relaxed font-light">
              We combine on-ground intelligence with digital dominance to build narratives that resonate and convert support into votes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div className="bg-secondary p-12 rounded-lg border border-border">
              <h3 className="text-3xl font-bold mb-6">War Room Operations</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                24/7 monitoring, real-time response strategies, and booth-level data management. We ensure you stay ahead of the opposition every single minute.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time Sentiment Analysis",
                  "Crisis Management Protocols",
                  "Social Listening & Response",
                  "Volunteer Coordination App"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <Check size={20} className="text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-12 rounded-lg border border-border flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-12 text-center">
                <div>
                  <span className="block text-6xl font-black text-foreground mb-2">50+</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-widest">Election Campaigns</span>
                </div>
                <div>
                  <span className="block text-6xl font-black text-foreground mb-2">85%</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-widest">Victory Rate</span>
                </div>
                <div>
                  <span className="block text-6xl font-black text-foreground mb-2">10+</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-widest">States Covered</span>
                </div>
                <div>
                  <span className="block text-6xl font-black text-foreground mb-2">24h</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-widest">Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { title: "Digital Dominance", desc: "Targeted social media campaigns that control the narrative." },
              { title: "Ground Intelligence", desc: "Surveys and booth-level analytics to identify swing voters." },
              { title: "Brand Building", desc: "Crafting a leader's image that exudes strength and empathy." }
            ].map((feat, i) => (
              <div key={i} className="border-t border-border pt-8">
                <h4 className="text-xl font-bold mb-4">0{i + 1}. {feat.title}</h4>
                <p className="text-muted-foreground">{feat.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-black text-white p-16 rounded-lg text-center">
            <h2 className="heading-lg text-white mb-6">Launch Your War Room</h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
              The opposition is already planning. Don't let them get ahead.
            </p>
            <Link to="/contact" className="btn-primary border-transparent">
              Book Your Winning Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Political;
