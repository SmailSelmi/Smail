"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import { Briefcase, GraduationCap } from "lucide-react";
import { Text } from "@gravity-ui/uikit";

export function Experience() {
  return (
    <section id="experience" className="py-10 md:py-20 lg:py-24 bg-secondary/5">
      <div className="container px-6 md:px-12 lg:px-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-8 md:mb-16"
        >
          <Text variant="display-2" className="mb-4 block">Experience & Education</Text>
          <Text variant="body-2" className="text-muted-foreground block">A track record of dedication, growth, and continuous learning</Text>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Work Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((job, index) => (
                <GlassCard key={index} className="p-6 relative border-l-4 border-l-primary/50" hoverEffect>
                  <Text variant="header-2" className="font-bold block">{job.role}</Text>
                  {job.link ? (
                    <a 
                      href={job.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-medium mb-4 block hover:underline underline-offset-4 w-fit"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <Text variant="body-2" className="text-primary font-medium mb-4 block">{job.company}</Text>
                  )}
                  
                  <div className="space-y-3">
                    {job.details.map((detail, idx) => (
                      <div key={idx} className="relative pl-4 border-l border-border">
                         <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-border" />
                         <Text variant="body-1" className="font-medium text-foreground block">{detail.position}</Text>
                         <Text variant="caption-1" className="text-muted-foreground block">{detail.period}</Text>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
             <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
               {education.map((edu, index) => (
                <GlassCard key={index} className="p-6 border-l-4 border-l-primary/50" hoverEffect>
                  <Text variant="header-2" className="font-bold block">{edu.title}</Text>
                   {"institutions" in edu && edu.institutions ? (
                     <div className="flex items-center gap-2 flex-wrap">
                       {edu.institutions.map((inst: { name: string; link: string }, idx: number) => (
                         <span key={idx} className="flex items-center gap-2">
                           <a
                             href={inst.link}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="text-primary font-medium hover:underline underline-offset-4"
                           >
                             {inst.name}
                           </a>
                           {idx < edu.institutions.length - 1 && (
                             <span className="text-white font-bold">|</span>
                           )}
                         </span>
                       ))}
                     </div>
                   ) : edu.link ? (
                     <a 
                       href={edu.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-primary font-medium block hover:underline underline-offset-4 w-fit"
                     >
                       {edu.institution}
                     </a>
                   ) : (
                     <Text variant="body-2" className="text-primary font-medium block">{edu.institution}</Text>
                   )}
                   <Text variant="caption-1" className="text-muted-foreground mt-2 block">{edu.year}</Text>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
