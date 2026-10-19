export interface WamorganAsset {
  id: string;
  filename: string;
  originalPath: string;
  path: string; // High-res web-optimized
  master4kPath: string; // Master 4K resolution (3840px)
  resolution: string;
  category:
    | 'Brand Identity'
    | 'Homepage Photography'
    | 'Shop Interior'
    | 'Customers and Staff'
    | 'Products'
    | 'Official Advertising Graphics'
    | 'Branch Photographs'
    | 'Leadership Photographs';
  intendedPurpose: string;
  websiteSection: string;
  productCategory?: string;
  branch?: string;
  approvalStatus: 'Approved - Authentic Business Asset' | 'Pending Branch Identification' | 'Awaiting Submission';
  alt: string;
  notes?: string;
  promoText?: string;
}

export const ASSET_REGISTRY: Record<string, WamorganAsset> = {
  // 1. Brand Identity
  logo: {
    id: 'asset-logo',
    filename: '11_aea77a3c.jpeg',
    originalPath: '/assets/aistudio/11_aea77a3c.jpeg',
    path: '/assets/aistudio/11_aea77a3c.jpeg',
    master4kPath: '/assets/aistudio/11_aea77a3c.jpeg',
    resolution: '448 × 446 (Vector-styled PNG/JPEG)',
    category: 'Brand Identity',
    intendedPurpose: 'Primary official brand mark for Wa Morgan Fashions & Wamorgan Wholesalers',
    websiteSection: 'Global Header, Footer, Hero Trust Badge, About Page, Favicon',
    approvalStatus: 'Approved - Authentic Business Asset',
    alt: 'Official Wa Morgan Fashions logo - Be Smart With Less',
    notes: 'Preserves authentic deep royal blue background, fuchsia script and white serif typography.',
  },

  // 2. Homepage Hero & In-Store Shopping Experience (4K Enhanced)
  heroShoppingExperience: {
    id: 'asset-hero-shopping-experience',
    filename: 'images__6__5e280aee.jpeg',
    originalPath: '/assets/aistudio/images__6__5e280aee.jpeg',
    path: '/assets/enhanced/hero_shopping_experience_web.jpg',
    master4kPath: '/assets/enhanced/hero_shopping_experience_4k.jpg',
    resolution: '2156 × 3840 (Vertical 4K Master)',
    category: 'Homepage Photography',
    intendedPurpose: 'Main homepage hero visual & real shopping atmosphere display',
    websiteSection: 'Homepage Hero Banner & Store Atmosphere Showcase',
    approvalStatus: 'Approved - Authentic Business Asset',
    alt: 'Bustling authentic store aisle at Wamorgan Wholesalers with customers browsing tracksuits, mannequins and backpacks',
    notes: 'Lanczos 4K enhanced clarity: crisp text on promotional banner "2pcs 1200", clean tracksuits texture, and vibrant store lighting.',
    promoText: 'In-Store Special: 2pcs @ 1,200',
  },

  // 3. Shop Interior & Cosmetics/Shelving (4K Enhanced)
  storeInteriorCosmetics: {
    id: 'asset-interior-cosmetics',
    filename: 'images__10__3b460a76.jpeg',
    originalPath: '/assets/aistudio/images__10__3b460a76.jpeg',
    path: '/assets/enhanced/store_interior_cosmetics_web.jpg',
    master4kPath: '/assets/enhanced/store_interior_cosmetics_4k.jpg',
    resolution: '2160 × 2546 (4K Enhanced Master)',
    category: 'Shop Interior',
    intendedPurpose: 'Showcasing real illuminated retail fixtures, shelves, and cosmetics/beauty section',
    websiteSection: 'Shop Interior Showcase, About Us & Retail Experience',
    approvalStatus: 'Approved - Authentic Business Asset',
    alt: 'Customer shopping along illuminated merchandise shelves and beauty section inside Wamorgan Wholesalers',
    notes: 'Enhanced dynamic range and shadow detail revealing illuminated cosmetics column and product bottles.',
  },

  // 4. Customers & Staff - Baby & Infant Department (4K Enhanced)
  staffBabyDepartment: {
    id: 'asset-staff-baby-dept',
    filename: 'images__9__ae8957f5.jpeg',
    originalPath: '/assets/aistudio/images__9__ae8957f5.jpeg',
    path: '/assets/enhanced/staff_baby_department_web.jpg',
    master4kPath: '/assets/enhanced/staff_baby_department_4k.jpg',
    resolution: '2160 × 2546 (4K Enhanced Master)',
    category: 'Customers and Staff',
    intendedPurpose: 'Demonstrating personalized customer assistance in the baby essentials and diaper bag section',
    websiteSection: 'Customer Service Showcase, Children & Baby Care Category',
    productCategory: "Children's Wear",
    approvalStatus: 'Approved - Authentic Business Asset',
    alt: 'Wamorgan staff member in branded green uniform presenting baby diaper bags and nursery essentials',
    notes: 'Compression artefacts reduced; uniform logo, diaper bags, and shelving text sharply defined.',
    promoText: 'Baby Essentials & Diaper Bags Department',
  },

  // 5. Staff & Boys Fashion (4K Enhanced)
  staffBoysApparel: {
    id: 'asset-staff-boys-apparel',
    filename: 'images__11__efd32754.jpeg',
    originalPath: '/assets/aistudio/images__11__efd32754.jpeg',
    path: '/assets/enhanced/staff_boys_apparel_web.jpg',
    master4kPath: '/assets/enhanced/staff_boys_apparel_4k.jpg',
    resolution: '2155 × 3840 (Vertical 4K Master)',
    category: 'Products',
    intendedPurpose: 'Presenting boys camouflage trousers and graphic tees in front of full clothing shelves',
    websiteSection: 'Product Catalogue, Children\'s Department & Promotional Banner',
    productCategory: "Children's Wear",
    approvalStatus: 'Approved - Authentic Business Asset',
    alt: 'Wamorgan team member presenting boys camo trousers and graphic tees in front of folded apparel shelves',
    notes: 'Enhanced fabric twill texture and readable graphic tee lettering; vibrant royal blue pants and shelves.',
    promoText: 'Mama boys kuja tuvalishe kijana for 5 days',
  },

  // 6. Official Promotional Campaign - Women\'s 3-Piece Suit & Travel Luggage (4K Enhanced)
  promoThreePieceSuit: {
    id: 'asset-promo-3pc-suit',
    filename: 'images__12__38198016.jpeg',
    originalPath: '/assets/aistudio/images__12__38198016.jpeg',
    path: '/assets/enhanced/promo_3pc_suit_luggage_web.jpg',
    master4kPath: '/assets/enhanced/promo_3pc_suit_luggage_4k.jpg',
    resolution: '2158 × 3840 (Vertical 4K Master)',
    category: 'Official Advertising Graphics',
    intendedPurpose: 'Featured advertising campaign for ladies 3-piece formal executive suits and travel suitcases',
    websiteSection: 'Campaign Banner, Women\'s Wear & Travel Luggage Section',
    productCategory: "Women's Fashion",
    approvalStatus: 'Approved - Authentic Business Asset',
    alt: 'Authentic Wamorgan campaign for 3-piece formal suit with travel luggage and suitcases in the background',
    notes: 'Upscaled from low-res source with de-noising and unsharp masking; campaign banner and TikTok handle crisp.',
    promoText: '3pc Suit @ 2,800 · Official TikTok: @wamorgansunny1',
  },

  // 7. Women\'s Formal Skirt Suits Display (4K Enhanced)
  productSkirtSuits: {
    id: 'asset-product-skirt-suits',
    filename: 'images__5__6749fbce.jpeg',
    originalPath: '/assets/aistudio/images__5__6749fbce.jpeg',
    path: '/assets/enhanced/product_skirt_suits_web.jpg',
    master4kPath: '/assets/enhanced/product_skirt_suits_4k.jpg',
    resolution: '3840 × 3840 (Square 4K Master)',
    category: 'Products',
    intendedPurpose: 'Showcase authentic ladies embroidered two-piece skirt suits across 5 distinct colorways',
    websiteSection: 'Product Catalogue (Women\'s Fashion) & Featured Grid',
    productCategory: "Women's Fashion",
    approvalStatus: 'Approved - Authentic Business Asset',
    alt: 'Authentic merchandise display of five ladies two-piece embroidered skirt suits on mannequins in-store',
    notes: 'Enhanced 4K resolution highlighting gold embroidery on scalloped jackets across all 5 colors.',
  },

  // 8. Bedding & Home Textiles - Plush Shaggy Rugs & Carpets (4K Enhanced)
  productShaggyRugs: {
    id: 'asset-product-shaggy-rugs',
    filename: 'images__2__54d24794.jpeg',
    originalPath: '/assets/aistudio/images__2__54d24794.jpeg',
    path: '/assets/enhanced/product_shaggy_rugs_web.jpg',
    master4kPath: '/assets/enhanced/product_shaggy_rugs_4k.jpg',
    resolution: '2880 × 3840 (4K Enhanced Master)',
    category: 'Products',
    intendedPurpose: 'Showcase real household textiles inventory: folded plush shaggy rugs and floor carpets',
    websiteSection: 'Product Catalogue (Bedding & Home Textiles)',
    productCategory: 'Bedding & Home Textiles',
    approvalStatus: 'Approved - Authentic Business Asset',
    alt: 'Genuine stacked colorful plush shaggy rugs and floor carpets at Wamorgan Wholesalers home textile section',
    notes: 'High-pile carpet fibers, pile depth and rich jewel tones sharpened with natural tonal depth.',
  },

  // 9. Leadership Team & Board of Directors (4K Enhanced)
  leadershipDirectors: {
    id: 'asset-leadership-directors',
    filename: 'images__8__d5cb6ab7.jpeg',
    originalPath: '/assets/aistudio/images__8__d5cb6ab7.jpeg',
    path: '/assets/enhanced/leadership_directors_web.jpg',
    master4kPath: '/assets/enhanced/leadership_directors_4k.jpg',
    resolution: '2155 × 3840 (Vertical 4K Master)',
    category: 'Leadership Photographs',
    intendedPurpose: 'Executive leadership team and directors celebrating at store event',
    websiteSection: 'About Us (Our Leadership) & Homepage Leadership Preview',
    approvalStatus: 'Approved - Authentic Business Asset',
    alt: 'Leadership and directors of Wamorgan Wholesalers and Wa Morgan Fashions',
    notes: 'Preserves natural skin tones, facial features and festive attire with enhanced edge clarity and depth.',
  },
};

export const REAL_ASSETS_LIST = Object.values(ASSET_REGISTRY);
