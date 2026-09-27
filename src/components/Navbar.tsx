import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Star, Menu, X, BookOpen, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { BUSINESS_CONFIG } from '../config';
import { getCleanOwnerPhone, getDisplayOwnerPhone, getTelLink } from '../utils/whatsapp';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenStyleGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenStyleGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PACKAGES', href: '#pricing' },
    { name: 'REVIEWS', href: '#reviews' },
    { name: 'CONTACT', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Micro top trust bar */}
      <div className="bg-[#05060a] border-b border-white/5 text-[11px] text-slate-400 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-mono-tech">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5 text-slate-300">
              <MapPin className="w-3 h-3 text-[#00E5FF]" />
              <span>108-14 Northern Blvd, {BUSINESS_CONFIG.location} 11368</span>
            </div>
            <div className="flex items-center space-x-1 text-[#00E5FF] font-medium">
              <Star className="w-3 h-3 fill-[#00E5FF] text-[#00E5FF]" />
              <span>{BUSINESS_INFO.rating} / 5.0 Star Rating ({BUSINESS_INFO.reviewCount} Reviews)</span>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <button 
              id="nav-style-guide-top-btn"
              onClick={onOpenStyleGuide}
              className="text-slate-400 hover:text-[#00E5FF] transition-colors flex items-center space-x-1 text-[11px]"
            >
              <BookOpen className="w-3 h-3 text-[#0066FF]" />
              <span>Design System</span>
            </button>
            <span className="w-px h-3 bg-white/10 shrink-0" aria-hidden="true" />
            <a 
              id="topbar-phone-link"
              href={getTelLink()} 
              className="flex items-center space-x-1 text-slate-300 hover:text-[#00E5FF] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#00E5FF]" />
              <span>{getDisplayOwnerPhone()}</span>
            </a>
            <span className="w-px h-3 bg-white/10 shrink-0" aria-hidden="true" />
            <a 
              id="topbar-whatsapp-link"
              href={`https://wa.me/${getCleanOwnerPhone()}`} 
              target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-1 text-slate-300 hover:text-[#00E5FF] transition-colors"
            >
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#07090e]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5' 
          : 'bg-[#07090e]/80 backdrop-blur-sm border-b border-white/5 py-4 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center space-x-3 group" id="nav-brand-logo">
            <span className="font-display font-black text-lg sm:text-xl tracking-[0.15em] text-white group-hover:text-[#00E5FF] transition-colors uppercase leading-none">
              GENTLE TOUCH
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#0066FF]"></span>
            <span className="hidden sm:inline-block text-[11px] tracking-[0.2em] text-[#00E5FF] uppercase font-mono-tech">
              CAR WASH & DETAIL
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-mono-tech tracking-[0.18em] uppercase text-slate-300 hover:text-white transition-colors relative py-1 hover:text-[#00E5FF]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs: Book & Quick Cart / Reserve */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              id="nav-instant-quote-btn"
              onClick={onOpenBooking}
              className="px-5 py-2 text-xs font-mono-tech font-semibold tracking-widest uppercase text-white bg-gradient-to-r from-[#0066FF] to-[#0088FF] hover:from-[#0052CC] hover:to-[#00E5FF] transition-all rounded-md duration-200 shadow-md shadow-[#0066FF]/20"
            >
              BOOK NOW
            </button>

            <button
              id="nav-cart-btn"
              onClick={onOpenBooking}
              className="p-2 text-slate-300 hover:text-[#00E5FF] hover:bg-white/5 transition-colors relative"
              aria-label="View Booking cart and quotes"
              title="Instant Quote & Reservation"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#00E5FF]"></span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              id="nav-mobile-call-btn"
              href={getTelLink()}
              className="p-2 text-[#00E5FF] bg-white/5 border border-white/10 rounded"
              aria-label={`Call ${BUSINESS_CONFIG.businessName}`}
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="nav-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-white/5 border border-white/10 rounded"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0d14] border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-1 gap-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 text-slate-200 hover:bg-white/5 hover:text-[#00E5FF] font-mono-tech tracking-widest text-xs uppercase transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-slate-600 text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <button
                id="mobile-drawer-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-xs font-mono-tech font-bold uppercase tracking-widest text-white bg-[#0066FF] hover:bg-[#0052CC] transition-colors rounded-md"
              >
                GET IN TOUCH & BOOK
              </button>
              <button
                id="mobile-drawer-style-guide-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStyleGuide();
                }}
                className="w-full py-2.5 text-xs font-mono-tech text-slate-400 hover:text-white bg-white/5 border border-white/10 rounded-md"
              >
                VIEW DESIGN SYSTEM & STYLE GUIDE
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
