import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

const ServiceCard = ({ icon: Icon, title, description, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-8 bg-secondary rounded-2xl card-hover"
    >
      <div className="w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
        <Icon size={24} />
      </div>
      <h3 className="heading-md mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
