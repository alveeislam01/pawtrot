import { Flavor, Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'chicken-delight',
    name: 'Tender Chicken Delight',
    flavor: Flavor.CHICKEN,
    slogan: 'The purr-fect blend of nutrition and taste.',
    description: 'Rich, Meaty Flavor Cats Crave. Real Chicken as #1 Ingredient. Made for Picky Kitties!',
    price: 475,
    weight: '1.5 kg',
    sku: 'FZN-CHK-1500G',
    imageColor: 'bg-pawtrot-chickenBg',
    starburstColor: 'bg-pawtrot-badgePink',
    rating: 4.9,
    reviews: 128,
    isGrainFree: true,
    catImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop', // Tuxedo cat
    foodImage: '/new_menue/chicken.jpeg',
    variants: [
      { weight: '300 g', price: 120, sku: 'FZN-CHK-300G' },
      { weight: '1.5 kg', price: 475, sku: 'FZN-CHK-1500G' },
      { weight: '3 kg', price: 900, sku: 'FZN-CHK-3000G' }
    ]
  },
  {
    id: 'beef-banquet',
    name: 'Savory Beef Bite',
    flavor: Flavor.BEEF,
    slogan: 'Savory Beef Bite — Rich, Meaty Flavor Cats Crave.',
    description: 'Real Beef as #1 Ingredient. A hearty meal for active cats.',
    price: 550,
    weight: '1.5 kg',
    sku: 'FZN-BEF-1500G',
    imageColor: 'bg-pawtrot-beefBg',
    starburstColor: 'bg-pawtrot-badgePink', 
    rating: 4.6,
    reviews: 84,
    isGrainFree: true,
    // Using a reliable tabby cat image
    catImage: 'https://images.unsplash.com/photo-1519052537078-e6302a4968ef?q=80&w=600&auto=format&fit=crop', 
    // Local beef image
    foodImage: '/new_menue/beef.jpeg', 
    variants: [
      { weight: '300 g', price: 155, sku: 'FZN-BEF-300G' },
      { weight: '1.5 kg', price: 550, sku: 'FZN-BEF-1500G' },
      { weight: '3 kg', price: 1050, sku: 'FZN-BEF-3000G' }
    ]
  },
  {
    id: 'tuna-treats',
    name: 'Ocean-Fresh Tuna',
    flavor: Flavor.TUNA,
    slogan: 'Ocean-Fresh Tuna Taste Your Cat Will Love.',
    description: 'Real Tuna as #1 Ingredient. Packed with essential Omega-3s for a healthy coat.',
    price: 650,
    weight: '1.5 kg',
    sku: 'FZN-TUN-1500G',
    imageColor: 'bg-pawtrot-blue',
    starburstColor: 'bg-pawtrot-badgeYellow',
    rating: 4.7,
    reviews: 210,
    isGrainFree: true,
    catImage: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=600&auto=format&fit=crop', 
    foodImage: '/new_menue/tuna.jpeg',
    variants: [
      { weight: '300 g', price: 220, sku: 'FZN-TUN-300G' },
      { weight: '1.5 kg', price: 650, sku: 'FZN-TUN-1500G' },
      { weight: '3 kg', price: 1100, sku: 'FZN-TUN-3000G' }
    ]
  },
  {
    id: 'salmon-feast',
    name: 'Succulent Salmon',
    flavor: Flavor.SALMON,
    slogan: 'Rich in Omega-3 for a Shiny Coat.',
    description: 'Premium quality frozen salmon. The ultimate feast for seafood lovers.',
    price: 675,
    weight: '1.5 kg',
    sku: 'FZN-SAL-1500G',
    imageColor: 'bg-pawtrot-pink',
    starburstColor: 'bg-pawtrot-badgeYellow',
    rating: 4.8,
    reviews: 95,
    isGrainFree: true,
    catImage: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=600&auto=format&fit=crop',
    foodImage: '/new_menue/salmon.jpeg',
    variants: [
      { weight: '300 g', price: 250, sku: 'FZN-SAL-300G' },
      { weight: '1.5 kg', price: 675, sku: 'FZN-SAL-1500G' },
      { weight: '3 kg', price: 1325, sku: 'FZN-SAL-3000G' }
    ]
  },
  {
    id: 'shrimp-sensation',
    name: 'Savory Shrimp',
    flavor: Flavor.SHRIMP,
    slogan: 'Savory Shrimp Taste for Seafood-Loving Cats.',
    description: 'Real Shrimp as #1 Ingredient. A unique and delightful flavor for variety.',
    price: 700,
    weight: '1.5 kg',
    sku: 'FZN-SHR-1500G',
    imageColor: 'bg-pawtrot-shrimpBg',
    starburstColor: 'bg-pawtrot-badgePink',
    rating: 4.9,
    reviews: 42,
    isGrainFree: true,
    // Reliable cat image
    catImage: 'https://images.unsplash.com/photo-1511044568932-338cba0fb803?q=80&w=600&auto=format&fit=crop',
    // Local shrimp image
    foodImage: '/new_menue/shrimp.jpeg',
    variants: [
      { weight: '300 g', price: 260, sku: 'FZN-SHR-300G' },
      { weight: '1.5 kg', price: 700, sku: 'FZN-SHR-1500G' },
      { weight: '3 kg', price: 1350, sku: 'FZN-SHR-3000G' }
    ]
  },
];

export const BENEFITS = [
  { title: 'Healthy Digestion', icon: 'check-circle' },
  { title: 'Shiny Coat', icon: 'sparkles' },
  { title: 'Strong Muscles', icon: 'biceps' }, 
  { title: 'Immune Support', icon: 'shield' },
];