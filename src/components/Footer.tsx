import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { BRAND_INFO, BRANCHES_DATA } from '../data/wamorganData';

interface FooterProps {
  onOpenChecklist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenChecklist }) => {
  return (
    <footer className="bg-[#070c52] text-white pt-16 pb-12 border-t border-[#0c1387]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={BRAND_INFO.logoUrl}
                alt="Wamorgan Wholesalers Logo"
                className="w-12 h-12 rounded-lg object-contain bg-white/10 p-1 border border-white/20"
              />
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-white">
                  {BRAND_INFO.name}
                </h3>
                <p className="text-xs font-semibold text-[#fce7f3] uppercase tracking-wider">
                  {BRAND_INFO.tradingName} · "{BRAND_INFO.tagline}"
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              A premier retail and wholesale fashion distributor serving Western Kenya and the Rift Valley. We connect retailers, boutique entrepreneurs, and families with exceptional value and enduring style.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ec268f]" />
                <span>Phase 1 Business Profile & Showcase</span>
              </span>
            </div>
          </div>

          {/* Branches Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#fce7f3]">
              Our 4 Branches
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {BRANCHES_DATA.map((branch) => (
                <li key={branch.id}>
                  <Link
                    to={`/branches#${branch.id}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{branch.name}</span>
                    <span className="text-[11px] text-slate-400 group-hover:text-white font-mono">
                      {branch.town.split(' ')[0]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#fce7f3]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link to="/branches" className="hover:text-white transition-colors">
                  Branch Locations & Hours
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Wamorgan
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  General Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours & Review Access */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#fce7f3]">
              Store Hours
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Monday – Saturday: 8:00 AM – 6:30 PM
              <br />
              Sunday: Selected Branches Open
            </p>
            <div className="pt-3">
              <button
                onClick={onOpenChecklist}
                type="button"
                className="w-full text-left p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs text-slate-200 cursor-pointer"
              >
                <div className="font-semibold text-white flex items-center justify-between mb-1">
                  <span>Management Review</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ec268f]" />
                </div>
                <p className="text-[11px] text-slate-400">
                  Inspect verification status and placeholder audit
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Phase 1 Governance Notice & Compliance Banner */}
        <div className="my-8 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-semibold text-white block">
              Official Showcase Governance Notice (Phase 1)
            </span>
            <p className="text-slate-400">
              This website is an informational business profile and product catalog showcase. In strict accordance with company guidelines, online ordering, shopping carts, and payment checkouts are not enabled. All retail visits and wholesale volume transactions take place directly through our physical branch facilities.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 px-4 py-2 bg-[#ec268f] hover:bg-[#d81b7e] text-white font-medium rounded-lg text-xs transition-colors whitespace-nowrap"
          >
            Direct Branch Enquiry
          </Link>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {BRAND_INFO.name} ({BRAND_INFO.tradingName}). All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>Nakuru · Kakamega · Eldoret · Kitale</span>
            <span aria-hidden="true">·</span>
            <span>Kenya</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
