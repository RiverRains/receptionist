"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  {
    titleKey: "features.f1Title",
    descKey: "features.f1Desc",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    span: "col-span-1 md:col-span-2",
    featured: true,
  },
  {
    titleKey: "features.f2Title",
    descKey: "features.f2Desc",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    span: "col-span-1",
    featured: false,
  },
  {
    titleKey: "features.f3Title",
    descKey: "features.f3Desc",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    span: "col-span-1",
    featured: false,
  },
  {
    titleKey: "features.f4Title",
    descKey: "features.f4Desc",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    span: "col-span-1",
    featured: false,
  },
  {
    titleKey: "features.f5Title",
    descKey: "features.f5Desc",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
    span: "col-span-1 md:col-span-2",
    featured: false,
  },
  {
    titleKey: "features.f6Title",
    descKey: "features.f6Desc",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    span: "col-span-1",
    featured: false,
  },
];

export default function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(57,255,20,0.05),transparent)]" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label section-label-green mb-5 inline-block">
            {t("features.label")}
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            {t("features.heading")}
          </h2>
          <p className="mt-5 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t("features.intro")}
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -3 }}
              className={`${feature.span} group relative rounded-2xl border border-white/8 p-7 overflow-hidden transition-all hover:border-[#39ff14]/25 hover:shadow-[0_0_40px_rgba(57,255,20,0.06)] ${feature.featured ? "bg-white/[0.04]" : "bg-white/[0.025]"}`}
            >
              {/* Corner glow on hover */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#39ff14] rounded-full blur-[50px] opacity-0 group-hover:opacity-[0.07] transition-opacity pointer-events-none" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#39ff14]/10 border border-[#39ff14]/20 flex items-center justify-center text-[#39ff14] mb-5 group-hover:bg-[#39ff14]/15 transition-colors">
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className={`font-semibold text-white mb-2.5 leading-snug ${feature.featured ? "text-xl" : "text-lg"}`}>
                {t(feature.titleKey)}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {t(feature.descKey)}
              </p>

              {/* Featured: decorative bar */}
              {feature.featured && (
                <div className="mt-6 h-px bg-gradient-to-r from-[#39ff14]/30 via-[#3b82f6]/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
