import { Property } from "@/types/property";

const apartment2: Property = {
  id: "apartment-2",
  slug: "luxury-short-stay-apartment",
  name: "Luxury Short-Stay Apartment",
  tagline: "Your perfect urban oasis on Boundary Road, East Legon",
  status: "For Rent",
  price: 200,
  priceUnit: "per day",
  address: "Boundary Road, East Legon, Accra",
  specs: {
    beds: 2,
    baths: 2,    // Placeholder — update when confirmed
    sqft: null,  // To be updated
    parking: 1,  // Placeholder
  },
  description: `Experience unmatched comfort and style in this stunning, fully furnished 2-bedroom apartment located right on the vibrant Boundary Road, East Legon.

Whether you are traveling for business, a staycation, or a holiday, this space is designed to be your perfect urban oasis.

Every detail has been carefully curated to provide an elevated living experience — from the contemporary interiors to the premium amenities — ensuring your stay is nothing short of extraordinary.`,
  highlights: [
    "Fully furnished and move-in ready",
    "Prime location on Boundary Road, East Legon",
    "Ideal for business travel, staycations, and holidays",
    "Contemporary interiors with premium finishes",
    "2 spacious bedrooms",
    "Flexible short-stay pricing at $200/day",
  ],
  amenities: [
    "Fully Furnished",
    "Swimming Pool",
    "24/7 Security",
    "High-Speed WiFi",
    "Air Conditioning",
    "Modern Kitchen",
    "Parking",
    "Concierge Service",
  ],
  images: {
    hero: "/assets/apartment-2/hero.jpeg",
    gallery: [
      // Place 9 does not exist in source — skipped
      ...[1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(
        (n) => `/assets/apartment-2/place-${n}.jpeg`
      ),
      "/assets/apartment-2/side.jpeg",
    ],
  },
};

export default apartment2;
