import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { BUSINESS_CONFIG } from "@/config/business";
import { generateBookingWhatsAppUrl } from "@/utils/whatsapp";
import { Calendar, Phone, MapPin, Users, Car, CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";

const bookingSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Please enter your full name (at least 2 characters)" }),
  phone: z
    .string()
    .min(10, { message: "Please enter a valid 10-digit mobile number" })
    .regex(/^[0-9+\s-]{10,15}$/, { message: "Please enter a valid phone number" }),
  pickupLocation: z
    .string()
    .min(2, { message: "Please enter your pickup location" }),
  destination: z
    .string()
    .min(2, { message: "Please enter your destination or sightseeing plan" }),
  travelDate: z
    .string()
    .min(1, { message: "Please select your travel date" }),
  returnDate: z.string().optional(),
  passengers: z
    .string()
    .min(1, { message: "Please select number of passengers" }),
  preferredVehicle: z.string().optional(),
  requirements: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  initialDestination?: string;
  initialVehicle?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialDestination = "",
  initialVehicle = "",
}) => {
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      pickupLocation: "",
      destination: initialDestination,
      travelDate: "",
      returnDate: "",
      passengers: "1-4 Passengers",
      preferredVehicle: initialVehicle || "Car 4+1 Seater",
      requirements: "",
    },
  });

  // Watch for external updates to destination or vehicle props
  React.useEffect(() => {
    if (initialDestination) {
      setValue("destination", initialDestination);
    }
  }, [initialDestination, setValue]);

  React.useEffect(() => {
    if (initialVehicle) {
      setValue("preferredVehicle", initialVehicle);
    }
  }, [initialVehicle, setValue]);

  const onSubmit = (data: BookingFormData) => {
    const url = generateBookingWhatsAppUrl({
      name: data.fullName,
      phone: data.phone,
      pickup: data.pickupLocation,
      destination: data.destination,
      travelDate: data.travelDate,
      returnDate: data.returnDate,
      passengers: data.passengers,
      vehicle: data.preferredVehicle,
      requirements: data.requirements,
    });

    setSubmittedMessage(
      "Your enquiry has been prepared! Opening WhatsApp to send your details directly to MMG Tour and Travels for pricing and confirmation."
    );

    // Open WhatsApp in a new tab
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking" className="py-16 lg:py-24 bg-[#FAF8F1] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-light text-forest text-xs font-bold uppercase tracking-widest mb-3 border border-sage-border">
            <span>Direct WhatsApp Enquiry System</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-forest-deep tracking-tight mb-4">
            PLAN YOUR OOTY JOURNEY
          </h2>
          <p className="text-darktext-muted text-sm sm:text-base leading-relaxed">
            Fill in your travel preferences below to generate an instant enquiry. Discuss vehicle availability, custom stops, and final pricing directly with MMG Tour and Travels.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-sage-border relative overflow-hidden">
          {/* Subtle Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-forest to-mountain-teal" />

          {submittedMessage && (
            <div className="mb-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-bold">Enquiry Ready & Opened in WhatsApp!</p>
                <p className="text-xs text-emerald-800 mt-1">{submittedMessage}</p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedMessage(null);
                    reset();
                  }}
                  className="mt-2 text-xs font-semibold text-emerald-700 underline"
                >
                  Submit another enquiry
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Anand Kumar"
                    {...register("fullName")}
                    className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-darktext bg-cream-light focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? "border-red-400 focus:ring-red-300"
                        : "border-sage-border focus:border-forest focus:ring-forest/20"
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-2">
                  Mobile Number (WhatsApp) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="e.g. 9626599899"
                    {...register("phone")}
                    className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-darktext bg-cream-light focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? "border-red-400 focus:ring-red-300"
                        : "border-sage-border focus:border-forest focus:ring-forest/20"
                    }`}
                  />
                  <Phone className="w-4 h-4 text-darktext-soft absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Pickup Location */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-2">
                  Pickup Location <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Ooty Bus Stand / Hotel Name / Coimbatore"
                    {...register("pickupLocation")}
                    className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-darktext bg-cream-light focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.pickupLocation
                        ? "border-red-400 focus:ring-red-300"
                        : "border-sage-border focus:border-forest focus:ring-forest/20"
                    }`}
                  />
                  <MapPin className="w-4 h-4 text-darktext-soft absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                {errors.pickupLocation && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.pickupLocation.message}
                  </p>
                )}
              </div>

              {/* Destination */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-2">
                  Destination or Sightseeing Plan <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Ooty 10-Spot Sightseeing / Pykara / Coonoor"
                    {...register("destination")}
                    className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-darktext bg-cream-light focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.destination
                        ? "border-red-400 focus:ring-red-300"
                        : "border-sage-border focus:border-forest focus:ring-forest/20"
                    }`}
                  />
                </div>
                {errors.destination && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.destination.message}
                  </p>
                )}
              </div>

              {/* Travel Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-2">
                  Travel Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    {...register("travelDate")}
                    className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-darktext bg-cream-light focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.travelDate
                        ? "border-red-400 focus:ring-red-300"
                        : "border-sage-border focus:border-forest focus:ring-forest/20"
                    }`}
                  />
                  <Calendar className="w-4 h-4 text-darktext-soft absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                {errors.travelDate && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.travelDate.message}
                  </p>
                )}
              </div>

              {/* Return Date (Optional) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-2">
                  Return Date <span className="text-darktext-soft font-normal text-[11px]">(Optional)</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    {...register("returnDate")}
                    className="w-full px-4 py-3.5 rounded-2xl border border-sage-border text-sm text-darktext bg-cream-light focus:bg-white focus:border-forest focus:ring-2 focus:ring-forest/20 focus:outline-none transition-all"
                  />
                  <Calendar className="w-4 h-4 text-darktext-soft absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Number of Passengers */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-2">
                  Number of Passengers <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    {...register("passengers")}
                    className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-darktext bg-cream-light focus:bg-white focus:outline-none focus:ring-2 transition-all appearance-none ${
                      errors.passengers
                        ? "border-red-400 focus:ring-red-300"
                        : "border-sage-border focus:border-forest focus:ring-forest/20"
                    }`}
                  >
                    <option value="1-4 Passengers">1 - 4 Passengers (Car / Sedan)</option>
                    <option value="5-7 Passengers">5 - 7 Passengers (SUV)</option>
                    <option value="8-14 Passengers">8 - 14 Passengers (Tempo Traveller)</option>
                    <option value="15+ Group">15+ Group (Multiple Vehicles)</option>
                  </select>
                  <Users className="w-4 h-4 text-darktext-soft absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Preferred Vehicle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-2">
                  Preferred Vehicle Category <span className="text-darktext-soft font-normal text-[11px]">(Optional)</span>
                </label>
                <div className="relative">
                  <select
                    {...register("preferredVehicle")}
                    className="w-full px-4 py-3.5 rounded-2xl border border-sage-border text-sm text-darktext bg-cream-light focus:bg-white focus:border-forest focus:ring-2 focus:ring-forest/20 focus:outline-none transition-all appearance-none"
                  >
                    <option value="Car 4+1 Seater">Car 4+1 Seater (Sedan / Hatchback)</option>
                    <option value="SUV 7+1 Seater">SUV 7+1 Seater (Family Multi-Utility)</option>
                    <option value="Tempo 14+1 Seater">Tempo 14+1 Seater (Force Maxi-Cab)</option>
                    <option value="Suggest Best Option">Discuss & Suggest Best Option with MMG</option>
                  </select>
                  <Car className="w-4 h-4 text-darktext-soft absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Additional Requirements */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-2">
                Additional Requirements / Specific Timings <span className="text-darktext-soft font-normal text-[11px]">(Optional)</span>
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Need early morning 6 AM pickup, elderly passenger assistance, toy train connection, luggage details..."
                {...register("requirements")}
                className="w-full px-4 py-3 rounded-2xl border border-sage-border text-sm text-darktext bg-cream-light focus:bg-white focus:border-forest focus:ring-2 focus:ring-forest/20 focus:outline-none transition-all resize-y"
              />
            </div>

            {/* Booking Confirmation Notice */}
            <div className="p-4 rounded-2xl bg-sage-light/60 border border-sage-border/80 text-xs text-darktext-muted flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-mountain-teal flex-shrink-0 mt-0.5" />
              <p>
                <strong>Important Note:</strong> Submitting this form generates a structured WhatsApp message to MMG Tour and Travels. All bookings require manual confirmation, advance payment verification, and driver schedule assignment by the business.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 rounded-full text-base font-bold tracking-wider uppercase bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-soft hover:shadow-hover transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>REQUEST A TAXI VIA WHATSAPP</span>
              </button>
            </div>
          </form>

          {/* Quick Help Link */}
          <div className="mt-6 text-center text-xs text-darktext-muted">
            Prefer direct phone call?{" "}
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="text-forest font-bold underline hover:text-mountain-teal"
            >
              Call {BUSINESS_CONFIG.phone}
            </a>{" "}
            for instant enquiry assistance.
          </div>
        </div>
      </div>
    </section>
  );
};

