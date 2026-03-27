import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { PropertyDetails } from "@/components/sections/PropertyDetails";
import { Gallery } from "@/components/sections/Gallery";
import { Location } from "@/components/sections/Location";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { BookingForm } from "@/components/sections/BookingForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <PropertyDetails />
      <Gallery />
      <Location />
      <Testimonials />
      <Pricing />
      <BookingForm />
    </>
  );
}
