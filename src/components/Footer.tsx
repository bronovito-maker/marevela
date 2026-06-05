"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-primary text-white pt-20 pb-10 relative z-10 border-t border-gold/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Logo e Info */}
          <div>
            <h3 className="text-2xl font-serif text-gold mb-6">Parcheggio MareVela</h3>
            <p className="text-gray-400 font-light mb-6 text-sm leading-relaxed">
              {t("description")}
            </p>
            <div className="text-sm text-gray-400 font-light space-y-2">
              <p><strong>Gestore:</strong> SORIMA S.r.l.</p>
              <p><strong>P.IVA:</strong> 01963290653</p>
            </div>
          </div>

          {/* Indirizzo e Mappa Link */}
          <div>
            <h4 className="text-lg font-serif text-white mb-6 tracking-wide">{t("whereTitle")}</h4>
            <address className="not-italic text-gray-400 font-light text-sm space-y-4">
              <p>
                Via Pozzillo (Discesa del Waikiki)<br />
                84048 San Marco di Castellabate (SA)<br />
                Italia
              </p>
              <a 
                href="https://share.google/AmQWtCuyT1xReK8DF" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 text-gold hover:text-white transition-colors duration-300 border-b border-gold/30 hover:border-white pb-1"
              >
                {t("openMaps")}
              </a>
            </address>
          </div>

          {/* Orari e Contatti */}
          <div>
            <h4 className="text-lg font-serif text-white mb-6 tracking-wide">{t("contactTitle")}</h4>
            <div className="text-sm text-gray-400 font-light space-y-4">
              <p className="flex items-center gap-2">
                <span className="text-gold">T:</span> +39 331 8820826
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gold">E:</span> info@sorima.it
              </p>
              <div className="pt-4 mt-4 border-t border-white/10">
                <p className="text-gold font-medium">{t("open247")}</p>
                <p className="text-xs mt-1">{t("alwaysOpen")}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Mappa Incorporata (Iframe) */}
        <div className="w-full h-64 rounded-sm overflow-hidden border border-gold/20 mb-12">
          <iframe 
            src="https://maps.google.com/maps?q=Via+Pozzillo,+Discesa+del+Waikiki,+snc,+84048+San+Marco+SA&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "grayscale(30%) contrast(1.1)" }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
          <p>© {new Date().getFullYear()} SORIMA S.r.l. - {t("rights")}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">{t("privacy")}</a>
            <a href="#" className="hover:text-gold transition-colors">{t("cookies")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
