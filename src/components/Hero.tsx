import React, { useState } from 'react';
import { Phone, MessageCircle, Sparkles, Award, ShieldCheck, Home } from 'lucide-react';
import { BUSINESS_INFO, MEHNDI_CATEGORIES } from '../data/mehndiData';
import { useImageContext } from '../context/ImageContext';
import { ImageSlot } from './ImageSlot';

export const Hero: React.FC = () => {
  const { images } = useImageContext();
  const [selectedCatId, setSelectedCatId] = useState<string>('customized-bridal-mehndi');
  const activeCategory = MEHNDI_CATEGORIES.find((c) => c.id === selectedCatId) || MEHNDI_CATEGORIES[0];

  // Check for any existing uploaded bridal photo to use as full-width hero background
  const heroBgPhoto =
    images['hero-primary'] ||
    images['slot-customized-bridal-mehndi'] ||
    images['slot-leg-mehndi-bridal'] ||
    (activeCategory ? images[activeCategory.slotId] : undefined);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center bg-royal-gradient text-white overflow-hidden"
    >
      {/* Full-Width Bridal Background Photo if uploaded by owner */}
      {heroBgPhoto ? (
        <div className="absolute inset-0 z-0">
          <img
            src={heroBgPhoto}
            alt="Ansh Bridal Mehendi Art"
            className="w-full h-full object-cover object-center opacity-30 scale-105 filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061021]/95 via-[#0B1E3D]/88 to-[#061021]/92" />
        </div>
      ) : null}

      {/* Background Mandala & Henna Lace Decorative Pattern */}
      <div className="absolute inset-0 mandala-pattern pointer-events-none z-0" />

      {/* Golden Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102A54]/90 border border-[#D4AF37]/50 shadow-inner">
              <Sparkles className="w-4 h-4 text-[#F5D77F]" />
              <span className="font-serif-cormorant text-lg sm:text-xl font-semibold tracking-wide text-[#F5D77F]">
                "{BUSINESS_INFO.tagline}"
              </span>
            </div>

            {/* Brand Title Prominently */}
            <div>
              <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                ANSH BRIDAL <br />
                <span className="gold-gradient-text">MEHANDI ART</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#F5D77F] to-[#996515] my-4 mx-auto lg:mx-0 rounded-full" />
            </div>

            {/* 11 Years & Memories Tagline */}
            <div className="space-y-1">
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F5D77F] tracking-wide">
                11 Years of Beautiful Bridal Mehendi Art
              </h2>
              <p className="font-serif-cormorant text-lg sm:text-xl italic text-[#D8E4F5]">
                Beautiful Mehendi. Beautiful Memories.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#E6EEF8] max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              {BUSINESS_INFO.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-[#0B1E3D] bg-gradient-to-r from-[#F5D77F] via-[#ECC466] to-[#D4AF37] hover:brightness-110 rounded-md shadow-xl hover:shadow-[#D4AF37]/20 transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-[#0B1E3D]" />
                WhatsApp Us
              </a>

              <a
                href={BUSINESS_INFO.callLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-[#F5D77F] bg-[#102A54]/90 hover:bg-[#153466] border-2 border-[#D4AF37]/60 rounded-md transition-all shadow-md active:scale-95"
              >
                <Phone className="w-5 h-5 text-[#F5D77F]" />
                Call Now
              </a>
            </div>

            {/* Trust Line */}
            <div className="pt-6 border-t border-[#D4AF37]/25">
              <p className="text-xs sm:text-sm text-[#F5D77F] font-medium tracking-wide flex items-center justify-center lg:justify-start flex-wrap gap-2">
                <span className="inline-flex items-center gap-1">
                  <Award className="w-4 h-4 text-[#F5D77F]" /> 11 Years Experience
                </span>
                <span className="text-[#D4AF37]">•</span>
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#F5D77F]" /> Professional Team
                </span>
                <span className="text-[#D4AF37]">•</span>
                <span className="inline-flex items-center gap-1">
                  <Home className="w-4 h-4 text-[#F5D77F]" /> Home Service Available
                </span>
              </p>
            </div>
          </div>

          {/* Right Column: Hero Real-Photo Showcase (Royal Blue + Gold Frame) */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-2.5 bg-gradient-to-br from-[#D4AF37]/40 via-[#F5D77F]/20 to-[#996515]/40 rounded-2xl shadow-2xl">
              {/* Category Quick Selector bar */}
              <div className="mb-2 p-1.5 bg-[#08162D] rounded-lg border border-[#D4AF37]/30 flex items-center gap-1 overflow-x-auto text-[11px] scrollbar-none">
                {MEHNDI_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCatId(cat.id)}
                    className={`shrink-0 px-2.5 py-1 rounded transition-all font-medium ${
                      selectedCatId === cat.id
                        ? 'bg-[#D4AF37] text-[#0B1E3D] font-bold shadow'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>

              <div className="relative rounded-xl overflow-hidden bg-[#08162D]">
                <ImageSlot
                  slotId={activeCategory.slotId}
                  label={activeCategory.title}
                  category={activeCategory.title}
                  aspectRatioClass="aspect-[4/5]"
                  description={activeCategory.description}
                  showCategoryBadge={true}
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-4 -left-4 sm:left-4 bg-[#0B1E3D] border-2 border-[#D4AF37] rounded-lg p-3 sm:p-4 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F5D77F] flex items-center justify-center text-[#0B1E3D] font-cinzel font-bold text-lg">
                  11+
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F5D77F] uppercase tracking-wider">Years of</div>
                  <div className="text-sm font-bold text-white">Bridal Artistry</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
