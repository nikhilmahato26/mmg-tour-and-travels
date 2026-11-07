import React, { useEffect } from "react";
import { GalleryItem } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight, MapPin, MessageCircle, ZoomIn, ZoomOut } from "lucide-react";
import { generateDestinationEnquiryUrl } from "@/utils/whatsapp";

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  items,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [isZoomed, setIsZoomed] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, item, items]);

  if (!isOpen || !item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    setIsZoomed(false);
    const newIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(newIdx);
  };

  const handleNext = () => {
    setIsZoomed(false);
    const newIdx = (currentIndex + 1) % items.length;
    onNavigate(newIdx);
  };

  const whatsappUrl = generateDestinationEnquiryUrl(item.title);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 transition-all duration-300"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-forest text-white">
            {item.category}
          </span>
          <span className="text-xs text-white/70 hidden sm:inline-block">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            aria-label="Toggle Zoom"
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Lightbox"
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        aria-label="Previous Image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all hidden sm:flex items-center justify-center hover:scale-110"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        aria-label="Next Image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all hidden sm:flex items-center justify-center hover:scale-110"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Main Image View */}
      <div
        className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`overflow-auto transition-transform duration-300 max-h-[72vh] flex items-center justify-center ${
            isZoomed ? "scale-150 cursor-grab" : "scale-100"
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[70vh] max-w-full object-contain rounded-2xl shadow-2xl select-none"
          />
        </div>

        {/* Caption Card */}
        <div className="w-full mt-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
          <div className="space-y-1">
            <h4 className="text-lg font-serif font-bold text-white">{item.title}</h4>
            <p className="text-xs sm:text-sm text-white/80">{item.caption}</p>
            <div className="flex items-center gap-1.5 text-xs text-mountain-light font-medium pt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{item.location}</span>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-stretch sm:self-auto px-5 py-2.5 rounded-full text-xs font-semibold bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center gap-2 shadow-md transition-all flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire for This Tour</span>
          </a>
        </div>
      </div>
    </div>
  );
};

