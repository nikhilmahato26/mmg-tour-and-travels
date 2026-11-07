import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { CONTACT_LINKS, scrollToSection } from "@/utils/contact";
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, Calendar, Clock } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#FAF8F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-light text-forest text-xs font-bold uppercase tracking-widest mb-3 border border-sage-border">
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-forest-deep tracking-tight mb-4">
            GET IN TOUCH WITH MMG TOUR AND TRAVELS
          </h2>
          <p className="text-darktext-muted text-base sm:text-lg leading-relaxed">
            Planning your trip to Ooty or need an urgent airport pickup? Reach out to us directly through phone, WhatsApp, or email.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Phone Contact */}
          <div className="bg-white rounded-3xl p-8 border border-sage-border shadow-soft flex flex-col justify-between hover:shadow-hover transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sage-light flex items-center justify-center text-forest mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-forest-deep mb-2">
                Call Helpline
              </h3>
              <p className="text-darktext-muted text-xs leading-relaxed mb-4">
                Speak directly with the travel coordinator for real-time vehicle availability and trip queries.
              </p>
              <div className="space-y-1">
                <p className="text-lg font-bold text-forest-deep">{BUSINESS_CONFIG.phone}</p>
                <p className="text-xs text-darktext-soft">Secondary: {BUSINESS_CONFIG.altPhone}</p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-sage-border">
              <a
                href={CONTACT_LINKS.phone}
                className="w-full py-3 rounded-full text-xs font-bold bg-forest hover:bg-forest-deep text-white flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="bg-white rounded-3xl p-8 border border-sage-border shadow-soft flex flex-col justify-between hover:shadow-hover transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-6">
                <MessageCircle className="w-6 h-6 fill-[#25D366]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-forest-deep mb-2">
                WhatsApp Messaging
              </h3>
              <p className="text-darktext-muted text-xs leading-relaxed mb-4">
                Share your itinerary, receive instant photos, confirm fare quotes, and get driver contact details.
              </p>
              <p className="text-lg font-bold text-forest-deep">{BUSINESS_CONFIG.phone}</p>
              <p className="text-xs text-[#25D366] font-medium mt-1">Available for WhatsApp Enquiries</p>
            </div>

            <div className="pt-6 mt-6 border-t border-sage-border">
              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Card 3: Email & Location */}
          <div className="bg-white rounded-3xl p-8 border border-sage-border shadow-soft flex flex-col justify-between hover:shadow-hover transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-mountain-teal/10 flex items-center justify-center text-mountain-teal mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-forest-deep mb-2">
                Email Enquiries
              </h3>
              <p className="text-darktext-muted text-xs leading-relaxed mb-4">
                For corporate bookings, school/college excursions, or formal travel quotation requests.
              </p>
              <p className="text-xs sm:text-sm font-bold text-forest-deep break-all">
                {BUSINESS_CONFIG.email}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-sage-border">
              <a
                href={CONTACT_LINKS.email}
                className="w-full py-3 rounded-full text-xs font-bold border border-forest text-forest hover:bg-forest hover:text-white flex items-center justify-center gap-2 transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Location & Map Box */}
        <div className="bg-white rounded-3xl p-8 border border-sage-border shadow-card flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-forest text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-mountain-teal" />
              <span>Base of Operations</span>
            </div>
            <h4 className="font-serif font-bold text-2xl text-forest-deep">
              MMG TOUR AND TRAVELS, OOTY
            </h4>
            <p className="text-sm text-darktext-muted max-w-xl leading-relaxed">
              {BUSINESS_CONFIG.location.addressLine}, {BUSINESS_CONFIG.location.state}, {BUSINESS_CONFIG.location.country}.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <a
              href={CONTACT_LINKS.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full text-xs font-bold bg-forest hover:bg-forest-deep text-white flex items-center justify-center gap-2 shadow-sm transition-all text-center"
            >
              <span>Search on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => scrollToSection("booking")}
              className="px-6 py-3.5 rounded-full text-xs font-bold border border-forest text-forest hover:bg-sage-light flex items-center justify-center gap-2 transition-all text-center"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Fill Booking Form</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

