import ootyLakeImg from "@/assets/images/destinations/ooty-lake.jpg";
import botanicalGardenImg from "@/assets/images/destinations/botanical-garden.jpg";
import doddabettaImg from "@/assets/images/destinations/doddabetta-peak.jpg";
import pykaraLakeImg from "@/assets/images/destinations/pykara-lake.jpg";
import pykaraWaterfallsImg from "@/assets/images/destinations/pykara-waterfalls.jpg";
import teaGardensImg from "@/assets/images/destinations/tea-gardens.jpg";
import roseGardenImg from "@/assets/images/destinations/rose-garden.jpg";
import pineForestImg from "@/assets/images/destinations/pine-forest.jpg";
import shootingPointImg from "@/assets/images/destinations/shooting-point.jpg";
import avalancheLakeImg from "@/assets/images/destinations/avalanche-lake.jpg";
import toyTrainImg from "@/assets/images/destinations/nilgiri-toy-train.jpg";
import mudumalaiImg from "@/assets/images/destinations/mudumalai-safari.jpg";

import coonoorImg from "@/assets/images/destinations/coonoor-hills.jpg";
import kotagiriImg from "@/assets/images/destinations/kotagiri-valley.jpg";
import gudalurImg from "@/assets/images/destinations/gudalur-mist.jpg";

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  distanceFromTown: string;
  bestTime: string;
  tags: string[];
}

