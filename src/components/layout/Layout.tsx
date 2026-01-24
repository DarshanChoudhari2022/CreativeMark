import { ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import FloatingLanguageToggle from "../ui/FloatingLanguageToggle";

interface LayoutProps {
  children: ReactNode;
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Layout = ({ children }: LayoutProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100]"
        style={{ scaleX }}
      />
      <Header />
      <motion.main
        className="flex-1"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.main>
      <Footer />
      <FloatingLanguageToggle />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
