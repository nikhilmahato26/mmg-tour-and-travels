import React from "react";
import { MapPin, PhoneCall, Compass, SlidersHorizontal, ShieldCheck } from "lucide-react";
import { scrollToSection } from "@/utils/contact";

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <MapPin className="w-7 h-7 text-mountain-teal" />,
      title: "Ooty-Based Travel Service",
      description: "A business located in Ooty for local taxi enquiries, offering authentic local guidance and route knowledge.",
    },
    {
      icon: <PhoneCall className="w-7 h-7 text-mountain-teal" />,
      title: "Convenient Enquiries",
      description: "Contact the business directly to discuss your journey, clarify timings, and receive quick personalized responses.",
    },
    {
      icon: <Compass className="w-7 h-7 text-mountain-teal" />,
      title: "Destination Travel",
      description: "Explore Ooty and nearby destinations including Coonoor, Kotagiri, Pykara, Avalanche, and Mudumalai with ease.",
    },
    {
      icon: <SlidersHorizontal className="w-7 h-7 text-mountain-teal" />,
      title: "Flexible Travel Requirements",
      description: "Share your preferred pickup, destination, and travel dates for customized vehicle options matching your schedule.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-light text-forest text-xs font-bold uppercase tracking-widest mb-3 border border-sage-border">
            <ShieldCheck className="w-3.5 h-3.5 text-mountain-teal" />
            <span>Why Travel With Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-forest-deep tracking-tight mb-4">
            WHY CHOOSE MMG TOUR AND TRAVELS?
          </h2>
          <p className="text-darktext-muted text-base sm:text-lg leading-relaxed">
            Dedicated to genuine hill station hospitality, responsive customer communication, and reliable local travel arrangements across the Nilgiris.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F1] rounded-3xl p-8 border border-sage-border/80 hover:border-forest/40 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-sage-border flex items-center justify-center mb-6 shadow-xs group-hover:bg-forest group-hover:text-white transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-forest-deep mb-3">
                  {pillar.title}
                </h3>
                <p className="text-darktext-muted text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-16 bg-forest text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif font-bold text-2xl text-cream">
              Ready to explore Ooty with local taxi support?
            </h3>
            <p className="text-cream/80 text-sm">
              Reach out directly to arrange your vehicle and discuss your itinerary.
            </p>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("booking")}
            className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-forest-deep hover:bg-cream-warm transition-all duration-200 shadow-md hover:-translate-y-0.5 flex-shrink-0"
          >
            Request a Taxi Enquiry
          </button>
        </div>
      </div>
    </section>
  );
};

