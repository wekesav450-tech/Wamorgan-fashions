export interface Branch {
  id: string;
  name: string;
  town: string;
  county: string;
  hubRole: string;
  address: string;
  addressConfirmed: boolean;
  phone: string;
  phoneConfirmed: boolean;
  whatsapp: string;
  email: string;
  hours: string;
  departments: string[];
  notes: string;
  googleMapsQuery: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: 'Women\'s Fashion' | 'Men\'s Apparel' | 'Bedding & Home Textiles' | 'Bags & Accessories' | 'Children\'s Wear';
  description: string;
  image: string;
  samplePriceDisplay?: string;
  isPriceApproved: boolean;
  packType: string;
  variants: {
    sizes: string[];
    colors: string[];
    material?: string;
  };
  featured: boolean;
  minimumWholesalePack: string;
  retailAvailable: boolean;
  branchesStocked: string[];
}

export interface ManagementChecklistItem {
  id: string;
  category: 'Branch Details' | 'Pricing & Commercial' | 'Photography & Assets' | 'Legal & Compliance' | 'Leadership & Governance';
  item: string;
  status: 'Pending Management Input' | 'Sample Provided' | 'Approved';
  notes: string;
}

export interface LeadershipData {
  sectionTitle: string;
  subtitle: string;
  groupPhotoUrl: string;
  photoAlt: string;
  overviewNarrative: string;
  provisionalTitle: string;
  detailsStatus: string;
  // Dedicated editable slots for management review
  editableFields: {
    confirmedNames: string | null;
    confirmedTitles: string | null;
    biography: string | null;
    leadershipMessage: string | null;
  };
}

export const LEADERSHIP_DATA: LeadershipData = {
  sectionTitle: 'Our Leadership',
  subtitle: 'Executive Stewardship & Vision',
  groupPhotoUrl: '/assets/enhanced/leadership_directors_web.jpg',
  photoAlt: 'Leadership and directors of Wamorgan Wholesalers and Wa Morgan Fashions',
  overviewNarrative: 'The visionary executive team driving Wamorgan Wholesalers and Wa Morgan Fashions. Our directors guide our commercial growth across Western Kenya and the Rift Valley, establishing trusted regional distribution channels in Nakuru, Kakamega, Eldoret, and Kitale while remaining firmly committed to our founding value: "Be Smart With Less".',
  provisionalTitle: 'Executive Leadership & Board of Directors',
  detailsStatus: 'Awaiting Official Executive Names & Titles',
  editableFields: {
    confirmedNames: null, // Ready for management: e.g. "To be confirmed by Management"
    confirmedTitles: null, // Ready for management: e.g. "CEO / Managing Director / Executive Board"
    biography: null, // Ready for management biography
    leadershipMessage: null, // Ready for management official address
  },
};

export const BRAND_INFO = {
  name: 'Wamorgan Wholesalers',
  tradingName: 'Wa Morgan Fashions',
  tagline: 'Be Smart With Less',
  logoUrl: '/assets/aistudio/11_aea77a3c.jpeg',
  heroBanner: '/assets/enhanced/hero_shopping_experience_web.jpg',
  establishedNote: 'Serving Western Kenya and the Rift Valley region with wholesale and retail fashion.',
  businessType: 'Wholesale & Retail Fashion Distributor',
  branchesCount: 4,
  coreCoverage: ['Nakuru', 'Kakamega', 'Eldoret', 'Kitale'],
  wholesaleInquiryPrompt: 'For wholesale lots, bulk bale enquiries, or retail visits, get in touch directly with our branch coordinators.',
};

