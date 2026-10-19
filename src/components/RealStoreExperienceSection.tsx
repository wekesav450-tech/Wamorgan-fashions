import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Store,
  Sparkles,
  ShoppingBag,
  Tag,
  ArrowRight,
  CheckCircle2,
  Users,
  Camera,
  MessageCircle,
} from 'lucide-react';
import { ASSET_REGISTRY, REAL_ASSETS_LIST } from '../data/assetRegistry';
import { BRAND_INFO } from '../data/wamorganData';

export const RealStoreExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'campaigns' | 'interior' | 'service'>('all');

  const galleryItems = [
    {
      id: 'campaign-3pc-suit',
      title: "Executive 3-Piece Ladies' Suit Campaign",
      tagline: 'Official Promotion: 3pc Suit @ KES 2,800',
      badge: 'Official In-Store Promotion',
      category: 'campaigns',
      image: ASSET_REGISTRY.promoThreePieceSuit.path,
      alt: ASSET_REGISTRY.promoThreePieceSuit.alt,
      description: 'Formal navy 3-piece tailored suit set in our spacious retail travel aisle with vibrant multi-wheel luggage.',
      socialHandle: '@wamorgansunny1 (Official TikTok)',
      aspect: 'aspect-[9/16] max-h-[440px]',
    },
    {
      id: 'interior-shopping-vibe',
      title: 'Active Retail Floor & Customer Shopping',
      tagline: 'Special Campaign: 2pcs @ KES 1,200',
      badge: 'Real Shopping Experience',
      category: 'interior',
      image: ASSET_REGISTRY.heroShoppingExperience.path,
      alt: ASSET_REGISTRY.heroShoppingExperience.alt,
      description: 'Authentic bustling store atmosphere showing customers browsing tracksuits, backpack overhead racks, and colorful mannequins.',
      socialHandle: 'Nakuru · Kakamega · Eldoret · Kitale',
      aspect: 'aspect-[9/16] max-h-[440px]',
    },
    {
      id: 'service-boys-wardrobe',
      title: "Boys' Camo & 5-Day Wardrobe Consultation",
      tagline: '"Mama boys kuja tuvalishe kijana for 5 days"',
      badge: 'Staff In-Store Assistance',
      category: 'service',
      image: ASSET_REGISTRY.staffBoysApparel.path,
      alt: ASSET_REGISTRY.staffBoysApparel.alt,
      description: 'Our floor coordinator presenting boys camouflage joggers and tees in front of full clothing shelves stacked to the ceiling.',
      socialHandle: 'Children\'s & School Wear Department',
      aspect: 'aspect-[9/16] max-h-[440px]',
    },
    {
      id: 'service-baby-care',
      title: 'Baby Diaper Bags & Infant Essentials',
      tagline: 'Dedicated Nursery & Mother Care Department',
      badge: 'Customer Care & Baby Care',
      category: 'service',
      image: ASSET_REGISTRY.staffBabyDepartment.path,
      alt: ASSET_REGISTRY.staffBabyDepartment.alt,
      description: 'Staff member in branded green Wamorgan uniform presenting multi-pocket diaper backpacks and infant essentials.',
      socialHandle: 'Baby Essentials Department',
      aspect: 'aspect-[9/16] max-h-[440px]',
    },
    {
      id: 'product-two-piece-suits',
      title: "Ladies' Two-Piece Embroidered Skirt Suits",
      tagline: '5 Rich Commercial Colorways in Stock',
      badge: 'Merchandise Showcase',
      category: 'campaigns',
      image: ASSET_REGISTRY.productSkirtSuits.path,
      alt: ASSET_REGISTRY.productSkirtSuits.alt,
      description: 'Five coordinating colorways (Red, Wine, Pink, Royal Blue, and Mustard Gold) on real store mannequins.',
      socialHandle: 'Wholesale & Retail Available',
      aspect: 'aspect-[1/1] max-h-[440px]',
    },
    {
      id: 'interior-beauty-cosmetics',
      title: 'Illuminated Beauty & Cosmetics Shelves',
      tagline: 'Curated Skincare & Grooming Collection',
      badge: 'Store Fixtures & Shelving',
      category: 'interior',
      image: ASSET_REGISTRY.storeInteriorCosmetics.path,
      alt: ASSET_REGISTRY.storeInteriorCosmetics.alt,
      description: 'Customer browsing organized personal care products and cosmetics along our illuminated store columns.',
      socialHandle: 'Personal Care & Cosmetics Section',
      aspect: 'aspect-[9/16] max-h-[440px]',
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeTab === 'all' || item.category === activeTab
  );

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#e6e4dc] pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ec268f] mb-1">
            <Camera className="w-4 h-4 text-[#ec268f]" />
            <span>Authentic Storefronts & In-Store Atmosphere</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#070c52]">
            The Real Wamorgan Shopping Experience
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            Step directly onto the shop floor of Wamorgan Wholesalers. Real merchandise on real shelves, genuine customer shopping moments, and official in-store promotional campaigns.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-[#f4f3ef] rounded-xl border border-[#e6e4dc] shrink-0 overflow-x-auto">
          <button
            onClick={() => setActiveTab('all')}
            type="button"
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-white text-[#070c52] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Real Photography ({galleryItems.length})
          </button>
          <button
            onClick={() => setActiveTab('campaigns')}
            type="button"
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'campaigns'
                ? 'bg-white text-[#070c52] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Official Promotions
          </button>
          <button
            onClick={() => setActiveTab('interior')}
            type="button"
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'interior'
                ? 'bg-white text-[#070c52] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Store Interior & Aisles
          </button>
          <button
            onClick={() => setActiveTab('service')}
            type="button"
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'service'
                ? 'bg-white text-[#070c52] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Staff & Customer Care
          </button>
        </div>
      </div>

      {/* Real Photography Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl border border-[#e6e4dc] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Frame with Strict Aspect Preservation */}
            <div className="relative bg-[#070c52] overflow-hidden flex items-center justify-center p-2">
              <img
                src={item.image}
                alt={item.alt}
                className={`w-full ${item.aspect} object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500`}
                loading="lazy"
              />

              {/* Verified Authentic Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-black/75 backdrop-blur-md text-[11px] font-semibold text-white px-2.5 py-1 rounded-md shadow-sm border border-white/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ec268f]" />
                  <span>{item.badge}</span>
                </span>
              </div>
            </div>

            {/* Information Block */}
            <div className="p-5 space-y-3">
              <div>
                <span className="text-[11px] font-mono text-[#0c1387] font-semibold uppercase tracking-wider block mb-1">
                  {item.socialHandle}
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#0c1387] transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Preserved Authentic Promotional Text Tagline */}
              <div className="bg-[#faf9f6] p-2.5 rounded-xl border border-[#e6e4dc] flex items-center gap-2 text-xs font-semibold text-slate-800">
                <Tag className="w-3.5 h-3.5 text-[#ec268f] shrink-0" />
                <span className="truncate">{item.tagline}</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>

              <div className="pt-2 border-t border-[#f0eee6] flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-medium">
                  Authentic Wamorgan Asset
                </span>
                <Link
                  to="/products"
                  className="text-[#0c1387] font-semibold hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Explore Items</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
