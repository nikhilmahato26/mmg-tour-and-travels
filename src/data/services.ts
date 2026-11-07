export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  highlights: string[];
  ctaText: string;
}

export const TAXI_SERVICES: ServiceItem[] = [
  {
    id: "local-taxi",
    title: "Local Taxi Services",
    shortDescription: "Enquire about taxi arrangements for local travel around Ooty.",
    fullDescription: "Punctual, friendly, and hassle-free taxi service for your day-to-day shopping, local transfers, hotel pickups, and short trips in and around Ooty town.",
    iconName: "MapPin",
    highlights: ["Ooty Town Trips", "Hotel & Resort Pickups", "Flexible Hourly Hire"],
    ctaText: "Enquire Local Taxi",
  },
  {
    id: "sightseeing-travel",
    title: "Sightseeing Travel",
    shortDescription: "Explore taxi arrangements for visiting popular attractions around Ooty.",
    fullDescription: "Customized sightseeing circuits covering Ooty Lake, Doddabetta Peak, Botanical Garden, Tea Factories, and famous viewpoints with knowledgeable local drivers.",
    iconName: "Compass",
    highlights: ["Full-day & Half-day Circuits", "Famous Viewpoints", "Driver Tour Knowledge"],
    ctaText: "Enquire Sightseeing",
  },
  {
    id: "outstation-taxi",
    title: "Outstation Taxi",
    shortDescription: "Enquire about transportation from Ooty to other destinations.",
    fullDescription: "Reliable outstation cab services connecting Ooty with Coimbatore, Mettupalayam, Mysore, Bangalore, Isha Yoga Centre, and all major cities in Tamil Nadu & Karnataka.",
    iconName: "Navigation",
    highlights: ["Airport & Railway Transfers", "Interstate Travel", "Experienced Hill Drivers"],
    ctaText: "Enquire Outstation",
  },
  {
    id: "family-travel",
    title: "Family Travel",
    shortDescription: "Discuss suitable vehicle arrangements for family journeys.",
    fullDescription: "Comfortable, spacious 7+1 SUVs and clean sedans offering safe rides, relaxed driving speeds, and tailored halts for kids and elderly family members.",
    iconName: "Users",
    highlights: ["Spacious Seating", "Child & Senior Friendly", "Clean Sanitized Vehicles"],
    ctaText: "Enquire Family Cab",
  },
  {
    id: "group-travel",
    title: "Group Travel",
    shortDescription: "Contact us for vehicle options based on your group size.",
    fullDescription: "Ideal group travel options including 14+1 Force Tempo Travellers equipped with push-back seats, ample luggage carriers, and mountain-certified drivers.",
    iconName: "Bus",
    highlights: ["14+1 Tempo Travellers", "Generous Luggage Space", "Group Sightseeing"],
    ctaText: "Enquire Group Travel",
  },
  {
    id: "customized-travel",
    title: "Customized Travel",
    shortDescription: "Share your travel requirements and preferred destinations.",
    fullDescription: "Design your personalized Nilgiris itinerary. Choose your own pick-up time, multiple destination halts, photography stops, and flexible return schedules.",
    iconName: "Sliders",
    highlights: ["Flexible Timings", "Multi-Destination Routes", "Personalized Itineraries"],
    ctaText: "Enquire Custom Trip",
  },
  {
    id: "airport-railway-transfer",
    title: "Airport & Railway Transfers",
    shortDescription: "Dedicated pickup and drop services to Coimbatore, Mettupalayam & Mysore.",
    fullDescription: "Never miss a flight or train. Reliable, punctual airport transfers to Coimbatore Airport (CJB) and railway pickups at Mettupalayam or Coimbatore stations.",
    iconName: "Plane",
    highlights: ["Flight Tracking", "24x7 Scheduled Pickups", "Direct Ghat Road Transfers"],
    ctaText: "Enquire Transfers",
  },
];

