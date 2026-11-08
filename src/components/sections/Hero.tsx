import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { CONTACT_LINKS, scrollToSection } from "@/utils/contact";
import { Phone, MessageCircle, Calendar, Compass, ShieldCheck, MapPin } from "lucide-react";
import heroBg from "@/assets/images/destinations/hero-ooty-bg.jpg";
import cabHero from "@/assets/images/fleet/mmg-fleet-viewpoint.jpeg";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center overflow-hidden bg-forest-deep text-white">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Scenic Ooty Mountain Tea Gardens"
          className="w-full h-full object-cover object-center filter brightness-[0.75]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/85 to-forest-deep/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cream text-xs font-semibold uppercase tracking-widest shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-mountain-light" />
                <span>{BUSINESS_CONFIG.hero.eyebrow}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mountain-teal/40 backdrop-blur-md border border-mountain-light/30 text-white text-[11px] font-extrabold tracking-wider uppercase">
                <span>✨ {BUSINESS_CONFIG.slogan} ✨</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-cream tracking-tight leading-[1.12]">
              DISCOVER THE <br className="hidden sm:inline" />
              <span className="text-white relative inline-block">
                BEAUTY OF OOTY
                <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-mountain-teal rounded-full" />
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-cream/90 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {BUSINESS_CONFIG.hero.subtitle}
            </p>

            {/* Highlights Chips */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {BUSINESS_CONFIG.hero.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-forest/80 backdrop-blur-sm border border-forest-light/60 px-3.5 py-1.5 rounded-xl text-xs font-medium text-cream"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-mountain-light flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("booking")}
                className="px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase bg-white text-forest-deep hover:bg-cream-warm transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-4 h-4 text-forest" />
                <span>{BUSINESS_CONFIG.hero.primaryCta}</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("destinations")}
                className="px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase border-2 border-white/80 text-white hover:bg-white hover:text-forest-deep transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-sm"
              >
                <Compass className="w-4 h-4" />
                <span>{BUSINESS_CONFIG.hero.secondaryCta}</span>
              </button>
            </div>

            {/* Direct Contact Phone & WhatsApp Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-cream/80 border-t border-white/10">
              <a
                href={CONTACT_LINKS.phone}
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-mountain-teal transition-colors">
                  <Phone className="w-3.5 h-3.5 text-cream" />
                </div>
                <span>
                  Direct Call: <strong className="text-white underline">{BUSINESS_CONFIG.phone}</strong>
                </span>
              </a>

              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#25D366] transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-3.5 h-3.5 fill-white text-[#25D366]" />
                </div>
                <span>
                  WhatsApp: <strong className="underline font-semibold">Instant Enquiry</strong>
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Verified MMG Fleet */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-mountain-teal to-forest rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000" />

              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-3 border border-white/20 shadow-2xl overflow-hidden">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden">
                  <img
                    src={cabHero}
                    alt="MMG Tour and Travels Cabs at Ooty Viewpoint"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Card Overlay Badges */}
                  <div className="absolute top-3 left-3 bg-forest/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                    Ooty Hill Station Cab
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center justify-between">
                      <p className="font-serif font-bold text-lg text-cream">MMG Verified Fleet</p>
                      <span className="text-[10px] bg-mountain-teal/80 px-2 py-0.5 rounded-full font-bold uppercase">
                        Holidays Differently
                      </span>
                    </div>
                    <p className="text-xs text-cream/90 font-medium italic mt-0.5">
                      &ldquo;{BUSINESS_CONFIG.motto}&rdquo;
                    </p>
                    <p className="text-[11px] text-cream/75 mt-1">
                      Standard Sedans, 7-Seater SUVs & 14-Seater Tempo Travellers with experienced Nilgiri hill drivers.
                    </p>
                  </div>
                </div>

                {/* Quick Info Bar */}
                <div className="mt-3 p-3 bg-black/30 backdrop-blur-sm rounded-xl flex items-center justify-between text-xs text-cream/90">
                  <span>Based in Ooty Town</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-mountain-light" />
                  <span>Sightseeing & Outstation</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-mountain-light" />
                  <span>Advance Discounts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

