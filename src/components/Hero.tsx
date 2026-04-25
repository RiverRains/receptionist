"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-20 overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Label pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="section-label section-label-green">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse" />
                {t("hero.tagline")}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.06]"
            >
              {t("hero.title")}
              <br />
              <span className="hero-gradient-text">
                {t("hero.titleHighlight")}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <motion.a
                href="/pilot"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-black bg-[#39ff14] hover:bg-[#4dff2e] transition-colors text-base cta-glow"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {t("hero.cta")}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-zinc-500"
            >
              {["Works 24/7", "No app needed", "2-minute setup", "SMS summaries"].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#39ff14]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0"
          >
            <PhoneMockup t={t} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({ t }: { t: (key: string) => string }) {
  return (
    <div className="relative w-[280px] mx-auto">
      {/* Glow behind phone */}
      <div
        className="absolute inset-0 -inset-8 rounded-full blur-[60px] opacity-40"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(57,255,20,0.15) 60%, transparent 80%)" }}
      />

      {/* Phone shell */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-[2.5rem] border border-white/12 bg-zinc-900/95 backdrop-blur-xl shadow-2xl"
        style={{
          boxShadow: "0 0 0 1px rgba(255,255,255,0.07), 0 30px 60px -15px rgba(0,0,0,0.6), 0 0 80px rgba(59,130,246,0.12)",
          padding: "8px",
        }}
      >
        {/* Screen */}
        <div className="rounded-[2.1rem] overflow-hidden bg-zinc-950 border border-white/8" style={{ minHeight: 480 }}>
          {/* Status bar */}
          <div className="h-9 flex items-center justify-between px-6 pt-2 text-[10px] text-zinc-500">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1,2,3,4].map(b => (
                  <div key={b} className="w-0.5 rounded-sm bg-current" style={{ height: b * 2 + 4, opacity: b < 4 ? 0.5 : 1 }} />
                ))}
              </div>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
              </svg>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
              </svg>
            </div>
          </div>

          {/* App header */}
          <div className="px-5 pt-1 pb-4">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Valtrix</p>
          </div>

          {/* Incoming call UI */}
          <div className="flex flex-col items-center px-5 pb-8 gap-6">
            {/* Caller avatar with rings */}
            <div className="relative flex items-center justify-center mt-2">
              {/* Ripple rings */}
              <motion.div
                className="absolute w-28 h-28 rounded-full border border-[#39ff14]/20"
                animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.div
                className="absolute w-28 h-28 rounded-full border border-[#39ff14]/15"
                animate={{ scale: [1, 1.7], opacity: [0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4, ease: "easeOut" }}
              />
              <motion.div
                animate={{ scale: [0.97, 1.03, 0.97] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3b82f6]/30 to-[#39ff14]/20 border-2 border-[#3b82f6]/40 flex items-center justify-center"
              >
                <svg className="w-10 h-10 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </motion.div>
            </div>

            {/* Call info */}
            <div className="text-center">
              <motion.p
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="text-[10px] uppercase tracking-widest text-[#39ff14] font-semibold"
              >
                {t("productViz.incomingCall")}
              </motion.p>
              <p className="text-base font-semibold text-white mt-1">{t("productViz.reception")}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{t("productViz.businessLine")}</p>
            </div>

            {/* Answer button */}
            <motion.div
              animate={{ boxShadow: ["0 0 0 0 rgba(57,255,20,0.4)", "0 0 0 16px rgba(57,255,20,0)", "0 0 0 0 rgba(57,255,20,0)"] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-[#39ff14] flex items-center justify-center cursor-pointer"
            >
              <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
            </motion.div>

            {/* AI processing indicator */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="w-full rounded-xl bg-white/5 border border-white/8 p-3 flex items-center gap-2.5"
            >
              <div className="flex gap-1">
                {[0, 0.15, 0.3].map((d, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-3 rounded-full bg-[#3b82f6]"
                    animate={{ scaleY: [0.4, 1.2, 0.4] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: d }}
                  />
                ))}
              </div>
              <p className="text-[10px] text-zinc-400">AI receptionist listening…</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating notification card */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-8 bottom-16 w-[220px] rounded-2xl border border-white/10 bg-zinc-900/90 backdrop-blur-xl p-4 shadow-2xl"
        style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(57,255,20,0.08)" }}
      >
        <div className="flex items-start gap-2.5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 350, delay: 2.3 }}
            className="w-8 h-8 rounded-lg bg-[#39ff14]/15 border border-[#39ff14]/25 flex items-center justify-center shrink-0"
          >
            <svg className="w-4 h-4 text-[#39ff14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </motion.div>
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }} className="text-xs font-semibold text-white">
              {t("productViz.newLeadCaptured")}
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.55 }} className="text-[10px] text-zinc-400 mt-0.5">
              {t("productViz.leadExample")}
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.7 }} className="text-[10px] text-[#39ff14] mt-1.5 font-medium">
              {t("productViz.leadHint")}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
