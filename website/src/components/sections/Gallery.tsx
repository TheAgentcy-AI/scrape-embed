"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Image } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, goNext, goPrev]);

  const aspectClasses: Record<string, string> = {
    landscape: "aspect-[4/3]",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <Container>
        <SectionHeading
          title="Step Inside"
          subtitle="Explore the spaces that make Peak Haus one of a kind."
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.button
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => openLightbox(i)}
              className={`block w-full ${aspectClasses[img.aspect]} bg-background-card border border-border/30 hover:border-accent/40 transition-all duration-300 cursor-pointer overflow-hidden group break-inside-avoid`}
            >
              <div className="w-full h-full flex items-center justify-center relative">
                <Image
                  size={32}
                  className="text-text-muted/20 group-hover:text-accent/30 transition-colors duration-300"
                />
                <span className="absolute bottom-3 left-3 text-xs text-text-muted/40 group-hover:text-text-muted/70 transition-colors">
                  {img.alt}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background-deep/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-text-muted hover:text-text-primary transition-colors z-10"
            >
              <X size={28} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-6 text-text-muted hover:text-accent transition-colors z-10"
            >
              <ChevronLeft size={36} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-6 text-text-muted hover:text-accent transition-colors z-10"
            >
              <ChevronRight size={36} />
            </button>

            {/* Image placeholder */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[80vh] aspect-[4/3] bg-background-card border border-border/30 flex items-center justify-center mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <Image size={64} className="text-accent/20 mx-auto mb-4" />
                <p className="text-text-muted text-sm">
                  {GALLERY_IMAGES[lightboxIndex].alt}
                </p>
                <p className="text-text-muted/50 text-xs mt-2">
                  {lightboxIndex + 1} / {GALLERY_IMAGES.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
