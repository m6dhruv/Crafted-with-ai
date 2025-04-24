import { FaFemale, FaMale, FaPalette, FaGem, FaSpa } from 'react-icons/fa';
import { RiScissorsCutFill } from 'react-icons/ri';
import { BsScissors } from 'react-icons/bs';

// Initial services data to be used across the application
const defaultServiceCategories = [
  {
    id: 'hair-women',
    title: 'Hair Services (Women)',
    icon: 'FaFemale',
    services: [
      { id: 1, name: 'Hair Cut', price: '₹800' },
      { id: 2, name: 'Child Hair Cut (1-10 years)', price: '₹500' },
      { id: 3, name: 'Hair Wash + Blast Dry', price: '₹500' },
      { id: 4, name: 'Hair Wash + Blow Dry', price: '₹800' },
      { id: 5, name: 'Ultimate Blow Dry', price: '₹400' },
      { id: 6, name: 'Elegant Hair Wash', price: '₹200' },
      { id: 7, name: 'Iron / Tong / Crimp Finishing', price: '₹1000' },
      { id: 8, name: 'Hot Oil Massage', price: '₹600' }
    ]
  },
  {
    id: 'hair-treatments',
    title: 'Hair Treatments',
    icon: null,
    services: [
      { id: 9, name: 'Fair Spa (Straightening)', price: '₹1500' },
      { id: 10, name: 'Dandruff Treatment', price: '₹1500' },
      { id: 11, name: 'Rebonding', price: '₹1000' },
      { id: 12, name: 'Straightening', price: '₹6000' },
      { id: 13, name: 'Smoothening', price: '₹6000' },
      { id: 14, name: 'Keratin Treatment', price: '₹6000' }
    ]
  },
  {
    id: 'hair-coloring',
    title: 'Hair Colouring',
    icon: 'FaPalette',
    services: [
      { id: 15, name: 'Highlights (Per Foil)', price: '₹400' },
      { id: 16, name: 'Root Touch-Up (with Ammonia)', price: '₹1200' },
      { id: 17, name: 'Highlights Crown', price: '₹3000' },
      { id: 18, name: 'Global Hair Colour (with Ammonia)', price: '₹4000' },
      { id: 19, name: 'Balayage / Highlights', price: '₹6000' }
    ]
  },
  {
    id: 'threading',
    title: 'Threading (Women)',
    icon: 'RiScissorsCutFill',
    services: [
      { id: 20, name: 'Chin', price: '₹70' },
      { id: 21, name: 'Upper Lips', price: '₹50' },
      { id: 22, name: 'Forehead', price: '₹50' },
      { id: 23, name: 'Eyebrow', price: '₹70' },
      { id: 24, name: 'Side Locks', price: '₹100' },
      { id: 25, name: 'Full Face', price: '₹300' }
    ]
  },
  {
    id: 'waxing',
    title: 'Waxing (Women)',
    icon: null,
    services: [
      { id: 26, name: 'Eyebrow', price: '₹150' },
      { id: 27, name: 'Upper Lips', price: '₹80 - ₹100' },
      { id: 28, name: 'Forehead', price: '₹100 - ₹120' },
      { id: 29, name: 'Side Locks', price: '₹200 - ₹250' },
      { id: 30, name: 'Jawline', price: '₹100 - ₹120' },
      { id: 31, name: 'Full Face', price: '₹400 - ₹550' },
      { id: 32, name: 'Underarms', price: '₹100 - ₹250' },
      { id: 33, name: 'Full Hand', price: '₹400 - ₹500' },
      { id: 34, name: 'Stomach', price: '₹500 - ₹600' },
      { id: 35, name: 'Full Front', price: '₹700 - ₹1000' },
      { id: 36, name: 'Full Back', price: '₹700 - ₹1000' },
      { id: 37, name: 'Half Legs', price: '₹400 - ₹500' },
      { id: 38, name: 'Full Legs', price: '₹800 - ₹1200' },
      { id: 39, name: 'Bikini', price: '₹1000 - ₹1300' },
      { id: 40, name: 'Full Body', price: '₹3200 - ₹3600' }
    ]
  },
  {
    id: 'bridal',
    title: 'Bridal Packages',
    icon: null,
    services: [
      { id: 41, name: 'Wedding', price: '₹12,000 - ₹25,000' },
      { id: 42, name: 'Reception', price: '₹1200 - ₹25,000' },
      { id: 43, name: 'Sangeet', price: '₹1200 - ₹25,000' },
      { id: 44, name: 'Siders', price: '₹5000 - ₹10,000' },
      { id: 45, name: 'Trail', price: '₹3000 - ₹5000' },
      { id: 46, name: 'Hairdo Only', price: '₹2500 - ₹3000' }
    ],
    note: 'Includes: Makeup, Hairdo, Real Flowers, Eyelashes, Colored Lens, Bindi, Hair Extensions, Accessories, Body Foundation'
  },
  {
    id: 'facial',
    title: 'Facial & Skin Care',
    icon: 'FaSpa',
    services: [
      { id: 47, name: 'Clean Up', price: '₹800' },
      { id: 48, name: 'Fruit Facial (Organic)', price: '₹1500' },
      { id: 49, name: 'Anti-Tan Facial', price: '₹2500' },
      { id: 50, name: 'Whitening Facial', price: '₹3500' },
      { id: 51, name: 'Advance Facial', price: '₹5000' }
    ]
  },
  {
    id: 'detan',
    title: 'Detan / Bleach / Body Pack',
    icon: null,
    services: [
      { id: 52, name: 'Face', price: '₹500 - ₹600' },
      { id: 53, name: 'Face + Neck', price: '₹600 - ₹750' },
      { id: 54, name: 'Underarm', price: '₹250 - ₹300' },
      { id: 55, name: 'Full Hand', price: '₹700 - ₹800' },
      { id: 56, name: 'Full Legs', price: '₹1000 - ₹1200' },
      { id: 57, name: 'Stomach', price: '₹700 - ₹800' },
      { id: 58, name: 'Full Front', price: '₹1000 - ₹1200' },
      { id: 59, name: 'Full Back', price: '₹1000 - ₹1200' },
      { id: 60, name: 'Full Body', price: '₹3000 - ₹3500' }
    ]
  },
  {
    id: 'nails',
    title: 'Nails & Hands/Feet',
    icon: 'FaGem',
    services: [
      { id: 61, name: 'Manicure / Pedicure (Women) - Spa', price: '₹700 - ₹800' },
      { id: 62, name: 'Manicure / Pedicure (Women) - Express', price: '₹900 - ₹1100' },
      { id: 63, name: 'Manicure / Pedicure (Women) - Crystal', price: '₹1600 - ₹2000' },
      { id: 64, name: 'Manicure / Pedicure (Women) - Advance Care', price: '₹1900 - ₹2500' },
      { id: 65, name: 'Cut + Cuticle + Paint', price: '₹500 / ₹400' },
      { id: 66, name: 'Gel Nail Paint', price: '₹700 / ₹600' },
      { id: 67, name: 'Nail Art', price: '₹250 / ₹150' },
      { id: 68, name: 'Temporary Nail Extension', price: '₹1500 / ₹1200' },
      { id: 69, name: 'Acrylic Nail Extension', price: '₹3000 / ₹1200' }
    ]
  },
  {
    id: 'men-hair',
    title: 'Hair Services (Men)',
    icon: 'FaMale',
    services: [
      { id: 70, name: 'Haircut', price: '₹350' },
      { id: 71, name: 'Hair Wash', price: '₹200' },
      { id: 72, name: 'Hair Spa', price: '₹1000' },
      { id: 73, name: 'Oil Massage', price: '₹700' },
      { id: 74, name: 'Beard', price: '₹150' },
      { id: 75, name: 'Highlight per Strip', price: '₹400' },
      { id: 76, name: 'Hair Colour (with Ammonia)', price: '₹1000' },
      { id: 77, name: 'Hair Colour (Ammonia-Free)', price: '₹1200' },
      { id: 78, name: 'Keratin', price: '₹3000' },
      { id: 79, name: 'Dandruff Treatment', price: '₹1500' },
      { id: 80, name: 'Power Mix', price: '₹1500' },
      { id: 81, name: 'Smoothening', price: '₹3000' }
    ]
  },
  {
    id: 'men-skin',
    title: 'Skin & Grooming (Men)',
    icon: 'BsScissors',
    services: [
      { id: 82, name: 'D-Tan', price: '₹800' },
      { id: 83, name: 'Facial', price: '₹2000' },
      { id: 84, name: 'Advance Facial', price: '₹5000' },
      { id: 85, name: 'Whitening Facial', price: '₹3500' },
      { id: 86, name: 'Tan Removal Facial', price: '₹2500' },
      { id: 87, name: 'Manicure / Pedicure (Men) - Crystal Spa', price: '₹1600 - ₹2000' },
      { id: 88, name: 'Manicure / Pedicure (Men) - Advance', price: '₹1900 - ₹2500' }
    ]
  }
];

// Icon components mapping
export const iconComponents = {
  FaFemale,
  FaMale,
  FaPalette,
  FaGem,
  FaSpa,
  RiScissorsCutFill,
  BsScissors
};

// Helper to get icon component by name
export const getIconComponent = (iconName) => {
  return iconComponents[iconName] || null;
};

// Local storage helpers
const STORAGE_KEY = 'precious-salon-services';

// Save services data to localStorage
export const saveServicesToStorage = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// Get services data from localStorage or default if none exists
export const getServicesFromStorage = () => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : defaultServiceCategories;
};

// Initialize services if needed
export const initializeServices = () => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    saveServicesToStorage(defaultServiceCategories);
  }
  return getServicesFromStorage();
};

export default defaultServiceCategories; 