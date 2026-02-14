"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Button, Text } from "@gravity-ui/uikit";
import Image from "next/image";
import { useEffect } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  image?: string;
  video?: string;
  challenge: string;
  solution: string;
  outcomes: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/60 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            layoutId={`project-${project.title}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-background border border-primary/20 shadow-2xl rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 bg-background/50 backdrop-blur-md rounded-full border border-border hover:bg-primary/20 hover:border-primary/30 transition-all text-foreground/70 hover:text-primary"
            >
              <X size={20} />
            </button>

            {/* Media Section (Left/Top) */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-muted overflow-hidden">
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                   <Text variant="header-2" className="opacity-20">{project.title}</Text>
                </div>
              )}
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:hidden" />
            </div>

            {/* Content Section (Right/Bottom) */}
            <div 
              className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-12 mb-safe"
              data-lenis-prevent="true"
            >
              <div className="space-y-8">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Text variant="display-1" className="text-3xl md:text-5xl font-bold mb-4 block leading-tight">
                    {project.title}
                  </Text>
                  <Text variant="body-2" className="text-muted-foreground text-lg leading-relaxed block">
                    {project.description}
                  </Text>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-3">
                    <Text variant="header-1" className="text-primary tracking-wide block uppercase text-sm font-black">
                      The Challenge
                    </Text>
                    <Text variant="body-1" className="text-foreground/80 leading-relaxed block">
                      {project.challenge}
                    </Text>
                  </div>
                  <div className="space-y-3">
                    <Text variant="header-1" className="text-primary tracking-wide block uppercase text-sm font-black">
                      The Solution
                    </Text>
                    <Text variant="body-1" className="text-foreground/80 leading-relaxed block">
                      {project.solution}
                    </Text>
                  </div>
                </div>

                <div className="space-y-4">
                  <Text variant="header-1" className="text-primary tracking-wide block uppercase text-sm font-black">
                    Key Outcomes
                  </Text>
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0" />
                        <Text variant="body-2" className="text-foreground/70 leading-relaxed block">
                          {outcome}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-border/50">
                  <Button
                    view="action"
                    size="xl"
                    className="rounded-full shadow-lg shadow-primary/20 flex items-center justify-center"
                    href={project.link === "#" ? undefined : project.link}
                    onClick={(e: React.MouseEvent) => {
                      if (project.link === "#") {
                        e.preventDefault();
                      }
                    }}
                  >
                    <div className="flex items-center gap-2 px-4 h-full">
                      <ExternalLink size={18} />
                      <span className="font-bold uppercase tracking-widest text-[10px]">Live Demo</span>
                    </div>
                  </Button>
                  <Button
                    view="outlined"
                    size="xl"
                    className="rounded-full flex items-center justify-center"
                    href={project.github === "#" ? undefined : project.github}
                    onClick={(e: React.MouseEvent) => {
                      if (project.github === "#") {
                        e.preventDefault();
                      }
                    }}
                  >
                    <div className="flex items-center gap-2 px-4 h-full text-foreground/70 hover:text-foreground">
                      <Github size={18} />
                      <span className="font-bold uppercase tracking-widest text-[10px]">Source Code</span>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
