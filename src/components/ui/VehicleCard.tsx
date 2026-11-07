import React from "react";
import { VehicleCategory } from "@/data/fleet";
import { Users, Briefcase, CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";
import { generateVehicleEnquiryUrl } from "@/utils/whatsapp";
import { CONTACT_LINKS } from "@/utils/contact";

interface VehicleCardProps {
  vehicle: VehicleCategory;
  onSelectVehicle?: (categoryTag: string) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  onSelectVehicle,
}) => {
  const whatsappUrl = generateVehicleEnquiryUrl(vehicle.categoryTag);

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-sage-border shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div>
        {/* Photo Container */}
        <div className="relative h-56 overflow-hidden bg-forest/5">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-forest text-white shadow-md">
              {vehicle.categoryTag}
            </span>
          </div>

          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full font-medium">
              <Users className="w-3.5 h-3.5 text-mountain-light" />
              {vehicle.seatingCapacity}
            </span>
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full font-medium">
              <Briefcase className="w-3.5 h-3.5 text-mountain-light" />
              Luggage Space
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold font-serif text-forest-deep mb-2">
            {vehicle.name}
          </h3>
          <p className="text-darktext-muted text-sm leading-relaxed mb-4">
            {vehicle.description}
          </p>

          <div className="bg-sage-subtle rounded-2xl p-3.5 mb-5 border border-sage-border/60">
            <span className="text-xs font-semibold text-mountain-dark block mb-1">
              IDEAL FOR:
            </span>
            <p className="text-xs text-darktext font-medium">{vehicle.idealFor}</p>
          </div>

          {/* Key Features */}
          <div className="space-y-2 mb-6">
            {vehicle.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-darktext">
                <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Notice & Actions */}
      <div className="p-6 pt-0">
        <div className="p-3 rounded-2xl bg-cream-warm/70 border border-sage-border/80 text-center mb-4">
          <p className="text-xs font-bold uppercase tracking-wider text-forest-deep">
            CONTACT FOR VEHICLE OPTIONS AND PRICING
          </p>
          <p className="text-[11px] text-darktext-muted mt-0.5">
            {vehicle.startingRateNote}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-full text-xs font-semibold bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center gap-1.5 transition-all shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href={CONTACT_LINKS.phone}
            className="py-2.5 px-3 rounded-full text-xs font-semibold bg-forest hover:bg-forest-deep text-white flex items-center justify-center gap-1.5 transition-all shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call to Book</span>
          </a>
        </div>

        {onSelectVehicle && (
          <button
            type="button"
            onClick={() => onSelectVehicle(vehicle.categoryTag)}
            className="w-full mt-2 py-2 text-xs font-semibold text-forest hover:text-forest-deep hover:underline text-center"
          >
            Select in Booking Form &darr;
          </button>
        )}
      </div>
    </div>
  );
};

