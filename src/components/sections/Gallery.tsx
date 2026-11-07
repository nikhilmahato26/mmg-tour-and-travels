import React, { useState } from "react";
import { GALLERY_ITEMS, GalleryCategory, GalleryItem } from "@/data/gallery";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";
import { Camera, MapPin, ZoomIn } from "lucide-react";

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All Photos");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const categories: GalleryCategory[] = [
    "All Photos",
    "Ooty",
    "Tea Gardens",
    "Mountains",
    "Lakes",
    "Waterfalls",
    "Tourist Attractions",
    "Our Vehicles",
  ];

  const filteredItems =
    activeCategory === "All Photos"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    setLightboxOpen(true);
  };

  const handleNavigate = (newIdx: number) => {
    setSelectedItem(filteredItems[newIdx]);
  };

  return (
    <section id="gallery" className="py-20 bg-[#FAF8F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-light text-forest text-xs font-bold uppercase tracking-widest mb-3 border border-sage-border">
            <Camera className="w-3.5 h-3.5 text-mountain-teal" />
            <span>Visual Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-forest-deep tracking-tight mb-4">
            BEAUTIFUL MOMENTS IN OOTY
          </h2>
          <p className="text-darktext-muted text-base sm:text-lg leading-relaxed">
            Experience the scenic charm of Ooty and the Nilgiris through our lens. From rolling misty tea estates and hidden lakes to our trusted taxi fleet.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-forest text-white shadow-sm scale-105"
                  : "bg-white text-darktext hover:bg-sage-light border border-sage-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-forest-deep/10 border border-sage-border/80 shadow-soft hover:shadow-hover transition-all duration-500 ${
                item.span || ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-forest-deep shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Title & Location Caption */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white transform transition-transform duration-300">
                <h3 className="font-serif font-bold text-base sm:text-lg text-cream leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-1 mt-1">
                  {item.caption}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-mountain-light font-medium mt-1.5">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Component */}
        <GalleryLightbox
          item={selectedItem}
          items={filteredItems}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={handleNavigate}
        />
      </div>
    </section>
  );
};
