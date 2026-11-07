import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { CONTACT_LINKS, scrollToSection } from "@/utils/contact";
import { ShieldCheck, MapPin, Phone, MessageCircle } from "lucide-react";
import flyerImg from "@/assets/images/client/mmg-flyer.jpeg";
import permitImg from "@/assets/images/client/rto-permit.jpeg";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Credentials and Flyer Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-card border border-sage-border group">
                <img
                  src={flyerImg}
                  alt="MMG Travels Official Brochure"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="bg-[#FAF8F1] rounded-2xl p-4 border border-sage-border text-center">
                <span className="font-serif font-bold text-forest-deep text-lg block">
                  Safe Journey...
                </span>
                <span className="text-xs text-mountain-teal font-medium">
                  Happy Memories!
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="bg-forest-deep text-cream rounded-2xl p-5 shadow-soft border border-forest">
                <ShieldCheck className="w-6 h-6 text-mountain-light mb-2" />
                <h4 className="font-serif font-bold text-base text-white">
                  Government RTO Permitted
                </h4>
                <p className="text-[11px] text-cream/70 mt-1 leading-relaxed">
                  Authorized Tourist Maxi Cab permit registered under Transport Department, Ooty RTO, Tamil Nadu.
                </p>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-card border border-sage-border group">
                <img
                  src={permitImg}
                  alt="Transport Department Ooty RTO Tourist Permit"
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-light text-forest text-xs font-bold uppercase tracking-widest border border-sage-border">
              <span>Authentic Local Operator</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-forest-deep tracking-tight leading-tight">
              {BUSINESS_CONFIG.about.heading}
            </h2>

            <div className="space-y-4 text-darktext-muted text-base leading-relaxed">
              <p>{BUSINESS_CONFIG.about.p1}</p>
              <p>{BUSINESS_CONFIG.about.p2}</p>
            </div>

            {/* Business Features Pill */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-sage-subtle border border-sage-border/80">
                <MapPin className="w-4 h-4 text-forest flex-shrink-0" />
                <span className="font-medium text-darktext">
                  Native Ooty Taxi Operator
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-sage-subtle border border-sage-border/80">
                <ShieldCheck className="w-4 h-4 text-forest flex-shrink-0" />
                <span className="font-medium text-darktext">
                  Commercial Tourist Authorization
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-forest hover:bg-forest-deep text-white shadow-soft transition-all"
              >
                CONTACT US
              </button>

              <a
                href={CONTACT_LINKS.phone}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold border border-forest text-forest hover:bg-sage-light transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

