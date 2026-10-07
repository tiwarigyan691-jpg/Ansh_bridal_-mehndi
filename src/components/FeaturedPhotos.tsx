import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { MEHNDI_CATEGORIES, BUSINESS_INFO } from '../data/mehndiData';
import { ImageSlot } from './ImageSlot';

export const FeaturedPhotos: React.FC = () => {
  return (
    <section className="relative py-16 bg-[#FAF8F5] border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0B1E3D]/10 border border-[#D4AF37]/40 text-[#0B1E3D] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#A67C1E]" />
            8 Exclusive Mehendi Categories
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1E3D]">
            Mehendi Types & Category Showcase
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A67C1E] mx-auto my-3.5 rounded-full" />
          <p className="text-sm sm:text-base text-[#1E3A63] font-light leading-relaxed">
            Exactly 8 signature mehndi categories handcrafted with precision, rich organic color, and intricate bridal artistry.
          </p>
        </div>

        {/* Exactly 8 Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEHNDI_CATEGORIES.map((cat, index) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl p-3 shadow-md border border-[#D4AF37]/35 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Category-Isolated Real Photo Slot */}
              <ImageSlot
                slotId={cat.slotId}
                label={cat.title}
                category={`Category ${index + 1}`}
                aspectRatioClass="aspect-[4/5]"
                description={cat.description}
                showCategoryBadge={true}
              />

              {/* Title & Info */}
              <div className="pt-3.5 px-1.5 text-center flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FAF8F5] text-[#A67C1E] border border-[#D4AF37]/30 inline-block mb-1.5">
                    {cat.tag}
                  </span>
                  <h3 className="font-cinzel text-base font-bold text-[#0B1E3D] leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#2A4365] font-light line-clamp-2 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3 mt-2 border-t border-[#D4AF37]/20">
                  <a
                    href={BUSINESS_INFO.whatsappTextLink(`Hello Ansh Bridal Mehandi Art, I would like to inquire about: ${cat.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 text-xs font-bold text-[#0B1E3D] hover:text-[#A67C1E] transition-colors"
                  >
                    <span>Inquire {cat.title}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
