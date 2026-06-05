"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function StickyMobileCTA() {
  const t = useTranslations("Contact");
  
  // Use a generic WhatsApp text for the sticky button
  const waLink = `https://wa.me/393318820826?text=${encodeURIComponent("Salve, vorrei ricevere informazioni sulle tariffe e le disponibilità del parcheggio MareVela.")}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-primary/95 backdrop-blur-md border-t border-gold/30 z-50 md:hidden flex items-center justify-between shadow-[0_-10px_20px_rgba(0,0,0,0.2)]">
      <div>
        <p className="text-white text-sm font-semibold">{t("title")}</p>
        <p className="text-gold text-xs">24/7 Premium Parking</p>
      </div>
      <a 
        href={waLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gold text-primary font-bold py-3 px-6 rounded-sm hover:bg-gold-light transition-all duration-300 flex items-center gap-2"
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
