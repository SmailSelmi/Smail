"use client";

import { motion } from "framer-motion";
import { personalData } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import { Text } from "@gravity-ui/uikit";
import { CountUp } from "@/components/ui/count-up";

export function About() {
  return (
    <section id="about" className="py-10 md:py-20 lg:py-24 bg-secondary/5">
      <div className="container px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-8 md:mb-12"
        >
          <Text variant="display-2" className="mb-4 block">Bridging the Gap Between Brand Identity and High-Performance Code</Text>
          <Text variant="body-2" className="text-muted-foreground text-lg block">{personalData.about}</Text>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <GlassCard className="text-center p-8" hoverEffect>
             <Text variant="display-2" className="text-primary mb-2 block">
               <CountUp to={3} suffix="+" />
             </Text>
             <Text variant="body-2" className="text-muted-foreground block">Years Experience</Text>
          </GlassCard>
           <GlassCard className="text-center p-8" hoverEffect>
             <Text variant="display-2" className="text-primary mb-2 block">
               <CountUp to={10} suffix="+" />
             </Text>
             <Text variant="body-2" className="text-muted-foreground block">Projects Completed</Text>
          </GlassCard>
           <GlassCard className="text-center p-8" hoverEffect>
             <Text variant="display-2" className="text-primary mb-2 block">
               <CountUp to={100} suffix="%" />
             </Text>
             <Text variant="body-2" className="text-muted-foreground block">Client Satisfaction</Text>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
