import React from "react";
import { NEARBY_DESTINATIONS, NearbyDestination } from "@/data/destinations";
import { MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { generateDestinationEnquiryUrl } from "@/utils/whatsapp";

interface NearbyDestinationsProps {
  onSelectForBooking: (destinationName: string) => void;
}

export const NearbyDestinations: React.FC<NearbyDestinationsProps> = ({
  onSelectForBooking,
}) => {
  return (
    <section id="nearby" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-light text-forest text-xs font-bold uppercase tracking-widest mb-3 border border-sage-border">
            <span>Inter-Valley & Hill Excursions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-forest-deep tracking-tight mb-4">
            EXPLORE BEYOND OOTY
          </h2>
          <p className="text-darktext-muted text-base sm:text-lg leading-relaxed">
            Expand your Nilgiris holiday. MMG Tour and Travels provides reliable taxi arrangements to neighboring hill towns, wildlife corridors, and tea havens.
          </p>
        </div>

        {/* Nearby Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEARBY_DESTINATIONS.map((dest: NearbyDestination) => {
            const whatsappUrl = generateDestinationEnquiryUrl(dest.name);

            return (
              <div
                key={dest.id}
                className="group bg-[#FAF8F1] rounded-3xl overflow-hidden border border-sage-border hover:border-forest/40 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-60 overflow-hidden bg-forest/5">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-forest-deep shadow-sm">
                        {dest.distance}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-mountain-light block">
                        {dest.subtitle}
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-cream mt-0.5">
                        {dest.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p className="text-darktext-muted text-sm leading-relaxed mb-4">
                      {dest.description}
                    </p>

                    <div className="space-y-1.5 mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-forest-deep block mb-1">
                        Popular Attractions:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {dest.popularAttractions.map((attr, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white border border-sage-border/80 text-darktext"
                          >
                            {attr}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectForBooking(dest.name)}
                    className="flex-1 py-2.5 px-3 rounded-full text-xs font-bold border border-forest text-forest hover:bg-forest hover:text-white transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Select for Taxi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

