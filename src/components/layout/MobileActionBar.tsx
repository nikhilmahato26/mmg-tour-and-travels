import React from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { CONTACT_LINKS, scrollToSection } from "@/utils/contact";

export const MobileActionBar: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-sage-border/90 px-3 py-2.5 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={CONTACT_LINKS.phone}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sage-light text-forest hover:bg-forest hover:text-white transition-colors"
        >
          <Phone className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Call Us</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={CONTACT_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-white shadow-sm hover:bg-[#20BA5A] transition-colors"
        >
          <MessageCircle className="w-5 h-5 mb-0.5 fill-white" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Book Now Button */}
        <button
          type="button"
          onClick={() => scrollToSection("booking")}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-forest text-white shadow-sm hover:bg-forest-deep transition-colors"
        >
          <Calendar className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Book Now</span>
        </button>
      </div>
    </div>
  );
};

