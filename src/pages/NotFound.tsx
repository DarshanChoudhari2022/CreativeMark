import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-8xl md:text-9xl font-bold text-accent">404</span>
            <h1 className="heading-lg mt-6 mb-4">Page Not Found</h1>
            <p className="text-body max-w-md mx-auto mb-10">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn-pill-primary inline-flex items-center gap-2">
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
