import { createArtwork } from '../controllers/cartUtils'

export const categories = [
  { name: 'Electronics', count: 18, accent: '#b6ff00', label: 'EL' },
  { name: 'Clothing', count: 24, accent: '#9cf94f', label: 'CL' },
  { name: 'Furniture', count: 10, accent: '#d8ff77', label: 'FU' },
  { name: 'Home', count: 14, accent: '#83ef2d', label: 'HM' },
  { name: 'Sports', count: 12, accent: '#c6ff52', label: 'SP' },
  { name: 'Accessories', count: 21, accent: '#ecff9c', label: 'AC' },
]

export const features = [
  {
    title: 'Fast Delivery',
    description: 'Lightning-fast handling with smooth doorstep delivery across major cities.',
  },
  {
    title: 'Secure Payments',
    description: 'A polished checkout-ready experience with safe and trusted payment flow later.',
  },
  {
    title: 'Best Prices',
    description: 'Premium products with standout pricing and deal-first visual presentation.',
  },
]

export const products = [
  {
    id: 1,
    name: 'AeroPulse Wireless Headphones',
    price: 12999,
    category: 'Electronics',
    rating: 4.8,
    image: createArtwork('01', '#b6ff00', '#5b6e00'),
    description:
      'Immersive wireless sound with rich bass, active comfort padding, and all-day battery life for work, gaming, and travel.',
    badge: 'Top Rated',
    isNew: false,
    featured: true,
    stock: 18,
  },
  {
    id: 2,
    name: 'Lumen Smart Watch',
    price: 8999,
    category: 'Accessories',
    rating: 4.7,
    image: createArtwork('02', '#d8ff77', '#435000'),
    description:
      'A refined smartwatch with fitness tracking, clean notifications, and a crisp always-ready display.',
    badge: 'New',
    isNew: true,
    featured: true,
    stock: 25,
  },
  {
    id: 3,
    name: 'Carbon Fit Running Shoes',
    price: 7499,
    category: 'Sports',
    rating: 4.6,
    image: createArtwork('03', '#83ef2d', '#273000'),
    description:
      'Breathable running shoes with soft cushioning and a stable grip built for daily miles and training sessions.',
    badge: 'Top Rated',
    isNew: false,
    featured: true,
    stock: 40,
  },
  {
    id: 4,
    name: 'Nord Desk Lamp',
    price: 3599,
    category: 'Home',
    rating: 4.5,
    image: createArtwork('04', '#9cf94f', '#2d3900'),
    description:
      'Minimal task lamp with warm-to-cool lighting modes and a premium matte finish for modern desks.',
    badge: 'New',
    isNew: true,
    featured: false,
    stock: 14,
  },
  {
    id: 5,
    name: 'Studio Grid Hoodie',
    price: 4299,
    category: 'Clothing',
    rating: 4.6,
    image: createArtwork('05', '#ecff9c', '#505800'),
    description:
      'A heavyweight hoodie with a relaxed silhouette, soft interior fleece, and clean street-ready styling.',
    badge: 'Popular',
    isNew: false,
    featured: true,
    stock: 30,
  },
  {
    id: 6,
    name: 'Orbit Bluetooth Speaker',
    price: 5799,
    category: 'Electronics',
    rating: 4.9,
    image: createArtwork('06', '#b6ff00', '#556300'),
    description:
      'Portable speaker with punchy audio, water resistance, and crisp sound that fills your room or terrace.',
    badge: 'Top Rated',
    isNew: false,
    featured: true,
    stock: 19,
  },
  {
    id: 7,
    name: 'Velvet Accent Chair',
    price: 15999,
    category: 'Furniture',
    rating: 4.4,
    image: createArtwork('07', '#d8ff77', '#2f3500'),
    description:
      'Sculpted lounge chair with premium upholstery, plush cushioning, and a bold modern profile.',
    badge: 'Statement',
    isNew: true,
    featured: false,
    stock: 8,
  },
  {
    id: 8,
    name: 'Trail Pro Backpack',
    price: 4999,
    category: 'Accessories',
    rating: 4.7,
    image: createArtwork('08', '#9cf94f', '#384100'),
    description:
      'Durable all-day backpack with laptop protection, weather resistance, and a clean utility design.',
    badge: 'New',
    isNew: true,
    featured: true,
    stock: 27,
  },
  {
    id: 9,
    name: 'Smart Kitchen Kettle',
    price: 3199,
    category: 'Home',
    rating: 4.5,
    image: createArtwork('09', '#c6ff52', '#314100'),
    description:
      'Fast-boil kettle with an elegant steel finish, auto shutoff, and easy pour precision.',
    badge: 'Popular',
    isNew: false,
    featured: false,
    stock: 22,
  },
  {
    id: 10,
    name: 'Motion Track Joggers',
    price: 2999,
    category: 'Clothing',
    rating: 4.3,
    image: createArtwork('10', '#83ef2d', '#2d3c00'),
    description:
      'Soft joggers with flexible stretch, lightweight feel, and a tapered fit for everyday movement.',
    badge: 'New',
    isNew: true,
    featured: false,
    stock: 36,
  },
  {
    id: 11,
    name: 'ProFlex Dumbbell Set',
    price: 10999,
    category: 'Sports',
    rating: 4.8,
    image: createArtwork('11', '#b6ff00', '#3d5100'),
    description:
      'Compact adjustable dumbbells built for home training, progressive workouts, and clean storage.',
    badge: 'Top Rated',
    isNew: false,
    featured: true,
    stock: 11,
  },
  {
    id: 12,
    name: 'Aurora Desk Organizer',
    price: 2199,
    category: 'Home',
    rating: 4.2,
    image: createArtwork('12', '#ecff9c', '#576500'),
    description:
      'A tidy desk organizer for accessories, stationery, and everyday essentials with a refined matte look.',
    badge: 'Popular',
    isNew: false,
    featured: false,
    stock: 44,
  },
]

export const topRatedProducts = products.filter((product) => product.rating >= 4.7)
export const newArrivals = products.filter((product) => product.isNew)
