"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-10 px-4 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#39ff14] flex items-center justify-center text-black text-xs font-black">
            R
          </span>
          <span className="text-sm font-semibold text-white">{t("header.brand")}</span>
        </div>
        <p className="text-sm text-zinc-600">© {new Date().getFullYear()} {t("footer.copyright")}</p>
        <div className="flex items-center gap-4 text-xs text-zinc-600">
          <a href="/pilot" className="hover:text-zinc-400 transition-colors">Early access</a>
          <span>·</span>
          <span>Built with ❤️</span>
        </div>
      </div>
    </footer>
  );
}
