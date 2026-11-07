export interface HourlyPackage {
  id: string;
  name: string;
  duration: string;
  kmLimit: string;
  carPrice: number;
  suvPrice: number;
  tempoPrice: number;
  extraHourCar: number;
  extraHourSuv: number;
  extraHourTempo: number;
  popular?: boolean;
}

export interface RouteTariff {
  id: string;
  route: string;
  category: "Sightseeing" | "Combined Tour" | "Airport & Outstation";
  carPrice: string;
  suvPrice: string;
  tempoPrice: string;
  description: string;
}

export const HOURLY_PACKAGES: HourlyPackage[] = [
  {
    id: "half-day-4h",
    name: "Ooty Half Day Tour",
    duration: "4 Hours",
    kmLimit: "40 km limit",
    carPrice: 1600,
    suvPrice: 2100,
    tempoPrice: 3000,
    extraHourCar: 200,
    extraHourSuv: 300,
    extraHourTempo: 500,
  },
  {
    id: "standard-day-8h",
    name: "Ooty Standard Day Tour",
    duration: "8 Hours",
    kmLimit: "80 km limit",
    carPrice: 2300,
    suvPrice: 3000,
    tempoPrice: 4000,
    extraHourCar: 200,
    extraHourSuv: 300,
    extraHourTempo: 500,
    popular: true,
  },
  {
    id: "full-day-12h",
    name: "Ooty Full Day Sightseeing",
    duration: "12 Hours (8 AM - 8 PM)",
    kmLimit: "120 km limit",
    carPrice: 3000,
    suvPrice: 4000,
    tempoPrice: 5500,
    extraHourCar: 200,
    extraHourSuv: 300,
    extraHourTempo: 500,
    popular: true,
  },
  {
    id: "round-trip-250k",
    name: "Nilgiris Round Trip Plan",
    duration: "Per Day",
    kmLimit: "250 km limit",
    carPrice: 4000,
    suvPrice: 5500,
    tempoPrice: 7000,
    extraHourCar: 250,
    extraHourSuv: 350,
    extraHourTempo: 600,
  },
];

