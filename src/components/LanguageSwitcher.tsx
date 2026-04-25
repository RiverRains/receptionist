"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/translations";

const LOCALES: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "ru", label: "RU" },
  { value: "et", label: "ET" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 p-0.5 rounded-lg bg-white/5 border border-white/10">
      {LOCALES.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => setLocale(value)}
          className="relative px-2.5 py-1.5 rounded-md text-sm font-medium transition-colors min-w-[2.25rem]"
          aria-label={`Switch to ${label}`}
        >
          {locale === value ? (
            <motion.span
              layoutId="lang-active"
              className="absolute inset-0 rounded-md bg-white/15 border border-white/10"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          ) : null}
          <span className="relative z-10 block text-zinc-400 hover:text-white">
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}
