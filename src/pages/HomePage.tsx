import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Store,
  Layers,
  MapPin,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  MessageCircle,
} from 'lucide-react';
import {
  BRAND_INFO,
  BRANCHES_DATA,
  PRODUCTS_DATA,
  Product,
} from '../data/wamorganData';
import { ProductCard } from '../components/ProductCard';
import { BranchCard } from '../components/BranchCard';
import { ProductDetailModal } from '../components/ProductDetailModal';
import { LeadershipSection } from '../components/LeadershipSection';
import { RealStoreExperienceSection } from '../components/RealStoreExperienceSection';
import { PromotionalBanner } from '../components/PromotionalBanner';
import { motion, type Variants } from 'framer-motion';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const featuredProducts = PRODUCTS_DATA.filter((p) => p.featured).slice(0, 4);

  const categories = [
    {
      title: "Women's Fashion",
      desc: 'Elegant dresses, smart office sets, casual tops & separates',
      count: 'Wholesale & Retail',
      filter: "Women's Fashion",
    },
    {
      title: "Men's Apparel",
      desc: 'Oxford cotton shirts, chinos, tailored jackets & everyday casuals',
      count: 'Wholesale & Retail',
      filter: "Men's Apparel",
    },
    {
      title: 'Bedding & Home Textiles',
      desc: 'Hotel-grade bedsheets, woven duvets, heavy drapes & linens',
      count: 'Bulk Bundles & Sets',
      filter: 'Bedding & Home Textiles',
    },
    {
      title: 'Bags & Accessories',
      desc: 'Structured tote bags, crossbody bags, wallets & travel luggage',
      count: 'Assorted Cartons',
      filter: 'Bags & Accessories',
    },
  ];

  return (
    <div className="pb-20">
      {/* 0. PROMOTIONAL BANNER */}
      <PromotionalBanner />

      <div className="space-y-20">
        {/* 1. HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#070c52] text-white overflow-hidden border-b border-[#0c1387]"
        >
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 bg-radial from-transparent to-[#040733] opacity-80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline and Call to Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 border border-white/15 text-xs text-[#fce7f3]">
                <span className="w-2 h-2 rounded-full bg-[#ec268f]" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">
                  {BRAND_INFO.tradingName} · Kenya
                </span>
                <span className="text-white/40">|</span>
                <span className="text-slate-200">"{BRAND_INFO.tagline}"</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] text-balance">
                Discover Wamorgan Wholesalers
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-2xl">
                Explore our products, discover our branches and experience Wamorgan Wholesalers.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Serving boutique entrepreneurs, local duka retailers, and families across <strong>Nakuru, Kakamega, Eldoret, and Kitale</strong> with genuine in-store quality, accessible wholesale pricing, and verified stock continuity.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/products"
                  className="px-6 py-3.5 bg-[#ec268f] hover:bg-[#d81b7e] text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group whitespace-nowrap cursor-pointer"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/branches"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#fce7f3]" />
                  <span>Find a Branch</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-slate-300">
                <div>
                  <span className="block font-bold text-white text-base">4 Hubs</span>
                  <span className="text-slate-400">Nakuru · Kakamega · Eldoret · Kitale</span>
                </div>
                <div>
                  <span className="block font-bold text-white text-base">Dual Tiers</span>
                  <span className="text-slate-400">Wholesale Bundles & Retail Counters</span>
                </div>
                <div>
                  <span className="block font-bold text-white text-base">100% Real</span>
                  <span className="text-slate-400">Authentic Stock & Active Stores</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Photographic Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900 aspect-[4/3] lg:aspect-[1/1]">
                <img
                  src={BRAND_INFO.heroBanner}
                  alt="Authentic Wamorgan Wholesalers shop floor with customers and active displays"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#ec268f]" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-white/95">
                      Authentic Shop Floor Atmosphere
                    </span>
                  </div>
                  <p className="text-xs text-slate-200">
                    Real merchandise aisles, luggage displays, and active customers inside Wamorgan Wholesalers.
                  </p>
                </div>
              </div>

              {/* Floating Quality Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white text-slate-900 p-3.5 rounded-xl shadow-xl border border-[#e6e4dc] items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0c1387] flex items-center justify-center text-white shrink-0">
                  <Store className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">Wa Morgan Fashions</span>
                  <span className="text-slate-500 font-medium">Be Smart With Less</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 2. CATEGORY TAXONOMY STRIP */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#ec268f]">
              Merchandise Range
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#070c52] mt-1">
              Featured Product Categories
            </h2>
          </div>
          <Link
            to="/products"
            className="text-xs font-semibold text-[#0c1387] hover:text-[#070c52] flex items-center gap-1 group whitespace-nowrap"
          >
            <span>View All Categories & Products</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardItemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => navigate(`/products?category=${encodeURIComponent(cat.filter)}`)}
              className="group p-6 rounded-2xl bg-white border border-[#e6e4dc] hover:border-[#0c1387]/40 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#0c1387] font-semibold block mb-2">
                  0{idx + 1}.
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#0c1387] transition-colors">
                  {cat.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0eee6] flex items-center justify-between text-xs">
                <span className="text-[11px] font-medium text-slate-500">{cat.count}</span>
                <span className="text-[#0c1387] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 3. FEATURED PRODUCTS SHOWCASE */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#ec268f]">
              Selected Highlights
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#070c52] mt-1">
              Top Wholesale & Retail Lines
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              A sample selection of fast-moving products currently showcased in our catalogue.
            </p>
          </div>
          <Link
            to="/products"
            className="px-4 py-2 bg-[#f4f3ef] hover:bg-[#e8e6df] text-[#070c52] text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
          >
            Browse Full Catalogue
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={cardItemVariants}>
              <ProductCard
                product={product}
                onSelect={setSelectedProduct}
                onQuickInquire={() => setSelectedProduct(product)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* REAL SHOPPING EXPERIENCE & PROMOTIONS SECTION */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <RealStoreExperienceSection />
      </motion.section>

      {/* 4. BRAND STORY & WHOLESALE MODEL */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="bg-white border-y border-[#e6e4dc] py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-widest font-bold text-[#ec268f]">
                About Wamorgan
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#070c52] leading-snug">
                Empowering Kenya's Retailers & Households: "Be Smart With Less"
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                At <strong>Wamorgan Wholesalers</strong> (operating as <em>Wa Morgan Fashions</em>), our mission is grounded in a simple economic reality: quality apparel and household goods should not be priced beyond the reach of everyday families and aspiring business owners.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                By purchasing directly in volume and operating strategically positioned distribution hubs across Western Kenya and the Rift Valley, we pass significant margin advantages to regional duka owners, boutique proprietors, and market traders, while maintaining welcoming retail counters for local shoppers.
              </p>

              {/* 3 Pillars */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0c1387]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0c1387]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Accessible Minimums for Small Traders
                    </h4>
                    <p className="text-xs text-slate-500">
                      Start or restock your clothing boutique with accessible 6-piece or dozen packs without prohibitive capital requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0c1387]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0c1387]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Regional Stock Continuity
                    </h4>
                    <p className="text-xs text-slate-500">
                      Save travel time and shipping costs to Nairobi; our 4 hubs in Nakuru, Kakamega, Eldoret, and Kitale maintain consistent inventory.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0c1387]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0c1387]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Dual Wholesale & Walk-in Retail Counters
                    </h4>
                    <p className="text-xs text-slate-500">
                      Whether you need a full carton or a single dress for a family celebration, our branches welcome you with the same warm service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0c1387] hover:text-[#070c52] transition-colors"
                >
                  <span>Read our full company profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Visual Bento Box */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-[#faf9f6] p-6 rounded-2xl border border-[#e6e4dc]">
                  <TrendingUp className="w-8 h-8 text-[#0c1387] mb-3" />
                  <h4 className="font-display font-bold text-base text-slate-900">
                    Wholesale Margins
                  </h4>
                  <p className="mt-1 text-xs text-slate-600">
                    Competitive wholesale price tiers structured to allow local resellers healthy profit margins.
                  </p>
                </div>

                <div className="bg-[#070c52] text-white p-6 rounded-2xl border border-[#0c1387]">
                  <span className="font-mono text-2xl font-bold text-[#ec268f] block">
                    4 Branches
                  </span>
                  <p className="mt-1 text-xs text-slate-200">
                    Strategically serving Nakuru, Kakamega, Eldoret, and Kitale.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="bg-[#0c1387] text-white p-6 rounded-2xl border border-[#0c1387]">
                  <Layers className="w-8 h-8 text-[#fce7f3] mb-3" />
                  <h4 className="font-display font-bold text-base text-white">
                    Verified Quality
                  </h4>
                  <p className="mt-1 text-xs text-slate-200">
                    Pre-inspected fabrics, reinforced stitching, and enduring designs.
                  </p>
                </div>

                <div className="bg-[#faf9f6] p-6 rounded-2xl border border-[#e6e4dc]">
                  <Store className="w-8 h-8 text-[#ec268f] mb-3" />
                  <h4 className="font-display font-bold text-base text-slate-900">
                    Physical Presence
                  </h4>
                  <p className="mt-1 text-xs text-slate-600">
                    Real, accessible brick-and-mortar storefronts with dedicated branch teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Leadership Preview Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <LeadershipSection variant="preview" />
      </motion.div>

      {/* 5. FOUR BRANCHES PREVIEW */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#ec268f]">
            Physical Store Network
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#070c52]">
            Visit Us Across Western Kenya & Rift Valley
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our 4 branches are situated in major commercial centers for easy access by retail shoppers and wholesale transport vehicles.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {BRANCHES_DATA.map((branch) => (
            <motion.div key={branch.id} variants={cardItemVariants}>
              <BranchCard branch={branch} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <Link
            to="/branches"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0c1387] hover:underline"
          >
            <span>View complete branch operating hours, departments & directions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.section>

      {/* 6. GENERAL ENQUIRY / CONTACT TEASER */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-3xl bg-gradient-to-br from-[#070c52] to-[#0c1387] text-white p-8 sm:p-12 shadow-xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#fce7f3]">
              Partner With Wamorgan
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
              Looking for Wholesale Stocks or Branch Assistance?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Whether you are opening a boutique, placing a bulk school/linen order, or looking for specific garments in Nakuru, Kakamega, Eldoret, or Kitale, our branch teams are ready to assist.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#070c52] font-semibold text-xs rounded-xl shadow hover:bg-slate-100 transition-colors text-center whitespace-nowrap cursor-pointer"
            >
              Submit an Enquiry
            </Link>
            <a
              href="https://wa.me/254700000001?text=Hello%20Wamorgan%2C%20I%20would%20like%20to%20enquire%20about%20wholesale%20fashion%20supply."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#ec268f] hover:bg-[#d81b7e] text-white font-semibold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Coordinator</span>
            </a>
          </div>
        </div>
      </motion.section>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
