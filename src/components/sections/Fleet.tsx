import React from "react";
import { FLEET_CATEGORIES, VehicleCategory } from "@/data/fleet";
import { VehicleCard } from "@/components/ui/VehicleCard";
import { Car, CheckCircle2 } from "lucide-react";

interface FleetProps {
  onSelectVehicle?: (categoryTag: string) => void;
}

export const Fleet: React.FC<FleetProps> = ({ onSelectVehicle }) => {
  return (
    <section id="fleet" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-light text-forest text-xs font-bold uppercase tracking-widest mb-3 border border-sage-border">
            <Car className="w-3.5 h-3.5 text-mountain-teal" />
            <span>Vehicle Options</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-forest-deep tracking-tight mb-4">
            CHOOSE YOUR RIDE
          </h2>
          <p className="text-darktext-muted text-base sm:text-lg leading-relaxed">
            &ldquo;Contact MMG Tour and Travels to enquire about vehicle availability and suitable travel arrangements.&rdquo;
          </p>
        </div>

        {/* Fleet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLEET_CATEGORIES.map((vehicle: VehicleCategory) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onSelectVehicle={onSelectVehicle}
            />
          ))}
        </div>

        {/* Fleet Quality Commitments */}
        <div className="mt-16 bg-[#FAF8F1] rounded-3xl p-8 border border-sage-border">
          <h4 className="text-center font-serif font-bold text-xl text-forest-deep mb-6">
            The MMG Travel Standard in Ooty
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Experienced Hill Drivers",
                desc: "Drivers trained specifically for steep 36-hairpin Kalhatty and Coonoor ghats.",
              },
              {
                title: "Clean & Sanitized Cabs",
                desc: "Vehicles washed and vacuumed thoroughly before every fresh journey.",
              },
              {
                title: "RTO Maxi-Cab Permitted",
                desc: "Valid commercial tourist permits authorized by Tamil Nadu Transport Dept.",
              },
              {
                title: "Flexible Stops & Halts",
                desc: "Feel free to pause for tea tasting, roadside photos, and viewpoint vistas.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-sage-border/60 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-forest mb-2.5" />
                <h5 className="font-bold text-sm text-forest-deep mb-1">{item.title}</h5>
                <p className="text-xs text-darktext-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
