import React from 'react';
import { ImageProvider } from './context/ImageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedPhotos } from './components/FeaturedPhotos';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { BridalSpotlight } from './components/BridalSpotlight';
import { PackagesSection } from './components/PackagesSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  return (
    <ImageProvider>
      <div className="min-h-screen bg-[#FAF8F5] text-[#0B1E3D] selection:bg-[#D4AF37] selection:text-[#0B1E3D] pb-16 md:pb-0">
        {/* Navigation Bar */}
        <Navbar />

        {/* Visual Flow: HERO → PHOTOS → ABOUT/DETAILS → SERVICES → PACKAGES → GALLERY → REVIEWS → CONTACT */}
        <main>
          {/* 1. HERO */}
          <Hero />

          {/* 2. PHOTOS (8 Signature Categories Showcase immediately below Hero) */}
          <FeaturedPhotos />

          {/* 3. ABOUT / DETAILS */}
          <AboutSection />

          {/* 4. SERVICES (The Exact 8 Mehendi Categories as Services) */}
          <ServicesSection />

          {/* 5. BRIDAL SPOTLIGHT */}
          <BridalSpotlight />

          {/* 6. PACKAGES & NORMAL GUEST MEHNDI PRICES */}
          <PackagesSection />

          {/* 7. GALLERY (8 Category Filters & Lightbox) */}
          <GallerySection />

          {/* 8. WHY CHOOSE US & SERVICE AREAS */}
          <WhyChooseUs />

          {/* 9. REVIEWS (Authentic Client Love + Google Review + Instagram) */}
          <ReviewsSection />

          {/* 10. CONTACT (Phone, Email, Address, Map & 4 Action Buttons) */}
          <ContactSection />
        </main>

        {/* FOOTER */}
        <Footer />

        {/* MOBILE FIXED BOTTOM BAR (Never overlaps content) */}
        <MobileBottomBar />
      </div>
    </ImageProvider>
  );
}
