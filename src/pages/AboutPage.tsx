import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Building,
  Users,
  TrendingUp,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Info,
} from 'lucide-react';
import { BRAND_INFO, BRANCHES_DATA } from '../data/wamorganData';
import { LeadershipSection } from '../components/LeadershipSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Banner */}
      <div className="border-b border-[#e6e4dc] pb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ec268f] mb-1">
          <span>Corporate Overview & Heritage</span>
          <span aria-hidden="true">·</span>
          <span>Wa Morgan Fashions</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#070c52]">
          About Wamorgan Wholesalers
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Wamorgan Wholesalers is a dedicated Kenyan fashion and household goods wholesale and retail enterprise, supplying local traders, boutique owners, and families across Nakuru, Kakamega, Eldoret, and Kitale.
        </p>
      </div>

      {/* Main Narrative & Logo Branding */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm leading-relaxed">
          <h2 className="font-display text-2xl font-bold text-[#070c52]">
            Our Identity: "Be Smart With Less"
          </h2>
          <p>
            Operating under the renowned trade brand <strong>Wa Morgan Fashions</strong>, Wamorgan Wholesalers was conceived to bridge the gap between high-turnover fashion sourcing and regional accessibility. For small traders and household shoppers in Western Kenya and the Rift Valley, travelling to distant central markets often incurs prohibitive transportation expenses and logistical uncertainties.
          </p>
          <p>
            Our motto, <em>"Be Smart With Less"</em>, represents our core business ethos: smart sourcing, smart pricing, and lean distribution so that quality fashion, children’s apparel, footwear, bags, and home textiles remain affordable without compromising on durability or style.
          </p>

          <div className="p-4 rounded-xl bg-[#faf9f6] border border-[#e6e4dc] text-xs space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-[#070c52]">
              <Info className="w-4 h-4 text-[#ec268f]" />
              <span>Phase 1 Corporate Profile Notice</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              In accordance with company guidelines, detailed founding dates, executive biographies, and formal registration numbers will be updated upon final management sign-off. This Phase 1 presentation showcases approved operational scope and geographic presence.
            </p>
          </div>
        </div>

        {/* Brand Asset Card */}
        <div className="lg:col-span-5 bg-[#070c52] p-8 rounded-3xl text-white border border-[#0c1387] shadow-lg flex flex-col items-center text-center space-y-4">
          <img
            src={BRAND_INFO.logoUrl}
            alt="Official Wa Morgan Fashions Logo"
            className="w-32 h-32 rounded-2xl object-contain bg-white/10 p-2 border border-white/20 shadow-inner"
          />
          <div>
            <h3 className="font-display text-2xl font-bold text-white">
              {BRAND_INFO.name}
            </h3>
            <span className="text-xs uppercase tracking-widest text-[#fce7f3] font-semibold">
              Trading as {BRAND_INFO.tradingName}
            </span>
          </div>
          <div className="px-4 py-1.5 bg-[#ec268f] text-white rounded-full text-xs font-bold tracking-wider uppercase">
            "{BRAND_INFO.tagline}"
          </div>
          <p className="text-xs text-slate-300 leading-relaxed pt-2">
            Supplying retail customers and independent boutique stockists across 4 key Kenyan commercial hubs.
          </p>
        </div>
      </div>

      {/* Leadership Section */}
      <LeadershipSection variant="full" />

      {/* Dual Business Model (Wholesale vs Retail) */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#ec268f]">
            How We Operate
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#070c52]">
            Wholesale Distribution & Retail Service
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A balanced commercial model designed to serve both commercial traders and everyday household shoppers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Wholesale Tier */}
          <div className="bg-white p-8 rounded-2xl border border-[#e6e4dc] space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#0c1387]/10 flex items-center justify-center text-[#0c1387]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#070c52]">
              For Retailers, Boutiques & Resellers
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We supply small and medium traders with assorted packs, dozen bundles, and bulk cartons. Our branch teams work closely with retail stockists to provide consistent stock continuity, seasonal collections, and reliable margins.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-[#f0eee6]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Accessible minimum pack sizes (6-pack & 12-pack options)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Save on travel and freight expenses from distant cities</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct inspection of merchandise before collection</span>
              </li>
            </ul>
          </div>

          {/* Retail Tier */}
          <div className="bg-white p-8 rounded-2xl border border-[#e6e4dc] space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#ec268f]/10 flex items-center justify-center text-[#ec268f]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#070c52]">
              For Walk-in Shoppers & Families
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every Wamorgan branch features an inviting retail floor where individual customers and families can shop high-quality clothing, school wear, bedding, duvets, and bags at fair, transparent retail prices.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-[#f0eee6]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Single-piece purchases welcome across all departments</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Comfortable fitting assistance and helpful branch staff</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Immediate in-store payment via Cash or in-store M-Pesa</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Authentic In-Store & Team Gallery */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#e6e4dc] pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#ec268f]">
              Genuine Storefront & Operations
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#070c52]">
              Inside Wamorgan Wholesalers
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Authentic glimpses of our shop floor, dedicated customer service team, and curated retail shelves across our Western Kenya and Rift Valley branches.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 shrink-0">
            100% Genuine Business Photography
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl border border-[#e6e4dc] overflow-hidden group">
            <div className="aspect-[9/12] bg-[#070c52] p-1 flex items-center justify-center">
              <img
                src="/assets/aistudio/images__6__5e280aee.jpeg"
                alt="Authentic Wamorgan shop floor with customers and active displays"
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[11px] font-bold text-[#0c1387] uppercase tracking-wider block">
                Shop Floor & Aisles
              </span>
              <p className="text-xs font-semibold text-slate-800">
                Active customer retail aisles & backpack displays
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#e6e4dc] overflow-hidden group">
            <div className="aspect-[9/12] bg-[#070c52] p-1 flex items-center justify-center">
              <img
                src="/assets/aistudio/images__12__38198016.jpeg"
                alt="Wamorgan 3-piece suit in-store promotion and luggage section"
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[11px] font-bold text-[#0c1387] uppercase tracking-wider block">
                Executive Apparel & Luggage
              </span>
              <p className="text-xs font-semibold text-slate-800">
                Tailored 3-piece suits & travel luggage
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#e6e4dc] overflow-hidden group">
            <div className="aspect-[9/12] bg-[#070c52] p-1 flex items-center justify-center">
              <img
                src="/assets/aistudio/images__9__ae8957f5.jpeg"
                alt="Wamorgan staff member presenting baby bags and essentials"
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[11px] font-bold text-[#0c1387] uppercase tracking-wider block">
                Customer Care & Nursery
              </span>
              <p className="text-xs font-semibold text-slate-800">
                Staff assisting with baby diaper bags & essentials
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#e6e4dc] overflow-hidden group">
            <div className="aspect-[9/12] bg-[#070c52] p-1 flex items-center justify-center">
              <img
                src="/assets/aistudio/images__10__3b460a76.jpeg"
                alt="Illuminated store interior and cosmetics shelves"
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[11px] font-bold text-[#0c1387] uppercase tracking-wider block">
                Store Fixtures & Cosmetics
              </span>
              <p className="text-xs font-semibold text-slate-800">
                Illuminated beauty display columns & shelves
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Branch Footprint */}
      <div className="bg-[#faf9f6] p-8 sm:p-10 rounded-3xl border border-[#e6e4dc] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#ec268f]">
              Physical Presence
            </span>
            <h3 className="font-display text-2xl font-bold text-[#070c52]">
              Strategic Footprint Across 4 Key Hubs
            </h3>
          </div>
          <Link
            to="/branches"
            className="text-xs font-semibold text-[#0c1387] flex items-center gap-1 hover:underline"
          >
            <span>Explore all branches</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BRANCHES_DATA.map((branch) => (
            <div
              key={branch.id}
              className="p-5 rounded-xl bg-white border border-[#e6e4dc] space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#0c1387] font-semibold">
                  {branch.county}
                </span>
                <span className="text-[10px] text-slate-400">Branch</span>
              </div>
              <h4 className="font-display font-bold text-base text-slate-900">
                {branch.town}
              </h4>
              <p className="text-xs text-slate-500 leading-snug">
                {branch.hubRole}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
