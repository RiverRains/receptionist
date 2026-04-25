"use client";

import { motion } from "framer-motion";

const PARTICLE_COUNT = 50;

function particlePosition(i: number) {
  const s = (i * 17 + 13) % 100;
  const t = (i * 31 + 7) % 100;
  return { left: `${s}%`, top: `${t}%` };
}

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Static gradient bases */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(59,130,246,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_70%,rgba(57,255,20,0.09),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_10%_80%,rgba(59,130,246,0.07),transparent)]" />

      {/* Animated blue orb */}
      <motion.div
        className="absolute -top-1/3 -left-1/4 w-[80%] h-[80%] rounded-full blur-[160px]"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.26) 0%, rgba(59,130,246,0.05) 55%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.14, 1], opacity: [0.55, 0.85, 0.55], x: [0, 45, 0], y: [0, 28, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated green orb */}
      <motion.div
        className="absolute -bottom-1/4 -right-1/5 w-[75%] h-[75%] rounded-full blur-[150px]"
        style={{
          background: "radial-gradient(circle, rgba(57,255,20,0.20) 0%, rgba(57,255,20,0.04) 55%, transparent 70%)",
        }}
        animate={{ scale: [1.08, 1, 1.08], opacity: [0.45, 0.75, 0.45], x: [0, -35, 0], y: [0, -20, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center blend */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(57,255,20,0.05) 50%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
          const { left, top } = particlePosition(i);
          const isGreen = i % 3 === 0;
          const color = isGreen ? "#39ff14" : "#3b82f6";
          const size = i % 6 === 0 ? 3 : 2;
          const duration = 5 + (i % 6);
          const delay = (i % 20) * 0.14;
          const driftX = ((i * 7) % 14) - 7;
          const driftY = ((i * 11) % 18) - 9;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left, top,
                width: size, height: size,
                background: color,
                boxShadow: `0 0 ${size * 4}px ${color}55`,
              }}
              animate={{ opacity: [0.1, 0.5, 0.1], scale: [1, 1.4, 1], x: [0, driftX * 9, 0], y: [0, driftY * 7, 0] }}
              transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
            />
          );
        })}
      </div>

      {/* Edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_75%_at_50%_50%,transparent_35%,rgba(5,5,5,0.65)_100%)]" />
    </div>
  );
}
