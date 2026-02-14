"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({ subsets: ["latin"] });

interface Log {
  type: "input" | "output" | "error" | "success";
  content: string;
}

export function TerminalEasterEgg() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Log[]>([
    { type: "output", content: "Kyodai OS v1.0.4 (GLITCH_DETECTED)" },
    { type: "output", content: 'Type "help" to see available commands.' },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newLogs: Log[] = [...history, { type: "input", content: cmd }];

    switch (cmd) {
      case "help":
        newLogs.push({
          type: "output",
          content: "Available commands: help, home, fix, clear, exit",
        });
        break;
      case "home":
        newLogs.push({ type: "success", content: "Redirecting to landing page..." });
        setTimeout(() => router.push("/"), 1000);
        break;
      case "fix":
        newLogs.push({ type: "success", content: "System patched. Glitch neutralized." });
        // This could trigger a global state change if needed, for now just visual feedback
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "exit":
        setIsOpen(false);
        return;
      default:
        newLogs.push({
          type: "error",
          content: `Command not found: ${cmd}. Type "help" for assistance.`,
        });
    }

    setHistory(newLogs);
    setInput("");
  };

  if (!isOpen) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="fixed bottom-8 right-8 z-[100] w-[320px] md:w-[450px] shadow-2xl"
    >
      <div className="rounded-xl overflow-hidden border border-white/10 bg-black/90 backdrop-blur-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10 cursor-move">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-3.5 h-3.5 text-white/40" />
              <span className={`text-[10px] uppercase tracking-widest text-white/40 font-bold ${mono.className}`}>
                Kyodai Terminal
              </span>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/20 hover:text-white/60 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div 
          ref={scrollRef}
          className={`h-64 p-4 overflow-y-auto text-sm space-y-2 custom-scrollbar ${mono.className}`}
        >
          <AnimatePresence>
            {history.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className={
                    log.type === "input" ? "text-primary" :
                    log.type === "error" ? "text-red-400" :
                    log.type === "success" ? "text-green-400" :
                    "text-white/70"
                }
              >
                {log.type === "input" && <span className="mr-2 text-white/30">$</span>}
                {log.content}
              </motion.div>
            ))}
          </AnimatePresence>
          
          <form onSubmit={handleCommand} className="flex items-center gap-2">
            <span className="text-white/30">$</span>
            <input
              autoFocus
              className="flex-1 bg-transparent border-none outline-none text-primary"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              spellCheck={false}
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </motion.div>
  );
}
