import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-black text-foreground/40 uppercase tracking-[0.3em] mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="heading-lg mb-6">{title}</h2>
      {description && (
        <p className="text-foreground/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
