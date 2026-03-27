import type {
  NavLink,
  Amenity,
  ExperienceBlock,
  GalleryImage,
  Testimonial,
  PricingSeason,
} from "./types";

export const SITE = {
  name: "Peak Haus",
  tagline: "The Only Private Luxury Home at Jay Peak",
  description:
    "Four bedrooms. Ski-in, ski-out. Private sauna & hot tub. The only luxury single-family home at Jay Peak, Vermont.",
  email: "stay@peakhaus.com",
  phone: "(802) 555-0100",
  address: "Jay Peak Resort Area, Jay, Vermont 05859",
  instagram: "#",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Experience", href: "#experience" },
  { label: "The Home", href: "#property" },
  { label: "Gallery", href: "#gallery" },
  { label: "Jay Peak", href: "#location" },
  { label: "Pricing", href: "#pricing" },
  { label: "Book", href: "#booking" },
];

export const HERO = {
  badge: "THE ONLY PRIVATE LUXURY HOME AT JAY PEAK",
  headline: "Peak Haus",
  subheadline:
    "Four bedrooms. Ski-in, ski-out. Sauna & hot tub. One of a kind.",
  cta: "Reserve Your Stay",
};

export const EXPERIENCE: ExperienceBlock[] = [
  {
    time: "Morning",
    title: "First Chair",
    description:
      "Step out your door onto fresh corduroy. No shuttles, no lift lines — just you and 356 inches of annual snowfall. Jay Peak's 78 trails are your front yard.",
  },
  {
    time: "Afternoon",
    title: "Come Home",
    description:
      "Return to your own living room, not a hotel lobby. A full gourmet kitchen, a crackling fireplace, and space for everyone to spread out across four bedrooms.",
  },
  {
    time: "Evening",
    title: "Final Soak",
    description:
      "From the private sauna to the hot tub under the stars. No crowds, no waiting, no reservations required. This is the ritual that makes Peak Haus unforgettable.",
  },
];

export const AMENITIES: Amenity[] = [
  { icon: "Bed", label: "4 Bedrooms" },
  { icon: "Mountain", label: "Ski-In / Ski-Out" },
  { icon: "Flame", label: "Private Sauna" },
  { icon: "Bath", label: "Hot Tub" },
  { icon: "ChefHat", label: "Full Kitchen" },
  { icon: "Lamp", label: "Fireplace" },
  { icon: "Eye", label: "Mountain Views" },
  { icon: "Users", label: "Sleeps 10" },
  { icon: "Wifi", label: "High-Speed WiFi" },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, alt: "Living room with mountain views", aspect: "landscape" },
  { id: 2, alt: "Master bedroom suite", aspect: "landscape" },
  { id: 3, alt: "Gourmet kitchen", aspect: "landscape" },
  { id: 4, alt: "Private sauna", aspect: "portrait" },
  { id: 5, alt: "Hot tub under the stars", aspect: "landscape" },
  { id: 6, alt: "Ski-in access from the door", aspect: "portrait" },
  { id: 7, alt: "Cozy fireplace", aspect: "square" },
  { id: 8, alt: "Snowy exterior", aspect: "landscape" },
  { id: 9, alt: "Dining area", aspect: "square" },
];

export const LOCATION = {
  stat: "356",
  statLabel: "inches of annual snowfall",
  heading: "Jay Peak, Vermont",
  description:
    "Jay Peak is the East Coast's best-kept secret — more natural snow than any resort east of the Rockies, uncrowded trails, and world-class glades. Peak Haus puts you at the center of it all.",
  highlights: [
    "78 trails across 385 acres of skiable terrain",
    "60+ glades — the best tree skiing in the East",
    "Indoor waterpark, ice arena & climbing wall at the resort",
    "Charming villages and local dining nearby",
  ],
  distances: [
    { city: "Montreal", time: "2 hrs" },
    { city: "Boston", time: "3.5 hrs" },
    { city: "NYC", time: "5.5 hrs" },
  ],
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We've stayed at ski lodges all over New England. Nothing compares. Walking out the door to the slopes, then ending the day in a private sauna — it's a completely different experience.",
    name: "Sarah & James T.",
    tripType: "Family ski trip, February 2025",
    rating: 5,
  },
  {
    quote:
      "Booked Peak Haus for a team offsite. The space is incredible — four bedrooms, a real kitchen, and the hot tub after a day on the mountain sealed the deal. Already rebooked for next season.",
    name: "Michael R.",
    tripType: "Corporate retreat, January 2025",
    rating: 5,
  },
  {
    quote:
      "As Montrealers, we've been skiing Jay for years but always stayed in hotels. Peak Haus changed everything. It's only 2 hours away and feels like our own mountain home. C'est magnifique.",
    name: "Luc & Marie D.",
    tripType: "Couples weekend, March 2025",
    rating: 5,
  },
];

export const PRICING: PricingSeason[] = [
  {
    name: "Holiday",
    dateRange: "Christmas & Presidents' Week",
    nightlyRate: "$750",
    minStay: "5-night minimum",
    highlighted: true,
  },
  {
    name: "Peak",
    dateRange: "Jan–Mar Weekends",
    nightlyRate: "$600",
    minStay: "3-night minimum",
  },
  {
    name: "Regular",
    dateRange: "Jan–Mar Midweek",
    nightlyRate: "$450",
    minStay: "2-night minimum",
  },
  {
    name: "Early / Late",
    dateRange: "Nov–Dec & April",
    nightlyRate: "$350",
    minStay: "2-night minimum",
  },
];

export const PROPERTY = {
  heading: "A Category of One",
  description:
    "Peak Haus isn't a condo, a timeshare, or a hotel room. It's a private luxury home — the only one of its kind at Jay Peak. Four bedrooms, a full gourmet kitchen, a private sauna, a hot tub, and true ski-in/ski-out access. No shared walls, no lobby, no compromises.",
};
