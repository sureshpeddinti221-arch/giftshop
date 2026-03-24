import { Product, Category, Occasion } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Photo Gifts', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400' },
  { id: '2', name: 'Crystal & Acrylic Gifts', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'Mugs & Drinkware', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=400' },
  { id: '4', name: 'Keychains', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400' },
  { id: '5', name: 'Combo Gifts', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400' },
  { id: '6', name: 'Jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400' },
  { id: '7', name: 'Office & Utility Gifts', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=400' },
  { id: '8', name: 'Unique Gifts', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80&w=400' },
  { id: '9', name: 'Soft Gifts', image: 'https://images.unsplash.com/photo-1534127392961-2409c672af1b?auto=format&fit=crop&q=80&w=400' },
  { id: '10', name: 'Clocks', image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=400' },
];

export const OCCASIONS: Occasion[] = [
  { id: '1', name: 'Birthday Gifts', image: 'https://images.unsplash.com/photo-1530103862676-fa8c91bbe181?auto=format&fit=crop&q=80&w=600' },
  { id: '2', name: 'Anniversary Gifts', image: 'https://images.unsplash.com/photo-1516589174184-c685266e430c?auto=format&fit=crop&q=80&w=600' },
  { id: '3', name: 'Love Gifts', image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600' },
  { id: '4', name: 'Corporate Gifts', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600' },
];

export const BEST_SELLERS: Product[] = [
  {
    id: 'pg-frame',
    title: 'Personalized Photo Frame',
    price: 899,
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400',
    category: 'Photo Gifts',
    occasion: 'Birthday Gifts',
    rating: 4.9,
    isNew: true,
    description: "A beautiful personalized photo frame that captures your most precious moments. Handcrafted with premium wood and high-quality printing.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    customerPhotos: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=400",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=400",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400"
    ],
    reviews: [
      { id: 'r1', userName: "Sarah J.", rating: 5, comment: "Absolutely stunning! The quality is top-notch.", date: "2024-03-15" },
      { id: 'r2', userName: "Mike T.", rating: 4, comment: "Great gift, my wife loved it. Shipping was fast.", date: "2024-03-10" }
    ],
    options: [
      {
        name: 'Size',
        values: [
          { id: '12x12', label: '12x12', priceAdjustment: 0 },
          { id: '12x18', label: '12x18', priceAdjustment: 300 },
          { id: '16x20', label: '16x20', priceAdjustment: 700 },
          { id: '16x24', label: '16x24', priceAdjustment: 1100 },
        ]
      }
    ]
  },
  {
    id: 'ca-crystal',
    title: 'Laser Engraved Crystal',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400',
    category: 'Crystal & Acrylic Gifts',
    occasion: 'Anniversary Gifts',
    rating: 5.0,
    isNew: false,
    options: [
      {
        name: 'Type',
        values: [
          { id: '2d-sq', label: '2D Square', priceAdjustment: 0 },
          { id: '2d-rect', label: '2D Rectangle', priceAdjustment: 300 },
          { id: '3d-eng', label: '3D Engraved', priceAdjustment: 1000 },
        ]
      }
    ]
  },
  {
    id: 'md-mug',
    title: 'Personalized Mug',
    price: 299,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=400',
    category: 'Mugs & Drinkware',
    occasion: 'Birthday Gifts',
    rating: 4.8,
    isNew: true,
    options: [
      {
        name: 'Version',
        values: [
          { id: 'white', label: 'White Mug', priceAdjustment: 0 },
          { id: 'magic', label: 'Magic Mug', priceAdjustment: 200 },
        ]
      }
    ]
  },
  {
    id: 'kc-keychain',
    title: 'Custom Keychain',
    price: 199,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400',
    category: 'Keychains',
    occasion: 'Corporate Gifts',
    rating: 4.9,
    isNew: false,
    options: [
      {
        name: 'Material',
        values: [
          { id: 'metal', label: 'Metal Photo', priceAdjustment: 0 },
          { id: 'leather', label: 'Leather Name', priceAdjustment: 100 },
        ]
      }
    ]
  },
  {
    id: 'cg1',
    title: 'Couple Gift Combo Box',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400',
    category: 'Combo Gifts',
    occasion: 'Love Gifts',
    rating: 4.9,
    isNew: false
  },
  {
    id: 'jw-jewelry',
    title: 'Personalized Jewelry',
    price: 799,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400',
    category: 'Jewelry',
    occasion: 'Love Gifts',
    rating: 4.8,
    isNew: true,
    options: [
      {
        name: 'Type',
        values: [
          { id: 'bracelet', label: 'Bracelet', priceAdjustment: 0 },
          { id: 'necklace', label: 'Necklace', priceAdjustment: 200 },
        ]
      }
    ]
  },
  {
    id: 'ou-pen',
    title: 'Personalized Pen',
    price: 399,
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=400',
    category: 'Office & Utility Gifts',
    occasion: 'Corporate Gifts',
    rating: 4.9,
    isNew: false,
    options: [
      {
        name: 'Brand',
        values: [
          { id: 'name-pen', label: 'Name Pen', priceAdjustment: 0 },
          { id: 'parker', label: 'Premium Parker', priceAdjustment: 900 },
        ]
      }
    ]
  },
  {
    id: 'ug-lamp',
    title: '3D LED Lamp',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=400',
    category: 'Unique Gifts',
    occasion: 'Birthday Gifts',
    rating: 4.7,
    isNew: true,
    options: [
      {
        name: 'Design',
        values: [
          { id: 'name-lamp', label: 'Name Lamp', priceAdjustment: 0 },
          { id: 'moon-lamp', label: 'Moon Lamp', priceAdjustment: 300 },
        ]
      }
    ]
  },
  {
    id: 'sg-cushion',
    title: 'Personalized Cushion',
    price: 599,
    image: 'https://images.unsplash.com/photo-1584108656821-afc29a9ee3c8?auto=format&fit=crop&q=80&w=400',
    category: 'Soft Gifts',
    occasion: 'Anniversary Gifts',
    rating: 4.8,
    isNew: false,
    options: [
      {
        name: 'Shape',
        values: [
          { id: 'square', label: 'Square', priceAdjustment: 0 },
          { id: 'heart', label: 'Heart Shape', priceAdjustment: 100 },
        ]
      }
    ]
  },
  {
    id: 'cl-clock',
    title: 'Personalized Clock',
    price: 899,
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=400',
    category: 'Clocks',
    occasion: 'Anniversary Gifts',
    rating: 4.9,
    isNew: false,
    options: [
      {
        name: 'Type',
        values: [
          { id: 'table', label: 'Table Clock', priceAdjustment: 0 },
          { id: 'wall', label: 'Wall Clock', priceAdjustment: 300 },
        ]
      }
    ]
  }
];

export const ALL_PRODUCTS: Product[] = [
  ...BEST_SELLERS,
  {
    id: 'pg-collage',
    title: 'Collage Photo Frame',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400',
    category: 'Photo Gifts',
    occasion: 'Birthday Gifts',
    rating: 4.8
  },
  {
    id: 'pg-led',
    title: 'LED Photo Frame',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400',
    category: 'Photo Gifts',
    occasion: 'Anniversary Gifts',
    rating: 4.9
  },
  {
    id: 'pg-spotify',
    title: 'Spotify Photo Frame',
    price: 999,
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=400',
    category: 'Photo Gifts',
    occasion: 'Love Gifts',
    rating: 4.9
  },
  {
    id: 'md-bottle',
    title: 'Steel Water Bottle',
    price: 699,
    image: 'https://images.unsplash.com/photo-1602143399827-7211aa3a7935?auto=format&fit=crop&q=80&w=400',
    category: 'Mugs & Drinkware',
    occasion: 'Corporate Gifts',
    rating: 4.8
  }
];

