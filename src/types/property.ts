export type PropertyStatus = "For Rent" | "For Sale" | "Sold" | "Off Market";
export type PriceUnit = "per day" | "per month" | "per year" | "on request";

export interface PropertySpecs {
  beds: number | null;
  baths: number | null;
  sqft: number | null;
  parking: number | null;
  floors?: number | null;
}

export interface PropertyImages {
  hero: string;
  gallery: string[];
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  status: PropertyStatus;
  price: number | null;
  priceUnit: PriceUnit;
  address: string | null;
  specs: PropertySpecs;
  description: string;
  highlights: string[];
  amenities: string[];
  images: PropertyImages;
}
