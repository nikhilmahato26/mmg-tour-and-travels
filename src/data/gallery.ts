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
import coonoorHillsImg from "@/assets/images/destinations/coonoor-hills.jpg";
import kotagiriValleyImg from "@/assets/images/destinations/kotagiri-valley.jpg";
import gudalurMistImg from "@/assets/images/destinations/gudalur-mist.jpg";

import mmgFleetViewpoint from "@/assets/images/fleet/mmg-fleet-viewpoint.jpeg";
import mmgTempoTraveller from "@/assets/images/fleet/mmg-tempo-traveller-1.jpeg";
import mmgCabRear from "@/assets/images/fleet/mmg-cab-rear-branding.jpeg";
import mmgScenicCabs from "@/assets/images/fleet/mmg-scenic-cabs.jpeg";
import mmgSedanCab from "@/assets/images/fleet/mmg-sedan-cab.jpeg";
import mmgFlyer from "@/assets/images/client/mmg-flyer.jpeg";
import rtoPermitImg from "@/assets/images/client/rto-permit.jpeg";
import tourCardImg from "@/assets/images/client/tour-itinerary-card.jpg";
import tariffChartImg from "@/assets/images/client/tariff-chart-full.jpg";

export type GalleryCategory =
  | "All Photos"
  | "Ooty"
  | "Tea Gardens"
  | "Mountains"
  | "Lakes"
  | "Waterfalls"
  | "Tourist Attractions"
  | "Our Vehicles";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  location: string;
  caption: string;
  span?: string; // for masonry layout variation
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-tea-1",
    title: "Rolling Tea Estates of Nilgiris",
    category: "Tea Gardens",
    image: teaGardensImg,
    location: "Ooty Tea Estates",
    caption: "Lush green emerald plantations draped across the undulating hill slopes.",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: "g-lake-1",
    title: "Ooty Lake Boating Waters",
    category: "Lakes",
    image: ootyLakeImg,
    location: "Ooty Boat House",
    caption: "Tranquil morning boat rides under the shadows of towering Nilgiri trees.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g-fleet-1",
    title: "MMG Tourist Taxi at Scenic Viewpoint",
    category: "Our Vehicles",
    image: mmgFleetViewpoint,
    location: "Nilgiris Viewpoint, Ooty",
    caption: "MMG Tour & Travels cabs parked safely at a panoramic mountain viewpoint.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g-falls-1",
    title: "Pykara Waterfalls in Full Flow",
    category: "Waterfalls",
    image: pykaraWaterfallsImg,
    location: "Pykara, Ooty",
    caption: "Rushing crystal clear cascade nestled inside Toda tribal territory.",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: "g-mountain-1",
    title: "Doddabetta Mountain Summit",
    category: "Mountains",
    image: doddabettaImg,
    location: "Doddabetta Peak (2,637m)",
    caption: "The highest mountain point in Tamil Nadu looking over misty cloud formations.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g-train-1",
    title: "UNESCO Heritage Nilgiri Mountain Toy Train",
    category: "Tourist Attractions",
    image: toyTrainImg,
    location: "Nilgiri Mountain Railway",
    caption: "Historic blue and yellow Swiss rack-and-pinion steam train navigating tunnels.",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: "g-botanical-1",
    title: "Government Botanical Garden Terraces",
    category: "Tourist Attractions",
    image: botanicalGardenImg,
    location: "Botanical Garden, Ooty",
    caption: "Over 55 acres of world-class manicured horticultural lawns and exotic trees.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g-fleet-tempo",
    title: "MMG 14+1 Force Tempo Traveller",
    category: "Our Vehicles",
    image: mmgTempoTraveller,
    location: "Ooty Sightseeing Fleet",
    caption: "Comfortable pushback maxi-cab with tourist permit for group and family journeys.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g-pine-1",
    title: "Whispering Pine Forest",
    category: "Ooty",
    image: pineForestImg,
    location: "Pine Forest, Pykara Road",
    caption: "Sunbeams breaking through towering tall pines on needle-strewn slope trails.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g-pykara-lake",
    title: "Pykara Lake & Boathouse Sanctuary",
    category: "Lakes",
    image: pykaraLakeImg,
    location: "Pykara",
    caption: "Untouched highland lake waters surrounded by pine woods and Toda lands.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g-rose-1",
    title: "Elk Hill Government Rose Garden",
    category: "Tourist Attractions",
    image: roseGardenImg,
    location: "Rose Garden, Ooty",
    caption: "India's largest rose sanctuary with over twenty thousand blossoming varieties.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g-meadow-1",
    title: "9th Mile Wenlock Downs Shooting Point",
    category: "Mountains",
    image: shootingPointImg,
    location: "9th Mile, Ooty",
    caption: "Endless rolling green grassy ridges famous as cinema shooting meadows.",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: "g-avalanche-1",
    title: "Avalanche Wilderness Lake",
    category: "Lakes",
    image: avalancheLakeImg,
    location: "Avalanche Sanctuary",
    caption: "Crystal waters and shola vegetation deep inside the Nilgiri biosphere reserve.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g-mudumalai-1",
    title: "Mudumalai Forest & Safari Corridor",
    category: "Tourist Attractions",
    image: mudumalaiImg,
    location: "Mudumalai Tiger Reserve",
    caption: "Asian elephants and wildlife in their natural habitat at the Nilgiris foothills.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g-coonoor-1",
    title: "Coonoor Tea Slopes & Valley",
    category: "Tea Gardens",
    image: coonoorHillsImg,
    location: "Coonoor",
    caption: "Vast tea estates cascading toward dramatic gorge viewpoints.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g-kotagiri-1",
    title: "Kotagiri Mountain Ridges",
    category: "Mountains",
    image: kotagiriValleyImg,
    location: "Kotagiri Valleys",
    caption: "Serene quiet tea hill station enveloped in fresh mountain clouds.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g-gudalur-1",
    title: "Gudalur Needle Rock Horizon",
    category: "Mountains",
    image: gudalurMistImg,
    location: "Gudalur High Point",
    caption: "Dramatic cloud layers and misty mountain horizons across the border passes.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g-fleet-rear",
    title: "MMG Tour & Travels Verified Cab",
    category: "Our Vehicles",
    image: mmgCabRear,
    location: "Ooty, Tamil Nadu",
    caption: "Verified local taxi service with direct helpline numbers for bookings.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g-fleet-sedan",
    title: "Sedan Cab for Sightseeing",
    category: "Our Vehicles",
    image: mmgSedanCab,
    location: "Ooty",
    caption: "Clean, comfortable 4+1 sedan cab ideal for couples and small family sightseeing.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g-rto-permit",
    title: "Government Maxi Cab Permit Certificate",
    category: "Our Vehicles",
    image: rtoPermitImg,
    location: "Transport Department, Ooty RTO",
    caption: "Official tourist permit issued by Government of Tamil Nadu Transport Department.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g-tour-card",
    title: "Official Ooty Tour Plan Card",
    category: "Tourist Attractions",
    image: tourCardImg,
    location: "MMG Tour and Travels",
    caption: "Verified 10-spot Ooty, 10-spot Pykara & Mudumalai, and 7-spot Coonoor sightseeing circuits.",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: "g-client-flyer",
    title: "MMG Travels Official Brochure",
    category: "Our Vehicles",
    image: mmgFlyer,
    location: "Ooty, The Nilgiris",
    caption: "Safe Journey... Happy Memories! Your trusted travel partner in the Nilgiris.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "g-tariff-chart",
    title: "MMG Tour and Travels Rate Sheet",
    category: "Our Vehicles",
    image: tariffChartImg,
    location: "MMG Tariff Guidelines",
    caption: "Official tariff rates for Car 4+1, SUV 7+1, and Tempo 14+1 across all major circuits.",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
];

