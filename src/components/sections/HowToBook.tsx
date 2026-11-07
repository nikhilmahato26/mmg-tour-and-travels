import React from "react";
import { MapPin, FileText, Send, CheckCircle2 } from "lucide-react";
import { scrollToSection } from "@/utils/contact";

export const HowToBook: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: <MapPin className="w-6 h-6 text-mountain-teal" />,
      title: "Choose Your Destination",
      description: "Select Ooty or another preferred destination, sightseeing circuit, or outstation route.",
    },
    {
      step: "02",
      icon: <FileText className="w-6 h-6 text-mountain-teal" />,
      title: "Share Your Details",
      description: "Enter pickup location, travel dates, passenger count, and preferred vehicle type.",
    },
    {
      step: "03",
      icon: <Send className="w-6 h-6 text-mountain-teal" />,
      title: "Send Your Enquiry",
      description: "Contact MMG Tour and Travels through WhatsApp or direct phone call with your prefilled details.",
    },
    {
      step: "04",
      icon: <CheckCircle2 className="w-6 h-6 text-mountain-teal" />,
      title: "Confirm Your Journey",
      description: "Discuss vehicle availability, pricing, and applicable booking conditions directly with the team.",
    },
  ];

  return (
    <section id="how-to-book" className="py-20 bg-[#FAF8F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-light text-forest text-xs font-bold uppercase tracking-widest mb-3 border border-sage-border">
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-forest-deep tracking-tight mb-4">
            HOW TO BOOK YOUR TAXI
          </h2>
          <p className="text-darktext-muted text-base sm:text-lg leading-relaxed">
            From picking your favorite Nilgiri destinations to confirming your chauffeur, our enquiry process is smooth and direct.
          </p>
        </div>

        {/* Steps Grid: Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-sage-border shadow-soft relative flex flex-col justify-between group hover:shadow-hover transition-all duration-300"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-sage-light flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-serif font-black text-3xl text-sage-border group-hover:text-mountain-teal transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-forest-deep mb-2.5">
                  {item.title}
                </h3>
                <p className="text-darktext-muted text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-sage-border/50 text-[11px] font-semibold text-mountain-teal uppercase tracking-wider">
                Step {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => scrollToSection("booking")}
            className="px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-forest hover:bg-forest-deep text-white shadow-soft transition-all"
          >
            Start Your Enquiry Now &darr;
          </button>
        </div>
      </div>
    </section>
  );
};

