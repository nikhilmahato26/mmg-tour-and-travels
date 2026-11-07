import React from "react";
import { Destination } from "@/data/destinations";
import { MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { generateDestinationEnquiryUrl } from "@/utils/whatsapp";

interface DestinationCardProps {
  destination: Destination;
  onSelectForBooking?: (destinationName: string) => void;
  onOpenDetails?: (destination: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onSelectForBooking,
  onOpenDetails,
}) => {
  const whatsappUrl = generateDestinationEnquiryUrl(destination.name);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-sage-border/60 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Image container */}
      <div className="relative h-64 overflow-hidden bg-forest-deep/10">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
          {destination.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-forest-deep shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Distance Indicator */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white/90 text-xs">
          <span className="flex items-center gap-1 font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-mountain-light" />
            {destination.distanceFromTown}
          </span>
          <span className="flex items-center gap-1 font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
            <Clock className="w-3.5 h-3.5 text-mountain-light" />
            {destination.bestTime}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-mountain-teal">
            {destination.tagline}
          </span>
          <h3 className="text-xl font-bold font-serif text-forest-deep mt-1 mb-2.5 group-hover:text-forest transition-colors">
            {destination.name}
          </h3>
          <p className="text-darktext-muted text-sm leading-relaxed line-clamp-3">
            {destination.description}
          </p>
        </div>

        {/* Card Actions */}
        <div className="mt-6 pt-4 border-t border-sage-border/50 flex flex-col sm:flex-row items-center gap-2.5">
          <button
            type="button"
            onClick={() => {
              if (onOpenDetails) onOpenDetails(destination);
              else if (onSelectForBooking) onSelectForBooking(destination.name);
            }}
            className="w-full sm:w-1/2 py-2.5 px-3 text-xs font-semibold rounded-full border border-forest/30 text-forest hover:bg-forest hover:text-white transition-all duration-200 flex items-center justify-center gap-1.5"
          >
            <span>Explore Spots</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (onSelectForBooking) {
                // If user wants to prefill form, we can also give them that option
              }
            }}
            className="w-full sm:w-1/2 py-2.5 px-3 text-xs font-semibold rounded-full bg-forest text-white hover:bg-forest-deep transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Enquire Cab</span>
          </a>
        </div>
      </div>
    </div>
  );
};

