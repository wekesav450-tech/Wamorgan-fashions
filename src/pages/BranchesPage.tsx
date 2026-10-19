import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  ExternalLink,
  ShieldAlert,
  Building2,
  Truck,
  CheckCircle,
  Navigation,
} from 'lucide-react';
import { BRANCHES_DATA, Branch, BRAND_INFO } from '../data/wamorganData';
import { BranchCard } from '../components/BranchCard';
import { RealStoreExperienceSection } from '../components/RealStoreExperienceSection';

export const BranchesPage: React.FC = () => {
  const [activeBranchId, setActiveBranchId] = useState<string>(BRANCHES_DATA[0].id);

  const activeBranch =
    BRANCHES_DATA.find((b) => b.id === activeBranchId) || BRANCHES_DATA[0];

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="border-b border-[#e6e4dc] pb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ec268f] mb-1">
          <span>Physical Store Network</span>
          <span aria-hidden="true">·</span>
          <span>Western Kenya & Rift Valley</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#070c52]">
          Our 4 Branch Locations
        </h1>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-relaxed">
          Wamorgan Wholesalers operates 4 retail and wholesale hubs strategically situated across <strong>Nakuru, Kakamega, Eldoret, and Kitale</strong> to supply regional boutiques, local market traders, and retail families.
        </p>

        {/* Executive Disclaimer */}
        <div className="mt-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-semibold">
              Management Review & Information Verification Notice
            </span>
            <p className="text-amber-800 leading-relaxed text-[11px]">
              Exact building names, room numbers, and dedicated Safaricom/Airtel branch coordinator telephone lines are provisional pending final management sign-off. In accordance with guidelines, no artificial AI store fronts are presented as physical premises.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Branch Switcher (Desktop & Mobile) */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#e6e4dc]">
          {BRANCHES_DATA.map((branch) => {
            const isSelected = activeBranch.id === branch.id;
            return (
              <button
                key={branch.id}
                onClick={() => setActiveBranchId(branch.id)}
                type="button"
                className={`px-4 py-3 rounded-xl text-left transition-all shrink-0 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#070c52] text-white border-[#070c52] shadow-sm'
                    : 'bg-white text-slate-700 border-[#e6e4dc] hover:bg-[#faf9f6]'
                }`}
              >
                <div className="text-xs uppercase tracking-wider font-semibold opacity-75">
                  {branch.county}
                </div>
                <div className="font-display font-bold text-sm sm:text-base">
                  {branch.town}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Branch Deep-Dive Spotlight Card */}
        <div className="bg-white rounded-3xl border border-[#e6e4dc] overflow-hidden shadow-sm p-6 sm:p-10 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#f0eee6]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#0c1387] mb-1">
                <span>{activeBranch.county.toUpperCase()}</span>
                <span aria-hidden="true">·</span>
                <span>{activeBranch.hubRole}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#070c52]">
                {activeBranch.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {activeBranch.notes}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  activeBranch.googleMapsQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg border border-[#0c1387] text-[#0c1387] hover:bg-[#0c1387]/5 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions (Maps)</span>
              </a>

              <a
                href={`https://wa.me/${activeBranch.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                  `Hello Wamorgan ${activeBranch.name}, I would like to inquire about current stock and wholesale pricing.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-[#0c1387] hover:bg-[#070c52] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#ec268f]" />
                <span>WhatsApp Branch</span>
              </a>
            </div>
          </div>

          {/* Grid of Key Branch Particulars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address */}
            <div className="p-5 rounded-2xl bg-[#faf9f6] border border-[#e6e4dc] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0c1387]">
                <MapPin className="w-4 h-4 text-[#ec268f]" />
                <span>Physical Location</span>
              </div>
              <p className="text-xs font-medium text-slate-800 leading-snug">
                {activeBranch.address}
              </p>
              <p className="text-[11px] text-amber-700 bg-amber-50/80 p-2 rounded border border-amber-200">
                Awaiting final management confirmation of exact plaza / building unit number.
              </p>
            </div>

            {/* Operating Hours */}
            <div className="p-5 rounded-2xl bg-[#faf9f6] border border-[#e6e4dc] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0c1387]">
                <Clock className="w-4 h-4 text-[#0c1387]" />
                <span>Branch Hours</span>
              </div>
              <p className="text-xs font-medium text-slate-800 leading-snug">
                {activeBranch.hours}
              </p>
              <p className="text-[11px] text-slate-500">
                Bulk loading and wholesale dispatches recommended between 9:00 AM and 4:00 PM on weekdays.
              </p>
            </div>

            {/* Contact & Communications */}
            <div className="p-5 rounded-2xl bg-[#faf9f6] border border-[#e6e4dc] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0c1387]">
                <Phone className="w-4 h-4 text-[#0c1387]" />
                <span>Branch Direct Contacts</span>
              </div>
              <p className="text-xs font-mono font-medium text-slate-800">
                Tel: {activeBranch.phone}
              </p>
              <p className="text-xs text-slate-600 font-mono">
                Email: {activeBranch.email}
              </p>
              <p className="text-[11px] text-slate-400">
                (Official branch lines will be activated following management review)
              </p>
            </div>
          </div>

          {/* Departments & Services available */}
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              Departments & Commercial Facilities at {activeBranch.town}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {activeBranch.departments.map((dept, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-[#e6e4dc] bg-white flex items-center gap-2.5"
                >
                  <CheckCircle className="w-4 h-4 text-[#ec268f] shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">{dept}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Storefront Asset Placeholder Notice */}
          <div className="p-5 rounded-2xl bg-[#070c52]/5 border border-[#0c1387]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#070c52] block">
                Authentic Storefront Photography Submission
              </span>
              <p className="text-xs text-slate-600">
                Branch managers are invited to upload exterior facade, showroom display, and customer counter photos to replace this development placeholder.
              </p>
            </div>
            <span className="shrink-0 text-xs font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-[#e6e4dc]">
              Status: Pending Upload
            </span>
          </div>
        </div>
      </div>

      {/* All 4 Branch Summary Grid */}
      <div className="space-y-6 pt-6">
        <h3 className="font-display text-xl font-bold text-[#070c52]">
          Branch Summary Directory
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANCHES_DATA.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </div>

      {/* Real In-Store Shopping Atmosphere across Branches */}
      <div className="pt-6 border-t border-[#e6e4dc]">
        <RealStoreExperienceSection />
      </div>
    </div>
  );
};
