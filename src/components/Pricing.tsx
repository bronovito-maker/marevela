"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const t = useTranslations("Pricing");

  const plans = [
    {
      id: "daily",
      title: t("daily.title"),
      price: t("daily.price"),
      period: t("daily.period"),
      features: [
        t("daily.feat1"),
        t("daily.feat2"),
        t("daily.feat3"),
      ],
      isPopular: false,
    },
    {
      id: "weekly",
      title: t("weekly.title"),
      price: t("weekly.price"),
      period: t("weekly.period"),
      features: [
        t("weekly.feat1"),
        t("weekly.feat2"),
        t("weekly.feat3"),
        t("weekly.feat4"),
      ],
      isPopular: true,
    },
    {
      id: "monthly",
      title: t("monthly.title"),
      price: t("monthly.price"),
      period: t("monthly.period"),
      features: [
        t("monthly.feat1"),
        t("monthly.feat2"),
        t("monthly.feat3"),
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-primary text-white relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-baroque opacity-10 mix-blend-overlay z-0" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">{t("title")}</h2>
          <div className="w-24 h-1 bg-white mx-auto opacity-30" />
          <p className="mt-6 text-accent max-w-2xl mx-auto font-light">{t("subtitle")}</p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gold-light">
            <div className="flex items-center gap-2">
              <Check size={16} /> <span>Videosorveglianza 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} /> <span>Cancellazione Flessibile</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} /> <span>Staff in Loco</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative flex flex-col p-8 rounded-sm backdrop-blur-sm transition-all duration-300 ${
                plan.isPopular 
                  ? "bg-white text-primary scale-105 border-2 border-gold shadow-[0_0_30px_rgba(197,160,89,0.3)] z-20" 
                  : "bg-primary/50 text-white border border-gold/30 hover:bg-primary/80 z-10"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-primary text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-sm shadow-md">
                  {t("popularBadge")}
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-xl font-serif mb-2 ${plan.isPopular ? "text-primary" : "text-gold"}`}>
                  {plan.title}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-semibold">{plan.price}</span>
                  <span className={`text-sm ${plan.isPopular ? "text-gray-500" : "text-white/60"}`}>
                    / {plan.period}
                  </span>
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check size={20} className={`shrink-0 mt-0.5 ${plan.isPopular ? "text-gold" : "text-gold-light"}`} />
                    <span className={`text-sm font-light ${plan.isPopular ? "text-gray-700" : "text-white/90"}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/393318820826?text=${encodeURIComponent(`Salve, vorrei richiedere disponibilità per il pacchetto ${plan.title} al parcheggio MareVela.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-sm font-semibold transition-all duration-300 block text-center ${
                  plan.isPopular
                    ? "bg-primary text-gold hover:bg-primary/90"
                    : "bg-transparent border border-gold text-gold hover:bg-gold hover:text-primary"
                }`}
              >
                {t("cta")}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
