import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ClipboardCheck, PhoneCall, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/wamorganData';

interface HeaderProps {
  onOpenChecklist: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenChecklist }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Our Branches', path: '/branches' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e6e4dc]">
      {/* Top Notice Bar - Subtle management review indicator */}
      <div className="bg-[#070c52] text-white text-xs py-1.5 px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="font-semibold text-[#fce7f3] tracking-wide uppercase text-[11px]">
            {BRAND_INFO.tradingName}
          </span>
          <span className="text-white/40 hidden sm:inline">|</span>
          <span className="text-white/80 hidden sm:inline text-[11px]">
            "{BRAND_INFO.tagline}" · Branches in Nakuru, Kakamega, Eldoret & Kitale
          </span>
        </div>
        <button
          onClick={onOpenChecklist}
          type="button"
          className="flex items-center gap-1.5 text-[11px] font-medium text-[#fce7f3] hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
          title="View Management Review Checklist & Verification Status"
        >
          <ClipboardCheck className="w-3.5 h-3.5 text-[#ec268f]" />
          <span className="underline underline-offset-2">Management Review Notes</span>
        </button>
      </div>

      {/* Main Navigation Bar - Strict 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Official Logo */}
        <Link
          to="/"
          className="flex items-center gap-3.5 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0c1387] rounded-md p-1"
        >
          <img
            src={BRAND_INFO.logoUrl}
            alt="Wa Morgan Fashions Logo"
            className="w-12 h-12 rounded-lg object-contain shadow-sm border border-[#0c1387]/20 bg-[#0c1387]"
          />
          <div className="flex flex-col">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#070c52] whitespace-nowrap leading-tight">
              Wamorgan <span className="font-normal text-slate-600 text-lg sm:text-xl">Wholesalers</span>
            </span>
            <span className="text-[11px] tracking-wider uppercase font-medium text-[#ec268f] whitespace-nowrap">
              Wa Morgan Fashions
            </span>
          </div>
        </Link>

        {/* Zone 2: Navigation Links (Single line, text with hover underlines) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#3b3e4a]" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                  active
                    ? 'text-[#0c1387] font-semibold'
                    : 'hover:text-[#0c1387]'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ec268f] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link
            to="/branches"
            className="text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-[#0c1387] transition-colors whitespace-nowrap flex items-center gap-1"
          >
            <span>4 Branches</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-[#0c1387] hover:bg-[#070c52] transition-colors rounded-lg shadow-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0c1387]"
          >
            Branch Enquiry
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/contact"
            className="px-3 py-1.5 text-xs font-medium text-white bg-[#0c1387] rounded-md whitespace-nowrap"
          >
            Enquire
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 text-slate-700 hover:text-[#0c1387] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0c1387] rounded-lg"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e6e4dc] bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                    active
                      ? 'bg-[#f4f3ef] text-[#0c1387] font-semibold'
                      : 'text-slate-800 hover:bg-[#faf9f6]'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-[#ec268f]" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-[#e6e4dc] space-y-3">
            <Link
              to="/branches"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-[#0c1387] text-[#0c1387] font-medium text-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Locate Our 4 Branches</span>
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChecklist();
              }}
              type="button"
              className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg bg-[#f3f2ee] text-slate-700 text-xs font-medium cursor-pointer"
            >
              <ClipboardCheck className="w-4 h-4 text-[#ec268f]" />
              <span>Management Review Notes & Status</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
