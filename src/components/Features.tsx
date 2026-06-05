"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, MapPin, Sparkles } from "lucide-react";

export default function Features() {
  const t = useTranslations("Features");

  const features = [
    {
      icon: Clock,
      title: t("feature1.title"),
      desc: t("feature1.desc"),
    },
    {
      icon: ShieldCheck,
      title: t("feature2.title"),
      desc: t("feature2.desc"),
    },
    {
      icon: MapPin,
      title: t("feature3.title"),
      desc: t("feature3.desc"),
    },
    {
      icon: Sparkles,
      title: t("feature4.title"),
      desc: t("feature4.desc"),
    },
  ];

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">{t("title")}</h2>
          <div className="w-24 h-1 bg-gold mx-auto opacity-70" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-light">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 border border-primary/5 rounded-sm bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(197,160,89,0.2)] transition-shadow duration-300"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-primary/5 text-gold">
                <feature.icon strokeWidth={1.5} size={32} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
