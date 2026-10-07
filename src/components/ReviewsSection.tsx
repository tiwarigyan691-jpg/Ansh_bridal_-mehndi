import React from 'react';
import { MessageSquareQuote, Heart, ExternalLink, Instagram } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/mehndiData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="relative py-20 bg-[#FAF8F5] text-[#0B1E3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0B1E3D]/10 border border-[#D4AF37]/40 text-[#0B1E3D] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Heart className="w-3.5 h-3.5 text-[#A67C1E]" />
            Client Love & Words
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#0B1E3D]">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A67C1E] mx-auto my-3.5 rounded-full" />
          <p className="text-base text-[#1E3A63] font-light">
            Genuine words from brides and family members across our celebrations.
          </p>
        </div>

        {/* 10 Real Reviews Grid (Strictly NO fake stars or fake verified badges) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#D4AF37]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#D4AF37]/40 flex items-center justify-center text-[#A67C1E] mb-3">
                  <MessageSquareQuote className="w-4 h-4" />
                </div>
                <p className="text-sm sm:text-base text-[#0B1E3D] font-normal italic leading-relaxed mb-4">
                  "{review.quote.replace(/^"|"$/g, '')}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#D4AF37]/20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0B1E3D] text-[#F5D77F] flex items-center justify-center font-cinzel font-bold text-xs">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-[#0B1E3D]">
                    {review.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GOOGLE REVIEW & INSTAGRAM SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Google Review Card */}
          <div className="bg-gradient-to-br from-[#0B1E3D] to-[#061021] text-white p-8 rounded-2xl border border-[#D4AF37] shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#F5D77F] mb-4">
                <span className="font-cinzel font-extrabold text-2xl text-[#F5D77F]">G</span>
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                Enjoyed Our Mehendi?
              </h3>
              <p className="text-sm text-[#D8E4F5] font-light leading-relaxed mb-6">
                Your feedback means the world to our team! Share your experience and help future brides discover Ansh Bridal Mehandi Art.
              </p>
            </div>

            <div>
              <a
                href={BUSINESS_INFO.googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-[#0B1E3D] bg-gradient-to-r from-[#F5D77F] via-[#ECC466] to-[#D4AF37] hover:brightness-110 rounded-lg shadow-md transition-all active:scale-95"
              >
                <span>Leave a Google Review</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Instagram Follow Card */}
          <div className="bg-gradient-to-br from-[#102A54] to-[#061021] text-white p-8 rounded-2xl border border-[#D4AF37] shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center text-white mb-4 shadow-md">
                <Instagram className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                Follow Our Mehendi Art
              </h3>
              <p className="text-sm text-[#D8E4F5] font-light leading-relaxed mb-6">
                Watch daily behind-the-scenes, live bridal henna sessions, client stains, and our latest bridal portfolio reels on Instagram @ansh_bridal_mehandi_art.
              </p>
            </div>

            <div>
              <a
                href={BUSINESS_INFO.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#C13584] to-[#E1306C] hover:brightness-110 rounded-lg shadow-md transition-all active:scale-95"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow on Instagram</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
