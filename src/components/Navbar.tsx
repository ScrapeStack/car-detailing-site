import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Star, Calendar, Menu, X, Shield, Sparkles, BookOpen, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

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
              <MapPin className="w-3 h-3 text-amber-500" />
              <span>Queens, Long Island & Greater NYC (Fully Mobile Unit)</span>
            </div>
            <div className="flex items-center space-x-1 text-amber-400 font-medium">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{BUSINESS_INFO.rating} / 5.0 Star Rating ({BUSINESS_INFO.reviewCount} Reviews)</span>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <button 
              id="nav-style-guide-top-btn"
              onClick={onOpenStyleGuide}
              className="text-slate-400 hover:text-amber-400 transition-colors flex items-center space-x-1 text-[11px]"
            >
              <BookOpen className="w-3 h-3 text-amber-400" />
              <span>View Style Guide</span>
            </button>
            <span className="text-slate-700">|</span>
            <a 
              id="topbar-phone-link"
              href={`tel:${BUSINESS_INFO.phoneRaw}`} 
              className="flex items-center space-x-1 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Header (Equis Aesthetic Match) */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#07090e]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5' 
          : 'bg-[#07090e]/80 backdrop-blur-sm border-b border-white/5 py-4 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo / Brand Name in Minimalist High-End Lettering */}
          <a href="#" className="flex items-center space-x-2.5 sm:space-x-3 group" id="nav-brand-logo">
            <span className="font-display font-black text-lg sm:text-xl tracking-[0.12em] text-white group-hover:text-amber-400 transition-colors uppercase leading-none">
              JONATHAN'S
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <span className="hidden sm:inline-block text-[11px] tracking-[0.16em] text-amber-400 uppercase font-mono-tech font-bold">
              MOBILE CARWASH
            </span>
          </a>

          {/* Desktop Nav Links (Reference Style) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-mono-tech tracking-[0.18em] uppercase text-slate-300 hover:text-white transition-colors relative py-1 hover:text-amber-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs: Book Now triggering call/text to (347) 946-2748 */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              id="nav-book-appointment-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-2 text-xs font-mono-tech font-bold tracking-wider uppercase text-slate-950 bg-amber-400 hover:bg-amber-300 border border-amber-400 transition-all rounded-md duration-200 flex items-center space-x-1.5 shadow-sm shadow-amber-500/20"
            >
              <Phone className="w-3 h-3 text-slate-950" />
              <span>BOOK NOW</span>
            </a>

            <button
              id="nav-quote-calculator-btn"
              onClick={onOpenBooking}
              className="p-2 text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors relative rounded-md border border-white/10"
              aria-label="View Booking calculator and quotes"
              title="Instant Quote Calculator"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              id="nav-mobile-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2 text-amber-400 bg-white/5 border border-white/10 rounded inline-flex items-center justify-center"
              aria-label={`Call ${BUSINESS_INFO.name} at ${BUSINESS_INFO.phone}`}
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
                  className="px-3 py-2.5 text-slate-200 hover:bg-white/5 hover:text-amber-400 font-mono-tech tracking-widest text-xs uppercase transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-slate-600 text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                id="mobile-drawer-book-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3 text-xs font-mono-tech font-bold uppercase tracking-widest text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors text-center flex items-center justify-center space-x-2 rounded-md"
              >
                <Phone className="w-3.5 h-3.5 text-slate-950" />
                <span>CALL NOW: {BUSINESS_INFO.phone}</span>
              </a>
              <button
                id="mobile-drawer-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 text-xs font-mono-tech font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 transition-colors rounded-md"
              >
                CALCULATE INSTANT QUOTE
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
