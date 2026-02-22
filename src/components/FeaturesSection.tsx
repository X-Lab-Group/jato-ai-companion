import { motion } from "framer-motion";
import {
  MessageSquare, Search, Network, FlaskConical, Brain, Box,
  Terminal, GitBranch, FolderPlus, Clock, BookOpen, ShieldCheck,
} from "lucide-react";

const features = [
  { icon: MessageSquare, title: "Intelligent Chat", desc: "Context-aware AI that understands your entire codebase" },
  { icon: Search, title: "Code Review", desc: "Automated review with severity levels and one-click fixes" },
  { icon: Network, title: "Impact Analysis", desc: "Understand ripple effects of changes before you commit" },
  { icon: FlaskConical, title: "Test Generation", desc: "Auto-generate unit tests from code or error messages" },
  { icon: Brain, title: "Team Knowledge Base", desc: "Persist decisions, conventions, and warnings across sessions" },
  { icon: Box, title: "Multi-Model Support", desc: "Choose from Gemini 2.0 Flash, 1.5 Pro, or 1.5 Flash" },
  { icon: Terminal, title: "Shell Commands", desc: "Describe what you want, get safe commands with explanations" },
  { icon: GitBranch, title: "Git Integration", desc: "Review changes, analyze PRs, time-travel through history" },
  { icon: FolderPlus, title: "Context Files", desc: "Add specific files as context for more accurate responses" },
  { icon: Clock, title: "Chat History", desc: "Persistent sessions with searchable history across tasks" },
  { icon: BookOpen, title: "Onboarding Guide", desc: "Generate documentation for any file for new team members" },
  { icon: ShieldCheck, title: "Compliance Checking", desc: "Ensure code follows team conventions and best practices" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Everything you need to{" "}
            <span className="gradient-text">ship better code</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive AI toolkit built into your editor, designed for individual developers and teams.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="glass-card gradient-border p-6 group hover:scale-[1.02] transition-transform duration-300 cursor-default"
            >
              <div className="gradient-bg rounded-xl p-2.5 w-fit mb-4">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
