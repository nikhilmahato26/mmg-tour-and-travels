import React, { useState } from "react";
import { OOTY_DESTINATIONS, SIGHTSEEING_CIRCUITS, Destination, SightseeingCircuit } from "@/data/destinations";
import { DestinationCard } from "@/components/ui/DestinationCard";
import { MapPin, Compass, CheckCircle2, MessageCircle } from "lucide-react";
import { generateTariffEnquiryUrl } from "@/utils/whatsapp";

interface DestinationsProps {
  onSelectForBooking: (destinationName: string) => void;
}

export const Destinations: React.FC<DestinationsProps> = ({ onSelectForBooking }) => {
  const [selectedCircuit, setSelectedCircuit] = useState<string>("ooty-local-circuit");
  const [activeModalDest, setActiveModalDest] = useState<Destination | null>(null);

  const activeCircuit =
    SIGHTSEEING_CIRCUITS.find((c) => c.id === selectedCircuit) || SIGHTSEEING_CIRCUITS[0];

  return (
    <section id="destinations" className="py-20 bg-[#FAF8F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-light text-forest text-xs font-bold uppercase tracking-widest mb-3 border border-sage-border">
            <Compass className="w-3.5 h-3.5 text-mountain-teal" />
            <span>Destination Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-forest-deep tracking-tight mb-4">
            EXPLORE THE MAGIC OF OOTY
          </h2>
          <p className="text-darktext-muted text-base sm:text-lg leading-relaxed">
            &ldquo;Discover the natural beauty, scenic landscapes, and memorable attractions of the Queen of Hill Stations.&rdquo;
          </p>
        </div>

        {/* FEATURED: Verified Sightseeing Circuits (from client brochure) */}
        <div className="mb-16 bg-white rounded-3xl p-6 sm:p-10 border border-sage-border shadow-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-sage-border/60">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-mountain-teal">
                Verified Sightseeing Circuits
              </span>
              <h3 className="text-2xl font-serif font-bold text-forest-deep mt-1">
                Choose Your Curated Tour Route
              </h3>
            </div>

            {/* Circuit Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {SIGHTSEEING_CIRCUITS.map((circuit: SightseeingCircuit) => (
                <button
                  key={circuit.id}
                  type="button"
                  onClick={() => setSelectedCircuit(circuit.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    selectedCircuit === circuit.id
                      ? "bg-forest text-white shadow-sm"
                      : "bg-sage-subtle text-darktext hover:bg-sage-light border border-sage-border"
                  }`}
                >
                  {circuit.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Circuit Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-block px-3 py-1 rounded-lg bg-mountain-teal/10 text-mountain-dark text-xs font-semibold">
                {activeCircuit.suggestedDuration}
              </div>
              <h4 className="text-2xl font-serif font-bold text-forest-deep">
                {activeCircuit.title}
              </h4>
              <p className="text-darktext-muted text-sm leading-relaxed">
                {activeCircuit.subtitle}
              </p>

              <div className="p-4 rounded-2xl bg-cream-warm border border-sage-border">
                <span className="text-[11px] font-bold uppercase text-darktext-muted block">
                  Indicative Sedan Tariff:
                </span>
                <span className="text-xl font-bold font-serif text-forest-deep">
                  {activeCircuit.startingPriceSedan}
                </span>
                <span className="text-xs text-darktext-soft block mt-0.5">
                  (SUV and Tempo Traveller options also available)
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={generateTariffEnquiryUrl(activeCircuit.title, "Sedan / SUV / Tempo", activeCircuit.startingPriceSedan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire for this Tour</span>
                </a>

                <button
                  type="button"
                  onClick={() => onSelectForBooking(activeCircuit.title)}
                  className="px-6 py-3 rounded-full text-xs font-bold border border-forest text-forest hover:bg-forest hover:text-white transition-all text-center"
                >
                  Book in Form &darr;
                </button>
              </div>
            </div>

            {/* Spots Checklist */}
            <div className="lg:col-span-7 bg-sage-subtle/70 rounded-2xl p-6 border border-sage-border">
              <h5 className="text-xs font-bold uppercase tracking-wider text-forest-deep mb-4 flex items-center gap-2">
                <span>Included Attractions & Viewpoints ({activeCircuit.spotsCount} Spots)</span>
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeCircuit.spots.map((spot, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-darktext bg-white p-3 rounded-xl border border-sage-border/50 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{spot}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OOTY_DESTINATIONS.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onSelectForBooking={onSelectForBooking}
              onOpenDetails={(dest: Destination) => setActiveModalDest(dest)}
            />
          ))}
        </div>
      </div>

      {/* Destination Detail Modal */}
      {activeModalDest && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setActiveModalDest(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-sage-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60">
              <img
                src={activeModalDest.image}
                alt={activeModalDest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <button
                type="button"
                onClick={() => setActiveModalDest(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black"
              >
                &times;
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-wider text-mountain-light font-bold">
                  {activeModalDest.tagline}
                </span>
                <h3 className="text-2xl font-serif font-bold text-cream mt-0.5">
                  {activeModalDest.name}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-darktext leading-relaxed">
                {activeModalDest.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-darktext-muted pt-2 border-t border-sage-border">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-mountain-teal" />
                  {activeModalDest.distanceFromTown}
                </span>
                <span>•</span>
                <span>Best time: {activeModalDest.bestTime}</span>
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onSelectForBooking(activeModalDest.name);
                    setActiveModalDest(null);
                  }}
                  className="flex-1 py-3 rounded-full text-xs font-bold bg-forest text-white hover:bg-forest-deep transition-all text-center"
                >
                  Book Cab for {activeModalDest.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
