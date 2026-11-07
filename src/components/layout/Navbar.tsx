import React, { useState, useEffect } from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { CONTACT_LINKS, scrollToSection } from "@/utils/contact";
import { Phone, Menu, X, MessageCircle, Calendar } from "lucide-react";
import brandLogoImg from "@/assets/logo/mmg-brand-logo.jpeg";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "hero" },
    { label: "Taxi Services", href: "services" },
    { label: "Explore Ooty", href: "destinations" },
    { label: "Tariff Rates", href: "tariff" },
    { label: "Choose Ride", href: "fleet" },
    { label: "Gallery", href: "gallery" },
    { label: "Why MMG", href: "why-us" },
    { label: "About Us", href: "about" },
    { label: "Contact", href: "contact" },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-soft border-b border-sage-border/60 py-2.5"
            : "bg-[#FAF8F1]/95 py-3.5 border-b border-sage-border/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <button
              type="button"
              onClick={() => handleLinkClick("hero")}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-mountain-teal/40 shadow-sm flex-shrink-0 bg-white">
                <img
                  src={brandLogoImg}
                  alt="MMG Tour and Travels Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif font-black text-xl tracking-tight text-forest-deep leading-none group-hover:text-forest transition-colors">
                    MMG
                  </span>
                  <span className="text-[11px] font-bold tracking-widest text-mountain-teal uppercase leading-none">
                    TOUR & TRAVELS
                  </span>
                </div>
                <span className="text-[10px] tracking-wider text-darktext-muted font-medium uppercase mt-0.5">
                  {BUSINESS_CONFIG.tagline}
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleLinkClick(link.href)}
                  className="text-xs uppercase tracking-wider font-semibold text-darktext hover:text-forest transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-forest after:transition-all hover:after:w-full"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Call Display & Primary CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={CONTACT_LINKS.phone}
                className="flex items-center gap-2 text-forest-deep font-semibold text-sm hover:text-mountain-teal transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-sage-light flex items-center justify-center text-forest">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="tracking-tight">{BUSINESS_CONFIG.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => handleLinkClick("booking")}
                className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-forest hover:bg-forest-deep text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>BOOK A TAXI</span>
              </button>
            </div>

            {/* Mobile Actions: Call & Menu Toggle */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href={CONTACT_LINKS.phone}
                aria-label="Call MMG Travels"
                className="w-9 h-9 rounded-full bg-sage-light flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp MMG Travels"
                className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 rounded-xl text-forest-deep hover:bg-sage-light transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[65px] z-30 bg-[#FAF8F1] border-b border-sage-border shadow-xl px-5 py-6 max-h-[calc(100vh-80px)] overflow-y-auto animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleLinkClick(link.href)}
                className="text-left py-2.5 px-3 rounded-xl text-sm font-semibold text-darktext hover:bg-sage-light hover:text-forest transition-colors"
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 border-t border-sage-border/70 space-y-3">
              <div className="p-3 bg-white rounded-2xl border border-sage-border/60">
                <p className="text-xs text-darktext-muted font-medium mb-1">Direct Driver Helpline:</p>
                <a
                  href={CONTACT_LINKS.phone}
                  className="text-base font-bold text-forest-deep flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-forest" />
                  <span>{BUSINESS_CONFIG.phone}</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => handleLinkClick("booking")}
                className="w-full py-3.5 rounded-full text-center text-sm font-bold tracking-wide uppercase bg-forest text-white shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK A TAXI NOW</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

