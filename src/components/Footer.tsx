import React from 'react';
import { Phone, Mail, Instagram, MapPin, Heart } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_AREAS } from '../data/mehndiData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#061021] text-[#D8E4F5] border-t-2 border-[#D4AF37]/50 pt-16 pb-24 md:pb-16 overflow-hidden">
      {/* Background Mandala overlay */}
      <div className="absolute inset-0 mandala-pattern pointer-events-none opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D4AF37]/25">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#D4AF37] bg-gradient-to-tr from-[#061021] to-[#102A54] flex items-center justify-center">
                <span className="font-cinzel font-bold text-lg text-[#F5D77F]">A</span>
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-white tracking-wider">
                  {BUSINESS_INFO.name}
                </h3>
              </div>
            </div>

            <p className="font-serif-cormorant text-xl text-[#F5D77F] italic">
              "{BUSINESS_INFO.footerTagline}"
            </p>

            <p className="text-xs text-[#AFC3DB] leading-relaxed font-light max-w-sm">
              Providing luxury bridal and festive henna art for 11+ years with dedication, deep organic color, and professional doorstep service across Delhi NCR.
            </p>

            {/* Social Links */}
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#0B1E3D] text-[#F5D77F] border border-[#D4AF37]/40 hover:bg-[#102A54] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#F5D77F]" />
                <span>Instagram: @ansh_bridal_mehandi_art</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-cinzel text-sm font-bold text-[#F5D77F] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-sm text-[#AFC3DB] hover:text-[#F5D77F] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-cinzel text-sm font-bold text-[#F5D77F] uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#AFC3DB]">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F5D77F] shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:+91${BUSINESS_INFO.phones[0]}`} className="hover:text-[#F5D77F] block">
                    +91 {BUSINESS_INFO.phones[0]}
                  </a>
                  <a href={`tel:+91${BUSINESS_INFO.phones[1]}`} className="hover:text-[#F5D77F] block">
                    +91 {BUSINESS_INFO.phones[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F5D77F] shrink-0 mt-0.5" />
                <a href={BUSINESS_INFO.emailLink} className="hover:text-[#F5D77F] break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5D77F] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-cinzel text-sm font-bold text-[#F5D77F] uppercase tracking-wider">
              Service Areas
            </h4>
            <div className="flex flex-col space-y-1.5 text-xs text-[#AFC3DB]">
              {SERVICE_AREAS.map((area, idx) => (
                <span key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-xs text-[#AFC3DB]/80 font-light flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>{BUSINESS_INFO.copyright}</p>
          <p className="flex items-center gap-1">
            Handcrafted with <Heart className="w-3.5 h-3.5 text-[#F5D77F] fill-[#F5D77F]" /> for Indian Brides
          </p>
        </div>
      </div>
    </footer>
  );
};
