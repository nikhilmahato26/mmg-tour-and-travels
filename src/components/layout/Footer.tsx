import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { CONTACT_LINKS, scrollToSection } from "@/utils/contact";
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, ShieldCheck } from "lucide-react";
import brandLogoImg from "@/assets/logo/mmg-brand-logo.jpeg";

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: "Home", href: "hero" },
    { label: "Taxi Services", href: "services" },
    { label: "Explore Ooty", href: "destinations" },
    { label: "Tariff & Rates", href: "tariff" },
    { label: "Vehicle Fleet", href: "fleet" },
    { label: "Travel Gallery", href: "gallery" },
    { label: "Why Choose MMG", href: "why-us" },
    { label: "How to Book", href: "how-to-book" },
    { label: "About Us", href: "about" },
    { label: "Contact & Location", href: "contact" },
  ];

  const popularDestinations = [
    "Ooty Lake & Boating",
    "Government Botanical Garden",
    "Doddabetta Peak Viewpoint",
    "Pykara Waterfalls & Lake",
    "Coonoor & Sim's Park",
    "Kotagiri Catherine Falls",
    "Avalanche Biosphere",
    "Mudumalai 36 Hairpin Safari",
    "Nilgiri Mountain Toy Train",
    "9th Mile Shooting Point",
  ];

  return (
    <footer className="bg-forest-deep text-cream pt-16 pb-24 sm:pb-16 border-t-4 border-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-forest-light/30">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white p-0.5 shadow-md flex-shrink-0">
                <img
                  src={brandLogoImg}
                  alt="MMG Tour and Travels"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif font-black text-xl text-white tracking-tight">
                  MMG
                </h3>
                <span className="text-xs font-bold tracking-widest text-mountain-light uppercase block">
                  TOUR AND TRAVELS
                </span>
              </div>
            </div>

            <p className="text-xs text-cream/80 font-semibold tracking-wider uppercase text-mountain-light">
              {BUSINESS_CONFIG.tagline}
            </p>

            <p className="text-xs leading-relaxed text-cream/70">
              Premier taxi services based in Ooty, Tamil Nadu. Dedicated to comfortable, scenic, and reliable journeys through the queen of hill stations and Nilgiri ghats.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-cream/80 bg-forest/40 p-2.5 rounded-xl border border-mountain-teal/20">
              <ShieldCheck className="w-4 h-4 text-mountain-light flex-shrink-0" />
              <span>Govt. Authorized Tourist Maxi Cab Permit • Ooty RTO</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4 border-b border-forest-light/40 pb-2">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="text-cream/70 hover:text-white hover:underline transition-colors text-left py-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Destinations */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4 border-b border-forest-light/40 pb-2">
              Popular Destinations
            </h4>
            <ul className="space-y-1.5 text-xs">
              {popularDestinations.map((dest, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => scrollToSection("destinations")}
                    className="text-cream/70 hover:text-white transition-colors flex items-center gap-1.5 group text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-mountain-teal group-hover:bg-white transition-colors" />
                    <span>{dest}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="space-y-3.5">
            <h4 className="font-serif text-lg font-bold text-white mb-4 border-b border-forest-light/40 pb-2">
              Get in Touch
            </h4>

            <div className="space-y-2.5 text-xs text-cream/80">
              <a
                href={CONTACT_LINKS.phone}
                className="flex items-start gap-2.5 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-mountain-light flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-bold text-white text-sm">{BUSINESS_CONFIG.phone}</p>
                  <p className="text-[11px] text-cream/60">Alt: {BUSINESS_CONFIG.altPhone}</p>
                </div>
              </a>

              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Instant WhatsApp Enquiry</span>
              </a>

              <a
                href={CONTACT_LINKS.email}
                className="flex items-center gap-2.5 hover:text-white transition-colors group break-all"
              >
                <Mail className="w-4 h-4 text-mountain-light flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>{BUSINESS_CONFIG.email}</span>
              </a>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-mountain-light flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{BUSINESS_CONFIG.location.displayLocation}</p>
                  <p className="text-[11px] text-cream/60">{BUSINESS_CONFIG.location.addressLine}</p>
                  <a
                    href={CONTACT_LINKS.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-mountain-light hover:underline font-semibold mt-1"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/70">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p>© 2026 MMG Tour and Travels. All Rights Reserved.</p>
            <span className="hidden sm:inline text-cream/40">•</span>
            <p className="font-semibold text-mountain-light">✨ {BUSINESS_CONFIG.slogan} ✨</p>
          </div>
          <p className="italic font-serif text-cream/90 font-medium">
            &ldquo;{BUSINESS_CONFIG.motto}&rdquo; — {BUSINESS_CONFIG.subTagline}
          </p>
        </div>
      </div>
    </footer>
  );
};