export const BRANCHES_DATA: Branch[] = [
  {
    id: 'nakuru',
    name: 'Nakuru Flagship Branch',
    town: 'Nakuru City',
    county: 'Nakuru County',
    hubRole: 'Central Rift Valley Distribution Hub',
    address: 'Central Business District, Kenyatta Avenue corridor',
    addressConfirmed: false,
    phone: '+254 700 000 001',
    phoneConfirmed: false,
    whatsapp: '+254700000001',
    email: 'nakuru@wamorgan.co.ke (Provisional)',
    hours: 'Mon – Sat: 8:00 AM – 6:30 PM · Sunday: 10:00 AM – 4:00 PM',
    departments: ['Wholesale Bundles & Bales', 'Ladies Contemporary Wear', 'Men\'s Tailoring & Casuals', 'Household Textiles'],
    notes: 'Primary distribution branch for Central Rift region with bulk warehousing for retail re-sellers.',
    googleMapsQuery: 'Kenyatta Avenue, Nakuru, Kenya',
  },
  {
    id: 'kakamega',
    name: 'Kakamega Branch',
    town: 'Kakamega Town',
    county: 'Kakamega County',
    hubRole: 'Western Kenya Commercial Hub',
    address: 'CBD Commercial Area, Canon Awori / Market Street vicinity',
    addressConfirmed: false,
    phone: '+254 700 000 002',
    phoneConfirmed: false,
    whatsapp: '+254700000002',
    email: 'kakamega@wamorgan.co.ke (Provisional)',
    hours: 'Mon – Sat: 8:00 AM – 6:30 PM · Sunday: Closed',
    departments: ['Retail Fashion Floors', 'Children\'s & School Wear', 'Ladies Fashion', 'Household Bedding'],
    notes: 'Key retail and wholesale center serving Kakamega, Mumias, and surrounding Western Kenya traders.',
    googleMapsQuery: 'Kakamega CBD, Kenya',
  },
  {
    id: 'eldoret',
    name: 'Eldoret Branch',
    town: 'Eldoret City',
    county: 'Uasin Gishu County',
    hubRole: 'North Rift Commercial Center',
    address: 'Commercial Center, Uganda Road / Oginga Odinga Street access',
    addressConfirmed: false,
    phone: '+254 700 000 003',
    phoneConfirmed: false,
    whatsapp: '+254700000003',
    email: 'eldoret@wamorgan.co.ke (Provisional)',
    hours: 'Mon – Sat: 8:00 AM – 6:30 PM · Sunday: 11:00 AM – 4:00 PM',
    departments: ['Outerwear & Jackets', 'Men\'s Smart Casuals', 'Bulk Wholesale Packs', 'Bags & Leather Accessories'],
    notes: 'Fast-moving commercial trade point serving Uasin Gishu and neighboring North Rift counties.',
    googleMapsQuery: 'Uganda Road, Eldoret, Kenya',
  },
  {
    id: 'kitale',
    name: 'Kitale Branch',
    town: 'Kitale Town',
    county: 'Trans-Nzoia County',
    hubRole: 'North-Western Gateway Hub',
    address: 'Central Commercial Area, Kenyatta Street / Main Market approach',
    addressConfirmed: false,
    phone: '+254 700 000 004',
    phoneConfirmed: false,
    whatsapp: '+254700000004',
    email: 'kitale@wamorgan.co.ke (Provisional)',
    hours: 'Mon – Sat: 8:00 AM – 6:00 PM · Sunday: Closed',
    departments: ['Women\'s Fashion & Dresses', 'Casual Wear', 'Children\'s Outfits', 'Duvets & Heavy Blankets'],
    notes: 'Strategically located for retail customers and rural retail stockists across Trans-Nzoia and West Pokot.',
    googleMapsQuery: 'Kenyatta Street, Kitale, Kenya',
  },
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'wm-w01',
    sku: 'WM-W-010',
    name: 'Ladies Embroidered Two-Piece Skirt & Dress Suit Collection',
    category: 'Women\'s Fashion',
    description: 'Authentic in-store merchandise featuring tailored scalloped jackets with floral gold embroidery and coordinating straight skirts. Displayed across 5 rich colorways on our retail floor.',
    image: '/assets/enhanced/product_skirt_suits_web.jpg',
    samplePriceDisplay: 'Sample Wholesale Guide: KES 1,800 – 2,400 / 2-piece set (Subject to Management Approval)',
    isPriceApproved: false,
    packType: '5-colorway assorted pack or single retail pieces',
    variants: {
      sizes: ['M (10)', 'L (12)', 'XL (14)', 'XXL (16)', 'XXXL (18)'],
      colors: ['Ruby Red', 'Wine Maroon', 'Rose Pink', 'Royal Blue', 'Mustard Gold'],
      material: 'Structured suiting crepe with gold-thread scalloped embroidery',
    },
    featured: true,
    minimumWholesalePack: '5 Sets (one of each color) for bulk pricing tier',
    retailAvailable: true,
    branchesStocked: ['nakuru', 'kakamega', 'eldoret', 'kitale'],
  },
  {
    id: 'wm-w02',
    sku: 'WM-W-025',
    name: 'Executive Ladies 3-Piece Formal Suit Collection',
    category: 'Women\'s Fashion',
    description: 'Classic three-piece tailored business suit complete with tailored vest, structured blazer, and tapered trousers. Popular corporate attire as featured in our in-store campaign.',
    image: '/assets/enhanced/promo_3pc_suit_luggage_web.jpg',
    samplePriceDisplay: 'In-Store Campaign Feature: KES 2,800 / 3-piece complete set',
    isPriceApproved: true,
    packType: 'Single retail suits or bulk 6-pack assorted sizes',
    variants: {
      sizes: ['S (8)', 'M (10)', 'L (12)', 'XL (14)', 'XXL (16)'],
      colors: ['Midnight Navy', 'Formal Black', 'Charcoal Gray'],
      material: 'Polyester-Viscose Suiting Fabric with soft inner lining',
    },
    featured: true,
    minimumWholesalePack: '6 Sets for wholesale discount',
    retailAvailable: true,
    branchesStocked: ['nakuru', 'eldoret', 'kakamega', 'kitale'],
  },
  {
    id: 'wm-c01',
    sku: 'WM-C-011',
    name: 'Boys Camouflage Cargo Pants & Graphic Tee Sets',
    category: 'Children\'s Wear',
    description: 'Hard-wearing camouflage cargo joggers and coordinating cotton graphic tees. High-demand staple presented directly by our floor team ("Mama boys kuja tuvalishe kijana for 5 days").',
    image: '/assets/enhanced/staff_boys_apparel_web.jpg',
    samplePriceDisplay: 'Sample Wholesale Guide: KES 550 – 850 / set (Subject to Management Approval)',
    isPriceApproved: false,
    packType: '10-piece bundle packs sorted by age bracket',
    variants: {
      sizes: ['3–4 Yrs', '5–6 Yrs', '7–8 Yrs', '9–10 Yrs', '11–12 Yrs'],
      colors: ['Camo Green & Charcoal Gray', 'Desert Tan & Navy', 'Urban Gray & Black'],
      material: 'Durable Cotton Twill Pants & 100% Cotton Tee',
    },
    featured: true,
    minimumWholesalePack: '10 Sets assorted ages',
    retailAvailable: true,
    branchesStocked: ['nakuru', 'kakamega', 'eldoret', 'kitale'],
  },
  {
    id: 'wm-a01',
    sku: 'WM-A-040',
    name: 'Multi-Pocket Baby Diaper Bags & Nursery Essentials',
    category: 'Bags & Accessories',
    description: 'Spacious waterproof multi-compartment baby backpacks, diaper totes, and infant care essentials presented by our in-store team. High-demand staple for mothers and pediatric gifts.',
    image: '/assets/enhanced/staff_baby_department_web.jpg',
    samplePriceDisplay: 'Sample Wholesale Guide: KES 850 – 1,350 / unit (Subject to Management Approval)',
    isPriceApproved: false,
    packType: '6-unit assorted color cartons / Single retail sales',
    variants: {
      sizes: ['Large Multi-Pocket Backpack', 'Shoulder Tote Baby Bag'],
      colors: ['Charcoal & Cream', 'Pastel Pink', 'Sky Blue', 'Mint Green'],
      material: 'Water-resistant Oxford fabric with thermal insulated bottle slots',
    },
    featured: true,
    minimumWholesalePack: '6 Units per carton',
    retailAvailable: true,
    branchesStocked: ['nakuru', 'kakamega', 'eldoret', 'kitale'],
  },
  {
    id: 'wm-b01',
    sku: 'WM-B-102',
    name: 'Plush High-Pile Shaggy Floor Rugs & Area Carpets',
    category: 'Bedding & Home Textiles',
    description: 'Heavyweight plush shaggy floor carpets stacked in our home textiles department. Non-slip backing with dense yarn that brings comfort and warmth to Kenyan living rooms.',
    image: '/assets/enhanced/product_shaggy_rugs_web.jpg',
    samplePriceDisplay: 'Sample Wholesale Guide: KES 1,600 – 2,800 / piece (Subject to Management Approval)',
    isPriceApproved: false,
    packType: 'Assorted 5-piece bundles or single retail pieces',
    variants: {
      sizes: ['Medium (1.5m x 2.0m)', 'Large (2.0m x 2.5m)', 'Runner (0.8m x 3.0m)'],
      colors: ['Crimson Red', 'Rich Chocolate', 'Warm Beige', 'Zesty Lime', 'Burgundy'],
      material: '100% Microfibre Fluffy Pile with Non-Slip Rubber Dot Backing',
    },
    featured: true,
    minimumWholesalePack: '5 Carpets for wholesale account holders',
    retailAvailable: true,
    branchesStocked: ['nakuru', 'kakamega', 'eldoret', 'kitale'],
  },
  {
    id: 'wm-m01',
    sku: 'WM-M-060',
    name: 'Men\'s & Unisex Sport-Casual Two-Piece Tracksuit Sets',
    category: 'Men\'s Apparel',
    description: 'Comfortable two-piece zip-up jackets and matching track pants as featured in our active shop floor promotions ("2pcs @ 1,200"). Breathable, durable, and stylish for sports or casual outings.',
    image: '/assets/enhanced/hero_shopping_experience_web.jpg',
    samplePriceDisplay: 'In-Store Promotion Feature: 2pcs @ KES 1,200',
    isPriceApproved: true,
    packType: '12-piece bundle packs or single sets retail',
    variants: {
      sizes: ['M', 'L', 'XL', 'XXL'],
      colors: ['Midnight Black', 'Hot Pink', 'Deep Navy', 'Heather Gray', 'Burnt Orange'],
      material: 'Performance Polyester-Spandex with Contrast Stripe Trim',
    },
    featured: true,
    minimumWholesalePack: '12 Pieces for bulk wholesale rate',
    retailAvailable: true,
    branchesStocked: ['nakuru', 'kakamega', 'eldoret', 'kitale'],
  },
  {
    id: 'wm-a02',
    sku: 'WM-A-090',
    name: 'Multi-Wheel Hard-Shell Travel Luggage & Suitcases',
    category: 'Bags & Accessories',
    description: '360-degree spinner luggage crafted from impact-resistant ABS composite. Visible in our spacious travel aisles alongside overhead backpack racks.',
    image: '/assets/enhanced/promo_3pc_suit_luggage_web.jpg',
    samplePriceDisplay: 'Sample Wholesale Guide: KES 2,500 – 4,800 / piece (Subject to Management Approval)',
    isPriceApproved: false,
    packType: '3-piece nesting sets (20", 24", 28") or individual units',
    variants: {
      sizes: ['20" Cabin Carry-On', '24" Medium Luggage', '28" Large Cargo Suitcase'],
      colors: ['Electric Purple', 'Pastel Pink', 'Sky Blue', 'Emerald Green', 'Charcoal'],
      material: 'Durable Ribbed ABS Hard-Shell with Aluminium Telescopic Trolley',
    },
    featured: false,
    minimumWholesalePack: '3-Piece Set or 6 single units',
    retailAvailable: true,
    branchesStocked: ['nakuru', 'eldoret', 'kakamega'],
  },
  {
    id: 'wm-b02',
    sku: 'WM-B-201',
    name: 'Cosmetics, Beauty Care & Illuminated Shelf Displays',
    category: 'Bedding & Home Textiles',
    description: 'Curated beauty care, personal grooming products, lotions, and home fragrance showcased along illuminated retail columns and display shelves.',
    image: '/assets/enhanced/store_interior_cosmetics_web.jpg',
    samplePriceDisplay: 'Retail items starting from KES 150 – 1,200 / unit',
    isPriceApproved: true,
    packType: 'Dozen cartons for retailers / Single retail units',
    variants: {
      sizes: ['Travel Size', 'Standard Retail Pack', 'Value Family Pack'],
      colors: ['Assorted Cosmetic Lines', 'Personal Grooming Essentials'],
      material: 'Authentic sealed cosmetics and personal care formulations',
    },
    featured: false,
    minimumWholesalePack: '1 Dozen assorted cosmetics',
    retailAvailable: true,
    branchesStocked: ['nakuru', 'kakamega', 'eldoret', 'kitale'],
  },
];

