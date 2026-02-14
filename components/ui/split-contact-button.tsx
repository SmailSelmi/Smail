"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { personalData } from "@/lib/data";

interface SplitContactButtonProps {
  whatsappNumber?: string;
  className?: string;
}

export function SplitContactButton({ 
  whatsappNumber = "213665313887", // Placeholder number for Algeria
  className = "" 
}: SplitContactButtonProps) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const emailUrl = `mailto:${personalData.email}`;

  return (
    <div className={`flex items-center group ${className}`}>
      {/* Email Side */}
      <motion.a
        href={emailUrl}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-2 px-6 py-4 bg-primary text-white font-bold rounded-l-full border-r border-white/20 hover:bg-primary/90 transition-all shadow-lg overflow-hidden relative"
      >
        <Mail className="w-5 h-5" />
        <span className="hidden sm:inline">Email Me</span>
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.a>

      {/* WhatsApp Side */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-2 px-6 py-4 bg-emerald-500 text-white font-bold rounded-r-full hover:bg-emerald-600 transition-all shadow-lg overflow-hidden relative"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp</span>
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.a>
    </div>
  );
}
