"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(11, 44, 77, 0)", "rgba(11, 44, 77, 0.95)"]
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(10px)"]
  );

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const languages = [
    { code: "it", label: "IT" },
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "de", label: "DE" },
  ];

  return (
    <motion.nav 
      style={{ backgroundColor, backdropFilter }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4"
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-white font-serif text-xl tracking-widest font-bold">
          MARE<span className="text-gold">VELA</span>
        </div>
        
        <div className="flex gap-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`text-xs font-semibold tracking-widest transition-colors duration-300 ${
                locale === lang.code 
                  ? "text-gold border-b border-gold" 
                  : "text-white/70 hover:text-white"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