export const ROUTE_TARIFFS: RouteTariff[] = [
  // Sightseeing
  {
    id: "ooty-ss",
    route: "Ooty Sightseeing (Full Day 10 Spots)",
    category: "Sightseeing",
    carPrice: "₹2,000 - ₹2,300",
    suvPrice: "₹3,000",
    tempoPrice: "₹4,000",
    description: "Covers Doddabetta, Botanical Garden, Tea Factory, Ooty Lake, Rose Garden & shopping.",
  },
  {
    id: "coonoor-ss",
    route: "Coonoor Sightseeing (Full Day)",
    category: "Sightseeing",
    carPrice: "₹2,500 - ₹2,800",
    suvPrice: "₹3,500",
    tempoPrice: "₹5,000",
    description: "Sim's Park, Dolphin's Nose, Lamb's Rock, Valley View, MRC and rolling tea plantations.",
  },
  {
    id: "pykara-ss",
    route: "Pykara Sightseeing (Full Day)",
    category: "Sightseeing",
    carPrice: "₹2,500 - ₹2,800",
    suvPrice: "₹3,500",
    tempoPrice: "₹5,000",
    description: "Pykara Waterfalls, Pykara Lake boathouse, Pine Forest, 9th Mile and Kamaraj Sagar Dam.",
  },
  {
    id: "kotagiri-ss",
    route: "Kotagiri Sightseeing (Full Day)",
    category: "Sightseeing",
    carPrice: "₹3,000",
    suvPrice: "₹3,800",
    tempoPrice: "₹5,200",
    description: "Catherine Waterfalls, Kodanad viewpoint, peaceful tea estates and green valleys.",
  },
  {
    id: "avalanche-ss",
    route: "Avalanche Sightseeing (Full Day)",
    category: "Sightseeing",
    carPrice: "₹2,500 - ₹2,800",
    suvPrice: "₹3,500",
    tempoPrice: "₹5,000",
    description: "Pristine Avalanche biosphere sanctuary lake, trout streams and shola forest roads.",
  },
  {
    id: "mudumalai-ss",
    route: "Mudumalai Tiger Reserve & Ghat Safari",
    category: "Sightseeing",
    carPrice: "₹3,000",
    suvPrice: "₹4,000",
    tempoPrice: "₹6,000",
    description: "Descent through 36 hairpin bends, Theppakadu elephant camp and jungle safari corridor.",
  },

  // Combined Tours
  {
    id: "ooty-coonoor-comb",
    route: "Ooty & Coonoor Combined Circuit",
    category: "Combined Tour",
    carPrice: "₹3,200 - ₹3,500",
    suvPrice: "₹4,000",
    tempoPrice: "₹5,500",
    description: "Complete twin-hill tour covering the best of both Ooty and Coonoor in one day.",
  },
  {
    id: "pykara-mudumalai-comb",
    route: "Pykara & Mudumalai Combined Safari",
    category: "Combined Tour",
    carPrice: "₹3,500",
    suvPrice: "₹4,500",
    tempoPrice: "₹6,500",
    description: "Combines 9th Mile shooting point, Pykara lakes, falls with Mudumalai wildlife sanctuary.",
  },
  {
    id: "avalanche-ooty-comb",
    route: "Avalanche & Ooty Combined Tour",
    category: "Combined Tour",
    carPrice: "₹3,500",
    suvPrice: "₹4,500",
    tempoPrice: "₹6,500",
    description: "Pristine Avalanche reserve tour combined with Ooty's key highlights.",
  },

  // Airport & Outstation
  {
    id: "mettupalayam-transfer",
    route: "Mettupalayam Railway Station Pickup / Drop",
    category: "Airport & Outstation",
    carPrice: "₹2,000 - ₹2,500",
    suvPrice: "₹3,000",
    tempoPrice: "₹5,000",
    description: "Direct mountain ghat transfer connecting Ooty with the Nilgiri Mountain Express at MTP.",
  },
  {
    id: "coimbatore-transfer",
    route: "Coimbatore City / Railway Station Pickup / Drop",
    category: "Airport & Outstation",
    carPrice: "₹3,000 - ₹3,500",
    suvPrice: "₹4,500",
    tempoPrice: "₹7,000",
    description: "Convenient doorstep transfers between Coimbatore Junction / city and your Ooty hotel.",
  },
  {
    id: "coimbatore-airport",
    route: "Coimbatore International Airport (CJB) Transfer",
    category: "Airport & Outstation",
    carPrice: "₹3,500 - ₹3,800",
    suvPrice: "₹4,800",
    tempoPrice: "₹7,500",
    description: "Punctual flight-friendly transfers with flight tracking and comfortable ghat descent.",
  },
  {
    id: "isha-coimbatore-rail",
    route: "Isha Yoga Centre & Coimbatore Railway Drop",
    category: "Airport & Outstation",
    carPrice: "₹4,500",
    suvPrice: "₹6,000",
    tempoPrice: "₹9,500",
    description: "Scenic journey from Ooty to Adiyogi / Isha Yoga Centre and Coimbatore Railway Station.",
  },
  {
    id: "isha-airport-drop",
    route: "Isha Yoga Centre & Coimbatore Airport Drop",
    category: "Airport & Outstation",
    carPrice: "₹4,800 - ₹5,000",
    suvPrice: "₹6,000",
    tempoPrice: "₹9,500",
    description: "Full tour connecting Ooty, Isha Yoga / Dhyanalinga, and onward Coimbatore airport drop.",
  },
  {
    id: "mysore-transfer",
    route: "Mysore City / Palace / Railway Drop / Pickup",
    category: "Airport & Outstation",
    carPrice: "₹5,000",
    suvPrice: "₹8,000",
    tempoPrice: "₹15,000",
    description: "Scenic outstation route via Bandipur Tiger Reserve & Mudumalai forest corridor to Mysore.",
  },
  {
    id: "bangalore-transfer",
    route: "Bangalore (Bengaluru) City / Airport Drop / Pickup",
    category: "Airport & Outstation",
    carPrice: "₹10,000",
    suvPrice: "₹16,000",
    tempoPrice: "₹22,000",
    description: "Direct long-distance inter-state travel from Ooty to Bangalore via Mysore expressway.",
  },
];

