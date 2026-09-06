/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingPackages } from './components/PricingPackages';
import { InstantQuoteBooking } from './components/InstantQuoteBooking';
import { SocialProofSection } from './components/SocialProofSection';
import { FaqSection } from './components/FaqSection';
import { LocationContactSection } from './components/LocationContactSection';
import { StyleGuideModal } from './components/StyleGuideModal';
import { Footer } from './components/Footer';
import { VehicleType } from './types';

export default function App() {
  const [isStyleGuideOpen, setIsStyleGuideOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('paint-correction');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('signature-correction');
  const [selectedVehicleType, setSelectedVehicleType] = useState<VehicleType>('coupe');

  const scrollToQuote = () => {
    const el = document.getElementById('quote-builder');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectServiceForQuote = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    scrollToQuote();
  };

  const handleSelectPackage = (packageId: string, vehicleType: VehicleType) => {
    setSelectedPackageId(packageId);
    setSelectedVehicleType(vehicleType);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-[#f1f5f9] flex flex-col font-sans antialiased">
      {/* Global Navigation */}
      <Navbar 
        onOpenBooking={scrollToQuote} 
        onOpenStyleGuide={() => setIsStyleGuideOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Supercar Studio Showcase & Performance Specs */}
        <HeroSection 
          onOpenBooking={scrollToQuote} 
          onExplorePackages={scrollToPricing} 
        />

        {/* 2. 5 Core Disciplines & Services Detailed Showcase */}
        <ServicesSection 
          onSelectServiceForQuote={handleSelectServiceForQuote} 
        />

        {/* 4. Packages & Pricing Matrix with Vehicle Size Multiplier */}
        <PricingPackages 
          onSelectPackage={handleSelectPackage} 
        />

        {/* 5. Live Instant Quote Calculator & Appointment Scheduler */}
        <InstantQuoteBooking 
          initialServiceId={selectedServiceId}
          initialPackageId={selectedPackageId}
          initialVehicleType={selectedVehicleType}
        />

        {/* 6. Social Proof & Verified Reviews Grid (4.4 Stars, 97+ Reviews) */}
        <SocialProofSection />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />

        {/* 9. East Elmhurst Detailing Facility Map, Direct Call & Concierge Contact */}
        <LocationContactSection />
      </main>

      {/* Global Footer */}
      <Footer 
        onOpenBooking={scrollToQuote}
        onOpenStyleGuide={() => setIsStyleGuideOpen(true)}
      />

      {/* Visual Style Guide & Design Blueprint Modal */}
      <StyleGuideModal 
        isOpen={isStyleGuideOpen} 
        onClose={() => setIsStyleGuideOpen(false)} 
      />
    </div>
  );
}

