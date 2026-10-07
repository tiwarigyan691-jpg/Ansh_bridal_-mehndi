import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mehndiData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1E3D]/95 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/30 py-3'
          : 'bg-gradient-to-b from-[#061021]/90 via-[#0B1E3D]/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
          >
            <div className="w-10 h-10 rounded-full border-2 border-[#D4AF37] bg-gradient-to-tr from-[#061021] to-[#102A54] flex items-center justify-center shadow-md shadow-black/40 group-hover:scale-105 transition-transform">
              <span className="font-cinzel font-bold text-lg text-[#F5D77F]">A</span>
            </div>
            <div>
              <span className="font-cinzel font-bold text-base sm:text-lg tracking-wider text-white flex items-center gap-1.5">
                ANSH BRIDAL
                <Sparkles className="w-3.5 h-3.5 text-[#F5D77F]" />
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-[#F5D77F] font-medium -mt-1">
                MEHANDI ART
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-[#E6EEF8] hover:text-[#F5D77F] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.callLink}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#F5D77F] border border-[#D4AF37]/50 rounded hover:bg-[#D4AF37]/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F5D77F]" />
              <span>{BUSINESS_INFO.primaryPhone}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#0B1E3D] bg-gradient-to-r from-[#F5D77F] via-[#ECC466] to-[#D4AF37] rounded hover:brightness-110 shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#0B1E3D]" />
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 text-[#0B1E3D] bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] rounded"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-4 h-4 fill-[#0B1E3D]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-[#F5D77F] hover:bg-[#102A54] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#08162D] border-b border-[#D4AF37]/30 px-5 pt-3 pb-6 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-medium text-gray-100 hover:text-[#F5D77F] py-2 border-b border-blue-900/40"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-[#0B1E3D] bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] rounded shadow"
              >
                <MessageCircle className="w-4 h-4 fill-[#0B1E3D]" />
                WhatsApp Us
              </a>
              <a
                href={BUSINESS_INFO.callLink}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#F5D77F] border border-[#D4AF37]/60 rounded"
              >
                <Phone className="w-4 h-4" />
                Call Now: {BUSINESS_INFO.primaryPhone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
