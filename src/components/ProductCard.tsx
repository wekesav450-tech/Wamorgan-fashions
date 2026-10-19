import React, { useState } from 'react';
import { Eye, MessageCircle, Info } from 'lucide-react';
import { Product } from '../data/wamorganData';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickInquire?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onQuickInquire,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group bg-white rounded-xl overflow-hidden border border-[#e6e4dc] hover:border-[#0c1387]/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Product Image Container */}
      <div
        onClick={() => onSelect(product)}
        className="relative aspect-[4/3] bg-[#f4f3ef] overflow-hidden cursor-pointer"
      >
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#f4f3ef] to-[#e8e6df] text-slate-500">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-600 mb-1">
              {product.category}
            </span>
            <span className="text-sm font-medium text-center text-slate-800">
              {product.name}
            </span>
          </div>
        )}

        {/* Subtle quick-view overlay button on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
          <span className="px-4 py-2 bg-white/95 text-[#070c52] text-xs font-semibold rounded-lg shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
            <Eye className="w-3.5 h-3.5 text-[#ec268f]" />
            <span>View Specifications</span>
          </span>
        </div>

        {/* Minimal Unboxed Text Tag */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-slate-800 px-2.5 py-1 rounded shadow-sm border border-black/5">
            {product.packType.includes('dozen') ? 'Wholesale Bale / Pack' : 'Wholesale & Retail'}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata: Category & SKU - Clean Unboxed with dot separator */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5 font-medium">
            <span className="text-[#0c1387]">{product.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-slate-400">{product.sku}</span>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onSelect(product)}
            className="font-display font-semibold text-base text-[#1a1b23] group-hover:text-[#0c1387] transition-colors cursor-pointer line-clamp-2 leading-snug"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing Guide & Action Bar */}
        <div className="mt-4 pt-3 border-t border-[#f0eee6]">
          {/* Price or Price Guide Notice */}
          <div className="mb-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                <Info className="w-3 h-3 text-[#ec268f]" />
                <span>Price Guide</span>
              </span>
              <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                Sample / Subject to Confirmation
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-800 mt-0.5 tabular-nums">
              {product.samplePriceDisplay?.split('(')[0] || 'Bulk rate upon enquiry'}
            </p>
          </div>

          {/* Actions: View Details & Enquire (NO CART / NO BUY) */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelect(product)}
              type="button"
              className="w-full py-2 px-3 text-xs font-semibold text-[#070c52] bg-[#f4f3ef] hover:bg-[#e8e6df] rounded-lg transition-colors text-center cursor-pointer"
            >
              Details
            </button>
            <button
              onClick={() => onQuickInquire ? onQuickInquire(product) : onSelect(product)}
              type="button"
              className="w-full py-2 px-3 text-xs font-semibold text-white bg-[#0c1387] hover:bg-[#070c52] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#fce7f3]" />
              <span>Enquire</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
