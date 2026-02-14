"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { Text } from "@gravity-ui/uikit";
import { faqItems } from "@/lib/data";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-white/5 hover:border-primary/20 transition-colors last:border-none group/item">
      <div
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e) => e.key === "Enter" && onToggle()}
        className="w-full py-6 flex items-center justify-between text-left group/btn cursor-pointer bg-transparent"
      >
        <Text
          variant="header-1"
          className={`font-black transition-all ${
            isOpen ? "text-primary" : "text-foreground/80 group-hover/btn:text-primary"
          }`}
        >
          {question}
        </Text>
        <div className={`p-2.5 rounded-xl border transition-all duration-300 ${
           isOpen 
           ? "bg-primary border-primary text-primary-contrast rotate-90 shadow-[0_0_20px_rgba(232,124,44,0.3)]" 
           : "bg-primary/5 border-primary/20 group-hover/btn:bg-primary/20 group-hover/btn:border-primary/40 group-hover/btn:scale-110"
        }`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} className="text-primary" />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pr-12">
              <Text variant="body-2" className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {answer}
              </Text>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
        {/* Background blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full" />

      <div className="container px-6 md:px-12 lg:px-20 relative">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Header */}
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <HelpCircle size={16} className="text-primary" />
                <Text variant="caption-1" className="text-primary font-bold uppercase tracking-widest text-[10px]">Process & FAQ</Text>
            </div>
            <Text variant="display-2" className="mb-6 block">Common Questions About Collaboration</Text>
            <Text variant="body-2" className="text-muted-foreground mb-8 block leading-relaxed">
              Transparent answers to help you decide if we&apos;re a good fit for your next digital project.
            </Text>
            <div className="p-8 glass-card border border-white/10 rounded-3xl bg-primary/5">
                <Text variant="header-1" className="mb-2 block font-black">Still have questions?</Text>
                <Text variant="body-1" className="text-muted-foreground mb-6 block text-sm">I&apos;m always open to discussing custom requests or specialized workflow integrations.</Text>
                <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center w-full px-6 py-4 bg-primary text-primary-contrast font-bold rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20"
                >
                    Get in Touch
                </a>
            </div>
          </div>

          {/* Accordions */}
          <div className="lg:w-2/3 glass-card p-4 md:p-10 border border-primary/20 rounded-[2.5rem]">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
