import React, { useState } from "react";
import { HOURLY_PACKAGES, ROUTE_TARIFFS, HourlyPackage, RouteTariff } from "@/data/tariffs";
import { BUSINESS_CONFIG } from "@/config/business";
import { MessageCircle, Check, Phone, ShieldCheck, AlertCircle, Info } from "lucide-react";
import { generateTariffEnquiryUrl } from "@/utils/whatsapp";

interface TariffPricingProps {
  onSelectTariff?: (routeName: string) => void;
}

export const TariffPricing: React.FC<TariffPricingProps> = ({ onSelectTariff }) => {
  const [activeCategory, setActiveCategory] = useState<"Hourly" | "Sightseeing" | "Combined Tour" | "Airport & Outstation">("Hourly");

  const filteredRoutes = ROUTE_TARIFFS.filter((r) => r.category === activeCategory);

  return (
    <section id="tariff" className="py-20 bg-[#FAF8F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-light text-forest text-xs font-bold uppercase tracking-widest mb-3 border border-sage-border">
            <span>Transparent Pricing Guidelines</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-forest-deep tracking-tight mb-4">
            TAXI TARIFF & TOUR PACKAGES
          </h2>
          <p className="text-darktext-muted text-base sm:text-lg leading-relaxed">
            Honest, competitive rates for local sightseeing, hourly hires, and outstation drops. Special discounts offered on advance bookings.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(["Hourly", "Sightseeing", "Combined Tour", "Airport & Outstation"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveCategory(tab)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === tab
                  ? "bg-forest text-white shadow-md scale-105"
                  : "bg-white text-darktext hover:bg-sage-light border border-sage-border shadow-2xs"
              }`}
            >
              {tab === "Hourly" ? "Local Hourly / Km Packages" : tab}
            </button>
          ))}
        </div>

        {/* Content View: Hourly Packages */}
        {activeCategory === "Hourly" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {HOURLY_PACKAGES.map((pkg: HourlyPackage) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between shadow-soft hover:shadow-hover relative ${
                  pkg.popular ? "border-mountain-teal ring-2 ring-mountain-teal/30" : "border-sage-border"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mountain-teal text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="text-center pb-4 mb-4 border-b border-sage-border/60">
                    <h3 className="font-serif font-bold text-lg text-forest-deep">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-mountain-teal font-semibold mt-1">
                      {pkg.duration} • {pkg.kmLimit}
                    </p>
                  </div>

                  {/* Vehicle Rates breakdown */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-sage-subtle">
                      <span className="text-xs font-semibold text-darktext">Car (4+1):</span>
                      <span className="text-base font-bold text-forest-deep">₹{pkg.carPrice.toLocaleString()}</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-sage-subtle">
                      <span className="text-xs font-semibold text-darktext">SUV (7+1):</span>
                      <span className="text-base font-bold text-forest-deep">₹{pkg.suvPrice.toLocaleString()}</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-sage-subtle">
                      <span className="text-xs font-semibold text-darktext">Tempo (14+1):</span>
                      <span className="text-base font-bold text-forest-deep">₹{pkg.tempoPrice.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-darktext-soft space-y-1 mb-6 text-center">
                    <p>Extra Hour Charges:</p>
                    <p className="font-medium text-darktext-muted">
                      Car: ₹{pkg.extraHourCar}/hr | SUV: ₹{pkg.extraHourSuv}/hr | Tempo: ₹{pkg.extraHourTempo}/hr
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-sage-border/60">
                  <a
                    href={generateTariffEnquiryUrl(pkg.name, "Hourly Hire", `₹${pkg.carPrice} (Car) / ₹${pkg.suvPrice} (SUV)`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-full text-xs font-bold bg-forest hover:bg-forest-deep text-white flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire This Plan</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content View: Route & Sightseeing Table */}
        {activeCategory !== "Hourly" && (
          <div className="bg-white rounded-3xl overflow-hidden border border-sage-border shadow-card mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-forest-deep text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-bold">Route / Tour Itinerary</th>
                    <th className="py-4 px-6 font-bold text-center">Sedan / Car (4+1)</th>
                    <th className="py-4 px-6 font-bold text-center">SUV (7+1)</th>
                    <th className="py-4 px-6 font-bold text-center">Tempo (14+1)</th>
                    <th className="py-4 px-6 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sage-border/70 text-xs sm:text-sm">
                  {filteredRoutes.map((route: RouteTariff) => (
                    <tr key={route.id} className="hover:bg-sage-subtle/60 transition-colors">
                      <td className="py-4 px-6">
                        <p className="font-bold text-forest-deep">{route.route}</p>
                        <p className="text-xs text-darktext-muted mt-0.5">{route.description}</p>
                      </td>
                      <td className="py-4 px-6 text-center font-bold text-forest-deep whitespace-nowrap">
                        {route.carPrice}
                      </td>
                      <td className="py-4 px-6 text-center font-bold text-mountain-dark whitespace-nowrap">
                        {route.suvPrice}
                      </td>
                      <td className="py-4 px-6 text-center font-bold text-forest whitespace-nowrap">
                        {route.tempoPrice}
                      </td>
                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        <a
                          href={generateTariffEnquiryUrl(route.route, "Sedan/SUV/Tempo", route.carPrice)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xs"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white" />
                          <span>Enquire</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Real Terms & Conditions from client image */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sage-border shadow-soft">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-sage-border">
            <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center text-forest flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-forest-deep">
                Important Booking Terms & Conditions
              </h3>
              <p className="text-xs text-darktext-muted">
                Transparent operating policies for a safe and hassle-free mountain journey
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BUSINESS_CONFIG.terms.map((term, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-darktext">
                <span className="w-5 h-5 rounded-full bg-sage-light text-forest font-bold flex items-center justify-center flex-shrink-0 text-[11px] mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{term}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-cream-warm border border-sage-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-darktext-muted">
              <Info className="w-4 h-4 text-mountain-teal flex-shrink-0" />
              <span>
                Tariff may fluctuate slightly with daily diesel rates. Please call for today&apos;s exact live quote.
              </span>
            </div>
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="px-4 py-2 rounded-full font-bold bg-forest text-white hover:bg-forest-deep transition-all flex items-center gap-1.5 flex-shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +91 9626599899</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

