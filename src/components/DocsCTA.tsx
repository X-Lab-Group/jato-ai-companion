import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const DocsCTA = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 md:p-16 text-center max-w-3xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-bg opacity-5" />
          <div className="relative z-10">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground">
              Explore the Full Documentation
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto leading-relaxed">
              Learn how to get the most out of Jato with comprehensive guides, API reference, and examples.
            </p>
            <a href="https://docs.jato.dev" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="gradient-bg text-primary-foreground border-0 hover:opacity-90 font-semibold px-8 py-6 text-base glow"
              >
                Read the Docs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DocsCTA;
