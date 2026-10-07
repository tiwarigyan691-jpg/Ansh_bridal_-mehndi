import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mehndiData';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B1E3D]/98 backdrop-blur-lg border-t border-[#D4AF37]/50 shadow-[0_-4px_20px_rgba(0,0,0,0.5)] px-3 py-2.5">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {/* Call Button */}
        <a
          href={BUSINESS_INFO.callLink}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#102A54] text-[#F5D77F] border border-[#D4AF37]/50 text-xs font-bold active:scale-95 transition-transform shadow-sm"
        >
          <Phone className="w-4 h-4 text-[#F5D77F]" />
          <span>Call: {BUSINESS_INFO.primaryPhone}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={BUSINESS_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-gradient-to-r from-[#F5D77F] via-[#ECC466] to-[#D4AF37] text-[#0B1E3D] text-xs font-extrabold active:scale-95 transition-transform shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-[#0B1E3D]" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
};
