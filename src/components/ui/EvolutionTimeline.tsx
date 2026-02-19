import { motion, type Variants } from "framer-motion";

export interface TimelineMilestone {
    year: string;
    title: string;
    subtitle?: string;
    text: string;
}

interface EvolutionTimelineProps {
    milestones: TimelineMilestone[];
}

const cardVariants: Variants = {
    hidden: (isLeft: boolean) => ({
        opacity: 0,
        x: isLeft ? -48 : 48,
    }),
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.55,
            ease: "easeOut",
        },
    },
};

const dotVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.4, delay: 0.15 },
    },
};

export default function EvolutionTimeline({ milestones }: EvolutionTimelineProps) {
    return (
        <div className="relative">
            {/* ─── Desktop Zigzag Layout ─── */}
            <div className="hidden md:block relative">
                {/* Central vertical spine */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />

                <div className="flex flex-col gap-0">
                    {milestones.map((item, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <div
                                key={item.year}
                                className="relative grid grid-cols-[1fr_auto_1fr] items-center"
                            >
                                {/* Left slot */}
                                {isLeft ? (
                                    <motion.div
                                        custom={true}
                                        variants={cardVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-80px" }}
                                        className="mr-10 py-8"
                                    >
                                        <TimelineCard item={item} align="right" />
                                    </motion.div>
                                ) : (
                                    <div className="py-8" />
                                )}

                                {/* Centre dot + year pill */}
                                <div className="flex flex-col items-center z-10 px-1">
                                    <motion.div
                                        variants={dotVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-80px" }}
                                        className="flex flex-col items-center gap-1"
                                    >
                                        {/* Year badge */}
                                        <span className="text-xs font-black tracking-widest text-accent bg-accent/8 border border-accent/20 rounded-full px-3 py-0.5 whitespace-nowrap select-none">
                                            {item.year}
                                        </span>
                                        {/* Dot */}
                                        <div className="w-4 h-4 rounded-full bg-accent border-[3px] border-white shadow-[0_0_0_3px_hsl(0,72%,51%,0.2)] mt-0.5" />
                                    </motion.div>
                                </div>

                                {/* Right slot */}
                                {!isLeft ? (
                                    <motion.div
                                        custom={false}
                                        variants={cardVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-80px" }}
                                        className="ml-10 py-8"
                                    >
                                        <TimelineCard item={item} align="left" />
                                    </motion.div>
                                ) : (
                                    <div className="py-8" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ─── Mobile Vertical Layout ─── */}
            <div className="md:hidden relative">
                {/* Left spine */}
                <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-border to-transparent" />

                <div className="flex flex-col gap-2 pl-14">
                    {milestones.map((item, i) => (
                        <motion.div
                            key={item.year}
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.45, delay: 0.05 * (i % 4), ease: [0.22, 1, 0.36, 1] }}
                            className="relative py-5"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[2.25rem] top-[1.65rem] flex flex-col items-center gap-1">
                                <div className="w-3.5 h-3.5 rounded-full bg-accent border-[3px] border-white shadow-[0_0_0_3px_hsl(0,72%,51%,0.2)]" />
                            </div>

                            {/* Year badge */}
                            <span className="inline-flex text-[11px] font-black tracking-widest text-accent bg-accent/8 border border-accent/20 rounded-full px-2.5 py-0.5 mb-2">
                                {item.year}
                            </span>

                            <MobileCard item={item} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ─── Desktop card ─── */
function TimelineCard({
    item,
    align,
}: {
    item: TimelineMilestone;
    align: "left" | "right";
}) {
    return (
        <div
            className={`
        group relative bg-white border border-border rounded-2xl p-7 shadow-sm
        hover:shadow-xl hover:border-accent/30 transition-all duration-300
        ${align === "right" ? "text-right" : "text-left"}
      `}
        >
            {/* Subtle accent corner stripe */}
            <div
                className={`
          absolute top-0 h-[3px] w-16 bg-accent rounded-full opacity-60
          group-hover:w-24 group-hover:opacity-100 transition-all duration-300
          ${align === "right" ? "right-7" : "left-7"}
        `}
            />

            {/* Subtitle */}
            {item.subtitle && (
                <p
                    className={`
            text-[10px] font-black uppercase tracking-[0.18em] text-accent/70
            mb-2 mt-2
          `}
                >
                    {item.subtitle}
                </p>
            )}

            {/* Title */}
            <h4 className="text-[1.15rem] font-bold text-foreground leading-snug mb-3">
                {item.title}
            </h4>

            {/* Divider */}
            <div
                className={`
          h-[1px] bg-border mb-4
          ${align === "right" ? "ml-auto w-12" : "w-12"}
        `}
            />

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
        </div>
    );
}

/* ─── Mobile card ─── */
function MobileCard({ item }: { item: TimelineMilestone }) {
    return (
        <div className="bg-white border border-border rounded-xl p-5 shadow-sm hover:shadow-md hover:border-accent/25 transition-all duration-300">
            {/* Top accent bar */}
            <div className="w-10 h-[3px] bg-accent rounded-full mb-3 opacity-70" />

            {item.subtitle && (
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-accent/70 mb-1">
                    {item.subtitle}
                </p>
            )}

            <h4 className="text-base font-bold text-foreground leading-snug mb-2">
                {item.title}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
        </div>
    );
}
