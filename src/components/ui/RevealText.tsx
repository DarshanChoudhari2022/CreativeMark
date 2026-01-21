import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface RevealTextProps {
    text: string;
    className?: string;
    delay?: number;
    tag?: "div" | "h1" | "h2" | "h3" | "p" | "span";
}

export const RevealText = ({ text, className = "", delay = 0, tag = "div" }: RevealTextProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.03,
                delayChildren: delay,
            },
        } as any, // Cast to any to avoid strict type conflict with orchestration props
    };

    const wordVariants: Variants = {
        hidden: {
            y: "110%", // Increased slightly to ensure full hiding
            opacity: 0,
        },
        visible: {
            y: "0%",
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    const words = text.split(" ");

    const MotionTag = motion[tag] as any;

    return (
        <MotionTag
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`flex flex-wrap gap-x-[0.25em] ${className}`}
            style={{ display: className.includes('hidden') ? 'none' : 'flex' }}
        >
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden py-[0.5em] -my-[0.5em] align-top px-[0.1em] -mx-[0.1em]">
                    <motion.span
                        variants={wordVariants}
                        className="inline-block will-change-transform"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </MotionTag>
    );
};
