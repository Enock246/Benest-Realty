import { Property } from '@/types/property';

const apartment4: Property = {
  id: 'apartment-4',
  slug: '2-bedroom-13th-floor-kass-towers',
  name: '2-Bedroom Apartment at Kass Towers',
  tagline: 'Exclusive 13th-floor luxury living with stunning city views.',
  status: 'For Rent',
  price: 200,
  priceUnit: 'per day',
  specs: {
    beds: 2,
    baths: 2,
    sqft: 1200,
    parking: 1
  },
  address: 'Airport Residential Area',
  
  images: {
    hero: '/assets/apartment-4/area-1.jpeg',
    gallery: 
  },
  highlights: [
    '13th Floor Views'
  ],
  amenities: [
    'Fully Furnished',
    '13th Floor Views',
    'Air Conditioning',
    'High-Speed Wi-Fi',
    '24/7 Security'
  ],
  description: 'Elevate your stay in this stunning 2-bedroom furnished apartment located on the 13th floor of Kass Towers. Enjoy panoramic views of the city, premium modern furnishings, and the ultimate convenience of the Airport Residential Area.'
};

export default apartment4;