export const OOTY_DESTINATIONS: Destination[] = [
  {
    id: "ooty-lake",
    name: "Ooty Lake & Boat House",
    tagline: "Serene Waters & Boating Pleasures",
    description: "An iconic artificial lake established in 1824, nestled amidst tall eucalyptus trees. Enjoy motor boating, paddle boating, lakeside cycling, and the mini train ride.",
    image: ootyLakeImg,
    distanceFromTown: "1.5 km from Ooty Bus Stand",
    bestTime: "Morning & Afternoon",
    tags: ["Boating", "Scenic", "Family Friendly"],
  },
  {
    id: "botanical-garden",
    name: "Government Botanical Garden",
    tagline: "Sprawling Flora & Terraced Greenery",
    description: "Laid out in 1848 across 55 sprawling acres on lower slopes of Doddabetta. Features thousands of indigenous and exotic plants, fossil trees, and Italian floral terraces.",
    image: botanicalGardenImg,
    distanceFromTown: "2.5 km from Town Center",
    bestTime: "All Year Round",
    tags: ["Nature", "Photography", "Historic"],
  },
  {
    id: "doddabetta-peak",
    name: "Doddabetta Peak",
    tagline: "The Highest Mountain in the Nilgiris",
    description: "Rising 2,637 meters high, Doddabetta is the highest summit in the Nilgiri ranges. The telescope house offers sweeping 360-degree vistas over misty hills and valleys.",
    image: doddabettaImg,
    distanceFromTown: "9 km from Ooty",
    bestTime: "Early Morning & Clear Days",
    tags: ["Trekking", "Panoramic Views", "Highest Peak"],
  },
  {
    id: "pykara-lake",
    name: "Pykara Lake & Boat House",
    tagline: "Tranquil Lake in Toda Country",
    description: "A pristine highland reservoir surrounded by protected pine reserves. Speed boats and motorboats offer breathtaking journeys through untouched mountain waters.",
    image: pykaraLakeImg,
    distanceFromTown: "21 km from Ooty",
    bestTime: "Morning to Early Sunset",
    tags: ["Boating", "Pristine Lake", "Pine Hills"],
  },
  {
    id: "pykara-waterfalls",
    name: "Pykara Waterfalls",
    tagline: "Cascading Waters Through Shola Woods",
    description: "Flowing gracefully down rocky terraces in two distinct waterfalls amidst dense Shola forests. A sacred river for the indigenous Toda tribe and an idyllic photo spot.",
    image: pykaraWaterfallsImg,
    distanceFromTown: "23 km from Ooty",
    bestTime: "Post-Monsoon & Winter",
    tags: ["Waterfalls", "Nature Walk", "Scenic"],
  },
  {
    id: "tea-gardens",
    name: "Ooty Tea Gardens & Factory",
    tagline: "Endless Rolling Emerald Blankets",
    description: "Nilgiri's signature rolling emerald tea plantations. Witness how high-grown aromatic orthodox and CTC tea is processed, and sip fresh Nilgiri tea with scenic hill views.",
    image: teaGardensImg,
    distanceFromTown: "4 km from Ooty",
    bestTime: "Morning Light",
    tags: ["Tea Tasting", "Photography", "Cultural"],
  },
  {
    id: "rose-garden",
    name: "Government Rose Garden",
    tagline: "Largest Rose Garden in India",
    description: "Perched on the Elk Hill slopes with over 20,000 varieties of roses in five curved terraces. Witness rare colors, miniature roses, ramblers, and fragrant hybrid tea roses.",
    image: roseGardenImg,
    distanceFromTown: "3.5 km from Town Center",
    bestTime: "March to June & Autumn",
    tags: ["Flowers", "Terrace Garden", "Colourful"],
  },
  {
    id: "pine-forest",
    name: "Scenic Pine Forest",
    tagline: "Towering Whispering Pines",
    description: "An enchanting forest of majestic Siberian and maritime pine trees cascading down toward the lake. A renowned filming location with scenic needle-carpeted pathways.",
    image: pineForestImg,
    distanceFromTown: "14 km from Ooty",
    bestTime: "Morning Mists",
    tags: ["Forest Trails", "Photography", "Movie Sets"],
  },
  {
    id: "shooting-point",
    name: "9th Mile (Shooting Point)",
    tagline: "Expansive Wenlock Downs Meadows",
    description: "Vast undulating green meadows that stretch as far as the eye can see. One of South India's most celebrated film locations, offering endless 360-degree hill horizons.",
    image: shootingPointImg,
    distanceFromTown: "15 km from Ooty",
    bestTime: "Late Afternoon & Sunset",
    tags: ["Meadows", "Sunset Views", "Bollywood Spot"],
  },
  {
    id: "avalanche-lake",
    name: "Avalanche Lake & Sanctuary",
    tagline: "Untamed Nilgiri Wilderness",
    description: "A tranquil sanctuary lake nestled inside the protected biosphere reserve. Filled with trout waters, blooming rhododendrons, magnolia blossoms, and misty mountain forests.",
    image: avalancheLakeImg,
    distanceFromTown: "28 km from Ooty",
    bestTime: "Clear Mornings (Permit Area)",
    tags: ["Wilderness", "Trout Waters", "Quiet Retreat"],
  },
  {
    id: "nilgiri-toy-train",
    name: "Nilgiri Mountain Railway (Toy Train)",
    tagline: "UNESCO World Heritage Steam Railway",
    description: "Built by the British in 1908, this historic rack-and-pinion steam railway winds through 16 tunnels, 250 bridges, and sweeping tea valleys from Mettupalayam to Ooty.",
    image: toyTrainImg,
    distanceFromTown: "Ooty Railway Station",
    bestTime: "Scheduled Train Runs",
    tags: ["UNESCO Heritage", "Toy Train", "Iconic Rail"],
  },
  {
    id: "mudumalai-safari",
    name: "Mudumalai Wildlife Sanctuary",
    tagline: "Tiger Reserve & 36 Hairpin Ghats",
    description: "Descend the thrilling 36 hairpin bends of Kalhatty Ghat to reach the dense forests of Mudumalai. Spot wild Asian elephants, gaur, deer, peacocks, and visit the Theppakadu Elephant Camp.",
    image: mudumalaiImg,
    distanceFromTown: "40 km from Ooty",
    bestTime: "Early Morning & Afternoon Safaris",
    tags: ["Wildlife", "Elephant Camp", "36 Hairpin Bends"],
  },
];

export interface NearbyDestination {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  distance: string;
  popularAttractions: string[];
}

