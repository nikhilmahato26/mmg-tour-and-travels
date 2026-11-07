import React from "react";
import { TAXI_SERVICES, ServiceItem } from "@/data/services";
import {
  MapPin,
  Compass,
  Navigation,
  Users,
  Bus,
  Sliders,
  Plane,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { generateGeneralEnquiryUrl } from "@/utils/whatsapp";

interface TaxiServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const TaxiServices: React.FC<TaxiServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MapPin":
        return <MapPin className="w-6 h-6 text-mountain-teal" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-mountain-teal" />;
      case "Navigation":
        return <Navigation className="w-6 h-6 text-mountain-teal" />;
      case "Users":
        return <Users className="w-6 h-6 text-mountain-teal" />;
      case "Bus":
        return <Bus className="w-6 h-6 text-mountain-teal" />;
      case "Sliders":
        return <Sliders className="w-6 h-6 text-mountain-teal" />;
      case "Plane":
        return <Plane className="w-6 h-6 text-mountain-teal" />;
      default:
        return <Compass className="w-6 h-6 text-mountain-teal" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-light text-forest text-xs font-bold uppercase tracking-widest mb-3 border border-sage-border">
            <span>Our Service Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-forest-deep tracking-tight mb-4">
            TAXI SERVICES FOR EVERY JOURNEY
          </h2>
          <p className="text-darktext-muted text-base sm:text-lg leading-relaxed">
            &ldquo;Whether you are exploring Ooty or planning a journey to nearby destinations, contact MMG Tour and Travels for taxi service enquiries.&rdquo;
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TAXI_SERVICES.map((service: ServiceItem) => {
            const whatsappUrl = `https://wa.me/919626599899?text=${encodeURIComponent(
              `Hello MMG Tour and Travels, I would like to enquire about your ${service.title} in Ooty. Please share availability and travel details.`
            )}`;

            return (
              <div
                key={service.id}
                className="group bg-[#FAF8F1] rounded-3xl p-8 border border-sage-border/70 hover:border-forest/40 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="w-14 h-14 rounded-2xl bg-white border border-sage-border shadow-sm flex items-center justify-center mb-6 group-hover:bg-forest group-hover:text-white transition-all duration-300">
                    <span className="group-hover:brightness-200 transition-all">
                      {getIcon(service.iconName)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-forest-deep mb-3 group-hover:text-forest transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-darktext-muted text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-8">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-darktext">
                        <span className="w-1.5 h-1.5 rounded-full bg-mountain-teal" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-sage-border flex items-center justify-between gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-full text-xs font-semibold bg-forest hover:bg-forest-deep text-white flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{service.ctaText}</span>
                  </a>

                  {onSelectService && (
                    <button
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      className="p-2.5 rounded-full border border-forest/20 text-forest hover:bg-sage-light transition-colors"
                      title="Prefill in booking form"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Clarification banner */}
        <div className="mt-12 p-4 rounded-2xl bg-sage-light text-center text-xs text-darktext-muted border border-sage-border max-w-2xl mx-auto">
          <em>Note:</em> All service categories above represent customizable travel arrangements. Final availability, route clearances, and vehicle confirmations are arranged upon direct enquiry.
        </div>
      </div>
    </section>
  );
};

