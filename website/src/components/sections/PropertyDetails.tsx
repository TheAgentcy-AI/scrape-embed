"use client";

import { motion } from "framer-motion";
import {
  Bed,
  Mountain,
  Flame,
  Bath,
  ChefHat,
  Lamp,
  Eye,
  Users,
  Wifi,
} from "lucide-react";
import { AMENITIES, PROPERTY } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Bed,
  Mountain,
  Flame,
  Bath,
  ChefHat,
  Lamp,
  Eye,
  Users,
  Wifi,
};

export function PropertyDetails() {
  return (
    <section id="property" className="py-24 md:py-32 bg-background-secondary">
      <Container>
        <SectionHeading title="The Home" />

        {/* Feature area */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Placeholder image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="aspect-[4/3] bg-background-card border border-border/30 flex items-center justify-center"
          >
            <Home size={64} className="text-accent/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6">
              {PROPERTY.heading}
            </h3>
            <p className="text-text-secondary leading-relaxed text-lg">
              {PROPERTY.description}
            </p>
          </motion.div>
        </div>

        {/* Amenities grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {AMENITIES.map((amenity, i) => {
            const Icon = iconMap[amenity.icon] || Bed;
            return (
              <motion.div
                key={amenity.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-4 p-5 bg-background/50 border border-border/30 hover:border-accent/30 transition-colors duration-300"
              >
                <Icon size={24} className="text-accent flex-shrink-0" />
                <span className="text-text-primary font-medium">
                  {amenity.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function Home({ size, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