export const NEARBY_DESTINATIONS: NearbyDestination[] = [
  {
    id: "coonoor",
    name: "Coonoor",
    subtitle: "The Charm of Sim's Park & Tea Valleys",
    description: "Located at 1,850 meters altitude, Coonoor is cooler, quieter, and celebrated for its heritage parks, colonial bungalows, tea estates, and dramatic valley drop-offs.",
    image: coonoorImg,
    distance: "19 km from Ooty",
    popularAttractions: ["Sim's Park", "Dolphin's Nose", "Lamb's Rock", "Valley View", "Tea Gardens", "Gymkhana View"],
  },
  {
    id: "kotagiri",
    name: "Kotagiri",
    subtitle: "The Oldest Hill Station in the Nilgiris",
    description: "A peaceful hill settlement surrounded by endless tea estates and spice gardens. Famous for the roaring two-tiered Catherine Waterfalls and panoramic Kodanad Viewpoint.",
    image: kotagiriImg,
    distance: "29 km from Ooty",
    popularAttractions: ["Catherine Waterfalls", "Kodanad Viewpoint", "John Sullivan Memorial", "Longwood Shola"],
  },
  {
    id: "gudalur",
    name: "Gudalur",
    subtitle: "Gateway to Mudumalai & Wayanad",
    description: "A lush plantation hub bordering Kerala and Karnataka, renowned for Needle Rock viewpoint where you can view panoramic 360-degree horizons of mist-clad rainforests.",
    image: gudalurImg,
    distance: "50 km from Ooty",
    popularAttractions: ["Needle Rock View Point", "Frog Hill View", "Gene Pool Eco Park", "Devala Mines View"],
  },
  {
    id: "pykara",
    name: "Pykara",
    subtitle: "Sacred Cascades & Highland Lake",
    description: "An idyllic scenic route lined with pine forests, Toda hamlets, rapid cascading waterfalls, and speedboat facilities across a serene natural mountain lake.",
    image: pykaraLakeImg,
    distance: "21 km from Ooty",
    popularAttractions: ["Pykara Boat House", "Pykara Waterfalls", "Pine Forest", "Kamaraj Sagar Dam", "9th Mile"],
  },
  {
    id: "avalanche",
    name: "Avalanche",
    subtitle: "Untouched Biosphere & Emerald Waters",
    description: "Pure mountain air, dense shola woods, crystal clear water reservoirs, and scenic viewpoints far away from tourist rush. Ideal for nature lovers seeking peace.",
    image: avalancheLakeImg,
    distance: "28 km from Ooty",
    popularAttractions: ["Avalanche Lake", "Emerald Dam", "Upper Bhavani", "Trout Hatchery", "Forest Safari"],
  },
];

export interface SightseeingCircuit {
  id: string;
  title: string;
  subtitle: string;
  spotsCount: number;
  spots: string[];
  suggestedDuration: string;
  startingPriceSedan: string;
}

export const SIGHTSEEING_CIRCUITS: SightseeingCircuit[] = [
  {
    id: "ooty-local-circuit",
    title: "Ooty Sightseeing Circuit",
    subtitle: "Complete 10-Spot Heritage & Scenic Tour",
    spotsCount: 10,
    spots: [
      "1. Doddabetta Peak (Panoramic Vistas)",
      "2. Government Botanical Garden",
      "3. Nilgiri Tea Factory & Museum",
      "4. Ooty Lake & Boat House",
      "5. Government Rose Garden",
      "6. Karnataka Horticulture Garden",
      "7. Silk Factory & Weaving Center",
      "8. Thread Garden (Handcrafted Art)",
      "9. Wax World Museum",
      "10. Ooty Tibetan Market & Shopping",
    ],
    suggestedDuration: "Full Day (8:30 AM - 6:30 PM)",
    startingPriceSedan: "₹2,000 - ₹2,300",
  },
  {
    id: "pykara-mudumalai-circuit",
    title: "Pykara & Mudumalai Safari Circuit",
    subtitle: "10-Spot Nature, Lakes, Falls & Wildlife",
    spotsCount: 10,
    spots: [
      "1. Ooty Golf Links (Outside View)",
      "2. Whispering Pine Forest",
      "3. Kamaraj Sagar (Sandynallah) Dam",
      "4. School Mund (Tree Park)",
      "5. 9th Mile Shooting Point (Wenlock Downs)",
      "6. Pykara Cascading Waterfalls",
      "7. Pykara Boat House & Lake",
      "8. Needle Rock View Point",
      "9. Mudumalai Wildlife Sanctuary / Elephant Camp",
      "10. Mountain Ghat Safari (36 Thrilling Hairpin Bends)",
    ],
    suggestedDuration: "Full Day (8:00 AM - 7:00 PM)",
    startingPriceSedan: "₹3,000 - ₹3,500",
  },
  {
    id: "coonoor-circuit",
    title: "Coonoor Heritage Circuit",
    subtitle: "7-Spot Tea Estates & Dramatic Valley Drops",
    spotsCount: 7,
    spots: [
      "1. Valley View Observation Point",
      "2. M.R.C Madras Regimental Camp (Outside View)",
      "3. Ooty Gymkhana Club (Outside View)",
      "4. Sim's Park (Botanical Fruit & Rose Garden)",
      "5. Lamb's Rock (Deep Coimbatore Plains View)",
      "6. Rolling Tea Estates & Factory",
      "7. Dolphin's Nose (Stunning Catherine Falls View)",
    ],
    suggestedDuration: "Full Day (9:00 AM - 6:00 PM)",
    startingPriceSedan: "₹2,500 - ₹2,800",
  },
];

