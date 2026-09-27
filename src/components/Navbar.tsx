import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Star, Menu, X, BookOpen, MessageSquare, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { BUSINESS_CONFIG } from '../config';
import { getCleanOwnerPhone, getDisplayOwnerPhone, getTelLink, getSmsLink, getEmailLink, getWhatsAppLink } from '../utils/whatsapp';

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
    { name: 'PACKAGES & PRICING', href: '#pricing' },
    { name: 'REVIEWS', href: '#reviews' },
    { name: 'CONTACT & DISPATCH', href: '#location' },
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
              <span>{BUSINESS_CONFIG.address} • Mobile (We Come To You)</span>
            </div>
            <div className="flex items-center space-x-1 text-amber-400 font-medium">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{BUSINESS_INFO.rating.toFixed(1)} Stars ({BUSINESS_INFO.reviewCount}+ Google Reviews)</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              id="nav-style-guide-top-btn"
              onClick={onOpenStyleGuide}
              className="text-slate-400 hover:text-amber-400 transition-colors flex items-center space-x-1 text-[11px]"
            >
              <BookOpen className="w-3 h-3 text-amber-400" />
              <span>Style Guide</span>
            </button>
            <span className="w-px h-3 bg-white/10 shrink-0" aria-hidden="true" />
            <a 
              id="topbar-email-link"
              href={getEmailLink()} 
              className="flex items-center space-x-1 text-slate-300 hover:text-amber-400 transition-colors"
              title="Email Inquiry"
            >
              <Mail className="w-3 h-3 text-amber-500" />
              <span>Email</span>
            </a>
            <span className="w-px h-3 bg-white/10 shrink-0" aria-hidden="true" />
            <a 
              id="topbar-phone-link"
              href={getTelLink()} 
              className="flex items-center space-x-1 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>{getDisplayOwnerPhone()}</span>
            </a>
            <span className="w-px h-3 bg-white/10 shrink-0" aria-hidden="true" />
            <a 
              id="topbar-whatsapp-link"
              href={getWhatsAppLink()} 
              target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#07090e]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5' 
          : 'bg-[#07090e]/80 backdrop-blur-sm border-b border-white/5 py-4 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center space-x-3 group" id="nav-brand-logo">
            <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center font-display font-black text-black text-base shadow-md shadow-amber-500/20 shrink-0">
              G
            </div>
            <div>
              <span className="font-display font-black text-base sm:text-lg md:text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors leading-tight block">
                Guy On The Go Mobile Detailing
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.18em] text-amber-400/90 uppercase font-mono-tech block mt-0.5">
                BRONX & NYC • WE COME TO YOU
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-mono-tech tracking-[0.16em] uppercase text-slate-300 hover:text-amber-400 transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs: Book via WhatsApp & Call */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="nav-call-btn"
              href={getTelLink()}
              className="px-3.5 py-2 text-xs font-mono-tech font-semibold tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{getDisplayOwnerPhone()}</span>
            </a>

            <button
              id="nav-instant-quote-btn"
              onClick={onOpenBooking}
              className="px-4 py-2 text-xs font-mono-tech font-bold tracking-wider uppercase text-black bg-[#25D366] hover:bg-[#20bd5a] transition-all rounded-xl shadow-md shadow-[#25D366]/20 flex items-center space-x-1.5 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-black text-black" />
              <span>BOOK VIA WHATSAPP</span>
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              id="nav-mobile-call-btn"
              href={getTelLink()}
              className="p-2 text-amber-400 bg-white/5 border border-white/10 rounded-lg"
              aria-label={`Call ${BUSINESS_CONFIG.businessName}`}
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              id="nav-mobile-whatsapp-btn"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg"
              aria-label="Book on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              id="nav-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-white/5 border border-white/10 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0d14] border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-1 gap-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 text-slate-200 hover:bg-white/5 hover:text-amber-400 font-mono-tech tracking-widest text-xs uppercase transition-colors flex items-between justify-between"
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
                className="w-full py-3 text-xs font-mono-tech font-black uppercase tracking-widest text-black bg-[#25D366] hover:bg-[#20bd5a] transition-colors rounded-xl flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 fill-black text-black" />
                <span>BOOK VIA WHATSAPP</span>
              </button>

              <div className="grid grid-cols-3 gap-2">
                <a
                  href={getTelLink()}
                  className="py-2.5 text-center text-[11px] font-mono-tech text-amber-400 bg-white/5 border border-white/10 rounded-lg"
                >
                  Call Now
                </a>
                <a
                  href={getSmsLink()}
                  className="py-2.5 text-center text-[11px] font-mono-tech text-slate-300 bg-white/5 border border-white/10 rounded-lg"
                >
                  Send SMS
                </a>
                <a
                  href={getEmailLink()}
                  className="py-2.5 text-center text-[11px] font-mono-tech text-slate-300 bg-white/5 border border-white/10 rounded-lg"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
