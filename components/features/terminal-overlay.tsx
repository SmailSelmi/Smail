"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Text } from "@gravity-ui/uikit";
import { X, Terminal } from "lucide-react";

interface TerminalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TerminalOverlay({ isOpen, onClose }: TerminalOverlayProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [showAccessGranted, setShowAccessGranted] = useState(false);
  const fullText = "> SYSTEM BREACH DETECTED...\n> ANALYZING INPUT PATTERN...\n> PATTERN MATCH: KONAMI_PROTOCOL_V7\n> DECRYPTING...";
  
  // Reset state when opened
  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setTextIndex(0);
        setShowAccessGranted(false);
      }, 0);
    }
  }, [isOpen]);

  // Typing effect
  useEffect(() => {
    if (isOpen && textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTextIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else if (isOpen && textIndex >= fullText.length) {
      const timeout = setTimeout(() => {
        setShowAccessGranted(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, textIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center font-mono p-4"
        >
          {/* Matrix-like background effect (simplified) */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          <div className="relative w-full max-w-2xl bg-black border border-green-500/30 rounded-lg p-6 shadow-[0_0_50px_rgba(0,255,0,0.2)] overflow-hidden">
             {/* Header */}
             <div className="flex items-center justify-between mb-6 border-b border-green-500/20 pb-2">
                <div className="flex items-center gap-2 text-green-500">
                  <Terminal className="w-5 h-5" />
                  <span className="text-sm tracking-wider">ROOT_ACCESS_TERMINAL</span>
                </div>
                <button onClick={onClose} className="text-green-500/50 hover:text-green-500 transition-colors">
                  <X className="w-5 h-5" />
                </button>
             </div>

             {/* Content */}
             <div className="space-y-4 min-h-[200px]">
               <pre className="text-green-500 font-mono text-sm md:text-base whitespace-pre-wrap leading-relaxed">
                 {fullText.slice(0, textIndex)}
                 <motion.span
                   animate={{ opacity: [0, 1, 0] }}
                   transition={{ repeat: Infinity, duration: 0.8 }}
                   className="inline-block w-2 H-4 bg-green-500 ml-1 align-middle"
                 />
               </pre>

               {showAccessGranted && (
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="mt-8 border-t border-green-500/30 pt-6"
                 >
                   <Text variant="display-1" className="text-green-500 font-bold block mb-2 tracking-tighter">
                     ACCESS GRANTED
                   </Text>
                   <p className="text-green-400/80 mb-6">
                     Welcome, fellow developer. You have unlocked the hidden layer.
                   </p>
                   
                   <div className="flex gap-4">
                     <a 
                       href="https://github.com/SmailSelmi" 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="px-6 py-2 bg-green-500/10 border border-green-500/50 text-green-400 hover:bg-green-500 hover:text-black transition-all rounded text-sm font-bold uppercase tracking-widest"
                     >
                       View Source Code
                     </a>
                     <button
                        onClick={onClose}
                        className="px-6 py-2 border border-green-500/20 text-green-500/60 hover:text-green-500 hover:border-green-500/50 transition-all rounded text-sm font-bold uppercase tracking-widest"
                     >
                       Close Terminal
                     </button>
                   </div>
                 </motion.div>
               )}
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
