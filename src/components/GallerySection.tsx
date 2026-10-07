import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import { MEHNDI_CATEGORIES, MehndiCategoryItem } from '../data/mehndiData';
import { ImageSlot } from './ImageSlot';

const GALLERY_FILTERS = [
  'All',
  'Leg Mehndi Bridal',
  'Customized Bridal Mehndi',
  'Engagement Mehndi',
  'Guest Mehndi / Arabic Mehndi',
  'Mandala Mehndi',
  'Rajasthani Mehndi',
  'Indian Mehndi',
  'Traditional Mehndi'
] as const;

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxData, setLightboxData] = useState<{ url: string; title: string } | null>(null);

  const filteredItems: MehndiCategoryItem[] = activeFilter === 'All'
    ? MEHNDI_CATEGORIES
    : MEHNDI_CATEGORIES.filter((item) => item.title === activeFilter);

  const handleViewImage = (url: string, title: string) => {
    setLightboxData({ url, title });
  };

  return (
    <section id="gallery" className="relative py-20 bg-[#F3EFEA] text-[#0B1E3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0B1E3D]/10 border border-[#D4AF37]/40 text-[#0B1E3D] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#A67C1E]" />
            Official Portfolio Gallery
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#0B1E3D]">
            Our Mehendi Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A67C1E] mx-auto my-3.5 rounded-full" />
          <p className="text-base text-[#1E3A63] font-light">
            Filter through our 8 authentic Mehendi categories. Each card is dedicated strictly to its respective style.
          </p>
        </div>

        {/* 8 Strict Category Filter Buttons (+ All) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {GALLERY_FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#0B1E3D] text-[#F5D77F] border-[#D4AF37] shadow-md scale-105'
                    : 'bg-white text-[#0B1E3D] border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#FAF8F5]'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid of the exact 8 categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-3 rounded-2xl border border-[#D4AF37]/35 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <ImageSlot
                slotId={item.slotId}
                label={item.title}
                category={item.title}
                aspectRatioClass="aspect-[4/5]"
                description={item.description}
                onViewImage={handleViewImage}
                showCategoryBadge={true}
              />
              <div className="pt-3 px-1 text-center">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#A67C1E]">
                  {item.tag}
                </span>
                <h4 className="font-serif-cormorant text-lg font-bold text-[#0B1E3D] line-clamp-1 mt-0.5">
                  {item.title}
                </h4>
                <p className="text-xs text-[#2A4365] line-clamp-2 mt-0.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxData && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setLightboxData(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxData(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#F5D77F] transition-colors p-2"
              aria-label="Close Lightbox"
            >
              <X className="w-7 h-7" />
            </button>
            <div className="rounded-xl overflow-hidden border border-[#D4AF37] max-h-[80vh]">
              <img
                src={lightboxData.url}
                alt={lightboxData.title}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>
            <div className="mt-3 text-center text-white">
              <h3 className="font-cinzel text-lg text-[#F5D77F]">{lightboxData.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
