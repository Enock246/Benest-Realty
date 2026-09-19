import { Property } from "@/types/property";

const apartment1: Property = {
  id: "apartment-1",
  slug: "luxurious-2-bedroom-apartment",
  name: "Luxurious 2-Bedroom Apartment",
  tagline: "Ultimate comfort and modern style in an exclusive high-rise",
  status: "For Rent",
  price: 3500,
  priceUnit: "per month",
  address: null, // To be updated
  specs: {
    beds: 2,
    baths: 2,    // Placeholder — update when confirmed
    sqft: null,  // To be updated
    parking: 1,  // Placeholder
  },
  description: `Experience ultimate comfort and modern style in this spacious 2-bedroom home.

Spacious Bedrooms: Light-filled rooms featuring hardwood floors, stylish decor, and premium finishes.

Gourmet Kitchen: Fully equipped with stainless steel appliances, granite countertops, an in-unit washer, and a breakfast bar.

Modern Bathrooms & Dining: Includes an elegant en-suite with double vanity sinks and a dedicated dining area surrounded by natural light.

Secure High-Rise Living: Located in an exclusive, modern building with 24/7 security and beautiful grounds.`,
  highlights: [
    "Light-filled bedrooms with hardwood floors and premium finishes",
    "Gourmet kitchen with stainless steel appliances and granite countertops",
    "In-unit washer and breakfast bar",
    "Elegant en-suite bathroom with double vanity sinks",
    "Dedicated dining area with natural light",
    "24/7 security in an exclusive, modern high-rise",
  ],
  amenities: [
    "24/7 Security",
    "In-Unit Washer",
    "Gourmet Kitchen",
    "Hardwood Floors",
    "En-Suite Bathroom",
    "Breakfast Bar",
    "Beautiful Grounds",
    "Modern Building",
  ],
  images: {
    hero: "/assets/apartment-1/hero.jpeg",
    gallery: Array.from({ length: 27 }, (_, i) => {
      // Map sequential indices to actual file numbers (24 is missing)
      const fileNumbers = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 25, 26, 27,
      ];
      return `/assets/apartment-1/area-${fileNumbers[i]}.jpeg`;
    }).filter(Boolean),
  },
};

export default apartment1;
