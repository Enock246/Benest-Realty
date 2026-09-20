const fs = require('fs');

const apt3Imgs = fs.readdirSync('public/assets/apartment-3').filter(f => f.endsWith('.jpeg')).map(f => '/assets/apartment-3/' + f);
const apt3Content = `import { Property } from '@/types/property';

const apartment3: Property = {
  id: 'apartment-3',
  slug: '1-bedroom-kass-towers',
  name: '1-Bedroom Apartment at Kass Towers',
  tagline: 'Premium fully furnished apartment just 3 minutes from the airport.',
  status: 'For Rent',
  price: 140,
  priceUnit: 'per night',
  specs: {
    beds: 1,
    baths: 1,
    sqft: 850
  },
  location: 'Airport Residential Area',
  coverImage: '${apt3Imgs[0]}',
  images: ${JSON.stringify(apt3Imgs, null, 4)},
  features: [
    'Fully Furnished',
    '3 mins from Airport',
    'Air Conditioning',
    'High-Speed Wi-Fi',
    '24/7 Security'
  ],
  description: 'Experience luxury and convenience in this beautifully furnished 1-bedroom apartment located in the prestigious Kass Towers. Situated in the Airport Residential Area, you are just a 3-minute drive from the airport, making it perfect for short stays and business trips.'
};

export default apartment3;
`;
fs.writeFileSync('src/data/properties/apartment-3.ts', apt3Content);

const apt4Imgs = fs.readdirSync('public/assets/apartment-4').filter(f => f.endsWith('.jpeg')).map(f => '/assets/apartment-4/' + f);
const apt4Content = `import { Property } from '@/types/property';

const apartment4: Property = {
  id: 'apartment-4',
  slug: '2-bedroom-13th-floor-kass-towers',
  name: '2-Bedroom Apartment at Kass Towers',
  tagline: 'Exclusive 13th-floor luxury living with stunning city views.',
  status: 'For Rent',
  price: 200,
  priceUnit: 'per night',
  specs: {
    beds: 2,
    baths: 2,
    sqft: 1200
  },
  location: 'Airport Residential Area',
  coverImage: '${apt4Imgs[0]}',
  images: ${JSON.stringify(apt4Imgs, null, 4)},
  features: [
    'Fully Furnished',
    '13th Floor Views',
    'Air Conditioning',
    'High-Speed Wi-Fi',
    '24/7 Security'
  ],
  description: 'Elevate your stay in this stunning 2-bedroom furnished apartment located on the 13th floor of Kass Towers. Enjoy panoramic views of the city, premium modern furnishings, and the ultimate convenience of the Airport Residential Area.'
};

export default apartment4;
`;
fs.writeFileSync('src/data/properties/apartment-4.ts', apt4Content);

const indexContent = `import { Property } from '@/types/property';
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
`;
fs.writeFileSync('src/data/index.ts', indexContent);

console.log('Data files created successfully!');
