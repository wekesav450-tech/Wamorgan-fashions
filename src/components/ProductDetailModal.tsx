import React, { useEffect } from 'react';
import { X, MessageCircle, MapPin, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { Product, BRANCHES_DATA, BRAND_INFO } from '../data/wamorganData';
import { useNavigate } from 'react-router-dom';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const navigate = useNavigate();
  const [isZoomed, setIsZoomed] = React.useState(false);

  // Escape key handler & zoom reset
  useEffect(() => {
    setIsZoomed(false);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  // Pre-fill WhatsApp message
  const whatsappText = encodeURIComponent(
    `Hello Wamorgan Wholesalers / Wa Morgan Fashions,\nI am interested in product: ${product.name} (SKU: ${product.sku}). Please let me know the current wholesale pack rates and branch availability.`
  );
  const whatsappUrl = `https://wa.me/254700000001?text=${whatsappText}`;

  const handleOpenContactForm = () => {
    onClose();
    navigate(`/contact?product=${encodeURIComponent(product.name)}&sku=${encodeURIComponent(product.sku)}`);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#e6e4dc] relative max-h-[92vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e6e4dc] bg-[#faf9f6]">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="text-[#0c1387] font-semibold">{product.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-slate-500">SKU: {product.sku}</span>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Image */}
            <div className="space-y-2">
              <div 
                onClick={() => setIsZoomed(!isZoomed)}
                className="relative rounded-xl overflow-hidden bg-[#f4f3ef] border border-[#e6e4dc] aspect-[4/3] cursor-pointer group"
                title="Click to toggle high-resolution 4K zoom"
              >
                <img
                  src={isZoomed ? product.image.replace('_web.jpg', '_4k.jpg') : product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover object-center transition-all duration-300 ${
                    isZoomed ? 'scale-125' : 'group-hover:scale-105'
                  }`}
                />
                <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded font-mono flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-2.5 h-2.5 text-[#ec268f]" />
                  <span>{isZoomed ? '4K Zoom Active' : 'Click to Zoom (4K)'}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
                <span>Authentic store photography</span>
                <span className="text-[#0c1387] font-semibold bg-[#0c1387]/5 px-2 py-0.5 rounded border border-[#0c1387]/10">
                  4K Retouched
                </span>
              </div>
            </div>

            {/* Main Info */}
            <div className="space-y-4">
              <h2
                id="product-modal-title"
                className="font-display font-bold text-xl sm:text-2xl text-[#070c52] leading-snug"
              >
                {product.name}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Price Notice */}
              <div className="p-3.5 rounded-lg bg-[#faf9f6] border border-[#e6e4dc] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">Wholesale Price Guide:</span>
                  <span className="text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-medium">
                    Sample / Pending Sign-off
                  </span>
                </div>
                <p className="text-sm font-bold text-[#0c1387] tabular-nums">
                  {product.samplePriceDisplay || 'Available upon inquiry'}
                </p>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Official bulk discount tiers depend on order quantity and packaging specification.
                </p>
              </div>

              {/* Wholesale Pack & Availability */}
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Minimum Wholesale Pack: </span>
                    <span>{product.minimumWholesalePack}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Retail Purchases: </span>
                    <span>{product.retailAvailable ? 'Available for single piece purchase in-store' : 'Wholesale lots only'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Specifications & Variants */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#e6e4dc]">
            {/* Sizes */}
            <div className="bg-[#faf9f6] p-4 rounded-xl border border-[#e6e4dc]">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Available Sizes & Dimensions
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {product.variants.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-2.5 py-1 text-xs font-medium bg-white text-slate-800 border border-[#e6e4dc] rounded"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Colors & Materials */}
            <div className="bg-[#faf9f6] p-4 rounded-xl border border-[#e6e4dc]">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Color Options & Material
              </h4>
              <p className="text-xs text-slate-600 mb-2">
                <span className="font-semibold text-slate-800">Material: </span>
                {product.variants.material || 'Premium commercial quality'}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {product.variants.colors.map((color) => (
                  <span
                    key={color}
                    className="px-2.5 py-1 text-xs font-medium bg-white text-slate-800 border border-[#e6e4dc] rounded"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stocked Branches List */}
          <div className="pt-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#ec268f]" />
              <span>Available at Wamorgan Branches</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {BRANCHES_DATA.map((branch) => {
                const isStocked = product.branchesStocked.includes(branch.id);
                return (
                  <div
                    key={branch.id}
                    className={`p-2.5 rounded-lg border text-xs text-center ${
                      isStocked
                        ? 'border-emerald-200 bg-emerald-50/50 text-slate-800 font-medium'
                        : 'border-slate-200 bg-slate-50 text-slate-400'
                    }`}
                  >
                    <span className="block font-semibold">{branch.town.split(' ')[0]}</span>
                    <span className="text-[10px] text-slate-500">
                      {isStocked ? 'In Stock / In-Store' : 'Upon Request'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Business Model Notice (No Online Checkout) */}
          <div className="p-3.5 rounded-xl bg-[#070c52]/5 border border-[#0c1387]/15 flex items-start gap-3 text-xs text-slate-700">
            <AlertCircle className="w-4 h-4 text-[#0c1387] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-semibold text-[#070c52]">
                In-Store Purchase & Direct Wholesale Consultation
              </span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                As part of Wamorgan's Phase 1 catalogue showcase, transactions are carried out at our physical retail and wholesale counters. Contact our branch coordinators below to check real-time bale quantities or arrange bulk collection.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-[#faf9f6] border-t border-[#e6e4dc] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            type="button"
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Back to Catalogue
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleOpenContactForm}
              type="button"
              className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-semibold text-[#070c52] bg-white border border-[#0c1387]/30 hover:bg-[#0c1387]/5 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              Enquiry Form
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-semibold text-white bg-[#0c1387] hover:bg-[#070c52] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#ec268f]" />
              <span>Enquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
