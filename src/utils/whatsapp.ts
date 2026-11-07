import { BUSINESS_CONFIG } from "@/config/business";

export interface BookingDetails {
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  travelDate: string;
  returnDate?: string;
  passengers: number | string;
  vehicle?: string;
  requirements?: string;
}

export function generateGeneralEnquiryUrl(): string {
  const text = `Hello MMG Tour and Travels, I would like to enquire about your taxi services in Ooty. Please share vehicle availability and booking details.`;
  return `https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

export function generateDestinationEnquiryUrl(destinationName: string): string {
  const text = `Hello MMG Tour and Travels, I would like to enquire about taxi arrangements for visiting ${destinationName}. Please share availability and travel details.\n\nThank you!`;
  return `https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

export function generateVehicleEnquiryUrl(vehicleName: string): string {
  const text = `Hello MMG Tour and Travels, I would like to enquire about ${vehicleName} taxi availability in Ooty. Please share tariff and booking details.\n\nThank you!`;
  return `https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

export function generateTariffEnquiryUrl(routeTitle: string, vehicleType?: string, estimatedPrice?: string): string {
  const text = `Hello MMG Tour and Travels,

I am interested in your taxi package:
Route: ${routeTitle}${vehicleType ? `\nVehicle: ${vehicleType}` : ""}${estimatedPrice ? `\nTariff: ${estimatedPrice}` : ""}

Please share current availability and confirm booking details.

Thank you!`;
  return `https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

export function generateBookingWhatsAppUrl(details: BookingDetails): string {
  const lines = [
    `Hello MMG Tour and Travels,`,
    ``,
    `I would like to enquire about a taxi booking.`,
    ``,
    `*Name:* ${details.name.trim()}`,
    `*Phone:* ${details.phone.trim()}`,
    `*Pickup Location:* ${details.pickup.trim()}`,
    `*Destination:* ${details.destination.trim()}`,
    `*Travel Date:* ${details.travelDate.trim()}`,
  ];

  if (details.returnDate && details.returnDate.trim()) {
    lines.push(`*Return Date:* ${details.returnDate.trim()}`);
  }

  lines.push(`*Number of Passengers:* ${details.passengers}`);

  if (details.vehicle && details.vehicle.trim()) {
    lines.push(`*Preferred Vehicle:* ${details.vehicle.trim()}`);
  }

  if (details.requirements && details.requirements.trim()) {
    lines.push(`*Additional Requirements:* ${details.requirements.trim()}`);
  }

  lines.push(``);
  lines.push(`Please share availability and pricing.`);
  lines.push(``);
  lines.push(`Thank you.`);

  return `https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(lines.join("\n"))}`;
}

