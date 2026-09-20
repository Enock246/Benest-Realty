import { Property } from '@/types/property';

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
  coverImage: '/assets/apartment-3/area-1.jpeg',
  images: [
    "/assets/apartment-3/area-1.jpeg",
    "/assets/apartment-3/area-10.jpeg",
    "/assets/apartment-3/area-2.jpeg",
    "/assets/apartment-3/area-3.jpeg",
    "/assets/apartment-3/area-4.jpeg",
    "/assets/apartment-3/area-5.jpeg",
    "/assets/apartment-3/area-6.jpeg",
    "/assets/apartment-3/area-7.jpeg",
    "/assets/apartment-3/area-8.jpeg",
    "/assets/apartment-3/area-9.jpeg"
],
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
