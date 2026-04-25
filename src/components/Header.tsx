"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3"
    >
      <div
        className="max-w-6xl mx-auto flex items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(5,5,5,0.85)" : "rgba(5,5,5,0.5)",
          backdropFilter: scrolled ? "blur(24px)" : "blur(12px)",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(12px)",
          border: scrolled ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(255,255,255,0.06)",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 font-bold text-white shrink-0 group">
          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#39ff14] flex items-center justify-center text-black text-sm font-black shadow-lg transition-transform group-hover:scale-105">
            R
          </span>
          <span className="text-base tracking-tight">{t("header.brand")}</span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { href: "#problem", label: t("header.navProblem") },
            { href: "#how-it-works", label: t("header.navHowItWorks") },
            { href: "#features", label: t("header.navFeatures") },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-3.5 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <motion.a
            href="/pilot"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-black bg-[#39ff14] hover:bg-[#4dff2e] transition-colors"
            style={{ boxShadow: "0 0 16px rgba(57,255,20,0.25)" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {t("header.earlyAccess")}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
          <motion.a
            href="/pilot"
            className="md:hidden px-3.5 py-2 rounded-xl bg-white/8 text-sm font-medium text-white border border-white/15"
            whileTap={{ scale: 0.97 }}
          >
            {t("header.joinPilot")}
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
