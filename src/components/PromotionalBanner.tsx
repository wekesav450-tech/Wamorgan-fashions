import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Tag,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  X,
  Volume2,
  Store,
  Flame,
} from 'lucide-react';

export interface Promotion {
  id: string;
  badge: string;
  badgeColor: 'fuchsia' | 'amber' | 'emerald' | 'blue';
  headline: string;
  highlightText: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
  isExternal?: boolean;
}

const PROMOTIONS: Promotion[] = [
  {
    id: 'promo-3pc-suit',
    badge: 'Official In-Store Campaign',
    badgeColor: 'fuchsia',
    headline: 'Executive Ladies 3-Piece Formal Suit Collection',
    highlightText: '3pc Suit @ KES 2,800',
    subtext: 'Tailored vest, structured blazer & trousers with luggage pairing in all 4 branches',
    ctaText: 'View Collection',
    ctaLink: '/products?category=Women%27s%20Fashion',
  },
  {
    id: 'promo-2pcs-tracksuits',
    badge: 'Retail Floor Special',
    badgeColor: 'amber',
    headline: 'Men & Unisex Sport-Casual Two-Piece Sets',
    highlightText: 'Special: 2pcs @ KES 1,200',
    subtext: 'Comfortable zip jackets & track pants in high-demand colorways for immediate pickup',
    ctaText: 'Explore Apparel',
    ctaLink: '/products?category=Men%27s%20Apparel',
  },
  {
    id: 'promo-boys-wardrobe',
    badge: 'Children Department Deal',
    badgeColor: 'emerald',
    headline: 'Boys Camouflage Cargo Pants & Graphic Tees',
    highlightText: '5-Day Wardrobe Pack',
    subtext: '"Mama boys kuja tuvalishe kijana" — Durable cotton wear for active youth',
    ctaText: 'See Kids Wear',
    ctaLink: '/products?category=Children%27s%20Wear',
  },
  {
    id: 'promo-embroidered-suits',
    badge: 'Wholesale & Retail Spotlight',
    badgeColor: 'blue',
    headline: 'Ladies 2-Piece Embroidered Scalloped Skirt Suits',
    highlightText: '5 Regal Colorways in Stock',
    subtext: 'Ruby Red, Wine, Pink, Royal Blue, and Mustard Gold with gold embroidery',
    ctaText: 'Check Availability',
    ctaLink: '/products?category=Women%27s%20Fashion',
  },
];

export const PromotionalBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-rotate every 6 seconds unless paused
  useEffect(() => {
    if (isPaused || !isVisible) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROMOTIONS.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, isVisible]);

  if (!isVisible) {
    return (
      <div className="bg-[#050933] border-b border-white/10 px-4 py-1.5 flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <Flame className="w-3.5 h-3.5 text-[#ec268f]" />
          <span className="font-medium">Active in-store campaigns & wholesale specials</span>
        </div>
        <button
          onClick={() => setIsVisible(true)}
          className="text-[11px] text-[#fce7f3] hover:text-white font-semibold underline cursor-pointer"
        >
          Show Banner
        </button>
      </div>
    );
  }

  const currentPromo = PROMOTIONS[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + PROMOTIONS.length) % PROMOTIONS.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % PROMOTIONS.length);
  };

  const getBadgeStyle = (color: Promotion['badgeColor']) => {
    switch (color) {
      case 'fuchsia':
        return 'bg-[#ec268f] text-white';
      case 'amber':
        return 'bg-amber-400 text-slate-950';
      case 'emerald':
        return 'bg-emerald-500 text-white';
      case 'blue':
        return 'bg-sky-400 text-slate-950';
    }
  };

  return (
    <aside
      aria-label="Current promotions and announcements"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative bg-gradient-to-r from-[#070c52] via-[#0c1387] to-[#121c9e] text-white border-b border-white/15 overflow-hidden transition-all shadow-md"
    >
      {/* Decorative accent glow */}
      <div className="absolute top-0 right-1/4 w-96 h-full bg-[#ec268f]/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 relative">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            type="button"
            className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
            aria-label="Previous promotion"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Promotion Content */}
          <div className="flex-1 min-w-0 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center md:text-left">
            {/* Badge & Highlight */}
            <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start shrink-0">
              <span
                className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs flex items-center gap-1 ${getBadgeStyle(
                  currentPromo.badgeColor
                )}`}
              >
                <Sparkles className="w-2.5 h-2.5" />
                <span>{currentPromo.badge}</span>
              </span>

              <span className="font-display font-bold text-xs sm:text-sm text-amber-300 tracking-wide">
                {currentPromo.highlightText}
              </span>
            </div>

            {/* Separator on desktop */}
            <span className="hidden md:inline text-white/30" aria-hidden="true">
              ·
            </span>

            {/* Headline & Description */}
            <div className="min-w-0 max-w-xl">
              <p className="text-xs sm:text-sm font-medium text-slate-100 truncate">
                <span className="font-semibold text-white">{currentPromo.headline}</span>
                <span className="hidden lg:inline text-slate-300 text-xs ml-1.5 font-normal">
                  — {currentPromo.subtext}
                </span>
              </p>
            </div>

            {/* CTA Link */}
            <div className="shrink-0 pt-1 md:pt-0">
              <Link
                to={currentPromo.ctaLink}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 active:bg-white/25 border border-white/25 hover:border-white/40 text-white text-xs font-semibold rounded-lg transition-all group shadow-xs whitespace-nowrap cursor-pointer"
              >
                <span>{currentPromo.ctaText}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Controls: Next Arrow, Indicator Dots, Close */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Next Arrow Button */}
            <button
              onClick={handleNext}
              type="button"
              className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Next promotion"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Dismiss Button */}
            <button
              onClick={() => setIsVisible(false)}
              type="button"
              className="p-1 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors ml-1 cursor-pointer"
              title="Dismiss promotion banner"
              aria-label="Dismiss promotion banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-1.5 pt-2">
          {PROMOTIONS.map((promo, idx) => (
            <button
              key={promo.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'w-6 bg-[#ec268f]'
                  : 'w-1.5 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to promotion ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};
