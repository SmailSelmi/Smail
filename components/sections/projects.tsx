"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Text } from "@gravity-ui/uikit";
import { useState } from "react";
import { ProjectModal } from "@/components/ui/project-modal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-10 md:py-20 lg:py-24 relative">
      <div className="container px-6 md:px-12 lg:px-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-8 md:mb-16"
        >
          <Text variant="display-2" className="mb-4 block">Featured Deployments</Text>
          <Text variant="body-2" className="text-muted-foreground block">Real-world projects showcasing design thinking and technical execution</Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
           {projects.map((project, index) => (
             <motion.div
               key={index}
               layoutId={`project-${project.title}`}
               className="h-full"
             >
              <GlassCard 
                className="p-0 overflow-hidden flex flex-col h-full group cursor-pointer border border-white/5 hover:border-primary/30 transition-colors" 
                hoverEffect
                onClick={() => openModal(project)}
              >
                  <div className="relative h-56 w-full bg-muted overflow-hidden">
                    {project.video ? (
                      <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out">
                        <video
                          src={project.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          disablePictureInPicture
                          controls={false}
                          className="w-full h-full object-cover pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                      </div>
                    ) : project.image ? (
                      <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 transition-transform duration-500" />
                    )}
                    
                    {/* Hover Badge */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                       <div className="bg-primary px-4 py-2 rounded-full shadow-lg">
                          <Text variant="caption-2" className="text-primary-contrast font-black uppercase tracking-widest">Case Study</Text>
                       </div>
                    </div>
                  </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Text variant="header-2" className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors block leading-tight tracking-tight">{project.title}</Text>
                  <Text variant="body-1" className="text-muted-foreground text-sm mb-6 flex-grow block leading-relaxed line-clamp-2">{project.description}</Text>
                  
                  <div className="flex items-center gap-2 text-primary font-bold text-sm group/btn">
                    <span>Explore Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </GlassCard>
             </motion.div>
           ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
