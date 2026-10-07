import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Navigation, Send } from 'lucide-react';
import { BUSINESS_INFO, MEHNDI_CATEGORIES } from '../data/mehndiData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Leg Mehndi Bridal',
    eventDate: '',
    city: 'Greater Noida',
    message: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Mehndi Inquiry - Ansh Bridal Mehandi Art*
• Name: ${formData.name || 'Not provided'}
• Phone: ${formData.phone || 'Not provided'}
• Event: ${formData.eventType}
• Date: ${formData.eventDate || 'Flexible'}
• Location: ${formData.city}
• Message: ${formData.message || 'I would like to check availability and package details.'}`;

    const url = `https://wa.me/918449227407?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="relative py-20 bg-[#F3EFEA] text-[#0B1E3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0B1E3D]/10 border border-[#D4AF37]/40 text-[#0B1E3D] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <MessageCircle className="w-3.5 h-3.5 text-[#A67C1E]" />
            Get In Touch
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#0B1E3D]">
            Let's Create Beautiful Mehendi Memories
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#A67C1E] mx-auto my-3.5 rounded-full" />
          <p className="text-base text-[#1E3A63] font-light">
            Contact Ansh Bridal Mehandi Art directly for appointments, home service inquiries, and bridal packages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Information & Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-7 rounded-2xl border border-[#D4AF37]/40 shadow-md space-y-6">
              <h3 className="font-cinzel text-2xl font-bold text-[#0B1E3D]">
                Contact Information
              </h3>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B1E3D] text-[#F5D77F] flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-[#A67C1E] tracking-wider">
                    Phone Numbers
                  </h4>
                  <div className="mt-1 space-y-1">
                    <p className="text-base font-bold text-[#0B1E3D]">
                      <a href={`tel:+91${BUSINESS_INFO.phones[0]}`} className="hover:text-[#A67C1E] transition-colors">
                        +91 {BUSINESS_INFO.phones[0]}
                      </a>
                    </p>
                    <p className="text-base font-bold text-[#0B1E3D]">
                      <a href={`tel:+91${BUSINESS_INFO.phones[1]}`} className="hover:text-[#A67C1E] transition-colors">
                        +91 {BUSINESS_INFO.phones[1]}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B1E3D] text-[#F5D77F] flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-[#A67C1E] tracking-wider">
                    Email Address
                  </h4>
                  <p className="text-sm sm:text-base font-semibold text-[#0B1E3D] mt-1 break-all">
                    <a href={BUSINESS_INFO.emailLink} className="hover:text-[#A67C1E] transition-colors">
                      {BUSINESS_INFO.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B1E3D] text-[#F5D77F] flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-[#A67C1E] tracking-wider">
                    Studio Address
                  </h4>
                  <p className="text-sm sm:text-base text-[#0B1E3D] font-medium mt-1 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              {/* Four Required Action Buttons */}
              <div className="pt-4 border-t border-[#D4AF37]/30 grid grid-cols-2 gap-3 sm:gap-4">
                {/* 1. Call Now */}
                <a
                  href={BUSINESS_INFO.callLink}
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs sm:text-sm font-bold text-white bg-[#0B1E3D] hover:bg-[#102A54] rounded-lg shadow transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4 text-[#F5D77F]" />
                  Call Now
                </a>

                {/* 2. WhatsApp Us */}
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs sm:text-sm font-bold text-[#0B1E3D] bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] hover:brightness-110 rounded-lg shadow transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-[#0B1E3D]" />
                  WhatsApp Us
                </a>

                {/* 3. Email Us */}
                <a
                  href={BUSINESS_INFO.emailLink}
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs sm:text-sm font-semibold text-[#0B1E3D] bg-[#FAF8F5] border border-[#D4AF37] hover:bg-[#EDE6DC] rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#A67C1E]" />
                  Email Us
                </a>

                {/* 4. Get Directions */}
                <a
                  href={BUSINESS_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs sm:text-sm font-semibold text-[#0B1E3D] bg-[#FAF8F5] border border-[#D4AF37] hover:bg-[#EDE6DC] rounded-lg transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#A67C1E]" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Quick Home Service Note */}
            <div className="bg-[#0B1E3D] text-white p-5 rounded-xl border border-[#D4AF37] flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F5D77F] text-[#0B1E3D] flex items-center justify-center shrink-0 font-bold">
                ✓
              </div>
              <div>
                <h5 className="font-cinzel text-sm font-bold text-[#F5D77F]">
                  Home Mehendi Service
                </h5>
                <p className="text-xs text-[#D8E4F5] font-light mt-0.5">
                  Available in Greater Noida, Noida, Delhi, Faridabad & Gurgaon.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Booking Builder Form */}
          <div className="lg:col-span-6">
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-[#D4AF37]/50 shadow-xl">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A67C1E]">
                  Fast Booking Inquiry
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-[#0B1E3D]">
                  Check Date Availability
                </h3>
                <p className="text-xs sm:text-sm text-[#2A4365] mt-1">
                  Fill in your ceremony details and click below to send directly via WhatsApp.
                </p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0B1E3D] uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#D4AF37]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-[#FAF8F5] text-[#0B1E3D]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1E3D] uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#D4AF37]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-[#FAF8F5] text-[#0B1E3D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B1E3D] uppercase tracking-wider mb-1.5">
                      Event Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#D4AF37]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-[#FAF8F5] text-[#0B1E3D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1E3D] uppercase tracking-wider mb-1.5">
                      Service Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#D4AF37]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-[#FAF8F5] text-[#0B1E3D]"
                    >
                      {MEHNDI_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.title}>
                          {cat.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B1E3D] uppercase tracking-wider mb-1.5">
                      City / Area
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#D4AF37]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-[#FAF8F5] text-[#0B1E3D]"
                    >
                      <option value="Greater Noida">Greater Noida</option>
                      <option value="Noida">Noida</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Faridabad">Faridabad</option>
                      <option value="Gurgaon">Gurgaon</option>
                      <option value="Other Delhi NCR">Other Delhi NCR</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1E3D] uppercase tracking-wider mb-1.5">
                    Special Requirements (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="E.g., Number of guests, portrait design requested, timing..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 text-sm rounded-lg border border-[#D4AF37]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-[#FAF8F5] text-[#0B1E3D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 text-sm sm:text-base font-bold text-[#0B1E3D] bg-gradient-to-r from-[#F5D77F] via-[#ECC466] to-[#D4AF37] hover:brightness-110 rounded-lg shadow-lg flex items-center justify-center gap-2.5 transition-all active:scale-98"
                >
                  <Send className="w-4 h-4 fill-[#0B1E3D]" />
                  Send Instant Inquiry on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
