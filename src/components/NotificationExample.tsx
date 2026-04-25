"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotificationExample() {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(59,130,246,0.07),transparent)]" />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="section-label section-label-blue mb-5 inline-block">
              {t("notificationExample.label")}
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              {t("notificationExample.heading")}
            </h2>
            <p className="mt-5 text-lg text-zinc-400 leading-relaxed">
              {t("notificationExample.intro")}
            </p>

            {/* Feature bullets */}
            <div className="mt-8 space-y-3">
              {[
                { icon: "⚡", text: "Delivered the moment the call ends" },
                { icon: "📋", text: "Name, phone, issue & address — all captured" },
                { icon: "🎙️", text: "Recording link included for full context" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-zinc-400">
                  <span className="text-base">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: phone */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <SMSPhone t={t} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SMSPhone({ t }: { t: (key: string) => string }) {
  const fields = [
    { label: t("notificationExample.customer"), value: "John Smith" },
    { label: t("notificationExample.phone"), value: "+372 5123 4567" },
    { label: t("notificationExample.issue"), value: "Boiler not working" },
    { label: t("notificationExample.address"), value: "Tammsaare tee 12, Tallinn" },
  ];

  return (
    <div className="relative w-[300px]">
      {/* Glow */}
      <div className="absolute inset-0 -inset-6 rounded-full blur-[50px] opacity-30"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(57,255,20,0.15) 60%, transparent 80%)" }} />

      {/* Phone */}
      <div
        className="relative rounded-[2.5rem] border border-white/10 bg-zinc-900/95 shadow-2xl"
        style={{ padding: "8px", boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 30px 60px -12px rgba(0,0,0,0.6)" }}
      >
        <div className="rounded-[2.1rem] overflow-hidden bg-zinc-950 border border-white/8">
          {/* Status bar */}
          <div className="h-9 flex items-center justify-between px-6 pt-2 text-[10px] text-zinc-600">
            <span>9:41</span>
            <span className="w-16 h-4 bg-zinc-900 rounded-full" />
          </div>

          {/* Messages header */}
          <div className="px-5 py-3 border-b border-white/5">
            <p className="text-center text-xs font-medium text-white">{t("notificationExample.fromLabel")}</p>
          </div>

          {/* SMS bubbles */}
          <div className="p-5 space-y-3">
            {/* Timestamp */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center text-[10px] text-zinc-600"
            >
              Just now
            </motion.p>

            {/* Message bubble */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl rounded-tl-sm bg-[#3b82f6]/15 border border-[#3b82f6]/25 p-4 space-y-2.5"
            >
              <p className="text-xs font-bold text-[#60a5fa]">{t("notificationExample.newCallSummary")}</p>

              {fields.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex gap-2 text-[11px]"
                >
                  <span className="text-zinc-500 min-w-[52px] font-medium">{label}:</span>
                  <span className="text-zinc-200 font-medium">{value}</span>
                </motion.div>
              ))}

              {/* Recording button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0 }}
                className="mt-3 pt-3 border-t border-white/8 flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-[#39ff14]/15 border border-[#39ff14]/30 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#39ff14]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-[10px] text-[#39ff14]">{t("notificationExample.recordingHint")}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
