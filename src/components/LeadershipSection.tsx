import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, ShieldCheck, ArrowRight, Sparkles, Building2, Award, Info } from 'lucide-react';
import { LEADERSHIP_DATA, BRAND_INFO } from '../data/wamorganData';

interface LeadershipSectionProps {
  variant?: 'full' | 'preview';
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ variant = 'full' }) => {
  const [imageError, setImageError] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);

  if (variant === 'preview') {
    return (
      <section className="bg-white rounded-3xl border border-[#e6e4dc] p-6 sm:p-8 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Group Photo Thumbnail */}
          <div className="md:col-span-5 lg:col-span-4 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#0c1387]/20 shadow-md max-w-[280px] w-full aspect-[9/14] bg-[#f4f3ef]">
              {!imageError ? (
                <img
                  src={LEADERSHIP_DATA.groupPhotoUrl}
                  alt={LEADERSHIP_DATA.photoAlt}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center text-slate-500 bg-slate-100">
                  <Users className="w-8 h-8 text-[#0c1387] mb-2" />
                  <span className="text-xs font-semibold">{LEADERSHIP_DATA.sectionTitle}</span>
                </div>
              )}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-white text-center">
                <span className="text-[11px] font-semibold tracking-wide uppercase block">
                  {BRAND_INFO.tradingName}
                </span>
                <span className="text-[10px] text-slate-300">
                  Executive Leadership
                </span>
              </div>
            </div>
          </div>

          {/* Text Summary */}
          <div className="md:col-span-7 lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ec268f]">
              <Users className="w-4 h-4 text-[#ec268f]" />
              <span>{LEADERSHIP_DATA.sectionTitle}</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#070c52]">
              Guided by Experienced Stewardship & Regional Commitment
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              {LEADERSHIP_DATA.overviewNarrative}
            </p>

            <div className="p-3.5 rounded-xl bg-[#faf9f6] border border-[#e6e4dc] text-xs text-slate-600 space-y-1">
              <span className="font-semibold text-slate-800 block">
                Executive Leadership Profile
              </span>
              <p className="text-[11px] text-slate-500">
                Official titles and individual biographies are prepared in editable formats awaiting final management confirmation.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about#leadership"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0c1387] hover:text-[#070c52] transition-colors group"
              >
                <span>Read more about our leadership & governance</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Full Variant for About Page
  return (
    <section id="leadership" className="space-y-8 scroll-mt-24">
      {/* Section Header */}
      <div className="border-b border-[#e6e4dc] pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ec268f] mb-1">
          <Users className="w-4 h-4 text-[#ec268f]" />
          <span>Corporate Governance & Vision</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#070c52]">
          {LEADERSHIP_DATA.sectionTitle}
        </h2>
        <p className="mt-1 text-sm text-slate-600 max-w-2xl leading-relaxed">
          {LEADERSHIP_DATA.subtitle} — Spearheading retail and wholesale apparel operations across Nakuru, Kakamega, Eldoret, and Kitale.
        </p>
      </div>

      {/* Main Leadership Display Card */}
      <div className="bg-white rounded-3xl border border-[#e6e4dc] overflow-hidden shadow-sm p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Authentic Photograph Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div 
              onClick={() => setShowLightbox(true)}
              className="relative rounded-2xl overflow-hidden border-2 border-[#0c1387]/15 shadow-xl bg-[#070c52] w-full max-w-[360px] aspect-[9/16] cursor-pointer group"
              title="Click to inspect authentic photograph in high resolution"
            >
              {!imageError ? (
                <img
                  src={LEADERSHIP_DATA.groupPhotoUrl}
                  alt={LEADERSHIP_DATA.photoAlt}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-contain sm:object-cover sm:object-top group-hover:scale-[1.02] transition-transform duration-300"
                  loading="eager"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-400 bg-slate-900">
                  <Users className="w-12 h-12 text-[#ec268f] mb-3" />
                  <span className="font-semibold text-white text-sm">
                    {LEADERSHIP_DATA.sectionTitle}
                  </span>
                  <span className="text-xs text-slate-400 mt-1">
                    Authentic photograph loaded
                  </span>
                </div>
              )}

              {/* Hover Inspect Pill */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/20 opacity-90 group-hover:opacity-100 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#ec268f]" />
                <span>Click to Inspect 4K</span>
              </div>

              {/* Bottom Scrim Badge */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-white text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-[#fce7f3] block">
                  {BRAND_INFO.name}
                </span>
                <span className="text-[11px] text-slate-300">
                  Board of Directors & Executive Leadership
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowLightbox(true)}
                className="text-xs font-semibold text-[#0c1387] hover:text-[#ec268f] flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>Inspect Full-Resolution Photo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="mt-1 text-[11px] text-slate-500 text-center max-w-xs">
              Authentic photograph of the Wamorgan Wholesalers leadership team during a celebratory corporate milestone event.
            </p>
          </div>

          {/* Lightbox Modal */}
          {showLightbox && (
            <div
              role="dialog"
              aria-modal="true"
              onClick={() => setShowLightbox(false)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col border border-white/10 shadow-2xl"
              >
                <div className="px-6 py-4 bg-slate-950 flex items-center justify-between border-b border-white/10 text-white">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#ec268f]" />
                      <span>{LEADERSHIP_DATA.sectionTitle} — Authentic Corporate Portrait</span>
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Master photograph of the executive leadership & directors
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowLightbox(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Close lightbox"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-4 sm:p-8 flex-1 overflow-auto flex items-center justify-center bg-black/60">
                  <img
                    src="/assets/enhanced/leadership_directors_4k.jpg"
                    alt={LEADERSHIP_DATA.photoAlt}
                    className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl border border-white/15"
                  />
                </div>

                <div className="px-6 py-3 bg-slate-950 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/10">
                  <span>Authentic Wamorgan Wholesalers & Wa Morgan Fashions executive asset.</span>
                  <span className="text-[11px] text-[#fce7f3] bg-white/10 px-2.5 py-1 rounded-md">
                    Master 4K Resolution: 2155 × 3840 px
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Text & Editable Information Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0c1387] bg-[#0c1387]/5 px-3 py-1 rounded-md border border-[#0c1387]/10 inline-block">
                {LEADERSHIP_DATA.provisionalTitle}
              </span>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#070c52] leading-snug">
                Driving Sustainable Fashion Commerce in Kenya
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {LEADERSHIP_DATA.overviewNarrative}
              </p>
            </div>

            {/* Editable Fields Container for Management Review */}
            <div className="p-5 rounded-2xl bg-[#faf9f6] border border-[#e6e4dc] space-y-4">
              <div className="flex items-center justify-between border-b border-[#e6e4dc] pb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#ec268f]" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Executive Profile & Roles
                  </span>
                </div>
                <span className="text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-medium">
                  {LEADERSHIP_DATA.detailsStatus}
                </span>
              </div>

              {/* Structured placeholders matching instructions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-[#e6e4dc]">
                  <span className="text-[11px] text-slate-400 font-medium block">
                    Full Name(s):
                  </span>
                  <span className="font-semibold text-slate-700 mt-0.5 block">
                    {LEADERSHIP_DATA.editableFields.confirmedNames || 'Awaiting Management Confirmation'}
                  </span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#e6e4dc]">
                  <span className="text-[11px] text-slate-400 font-medium block">
                    Official Position / Titles:
                  </span>
                  <span className="font-semibold text-slate-700 mt-0.5 block">
                    {LEADERSHIP_DATA.editableFields.confirmedTitles || 'CEO / Managing Director / Directors'}
                  </span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#e6e4dc] sm:col-span-2">
                  <span className="text-[11px] text-slate-400 font-medium block">
                    Official Executive Message:
                  </span>
                  <p className="text-xs text-slate-600 italic mt-0.5">
                    "{LEADERSHIP_DATA.editableFields.leadershipMessage || 'To our valued customers, retail partners, and regional traders: Wamorgan Wholesalers remains steadfast in providing unmatched quality at accessible prices across all four of our branches.'}"
                  </p>
                  <span className="text-[10px] text-slate-400 block mt-1">
                    (Provisional executive message — ready for custom text upon approval)
                  </span>
                </div>
              </div>
            </div>

            {/* Core Leadership Priorities */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-[#e6e4dc] text-xs">
                <Building2 className="w-4 h-4 text-[#0c1387] mb-1.5" />
                <span className="font-bold text-slate-900 block">4 Regional Hubs</span>
                <span className="text-[11px] text-slate-500">
                  Overseeing operations in Nakuru, Kakamega, Eldoret & Kitale.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#e6e4dc] text-xs">
                <Award className="w-4 h-4 text-[#ec268f] mb-1.5" />
                <span className="font-bold text-slate-900 block">Quality Assurance</span>
                <span className="text-[11px] text-slate-500">
                  Direct bulk procurement ensuring customer value.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#e6e4dc] text-xs">
                <Sparkles className="w-4 h-4 text-[#c59b27] mb-1.5" />
                <span className="font-bold text-slate-900 block">Be Smart With Less</span>
                <span className="text-[11px] text-slate-500">
                  Empowering households and retail entrepreneurs.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
