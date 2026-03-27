"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FormData {
  name: string;
  email: string;
  phone: string;
  checkin: string;
  checkout: string;
  guests: string;
  message: string;
}

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Booking inquiry:", data);
    setSubmitted(true);
  };

  const inputClasses =
    "w-full bg-background/50 border border-border/50 px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors duration-300";

  const labelClasses = "block text-sm text-text-muted uppercase tracking-wider mb-2";

  return (
    <section id="booking" className="py-24 md:py-32 bg-background relative">
      {/* Accent top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <Container>
        <SectionHeading
          title="Reserve Peak Haus"
          subtitle="Send us an inquiry and we'll get back to you within 24 hours."
        />

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-16"
          >
            <CheckCircle size={48} className="text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
              Inquiry Received
            </h3>
            <p className="text-text-secondary">
              Thank you for your interest in Peak Haus. We&apos;ll review your
              dates and get back to you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-3xl mx-auto"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className={inputClasses}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@email.com"
                  className={inputClasses}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  className={inputClasses}
                  {...register("phone")}
                />
              </div>

              <div>
                <label htmlFor="guests" className={labelClasses}>
                  Guests
                </label>
                <select
                  id="guests"
                  className={inputClasses}
                  {...register("guests")}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="checkin" className={labelClasses}>
                  Check-in *
                </label>
                <input
                  id="checkin"
                  type="date"
                  className={inputClasses}
                  {...register("checkin", {
                    required: "Check-in date is required",
                  })}
                />
                {errors.checkin && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.checkin.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="checkout" className={labelClasses}>
                  Check-out *
                </label>
                <input
                  id="checkout"
                  type="date"
                  className={inputClasses}
                  {...register("checkout", {
                    required: "Check-out date is required",
                  })}
                />
                {errors.checkout && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.checkout.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className={labelClasses}>
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your trip — group size, special occasions, anything we should know..."
                className={inputClasses}
                {...register("message")}
              />
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-background-deep text-base font-medium uppercase tracking-wider hover:bg-accent-light transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40 cursor-pointer"
              >
                <Send size={18} />
                Send Inquiry
              </button>
            </div>
          </motion.form>
        )}
      </Container>
    </section>
  );
}
