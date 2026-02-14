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
  const [isFixing, setIsFixing] = useState(false);
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

  const runRepairSequence = async () => {
    setIsFixing(true);
    const steps = [
      { msg: "Initiating kernel patch...", delay: 800 },
      { msg: "Defragmenting visual buffers...", delay: 600 },
      { msg: "Neutralizing memory leaks...", delay: 700 },
      { msg: "Rebuilding page integrity...", delay: 1000 },
      { msg: "GLITCH REMOVED. System stable.", delay: 500, type: "success" as const },
    ];

    for (const step of steps) {
      await new Promise(r => setTimeout(r, step.delay));
      setHistory(prev => [...prev, { type: step.type || "output", content: `> ${step.msg}` }]);
    }
    setIsFixing(false);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFixing) return;
    
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
        newLogs.push({ type: "output", content: "Manual override triggered..." });
        setHistory(newLogs);
        setInput("");
        runRepairSequence();
        return;
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
      <div className={`rounded-xl overflow-hidden border border-white/10 bg-black/90 backdrop-blur-2xl relative ${isFixing ? "animate-glitch-intense" : ""}`}>
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
                Kyodai Terminal {isFixing && "(REPAIRING...)"}
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
          
          {!isFixing && (
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
          )}

          {isFixing && (
             <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-4">
                <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4 }}
                    className="h-full bg-primary shadow-[0_0_10px_rgba(252,163,17,0.5)]"
                />
             </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes glitch-intense {
          0% { transform: translate(0); text-shadow: none; }
          20% { transform: translate(-2px, 2px); text-shadow: 2px 0 red, -2px 0 blue; }
          40% { transform: translate(2px, -2px); text-shadow: -2px 0 red, 2px 0 blue; }
          60% { transform: translate(-2px, -2px); text-shadow: 2px 0 blue, -2px 0 red; }
          80% { transform: translate(2px, 2px); text-shadow: -2px 0 blue, 2px 0 red; }
          100% { transform: translate(0); text-shadow: none; }
        }
        .animate-glitch-intense {
          animation: glitch-intense 0.2s infinite;
        }
      `}</style>
    </motion.div>
  );
}
