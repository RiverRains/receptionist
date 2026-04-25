"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = [
  {
    number: "01",
    titleKey: "howItWorks.s1Title",
    descKey: "howItWorks.s1Desc",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    accentColor: "#3b82f6",
  },
  {
    number: "02",
    titleKey: "howItWorks.s2Title",
    descKey: "howItWorks.s2Desc",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    accentColor: "#8b5cf6",
  },
  {
    number: "03",
    titleKey: "howItWorks.s3Title",
    descKey: "howItWorks.s3Desc",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    accentColor: "#39ff14",
  },
];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(59,130,246,0.06),transparent)]" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-label section-label-blue mb-5 inline-block">
            {t("howItWorks.label")}
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            {t("howItWorks.heading")}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[39px] top-10 bottom-10 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(139,92,246,0.4), rgba(57,255,20,0.3), transparent)" }}
          />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative flex gap-6 md:gap-8 items-start group"
              >
                {/* Step circle */}
                <div className="relative flex-shrink-0 z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center border transition-all"
                    style={{
                      background: `${step.accentColor}12`,
                      borderColor: `${step.accentColor}30`,
                      color: step.accentColor,
                      boxShadow: `0 0 0 0 ${step.accentColor}40`,
                    }}
                  >
                    {step.icon}
                    <span className="text-[10px] font-bold tracking-wider mt-1 opacity-50">{step.number}</span>
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex-1 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.05] p-7 transition-all relative overflow-hidden group-hover:border-white/12"
                >
                  {/* Accent left border */}
                  <div
                    className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{ background: step.accentColor }}
                  />

                  <div className="pl-2">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: step.accentColor }}>
                        Step {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 leading-snug">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {t(step.descKey)}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
