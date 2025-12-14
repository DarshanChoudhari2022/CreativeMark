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
        <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="heading-lg mb-4">{title}</h2>
      {description && (
        <p className="text-body max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
