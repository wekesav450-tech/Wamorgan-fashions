import React from 'react';
import { Link } from 'react-router-dom';
import { Store, ArrowLeft, Search } from 'lucide-react';
import { BRAND_INFO } from '../data/wamorganData';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20 max-w-xl mx-auto px-4 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-[#0c1387]/10 text-[#0c1387] flex items-center justify-center mx-auto">
        <Store className="w-8 h-8 text-[#ec268f]" />
      </div>

      <div className="space-y-2">
        <span className="text-xs uppercase font-mono tracking-widest text-[#0c1387]">
          404 · Page Not Found
        </span>
        <h1 className="font-display text-3xl font-bold text-[#070c52]">
          Looking for a Wamorgan Page?
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The page or product category you requested does not exist or has moved. Explore our catalogue or visit one of our 4 branches.
        </p>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0c1387] hover:bg-[#070c52] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          to="/products"
          className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          <Search className="w-4 h-4" />
          <span>Explore Products</span>
        </Link>
      </div>
    </div>
  );
};
