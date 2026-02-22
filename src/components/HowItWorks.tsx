import { motion } from "framer-motion";
import { Download, Key, Rocket } from "lucide-react";

const steps = [
  { num: "01", icon: Download, title: "Install", desc: "Add Jato to VS Code in one click from the marketplace" },
  { num: "02", icon: Key, title: "Connect", desc: "Enter your API key and configure your preferred settings" },
  { num: "03", icon: Rocket, title: "Code", desc: "Start chatting, reviewing, and shipping better code" },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Get started in <span className="gradient-text">three steps</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From install to your first AI-powered code review in under two minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 text-center relative"
            >
              <div className="gradient-bg w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5 text-primary-foreground font-bold font-mono text-sm">
                {step.num}
              </div>
              <step.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
