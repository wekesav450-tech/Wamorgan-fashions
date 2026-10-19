import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, ShieldAlert, CheckCircle } from 'lucide-react';
import { Branch } from '../data/wamorganData';

interface BranchCardProps {
  branch: Branch;
  onSelectBranch?: (branch: Branch) => void;
}

export const BranchCard: React.FC<BranchCardProps> = ({ branch, onSelectBranch }) => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    branch.googleMapsQuery
  )}`;

  return (
    <article
      id={branch.id}
      className="bg-white rounded-2xl border border-[#e6e4dc] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Branch Image Container - Honest Placeholder policy */}
        <div className="relative aspect-[16/9] bg-[#070c52] p-6 flex flex-col justify-between text-white overflow-hidden">
          {/* Subtle textured graphic background */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ec268f_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Top Bar with Town & Status */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest font-mono text-[#fce7f3]">
              {branch.county}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md text-slate-200 border border-white/15">
              <span>Branch {branch.id.toUpperCase()}</span>
            </span>
          </div>

          {/* Center Brand Title */}
          <div className="relative z-10 my-2">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white">
              {branch.town}
            </h3>
            <p className="text-xs text-slate-300 font-medium mt-0.5">
              {branch.hubRole}
            </p>
          </div>

          {/* Honest Photo Notice Tag */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-300 border-t border-white/15 pt-2">
            <span className="flex items-center gap-1.5 text-amber-300">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Authentic Storefront Photo Awaiting Upload</span>
            </span>
            <span className="text-[10px] text-slate-400">Phase 1 Preview</span>
          </div>
        </div>

        {/* Branch Content Details */}
        <div className="p-6 space-y-4">
          {/* Location & Address */}
          <div className="space-y-1.5">
            <div className="flex items-start gap-2.5 text-xs text-slate-700">
              <MapPin className="w-4 h-4 text-[#ec268f] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900">{branch.address}</p>
                {!branch.addressConfirmed && (
                  <p className="text-[11px] text-amber-700 font-medium">
                    (Precise building name awaiting management sign-off)
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="flex items-start gap-2.5 text-xs text-slate-600">
            <Clock className="w-4 h-4 text-[#0c1387] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-800">Operating Hours:</span>
              <p className="mt-0.5 text-slate-600 leading-snug">{branch.hours}</p>
            </div>
          </div>

          {/* Contact Direct Line */}
          <div className="flex items-start gap-2.5 text-xs text-slate-600">
            <Phone className="w-4 h-4 text-[#0c1387] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-800">Branch Phone:</span>
              <p className="mt-0.5 font-mono text-slate-700">
                {branch.phone}{' '}
                <span className="text-[10px] text-slate-500 font-sans">
                  (Official line to be confirmed)
                </span>
              </p>
            </div>
          </div>

          {/* Stocked Departments */}
          <div className="pt-2 border-t border-[#f0eee6]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Key In-Store Departments
            </span>
            <div className="flex flex-wrap gap-1.5">
              {branch.departments.map((dept, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#f4f3ef] text-slate-700 px-2.5 py-1 rounded font-medium border border-[#e6e4dc]"
                >
                  {dept}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0 border-t border-[#f0eee6] mt-4 flex flex-col sm:flex-row items-center gap-2.5">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 py-2.5 px-3 text-xs font-semibold text-[#070c52] bg-[#f4f3ef] hover:bg-[#e8e6df] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-center"
        >
          <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          <span>Google Maps</span>
        </a>

        <a
          href={`https://wa.me/${branch.whatsapp.replace('+', '')}?text=${encodeURIComponent(
            `Hello Wamorgan ${branch.name}, I would like to inquire about products and branch hours.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 py-2.5 px-3 text-xs font-semibold text-white bg-[#0c1387] hover:bg-[#070c52] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-center"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#ec268f]" />
          <span>WhatsApp Branch</span>
        </a>
      </div>
    </article>
  );
};
