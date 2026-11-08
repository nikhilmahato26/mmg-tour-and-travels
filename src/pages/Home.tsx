import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Hero } from "@/components/sections/Hero";
import { ExperienceOotyBanner } from "@/components/sections/ExperienceOotyBanner";
import { BookingForm } from "@/components/sections/BookingForm";
import { TaxiServices } from "@/components/sections/TaxiServices";
import { Destinations } from "@/components/sections/Destinations";
import { NearbyDestinations } from "@/components/sections/NearbyDestinations";
import { TariffPricing } from "@/components/sections/TariffPricing";
import { Fleet } from "@/components/sections/Fleet";
import { Gallery } from "@/components/sections/Gallery";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowToBook } from "@/components/sections/HowToBook";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { scrollToSection } from "@/utils/contact";

export const Home: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<string>("");
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");

  const handleSelectDestinationForBooking = (destName: string) => {
    setSelectedDestination(destName);
    scrollToSection("booking");
  };

  const handleSelectVehicleForBooking = (vehicleCategory: string) => {
    setSelectedVehicle(vehicleCategory);
    scrollToSection("booking");
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setSelectedDestination(`${serviceTitle} in Ooty`);
    scrollToSection("booking");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F1] text-[#25352E]">
      {/* 1. Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 2.5 Experience Ooty Promotional Showcase */}
        <ExperienceOotyBanner />

        {/* 3. Quick Taxi Booking Form */}
        <BookingForm
          initialDestination={selectedDestination}
          initialVehicle={selectedVehicle}
        />

        {/* 4. Taxi Services */}
        <TaxiServices onSelectService={handleSelectServiceForBooking} />

        {/* 5. Explore Ooty Destination Showcase */}
        <Destinations onSelectForBooking={handleSelectDestinationForBooking} />

        {/* 6. Nearby Destinations */}
        <NearbyDestinations onSelectForBooking={handleSelectDestinationForBooking} />

        {/* 7. Tariff & Real Rate Packages */}
        <TariffPricing onSelectTariff={handleSelectDestinationForBooking} />

        {/* 8. Vehicle Showcase */}
        <Fleet onSelectVehicle={handleSelectVehicleForBooking} />

        {/* 9. Travel Photo Gallery */}
        <Gallery />

        {/* 10. Why Choose Us */}
        <WhyChooseUs />

        {/* 11. How to Book */}
        <HowToBook />

        {/* 12. About Us */}
        <About />

        {/* 13. Contact and Location */}
        <Contact />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. Floating Desktop WhatsApp Button */}
      <WhatsAppButton />

      {/* 16. Mobile Sticky Action Bar */}
      <MobileActionBar />
    </div>
  );
};

