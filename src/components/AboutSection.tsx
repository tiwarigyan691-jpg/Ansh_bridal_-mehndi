import React from 'react';
import { Award, Home, Sparkles, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mehndiData';
import { ImageSlot } from './ImageSlot';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 bg-[#F3EFEA] text-[#0B1E3D] overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B1E3D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Slots (Luxury Multi-Image Frame) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary About Image Slot */}
              <div className="p-3 bg-white rounded-2xl shadow-xl border border-[#D4AF37]/40">
                <ImageSlot
                  slotId="slot-traditional-mehndi"
                  label="Traditional Mehndi"
                  category="Traditional Mehndi"
                  aspectRatioClass="aspect-[4/5]"
                  description="Pure authentic Indian wedding henna characterized by fine-line precision and traditional heritage motifs."
                  showCategoryBadge={true}
                />
              </div>

              {/* Overlapping Badge: 11+ Years Experience */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-gradient-to-br from-[#0B1E3D] to-[#061021] text-white p-5 rounded-xl border-2 border-[#D4AF37] shadow-2xl flex items-center gap-4 max-w-xs">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#F5D77F] to-[#D4AF37] text-[#0B1E3D] flex items-center justify-center font-cinzel font-extrabold text-xl shrink-0 shadow-md">
                  {BUSINESS_INFO.experienceYears}
                </div>
                <div>
                  <h4 className="font-cinzel text-lg font-bold text-[#F5D77F] leading-tight">
                    11+ Years
                  </h4>
                  <p className="text-xs text-[#D8E4F5] font-light">
                    Experience in Bridal Henna Art
                  </p>
                </div>
              </div>

              {/* Secondary corner accent card */}
              <div className="hidden sm:flex absolute -top-4 -left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-lg border border-[#D4AF37]/50 shadow-lg items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#A67C1E]" />
                <span className="text-xs font-semibold text-[#0B1E3D]">
                  100% Natural Organic Mehndi
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: About Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1E3D]/10 border border-[#D4AF37]/40 text-[#0B1E3D] text-xs font-semibold uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5 text-[#A67C1E]" />
                Our Story & Heritage
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#0B1E3D] tracking-tight">
                {BUSINESS_INFO.aboutTitle}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#A67C1E] mt-3 rounded-full" />
            </div>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-[#1C3B68] font-normal leading-relaxed">
              {BUSINESS_INFO.aboutParagraph1}
            </p>

            {/* Paragraph 2 & Home Service Highlight */}
            <div className="p-4 rounded-xl bg-white/90 border-l-4 border-[#D4AF37] shadow-sm">
              <div className="flex items-start gap-3">
                <Home className="w-5 h-5 text-[#A67C1E] shrink-0 mt-0.5" />
                <p className="text-base font-semibold text-[#0B1E3D]">
                  {BUSINESS_INFO.aboutParagraph2}
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "11+ Years Experience",
                "Professional Skilled Team",
                "Traditional & Modern Styles",
                "Doorstep Home Service",
                "Deep Natural Stain",
                "Customized Bridal Motifs"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-[#0B1E3D]">
                  <CheckCircle2 className="w-4 h-4 text-[#A67C1E] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#0B1E3D] bg-gradient-to-r from-[#F5D77F] via-[#ECC466] to-[#D4AF37] rounded-md shadow-md hover:brightness-110 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-[#0B1E3D]" />
                Book via WhatsApp
              </a>
              <a
                href={BUSINESS_INFO.callLink}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#0B1E3D] bg-white border border-[#D4AF37] rounded-md hover:bg-[#FAF8F5] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#A67C1E]" />
                Call Artist: {BUSINESS_INFO.primaryPhone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
