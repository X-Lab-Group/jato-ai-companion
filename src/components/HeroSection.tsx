import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-sm font-medium text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Now available on VS Code Marketplace
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            Your AI Coding Companion{" "}
            <span className="gradient-text">That Learns With You</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Jato brings intelligent code review, impact analysis, test generation, and team knowledge sharing directly into VS Code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="gradient-bg text-primary-foreground border-0 hover:opacity-90 transition-all font-semibold px-8 py-6 text-base glow"
            >
              <Download className="mr-2 h-5 w-5" />
              Install for VS Code
            </Button>
            <a href="https://docs.jato.dev" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary/50 transition-all font-semibold px-8 py-6 text-base"
              >
                View Documentation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card p-2 glow-accent">
            <img
              src={heroMockup}
              alt="Jato AI coding assistant interface in VS Code"
              className="rounded-xl w-full"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
