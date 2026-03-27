"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <Container>
        <SectionHeading title="What Our Guests Say" />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 bg-background-card border border-border/30 hover:border-accent/20 transition-colors duration-300 flex flex-col"
            >
              <Quote size={24} className="text-accent/40 mb-4" />

              <p className="text-text-secondary leading-relaxed flex-grow italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 pt-6 border-t border-border/30">
                {/* Stars */}
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-text-primary font-medium">
                  {testimonial.name}
                </p>
                <p className="text-text-muted text-sm">{testimonial.tripType}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
