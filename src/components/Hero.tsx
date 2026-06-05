"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden pt-32 pb-24">
      {/* Background Image Optimized */}
      <Image 
        src="/images/hero-bg.png" 
        alt="Parcheggio MareVela San Marco di Castellabate"
        fill
        priority
        className="object-cover z-0"
        quality={85}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-primary/70 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary z-0" />
      <div className="absolute inset-0 bg-baroque opacity-20 z-0 mix-blend-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm md:text-sm font-semibold mb-6">
            {t('subtitle')}
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight drop-shadow-lg">
            {t('title')}
          </h1>
          <p className="text-accent text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto opacity-90">
            {t('description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gold text-primary font-semibold py-4 px-10 rounded-sm hover:bg-gold-light transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)] inline-block"
            >
              {t('ctaPrimary')}
            </a>
            <a 
              href="https://share.google/AmQWtCuyT1xReK8DF"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold/50 text-gold bg-primary/20 backdrop-blur-sm font-medium py-4 px-10 rounded-sm hover:bg-gold/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              {t('ctaMaps')}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
    </section>
  );
}
