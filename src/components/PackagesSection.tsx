import React, { useState } from 'react';
import { Check, Sparkles, MessageCircle, Users, Tag, ArrowRight } from 'lucide-react';
import { GUEST_MEHNDI_PRICES, GUEST_PACKAGES_20, BUSINESS_INFO } from '../data/mehndiData';
import { ImageSlot } from './ImageSlot';

export const PackagesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'packages' | 'single'>('packages');

  return (
    <section id="packages" className="relative py-20 bg-[#FAF8F5] text-[#0B1E3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0B1E3D]/10 border border-[#D4AF37]/40 text-[#0B1E3D] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Tag className="w-3.5 h-3.5 text-[#A67C1E]" />
            Transparent & Honest Pricing
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#0B1E3D]">
            Mehendi Packages & Prices
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A67C1E] mx-auto my-3.5 rounded-full" />
          <p className="text-base text-[#1E3A63] font-light">
            Clear per-person rates and comprehensive 20+ guest group packages tailored for your wedding celebrations.
          </p>

          {/* Toggle Tabs */}
          <div className="mt-8 inline-flex p-1.5 bg-[#EAE3D8] rounded-xl border border-[#D4AF37]/40 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('packages')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'packages'
                  ? 'bg-[#0B1E3D] text-[#F5D77F] shadow-md'
                  : 'text-[#0B1E3D] hover:text-[#0B1E3D]'
              }`}
            >
              <Users className="w-4 h-4" />
              Guest Group Packages (20 & 30 Guests)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('single')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'single'
                  ? 'bg-[#0B1E3D] text-[#F5D77F] shadow-md'
                  : 'text-[#0B1E3D] hover:text-[#0B1E3D]'
              }`}
            >
              <Tag className="w-4 h-4" />
              Normal Guest Mehndi Prices
            </button>
          </div>
        </div>

        {/* TAB 1: 20 & 30 GUEST PACKAGES */}
        {activeTab === 'packages' && (
          <div className="space-y-12">
            <div>
              <div className="text-center mb-8">
                <h3 className="font-cinzel text-2xl font-bold text-[#0B1E3D]">
                  20 People Guest Mehndi Packages
                </h3>
                <p className="text-sm text-[#2A4365] mt-1">
                  Specially designed for sangeet nights, mehendi parties & family functions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {GUEST_PACKAGES_20.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                      pkg.recommended
                        ? 'bg-gradient-to-b from-[#102A54] to-[#061021] text-white border-2 border-[#D4AF37] shadow-xl md:-translate-y-2'
                        : 'bg-white text-[#0B1E3D] border border-[#D4AF37]/40 shadow-md'
                    }`}
                  >
                    {pkg.recommended && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] text-[#0B1E3D] text-xs font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 fill-[#0B1E3D]" />
                        Most Popular
                      </div>
                    )}

                    <div className="p-7">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4
                          className={`font-cinzel text-xl font-bold ${
                            pkg.recommended ? 'text-[#F5D77F]' : 'text-[#0B1E3D]'
                          }`}
                        >
                          {pkg.name}
                        </h4>
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded font-semibold ${
                            pkg.recommended
                              ? 'bg-[#183B70] text-[#F5D77F] border border-[#D4AF37]/40'
                              : 'bg-[#FAF8F5] text-[#0B1E3D] border border-[#D4AF37]/30'
                          }`}
                        >
                          {pkg.guests}
                        </span>
                      </div>

                      <div className="my-4">
                        <span
                          className={`font-cinzel text-3xl sm:text-4xl font-extrabold ${
                            pkg.recommended ? 'gold-gradient-text' : 'text-[#0B1E3D]'
                          }`}
                        >
                          {pkg.price}
                        </span>
                      </div>

                      <div
                        className={`h-px w-full my-5 ${
                          pkg.recommended ? 'bg-[#D4AF37]/30' : 'bg-gray-200'
                        }`}
                      />

                      <ul className="space-y-3.5">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm">
                            <Check
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                pkg.recommended ? 'text-[#F5D77F]' : 'text-[#A67C1E]'
                              }`}
                            />
                            <span
                              className={
                                pkg.recommended ? 'text-[#E6EEF8]' : 'text-[#2A4365]'
                              }
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-7 pt-0">
                      <a
                        href={BUSINESS_INFO.whatsappTextLink(
                          `Hello Ansh Bridal Mehandi Art, I want to book the ${pkg.name} 20 Guests Package (${pkg.price})`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3.5 px-4 rounded-lg font-bold text-sm text-center flex items-center justify-center gap-2 transition-all shadow-md ${
                          pkg.recommended
                            ? 'bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] text-[#0B1E3D] hover:brightness-110'
                            : 'bg-[#0B1E3D] text-[#F5D77F] hover:bg-[#153466]'
                        }`}
                      >
                        <MessageCircle className="w-4 h-4" />
                        Book {pkg.name} Package
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 30 GUESTS CUSTOM PACKAGE CARD */}
            <div className="bg-gradient-to-r from-[#0B1E3D] via-[#102A54] to-[#061021] text-white rounded-2xl p-8 border-2 border-[#D4AF37] shadow-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#D4AF37]/5 pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-xs font-bold text-[#F5D77F] uppercase tracking-wider">
                    <Users className="w-3.5 h-3.5 text-[#F5D77F]" />
                    Large Family & Grand Gatherings
                  </div>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#F5D77F]">
                    30 Guests — Custom Package
                  </h3>
                  <p className="text-sm sm:text-base text-[#E6EEF8] font-light leading-relaxed">
                    Have a larger guest list? We arrange multi-artist teams to ensure rapid, exquisite application without waiting in lines. Customized design ranges available according to your family requirements.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-1 text-xs text-[#D8E4F5]">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-[#F5D77F]" /> Multiple Artists Available
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-[#F5D77F]" /> Doorstep Venue Setup
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-[#F5D77F]" /> Custom Pattern Combinations
                    </span>
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col items-center md:items-end justify-center">
                  <a
                    href={BUSINESS_INFO.whatsappTextLink(
                      "Hello Ansh Bridal Mehandi Art, I would like to get a Custom Quote for 30 Guests Mehendi Package."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-extrabold text-[#0B1E3D] bg-gradient-to-r from-[#F5D77F] via-[#ECC466] to-[#D4AF37] hover:brightness-110 rounded-md shadow-xl transition-all active:scale-95 text-center"
                  >
                    <MessageCircle className="w-5 h-5 fill-[#0B1E3D]" />
                    Get Custom Quote
                  </a>
                  <p className="text-xs text-[#D4AF37] mt-2 font-medium">
                    Instant quote response on WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {/* Real-Photo Showcase for Guest Mehndi */}
            <div className="bg-white p-6 rounded-2xl border border-[#D4AF37]/30 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-5">
                  <ImageSlot
                    slotId="slot-guest-mehndi-arabic-mehndi"
                    label="Guest Mehndi / Arabic Mehndi"
                    category="Guest Mehndi / Arabic Mehndi"
                    aspectRatioClass="aspect-[16/10]"
                    description="Flowing floral trails, shaded motifs, and bold Arabic lattices combined with fast, elegant designs for wedding guests."
                    showCategoryBadge={true}
                  />
                </div>
                <div className="lg:col-span-7 space-y-3">
                  <h4 className="font-cinzel text-xl font-bold text-[#0B1E3D]">
                    Fast, Clean & Elegant Designs for Every Guest
                  </h4>
                  <p className="text-sm text-[#1E3A63] leading-relaxed">
                    Our experienced artists work with speed and precision so that every guest enjoys stunning designs with minimum waiting time. We bring 100% natural cones that impart a deep, long-lasting rich stain.
                  </p>
                  <p className="text-xs font-semibold text-[#A67C1E]">
                    Available for home service across Noida, Delhi, Greater Noida, Faridabad, and Gurgaon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: NORMAL GUEST MEHNDI PRICES */}
        {activeTab === 'single' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="font-cinzel text-2xl font-bold text-[#0B1E3D]">
                Normal Guest Mehndi Prices
              </h3>
              <p className="text-sm text-[#2A4365] mt-1">
                Individual per-hand & both-hands design pricing options.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {GUEST_MEHNDI_PRICES.map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${
                    item.popular
                      ? 'border-[#D4AF37] shadow-lg ring-1 ring-[#D4AF37]/40'
                      : 'border-[#D4AF37]/30 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#0B1E3D]">
                        {item.price}
                      </span>
                      {item.popular && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#0B1E3D] text-[#F5D77F] border border-[#D4AF37]/40">
                          Popular Choice
                        </span>
                      )}
                    </div>

                    <h4 className="font-cinzel text-lg font-bold text-[#0B1E3D]">
                      {item.title}
                    </h4>
                    <p className="font-serif-cormorant text-base font-semibold text-[#A67C1E] mt-0.5 mb-2.5">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-[#2A4365] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-[#D4AF37]/20">
                    <a
                      href={BUSINESS_INFO.whatsappTextLink(
                        `Hello Ansh Bridal Mehandi Art, I would like to book "${item.title} (${item.price})"`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-[#0B1E3D] bg-[#FAF8F5] hover:bg-[#0B1E3D] hover:text-[#F5D77F] border border-[#D4AF37]/50 rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Book This Design
                      <ArrowRight className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
