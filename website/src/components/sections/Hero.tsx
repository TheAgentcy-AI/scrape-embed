"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background placeholder — replace with real image */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background to-background-secondary" />
      {/* Mountain silhouette decorative overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background-deep/80 to-transparent" />
      </div>
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-deep/90 via-transparent to-background-deep/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 border border-accent/40 text-accent text-xs uppercase tracking-[0.25em] mb-8">
            {HERO.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-7xl md:text-9xl font-bold tracking-tight text-text-primary mb-6"
        >
          {HERO.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 font-light"
        >
          {HERO.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a
            href="#booking"
            className="inline-flex items-center px-8 py-4 bg-accent text-background-deep text-base font-medium uppercase tracking-wider hover:bg-accent-light transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40"
          >
            {HERO.cta}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#experience" className="text-text-muted hover:text-accent transition-colors">
          <ChevronDown size={28} className="animate-float" />
        </a>
      </motion.div>
    </section>
  );
}
