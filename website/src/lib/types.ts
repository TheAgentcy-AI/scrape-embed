export interface Amenity {
  icon: string;
  label: string;
}

export interface PricingSeason {
  name: string;
  dateRange: string;
  nightlyRate: string;
  minStay: string;
  highlighted?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  tripType: string;
  rating: number;
}

export interface GalleryImage {
  id: number;
  alt: string;
  aspect: "landscape" | "portrait" | "square";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ExperienceBlock {
  time: string;
  title: string;
  description: string;
}
