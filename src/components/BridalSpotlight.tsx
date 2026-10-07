import React from 'react';
import { Check, MessageCircle, Phone, Heart } from 'lucide-react';
import { BUSINESS_INFO, MEHNDI_CATEGORIES } from '../data/mehndiData';
import { ImageSlot } from './ImageSlot';

export const BridalSpotlight: React.FC = () => {
  const legBridal = MEHNDI_CATEGORIES.find((c) => c.id === 'leg-mehndi-bridal') || MEHNDI_CATEGORIES[0];
  const customBridal = MEHNDI_CATEGORIES.find((c) => c.id === 'customized-bridal-mehndi') || MEHNDI_CATEGORIES[1];

  return (
    <section className="relative py-20 bg-royal-gradient text-white overflow-hidden">
      {/* Background Mandala overlay */}
      <div className="absolute inset-0 mandala-pattern pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A54] border border-[#D4AF37]/50 text-[#F5D77F] text-xs font-semibold tracking-wider uppercase">
              <Heart className="w-3.5 h-3.5 fill-[#F5D77F] text-[#F5D77F]" />
              Signature Bridal Experience
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {BUSINESS_INFO.bridalHeading}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#F5D77F] to-[#996515] rounded-full" />

            <p className="text-base sm:text-lg text-[#E6EEF8] font-light leading-relaxed max-w-2xl">
              {BUSINESS_INFO.bridalSubtext}
            </p>

            {/* Exact Highlights */}
            <div className="space-y-3.5 pt-2">
              <h4 className="font-cinzel text-sm uppercase tracking-wider text-[#F5D77F] font-semibold">
                Bridal Highlights:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BUSINESS_INFO.bridalHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#102548]/85 border border-[#D4AF37]/35 shadow-sm"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F5D77F] text-[#0B1E3D] flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="font-medium text-sm text-[#FAF8F5]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.whatsappTextLink(
                  "Hello Ansh Bridal Mehandi Art, I want to book bridal mehendi for my wedding ceremony."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-[#0B1E3D] bg-gradient-to-r from-[#F5D77F] via-[#ECC466] to-[#D4AF37] hover:brightness-110 rounded-md shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-[#0B1E3D]" />
                Book Bridal Consultation
              </a>
              <a
                href={BUSINESS_INFO.callLink}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#F5D77F] border border-[#D4AF37] rounded-md hover:bg-[#D4AF37]/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call: {BUSINESS_INFO.primaryPhone}
              </a>
            </div>
          </div>

          {/* Right: The 2 Bridal Categories strictly using their dedicated slots */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            <div className="p-2.5 bg-gradient-to-tr from-[#D4AF37]/40 to-transparent rounded-2xl border border-[#D4AF37]/50 shadow-xl">
              <ImageSlot
                slotId={customBridal.slotId}
                label={customBridal.title}
                category="Customized Bridal Mehndi"
                aspectRatioClass="aspect-[4/3]"
                description={customBridal.description}
                showCategoryBadge={true}
              />
            </div>
            <div className="p-2.5 bg-gradient-to-tr from-[#D4AF37]/40 to-transparent rounded-2xl border border-[#D4AF37]/50 shadow-xl">
              <ImageSlot
                slotId={legBridal.slotId}
                label={legBridal.title}
                category="Leg Mehndi Bridal"
                aspectRatioClass="aspect-[4/3]"
                description={legBridal.description}
                showCategoryBadge={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
