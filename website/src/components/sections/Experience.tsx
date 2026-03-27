"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sunrise, Home, Sparkles } from "lucide-react";

const icons = [Sunrise, Home, Sparkles];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <Container>
        <SectionHeading
          title="First Chair to Final Soak"
          subtitle="A day at Peak Haus is unlike anything else on the mountain."
        />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {EXPERIENCE.map((block, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={block.time}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group"
              >
                {/* Placeholder image */}
                <div className="relative aspect-[4/3] mb-6 bg-background-card border border-border/30 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                      size={48}
                      className="text-accent/30 group-hover:text-accent/50 transition-colors duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-accent/90 text-background-deep text-xs uppercase tracking-widest font-medium">
                    {block.time}
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-text-primary mb-3">
                  {block.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {block.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
