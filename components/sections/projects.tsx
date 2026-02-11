"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Button, Text } from "@gravity-ui/uikit";
import { useNetworkStatus } from "@/hooks/use-network-status";

export function Projects() {
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
          <Text variant="body-2" className="text-muted-foreground block">Showcasing key initiatives and recent professional contributions</Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
           {projects.map((project, index) => (
             <GlassCard key={index} className="p-0 overflow-hidden flex flex-col h-full group" hoverEffect>
                <div className="relative h-48 w-full bg-muted overflow-hidden">
                  {project.video && !useNetworkStatus() ? (
                    <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                      <video
                        src={project.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        disablePictureInPicture
                        controls={false}
                        controlsList="nodownload nofullscreen noremoteplayback"
                        className="w-full h-full object-cover pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                    </div>
                  ) : project.image ? (
                    <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-105 transition-transform duration-500" />
                  )}
                  {!project.image && !project.video && (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 font-bold text-lg">
                      {project.title} Preview
                    </div>
                  )}
                </div>
               
               <div className="p-6 flex flex-col flex-grow">
                 <Text variant="header-2" className="mb-2 group-hover:text-primary transition-colors block">{project.title}</Text>
                 <Text variant="body-1" className="text-muted-foreground text-sm mb-4 flex-grow block leading-relaxed">{project.description}</Text>
                 
                 <div className="flex flex-wrap gap-2 mb-6">
                   {project.tags.map(tag => (
                     <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                       {tag}
                     </span>
                   ))}
                 </div>
                 
                 <div className="flex flex-col gap-3 mt-auto">
                   <div className="flex items-center gap-3">
                     <Button 
                       view="outlined" 
                       size="l" 
                       width="max" 
                       className="flex-1" 
                       href="/404" 
                       extraProps={{ 
                         "aria-label": `View source code for ${project.title}`
                       }}
                     >
                         <span className="flex items-center justify-center gap-2">
                           <Github className="w-4 h-4" />
                           <span>Code</span>
                         </span>
                      </Button>
                      <Button 
                        view="action" 
                        size="l" 
                        width="max" 
                        className="flex-1" 
                        href="/404" 
                        extraProps={{ 
                          "aria-label": `View live demo of ${project.title}`
                        }}
                      >
                         <span className="flex items-center justify-center gap-2">
                           <ExternalLink className="w-4 h-4" />
                           <span>Live Demo</span>
                         </span>
                      </Button>
                   </div>
                   
                   <Button
                      view="flat"
                      size="l"
                      width="max"
                      className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20"
                      href={`/?ref=${encodeURIComponent(project.title)}#contact`}
                    >
                      <span className="font-bold tracking-wide">Hire Me for Similar Project</span>
                    </Button>
                 </div>
               </div>
             </GlassCard>
           ))}
        </div>
      </div>
    </section>
  );
}