export const MANAGEMENT_CHECKLIST: ManagementChecklistItem[] = [
  {
    id: 'chk-1',
    category: 'Branch Details',
    item: 'Official Street Addresses & Building Names',
    status: 'Pending Management Input',
    notes: 'Precise plot/building names (e.g. Specific plaza on Kenyatta Ave, Nakuru) to be supplied by branch managers.',
  },
  {
    id: 'chk-2',
    category: 'Branch Details',
    item: 'Dedicated Official Branch Phone Numbers & WhatsApp Lines',
    status: 'Pending Management Input',
    notes: 'Sample placeholders (+254 700 000 00X) are in place. Official Safaricom / Airtel branch coordinator numbers needed.',
  },
  {
    id: 'chk-3',
    category: 'Pricing & Commercial',
    item: 'Wholesale Price Book Approval',
    status: 'Sample Provided',
    notes: 'Sample indicative price brackets are clearly marked as unverified demo guides until management signs off the official wholesale tier schedule.',
  },
  {
    id: 'chk-4',
    category: 'Photography & Assets',
    item: 'Branch Exterior Storefront Verification',
    status: 'Pending Management Input',
    notes: 'In strict compliance with guidelines, interior store photos are deployed, while specific exterior building facades for Nakuru, Kakamega, Eldoret, and Kitale await location-by-location management sign-off to ensure 100% accuracy.',
  },
  {
    id: 'chk-5',
    category: 'Legal & Compliance',
    item: 'Business Registration / KRA PIN Details',
    status: 'Pending Management Input',
    notes: 'Optional company registration details to be confirmed for the footer trust section.',
  },
  {
    id: 'chk-6',
    category: 'Photography & Assets',
    item: 'Official Wa Morgan Logo Placement',
    status: 'Approved',
    notes: 'Official provided logo (/assets/aistudio/11_aea77a3c.jpeg) loaded and applied across header, footer, and branding.',
  },
  {
    id: 'chk-7',
    category: 'Leadership & Governance',
    item: 'Executive Names, Official Titles & Leadership Message',
    status: 'Pending Management Input',
    notes: 'Authentic group photograph of company leadership (/assets/enhanced/leadership_directors_web.jpg) integrated on About and Home pages. Specific individual director names, executive titles (e.g. CEO, Managing Director), and official leadership statement pending management submission.',
  },
  {
    id: 'chk-8',
    category: 'Photography & Assets',
    item: 'Authentic In-Store Photography & Campaign Asset Replacement',
    status: 'Approved',
    notes: 'All AI-generated images have been audited and completely replaced with genuine Wamorgan shop interior, real customer shopping scenes, staff assistance, and official promotional campaign materials.',
  },
  {
    id: 'chk-9',
    category: 'Photography & Assets',
    item: 'Professional 4K Image Enhancement & Quality Upscaling',
    status: 'Approved',
    notes: 'All authentic uploaded photographs have been professionally enhanced to 4K Master resolution (up to 3840px) with Lanczos edge filtering, JPEG de-noising, dynamic range expansion, and web-optimized progressive exports with zero identity alteration.',
  },
];
