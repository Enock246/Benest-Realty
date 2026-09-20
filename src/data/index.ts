import { Property } from '@/types/property';
import apartment1 from './properties/apartment-1';
import apartment2 from './properties/apartment-2';
import apartment3 from './properties/apartment-3';
import apartment4 from './properties/apartment-4';

export const properties: Property[] = [apartment1, apartment2, apartment3, apartment4];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getFeaturedProperties(count: number = 2): Property[] {
  return properties.slice(0, count);
}

export { apartment1, apartment2, apartment3, apartment4 };
