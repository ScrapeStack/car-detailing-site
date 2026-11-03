import React, { useState } from 'react';
import { TemplateProvider } from './context/TemplateContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KeyFeaturesSection } from './components/KeyFeaturesSection';
import { PackagesSection } from './components/PackagesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactBookingSection } from './components/ContactBookingSection';
import { FloatingMessengerWidget } from './components/FloatingMessengerWidget';
import { Footer } from './components/Footer';
import { TemplateCustomizerModal } from './components/TemplateCustomizerModal';
import { BookingModal } from './components/BookingModal';

function DetailingLandingPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('Full Interior & Exterior Detail');
  const [selectedPrice, setSelectedPrice] = useState<number | undefined>(undefined);

  const scrollToContactBooking = (serviceName?: string, price?: number) => {
    if (serviceName) setSelectedService(serviceName);
    if (price) setSelectedPrice(price);

    const el = document.getElementById('contact');
    if (el) {
      const headerOffset = 75;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      setIsBookingModalOpen(true);
    }
  };

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[#f1f5f9] flex flex-col font-sans antialiased selection:bg-accent selection:text-white transition-colors duration-300">
      
      {/* Section 1: Sticky Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBookingModal} />

      <main className="flex-1">
        {/* Section 2: Hero Section (High Impact) */}
        <HeroSection onOpenBooking={() => scrollToContactBooking()} />

        {/* Section 3: Key Features & Trust Badges */}
        <KeyFeaturesSection />

        {/* Section 4: Service Packages & Pricing */}
        <PackagesSection 
          onSelectPackageForBooking={(pkgName, price) => scrollToContactBooking(pkgName, price)} 
        />

        {/* Section 5: Visual Showcase (Before & After Slider) */}
        <BeforeAfterSlider />

        {/* Authority / About Us Craftsmanship Section */}
        <AboutSection />

        {/* Section 6: Customer Testimonials & Reviews */}
        <ReviewsSection />

        {/* Core Services Detailed Pillar Showcase */}
        <ServicesSection 
          onSelectServiceForQuote={(serviceName) => scrollToContactBooking(serviceName)} 
        />

        {/* Section 7: Contact & Location / Booking Form */}
        <ContactBookingSection 
          preselectedService={selectedService}
          preselectedPackagePrice={selectedPrice}
        />
      </main>

      {/* Section 8: Floating Messenger Widget */}
      <FloatingMessengerWidget />

      {/* Section 8: Footer */}
      <Footer />

      {/* Interactive Template Customizer & Placeholder Inspector Modal */}
      <TemplateCustomizerModal />

      {/* Instant Quote & Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)}
        preselectedPackage={selectedService}
        preselectedPrice={selectedPrice}
      />
    </div>
  );
}

export default function App() {
  return (
    <TemplateProvider>
      <DetailingLandingPage />
    </TemplateProvider>
  );
}
