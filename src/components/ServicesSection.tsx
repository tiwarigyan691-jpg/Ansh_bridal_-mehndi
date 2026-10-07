import React from 'react';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { MEHNDI_CATEGORIES, BUSINESS_INFO } from '../data/mehndiData';
import { ImageSlot } from './ImageSlot';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-20 bg-[#FAF8F5] text-[#0B1E3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0B1E3D]/10 border border-[#D4AF37]/40 text-[#0B1E3D] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#A67C1E]" />
            Official Services
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#0B1E3D]">
            Our Mehendi Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A67C1E] mx-auto my-3.5 rounded-full" />
          <p className="text-base text-[#1E3A63] font-light leading-relaxed">
            Choose from our 8 specialized mehndi categories, each crafted with 11 years of bridal mastery and 100% natural organic henna.
          </p>
        </div>

        {/* The Exact 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEHNDI_CATEGORIES.map((service, index) => (
            <div
              key={service.id}
              className="flex flex-col justify-between bg-white rounded-2xl border border-[#D4AF37]/35 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Category-Specific Real Photo Slot */}
              <div className="p-3">
                <ImageSlot
                  slotId={service.slotId}
                  label={service.slotLabel}
                  category={service.title}
                  aspectRatioClass="aspect-[4/5]"
                  description={service.description}
                  showCategoryBadge={true}
                />
              </div>

              {/* Service Card Body */}
              <div className="p-5 pt-1 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold text-[#A67C1E] tracking-wider uppercase bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#D4AF37]/30">
                      Service {index + 1}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#0B1E3D] text-[#F5D77F]">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-[#0B1E3D] leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#2A4365] leading-relaxed mt-1.5 mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Booking CTA for this service */}
                <div className="pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between">
                  <a
                    href={BUSINESS_INFO.whatsappTextLink(
                      `Hello Ansh Bridal Mehandi Art, I would like to book: ${service.title}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1E3D] hover:text-[#996515] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-[#0B1E3D]" />
                    Book {service.title}
                    <ArrowRight className="w-3 h-3 ml-0.5" />
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
