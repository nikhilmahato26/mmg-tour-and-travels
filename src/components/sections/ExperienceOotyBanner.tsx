import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { CONTACT_LINKS, scrollToSection } from "@/utils/contact";
import { Phone, MessageCircle, Calendar, Sparkles } from "lucide-react";

export const ExperienceOotyBanner: React.FC = () => {
  const { experience } = BUSINESS_CONFIG;

  return (
    <section className="py-16 bg-gradient-to-b from-[#103B2B] to-[#174D38] text-white relative overflow-hidden">
      {/* Decorative background glow circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-mountain-teal/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge: ✨ HOLIDAYS DIFFERENTLY ✨ */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-cream text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-md animate-pulse">
            <Sparkles className="w-4 h-4 text-gold-accent" />
            <span>{experience.badge}</span>
            <Sparkles className="w-4 h-4 text-gold-accent" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            🌿 Discover the Beauty of Ooty with MMG Tours and Travels! 🚖
          </h2>

          {/* Body Text */}
          <p className="text-cream/90 text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
            {experience.body}
          </p>

          {/* Service Highlight Pill */}
          <div className="inline-block px-5 py-2.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-cream text-sm font-semibold">
            🚘 {experience.serviceHighlight}
          </div>
        </div>

        {/* 4 Feature Points Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experience.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 hover:border-white/40 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-3">{pillar.emoji}</div>
                <h3 className="font-serif font-bold text-lg text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-cream/80 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Motto Callout Banner */}
        <div className="mt-12 bg-white rounded-3xl p-8 sm:p-10 text-forest-deep shadow-2xl border-4 border-mountain-teal/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-mountain-teal block">
              OUR PROMISE TO EVERY TRAVELER
            </span>
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-forest-deep">
              &ldquo;{experience.motto}&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-darktext-muted max-w-xl">
              {experience.ctaText}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-shrink-0">
            <a
              href={CONTACT_LINKS.phone}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-forest hover:bg-forest-deep text-white shadow-soft transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 9626599899</span>
            </a>

            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-soft transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>

            <button
              type="button"
              onClick={() => scrollToSection("booking")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border-2 border-forest text-forest hover:bg-forest hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Plan Trip</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
