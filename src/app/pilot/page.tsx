"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function PilotPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;

    setLoading(true);
    try {
      const res = await fetch("/api/pilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || t("pilot.errorGeneric"));
        return;
      }
      setSubmitted(true);
    } catch {
      setError(t("pilot.errorGeneric"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-[80%] h-[80%] rounded-full bg-[#3b82f6] opacity-[0.06] blur-[120px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[70%] h-[70%] rounded-full bg-[#39ff14] opacity-[0.04] blur-[100px]" />
      </div>

      <header className="relative z-10 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-semibold text-white hover:text-zinc-300 transition-colors"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#39ff14] flex items-center justify-center text-black text-sm font-bold">
            R
          </span>
          <span>{t("header.brand")}</span>
        </Link>
        <LanguageSwitcher />
      </header>

      <main className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-3xl p-8 md:p-10 border border-white/10"
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              {t("pilot.title")}
            </h1>
            <p className="mt-3 text-zinc-400 leading-relaxed">
              {t("pilot.intro")}
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-6 rounded-2xl bg-[#39ff14]/10 border border-[#39ff14]/30"
              >
                <p className="text-[#39ff14] font-semibold">{t("pilot.thanksTitle")}</p>
                <p className="mt-2 text-zinc-400 text-sm">
                  {t("pilot.thanksBody")}
                </p>
                <Link
                  href="/"
                  className="inline-block mt-4 text-sm font-medium text-[#3b82f6] hover:text-[#60a5fa] transition-colors"
                >
                  {t("pilot.backHome")}
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {error && (
                  <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-300 mb-2"
                  >
                    {t("pilot.name")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50 focus:border-[#3b82f6]/50 transition-colors"
                    placeholder={t("pilot.namePlaceholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-zinc-300 mb-2"
                  >
                    {t("pilot.phone")}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50 focus:border-[#3b82f6]/50 transition-colors"
                    placeholder={t("pilot.phonePlaceholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-300 mb-2"
                  >
                    {t("pilot.email")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50 focus:border-[#3b82f6]/50 transition-colors"
                    placeholder={t("pilot.emailPlaceholder")}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full font-semibold text-black bg-[#39ff14] hover:bg-[#4dff2e] disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-[0_0_30px_rgba(57,255,20,0.3)]"
                >
                  {loading ? t("pilot.sending") : t("pilot.submit")}
                </button>
              </form>
            )}
          </motion.div>

          <p className="mt-6 text-center text-sm text-zinc-500">
            <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
              {t("pilot.backHome")}
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
