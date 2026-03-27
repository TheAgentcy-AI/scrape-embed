"use client";

import { motion } from "framer-motion";
import { PRICING } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-background-secondary">
      <Container>
        <SectionHeading
          title="Rates & Availability"
          subtitle="One home. Limited dates. Book early to secure your stay."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING.map((season, i) => (
            <motion.div
              key={season.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 border flex flex-col ${
                season.highlighted
                  ? "border-accent/50 bg-accent/5"
                  : "border-border/30 bg-background/50"
              }`}
            >
              {season.highlighted && (
                <span className="text-xs uppercase tracking-widest text-accent mb-4 font-medium">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-display font-bold text-text-primary">
                {season.name}
              </h3>
              <p className="text-text-muted text-sm mt-1 mb-6">
                {season.dateRange}
              </p>

              <div className="mt-auto">
                <span className="text-4xl font-display font-bold text-text-primary">
                  {season.nightlyRate}
                </span>
                <span className="text-text-muted text-sm"> / night</span>
                <p className="text-text-muted text-xs mt-2">
                  {season.minStay}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-muted text-sm mb-6">
            All rates are nightly. Minimum stays apply. Contact us for custom
            multi-week quotes.
          </p>
          <a
            href="#booking"
            className="inline-flex items-center px-8 py-4 bg-accent text-background-deep text-base font-medium uppercase tracking-wider hover:bg-accent-light transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40"
          >
            Check Availability
          </a>
        </div>
      </Container>
    </section>
  );
}
