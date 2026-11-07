import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { generateGeneralEnquiryUrl } from "@/utils/whatsapp";

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = generateGeneralEnquiryUrl();

  return (
    <div className="fixed bottom-24 right-6 z-40 hidden sm:flex flex-col items-end group">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="mb-3 bg-white/95 backdrop-blur-md text-darktext px-4 py-2.5 rounded-2xl shadow-hover border border-sage-border/80 flex items-center gap-2 animate-bounce transition-all duration-300 max-w-xs">
          <div className="text-left">
            <p className="text-xs font-bold text-forest-deep">Plan your Ooty Taxi Trip</p>
            <p className="text-[11px] text-darktext-muted">Chat directly with MMG Travels</p>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss tooltip"
            className="text-darktext-muted hover:text-darktext p-0.5 rounded-full hover:bg-sage-light"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MMG Tour and Travels on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-hover hover:scale-110 transition-all duration-300"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};

