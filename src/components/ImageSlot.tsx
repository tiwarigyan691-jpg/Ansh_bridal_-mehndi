import React from 'react';
import { Camera, Eye, Sparkles } from 'lucide-react';
import { useImageContext } from '../context/ImageContext';

interface ImageSlotProps {
  slotId: string;
  label: string;
  category?: string;
  aspectRatioClass?: string;
  className?: string;
  onViewImage?: (imageUrl: string, title: string) => void;
  description?: string;
  showCategoryBadge?: boolean;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  slotId,
  label,
  category,
  aspectRatioClass = 'aspect-[4/3]',
  className = '',
  onViewImage,
  description,
  showCategoryBadge = true,
}) => {
  const { images } = useImageContext();
  const currentImage = images[slotId];

  return (
    <div
      className={`relative group rounded-xl overflow-hidden border border-[#D4AF37]/35 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37] ${className}`}
    >
      {currentImage ? (
        /* Real Photo Provided by Owner (View-Only for Visitors) */
        <div
          className={`relative w-full ${aspectRatioClass} bg-[#08162D] overflow-hidden ${
            onViewImage ? 'cursor-pointer' : ''
          }`}
          onClick={() => onViewImage && onViewImage(currentImage, label)}
        >
          <img
            src={currentImage}
            alt={label}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061021]/90 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

          {showCategoryBadge && category && (
            <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold bg-[#0B1E3D]/90 text-[#F5D77F] border border-[#D4AF37]/40 rounded backdrop-blur-md">
              {category}
            </span>
          )}

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
            <span className="font-medium truncate pr-2 text-[#FAF8F5]">{label}</span>
            {onViewImage && (
              <span
                className="p-1.5 rounded bg-black/60 hover:bg-[#D4AF37] hover:text-[#0B1E3D] text-[#F5D77F] transition-colors shrink-0"
                title="View full size"
              >
                <Eye className="w-3.5 h-3.5" />
              </span>
            )}
          </div>
        </div>
      ) : (
        /* Clean Real-Photo Slot (View-Only, Royal Blue + Gold) */
        <div
          className={`relative w-full ${aspectRatioClass} bg-gradient-to-br from-[#0F284F] via-[#0B1E3D] to-[#061021] p-5 flex flex-col justify-between items-center text-center select-none overflow-hidden`}
        >
          {/* Subtle Henna Corner Motifs (SVG Vector accents, Royal & Gold) */}
          <div className="absolute -top-4 -left-4 w-16 h-16 pointer-events-none opacity-20 text-[#D4AF37]">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M0,0 Q50,0 50,50 Q0,50 0,0 M20,20 Q40,20 40,40 Q20,40 20,20" />
            </svg>
          </div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 pointer-events-none opacity-20 text-[#D4AF37] rotate-180">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M0,0 Q50,0 50,50 Q0,50 0,0 M20,20 Q40,20 40,40 Q20,40 20,20" />
            </svg>
          </div>

          {/* Top Label & Badge */}
          <div className="w-full flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#D4AF37] tracking-wider uppercase bg-[#102A54]/90 px-2.5 py-1 rounded border border-[#D4AF37]/35">
              <Sparkles className="w-3 h-3 text-[#F5D77F]" />
              {category || 'Bridal Mehendi'}
            </span>
            <span className="text-[10px] text-[#F5D77F]/90 font-mono tracking-tight bg-black/40 px-2 py-0.5 rounded border border-[#D4AF37]/25">
              REAL ARTWORK
            </span>
          </div>

          {/* Center Frame */}
          <div className="z-10 my-auto py-3 flex flex-col items-center max-w-[90%]">
            <div className="w-12 h-12 rounded-full border border-dashed border-[#D4AF37]/60 flex items-center justify-center bg-[#0B1E3D]/80 mb-2.5 text-[#F5D77F] shadow-inner">
              <Camera className="w-5 h-5 text-[#F5D77F]" />
            </div>
            <p className="font-serif text-[#FAF8F5] text-sm md:text-base font-semibold leading-tight line-clamp-2">
              {label}
            </p>
            {description && (
              <p className="text-xs text-[#D8E4F5] mt-1 line-clamp-2 leading-relaxed">
                {description}
              </p>
            )}
            <p className="text-[11px] text-[#D4AF37]/90 mt-1.5 italic font-light">
              Ansh Bridal Mehandi Art Original Work
            </p>
          </div>

          {/* Bottom Accent */}
          <div className="w-full z-10 pt-2 border-t border-[#D4AF37]/20 flex items-center justify-center">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#F5D77F]/80">
              100% Handcrafted Design
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
