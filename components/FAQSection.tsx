import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ 
  title = "Frequently Asked Questions",
  subtitle,
  faqs 
}) => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border-none bg-slate-800/40 rounded-xl overflow-hidden"
                >
                  <AccordionTrigger 
                    className="text-left text-white hover:text-white hover:no-underline px-6 py-6 text-lg font-medium [&[data-state=open]>svg]:rotate-180"
                  >
                    <span className="flex-1 text-left">{faq.question}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-white transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-6 pt-0 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};