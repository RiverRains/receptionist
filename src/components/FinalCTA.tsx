"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section id="early-access" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Multi-layer glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3b82f6]/6 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#39ff14]/6 via-transparent to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#39ff14]/8 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        {/* Gradient border card */}
        <div className="relative rounded-3xl p-[1px]"
          style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.4), rgba(57,255,20,0.3), rgba(59,130,246,0.15))" }}>
          <div className="rounded-[calc(1.5rem-1px)] bg-zinc-950/90 backdrop-blur-xl px-8 md:px-16 py-16 md:py-20">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="section-label section-label-green">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse" />
                Limited pilot spots available
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              {t("finalCta.headingStart")}{" "}
              <span className="hero-gradient-text">
                {t("finalCta.headingHighlight")}
              </span>
            </h2>

            <p className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
              {t("finalCta.paragraph")}
            </p>

            <motion.div
              className="mt-10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <a
                href="/pilot"
                className="inline-flex items-center gap-2.5 px-12 py-5 rounded-full font-bold text-black text-lg bg-[#39ff14] hover:bg-[#4dff2e] transition-colors cta-glow"
              >
                {t("finalCta.cta")}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-xs text-zinc-600"
            >
              No credit card required · Cancel anytime · Setup in 2 minutes
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
