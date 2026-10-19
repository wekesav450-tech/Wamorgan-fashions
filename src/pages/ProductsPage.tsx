import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, RotateCcw, AlertCircle, Sparkles } from 'lucide-react';
import { PRODUCTS_DATA, Product } from '../data/wamorganData';
import { ProductCard } from '../components/ProductCard';
import { ProductDetailModal } from '../components/ProductDetailModal';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc' | 'category'>('name-asc');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sync category state with search query param
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const categories = [
    'All',
    "Women's Fashion",
    "Men's Apparel",
    'Bedding & Home Textiles',
    'Bags & Accessories',
    "Children's Wear",
  ];

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.sku.toLowerCase().includes(q) ||
        product.variants.colors.some((c) => c.toLowerCase().includes(q)) ||
        product.variants.sizes.some((s) => s.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'category') return a.category.localeCompare(b.category);
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortBy('name-asc');
    setSearchParams({});
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Page Title & Context */}
      <div className="border-b border-[#e6e4dc] pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ec268f] mb-1">
              <span>Merchandise Showcase</span>
              <span aria-hidden="true">·</span>
              <span>Wholesale & Retail</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#070c52]">
              Product Catalogue
            </h1>
            <p className="mt-1 text-sm text-slate-600 max-w-2xl">
              Explore our current range of women’s wear, men’s apparel, household textiles, and accessories available through our Nakuru, Kakamega, Eldoret, and Kitale branches.
            </p>
          </div>

          {/* Compliance notice pill */}
          <div className="bg-[#070c52]/5 border border-[#0c1387]/15 rounded-lg p-3 text-xs text-slate-700 max-w-sm">
            <div className="flex items-center gap-1.5 font-semibold text-[#070c52] mb-0.5">
              <AlertCircle className="w-3.5 h-3.5 text-[#ec268f]" />
              <span>Showcase Only (Phase 1)</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Prices and quantities are sample guides for management review. Purchases are completed at physical branches.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#e6e4dc] shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product name, SKU (e.g. WM-W-010), or fabric..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#e6e4dc] text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0c1387] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort By Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-medium text-slate-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="py-2 px-3 text-xs rounded-lg border border-[#e6e4dc] bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0c1387] cursor-pointer"
            >
              <option value="name-asc">Product Name (A to Z)</option>
              <option value="name-desc">Product Name (Z to A)</option>
              <option value="category">Category</option>
            </select>
          </div>
        </div>

        {/* Category Filter Tabs - Interactive segmented control */}
        <div className="pt-2 border-t border-[#f4f3ef] flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-1 hidden sm:block" />
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-[#0c1387] text-white shadow-xs'
                    : 'bg-[#f4f3ef] text-slate-600 hover:text-slate-900 hover:bg-[#e8e6df]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>
          Showing <strong className="text-slate-800 font-bold">{filteredProducts.length}</strong> products
          {selectedCategory !== 'All' && <span> in "{selectedCategory}"</span>}
          {searchQuery && <span> matching "{searchQuery}"</span>}
        </span>

        {(selectedCategory !== 'All' || searchQuery) && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 text-[#0c1387] hover:underline cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset filters</span>
          </button>
        )}
      </div>

      {/* Product Grid or Empty State */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setSelectedProduct}
              onQuickInquire={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center bg-white rounded-2xl border border-[#e6e4dc] p-8 space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#f4f3ef] flex items-center justify-center mx-auto text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-lg text-slate-800">
            No products match your search criteria
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            We couldn't find any products in "{selectedCategory}" matching "{searchQuery}". Try adjusting your keywords or viewing all categories.
          </p>
          <button
            onClick={resetFilters}
            type="button"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0c1387] rounded-lg hover:bg-[#070c52] transition-colors cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
