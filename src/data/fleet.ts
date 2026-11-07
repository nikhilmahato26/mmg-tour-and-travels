import sedanImg from "@/assets/images/fleet/mmg-sedan-cab.jpeg";
import tempoImg from "@/assets/images/fleet/mmg-tempo-traveller-1.jpeg";
import scenicCabsImg from "@/assets/images/fleet/mmg-scenic-cabs.jpeg";

export interface VehicleCategory {
  id: string;
  name: string;
  categoryTag: string;
  seatingCapacity: string;
  luggageCapacity: string;
  idealFor: string;
  description: string;
  image: string;
  features: string[];
  startingRateNote: string;
}

export const FLEET_CATEGORIES: VehicleCategory[] = [
  {
    id: "car-sedan",
    name: "Standard Sedan / Hatchback",
    categoryTag: "Car 4+1 Seater",
    seatingCapacity: "4 Passengers + 1 Driver",
    luggageCapacity: "2 Large Bags + Small Backpacks",
    idealFor: "Couples, solo travelers, and small families",
    description: "Compact and agile for navigating narrow mountain curves, scenic town routes, and sightseeing hotspots with ease and fuel-efficient comfort.",
    image: sedanImg,
    features: [
      "AC / Non-AC Hill Mode",
      "Comfortable Cushion Seating",
      "Clean & Sanitized Interiors",
      "Expert Hill Station Chauffeur",
      "USB Mobile Charging Port",
    ],
    startingRateNote: "Sightseeing starts from ₹2,000 / day",
  },
  {
    id: "suv-family",
    name: "Spacious Multi-Utility SUV",
    categoryTag: "SUV 7+1 Seater",
    seatingCapacity: "6 to 7 Passengers + 1 Driver",
    luggageCapacity: "3-4 Large Bags + Overhead Space",
    idealFor: "Medium families, luggage-heavy airport transfers, and ghat road trips",
    description: "Generous legroom, high ground clearance, and robust power for steep hairpin bends such as Kalhatty ghat, Coonoor ghat, and Pykara hills.",
    image: scenicCabsImg,
    features: [
      "High Ground Clearance for Ghats",
      "Spacious Reclining Seats",
      "Dual AC Vents",
      "Generous Luggage Boot",
      "Smooth Suspension on Curves",
    ],
    startingRateNote: "Sightseeing starts from ₹3,000 / day",
  },
  {
    id: "tempo-traveller",
    name: "Force Tempo Traveller / Maxi Cab",
    categoryTag: "Tempo 14+1 Seater",
    seatingCapacity: "12 to 14 Passengers + 1 Driver",
    luggageCapacity: "Dedicated Heavy Luggage Carrier",
    idealFor: "Corporate outings, student groups, wedding parties & large family tours",
    description: "Government RTO Maxi-Cab permitted tourist vehicle with wide panoramic windows, push-back reclining seats, and full audio/mic entertainment system.",
    image: tempoImg,
    features: [
      "Push-back Luxury Reclining Seats",
      "Wide Panoramic Sightseeing Windows",
      "Top Roof Luggage Carrier",
      "Music System & Mic Guide Support",
      "Government Tourist Maxi Cab Permit",
    ],
    startingRateNote: "Sightseeing starts from ₹4,000 / day",
  },
];

