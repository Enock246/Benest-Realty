import { Property } from '@/types/property';

const apartment3: Property = {
  id: 'apartment-3',
  slug: '1-bedroom-kass-towers',
  name: '1-Bedroom Apartment at Kass Towers',
  tagline: 'Premium fully furnished apartment just 3 minutes from the airport.',
  status: 'For Rent',
  price: 140,
  priceUnit: 'per day',
  specs: {
    beds: 1,
    baths: 1,
    sqft: 850,
    parking: 1
  },
  address: 'Airport Residential Area',
  
  images: {
    hero: '/assets/apartment-3/area-1.jpeg',
    gallery: 
  },
  highlights: [
    'City Views'
  ],
  amenities: [
    'Fully Furnished',
    '3 mins from Airport',
    'Air Conditioning',
    'High-Speed Wi-Fi',
    '24/7 Security'
  ],
  description: 'Experience luxury and convenience in this beautifully furnished 1-bedroom apartment located in the prestigious Kass Towers. Situated in the Airport Residential Area, you are just a 3-minute drive from the airport, making it perfect for short stays and business trips.'
};

export default apartment3;
