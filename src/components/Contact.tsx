"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Send, Phone, Mail } from "lucide-react";

export default function Contact() {
  const t = useTranslations("Contact");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const arrival = formData.get("arrival") || "";
    const departure = formData.get("departure") || "";
    const message = formData.get("message") || "";

    const text = `Salve, vorrei richiedere disponibilità al Parcheggio MareVela.%0A%0A*Nome:* ${name}%0A*Email:* ${email}%0A*Arrivo:* ${arrival}%0A*Partenza:* ${departure}%0A*Note:* ${message}`;
    
    window.open(`https://wa.me/393318820826?text=${text}`, "_blank");
  };

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Informazioni di Contatto */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">{t("title")}</h2>
              <div className="w-16 h-1 bg-gold mb-8 opacity-70" />
              <p className="text-gray-600 font-light mb-10 leading-relaxed">
                {t("description")}
              </p>
              
              <div className="space-y-6">
                <a href="tel:+393318820826" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/30 rounded-full text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{t("phoneLabel")}</p>
                    <p className="text-lg font-serif text-primary">+39 331 8820826</p>
                  </div>
                </a>
                
                <a href="mailto:info@sorima.it" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/30 rounded-full text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{t("emailLabel")}</p>
                    <p className="text-lg font-serif text-primary">info@sorima.it</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Modulo di Contatto Elegante */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-primary/5 relative"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-baroque opacity-10 pointer-events-none" />
              
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-primary uppercase tracking-widest">{t("formName")}</label>
                    <input 
                      name="name"
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-gold focus:outline-none transition-colors duration-300 text-primary font-light" 
                      placeholder={t("formNamePlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-primary uppercase tracking-widest">{t("formEmail")}</label>
                    <input 
                      name="email"
                      required
                      type="email" 
                      className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-gold focus:outline-none transition-colors duration-300 text-primary font-light" 
                      placeholder={t("formEmailPlaceholder")}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-primary uppercase tracking-widest">{t("formArrival")}</label>
                    <input 
                      name="arrival"
                      required
                      type="date" 
                      className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-gold focus:outline-none transition-colors duration-300 text-primary font-light" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-primary uppercase tracking-widest">{t("formDeparture")}</label>
                    <input 
                      name="departure"
                      required
                      type="date" 
                      className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-gold focus:outline-none transition-colors duration-300 text-primary font-light" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-primary uppercase tracking-widest">{t("formMessage")}</label>
                  <textarea 
                    name="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-gold focus:outline-none transition-colors duration-300 text-primary font-light resize-none" 
                    placeholder={t("formMessagePlaceholder")}
                  />
                </div>

                <button type="submit" className="bg-primary text-gold py-4 px-8 flex items-center justify-center gap-2 w-full md:w-auto hover:bg-primary/90 transition-all duration-300 rounded-sm">
                  <span className="font-semibold">{t("formSubmit")}</span>
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
