import React from 'react';
import { Award, Users, Sparkles, Palette, Layers, Home, MapPin } from 'lucide-react';
import { WHY_CHOOSE_US, SERVICE_AREAS, BUSINESS_INFO } from '../data/mehndiData';

export const WhyChooseUs: React.FC = () => {
  const icons = [Award, Users, Sparkles, Palette, Layers, Home];

  return (
    <section className="relative py-20 bg-royal-gradient text-white overflow-hidden">
      {/* Background Mandala overlay */}
      <div className="absolute inset-0 mandala-pattern pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* WHY CHOOSE US HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#102A54] border border-[#D4AF37]/50 text-[#F5D77F] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Award className="w-3.5 h-3.5 text-[#F5D77F]" />
            Trust & Quality
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A67C1E] mx-auto my-3.5 rounded-full" />
          <p className="text-base text-[#D8E4F5] font-light">
            Dedicated to delivering impeccable artistry, natural herbal ingredients, and dependable doorstep service.
          </p>
        </div>

        {/* 6 Key Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = icons[idx] || Sparkles;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#102548]/85 border border-[#D4AF37]/40 shadow-lg hover:border-[#D4AF37] hover:bg-[#132E58] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#D4AF37] to-[#F5D77F] text-[#0B1E3D] flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="font-cinzel text-lg font-bold text-[#F5D77F] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#D8E4F5] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* SERVICE AREAS BANNER */}
        <div className="bg-gradient-to-r from-[#102A54] via-[#0B1E3D] to-[#061021] p-8 sm:p-10 rounded-2xl border-2 border-[#D4AF37]/70 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#F5D77F] tracking-wider mb-1">
              <MapPin className="w-3.5 h-3.5" />
              Doorstep Coverage
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              Service Areas
            </h3>
            <p className="text-xs sm:text-sm text-[#D8E4F5] font-light mt-1">
              Professional artists arrive on time at your home or venue across Delhi NCR:
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {SERVICE_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#061021] border border-[#D4AF37]/60 text-sm font-semibold text-[#F5D77F] shadow-sm hover:border-[#F5D77F] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={BUSINESS_INFO.whatsappTextLink(
                "Hello Ansh Bridal Mehandi Art, I want to book a home mehndi service for my location."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-[#0B1E3D] bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] rounded-md shadow-md hover:brightness-110 transition-all"
            >
              Check Availability in Your City
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
