"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import { Text } from "@gravity-ui/uikit";

export function Skills() {
  return (
    <section id="skills" className="py-10 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-8 md:mb-12"
        >
          <Text variant="display-2" className="mb-4 block">Digital Architect</Text>
          <Text variant="body-2" className="text-muted-foreground block max-w-2xl mx-auto">
            A comprehensive toolkit designed for the modern web. I combine creative mastery in the Adobe Suite with advanced front-end frameworks to build seamless, user-centric products. From the first wireframe to final deployment, I ensure every digital touchpoint is optimized for performance, accessibility, and brand impact.
          </Text>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          <GlassCard className="p-6">
            <Text variant="header-2" className="mb-4 text-primary block">UI/UX Design</Text>
            <ul className="space-y-2">
              {skills.uiUx.map((skill) => (
                <li key={skill} className="text-sm text-muted-foreground border-b border-border/50 pb-1 last:border-0">{skill}</li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <Text variant="header-2" className="mb-4 text-primary block">Web Development</Text>
             <div className="flex flex-wrap gap-2">
              {skills.webDev.map((skill) => (
                <span key={skill} className="px-2 py-1 bg-background/50 rounded-md text-xs font-medium border border-border/50">
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
             <Text variant="header-2" className="mb-4 text-primary block">Digital Marketing</Text>
              <ul className="space-y-2">
              {skills.marketing.map((skill) => (
                <li key={skill} className="text-sm text-muted-foreground border-b border-border/50 pb-1 last:border-0">{skill}</li>
              ))}
            </ul>
          </GlassCard>

           <GlassCard className="p-6">
             <Text variant="header-2" className="mb-4 text-primary block">Tools</Text>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-background/50 rounded-md text-xs font-medium border border-border/50">
                    {skill}
                  </span>
                ))}
              </div>
          </GlassCard>

           <GlassCard className="p-6">
             <Text variant="header-2" className="mb-4 text-primary block">Languages</Text>
              <ul className="space-y-2">
               {skills.languages.map((lang) => (
                 <li key={lang} className="text-sm text-muted-foreground border-b border-border/50 pb-1 last:border-0">{lang}</li>
               ))}
             </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
