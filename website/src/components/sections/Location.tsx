"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { LOCATION } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent blur-[128px]" />
      </div>

      <Container className="relative z-10">
        {/* Big stat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-display text-8xl md:text-[10rem] font-bold text-accent leading-none">
            {LOCATION.stat}
          </span>
          <p className="text-xl md:text-2xl text-text-secondary mt-4 font-light">
            {LOCATION.statLabel}
          </p>
          <div className="mt-6 mx-auto w-16 h-0.5 bg-accent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Why Jay Peak */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6">
              {LOCATION.heading}
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              {LOCATION.description}
            </p>
            <ul className="space-y-4">
              {LOCATION.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-accent mt-1 flex-shrink-0"
                  />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Distances */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-display font-bold text-text-primary mb-8">
              Getting Here
            </h3>
            <div className="space-y-6">
              {LOCATION.distances.map((d) => (
                <div
                  key={d.city}
                  className="flex items-center justify-between p-5 bg-background/50 border border-border/30"
                >
                  <span className="text-text-primary font-medium text-lg">
                    {d.city}
                  </span>
                  <div className="flex items-center gap-2 text-accent">
                    <Clock size={16} />
                    <span className="font-medium">{d.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-text-muted text-sm">
              Located in the northeast corner of Vermont, just minutes from the
              Canadian border. Easy access from I-91 and I-89.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
