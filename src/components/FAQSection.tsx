import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What models does Jato support?",
    a: "Jato currently supports Gemini 2.0 Flash, Gemini 1.5 Pro, and Gemini 1.5 Flash. You can switch between models at any time based on your needs for speed vs. capability.",
  },
  {
    q: "How does team knowledge work?",
    a: "Team knowledge allows you to capture decisions, coding conventions, and warnings that persist across sessions. These are stored locally and can be shared with your team through your repository.",
  },
  {
    q: "Is my code sent to external servers?",
    a: "Jato sends relevant code context to the selected AI model API for processing. We do not store your code on our servers. All data is transmitted securely and only used for generating responses.",
  },
  {
    q: "Can I use Jato with my team?",
    a: "Yes! The Pro plan includes team knowledge base features that allow you to share conventions and decisions across your team. Each team member needs their own subscription.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "You can cancel anytime through the VS Code extension settings or by visiting our billing portal. Your Pro features will remain active until the end of your current billing period.",
  },
];

const FAQSection = () => {
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
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card px-6 border-0"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
