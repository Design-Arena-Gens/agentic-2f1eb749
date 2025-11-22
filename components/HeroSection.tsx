"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Sparkles, PlayCircle, Globe } from "lucide-react";

const floatingPlanets: { size: string; style: CSSProperties }[] = [
  { size: "w-24 h-24", style: { top: "2.5rem", right: "4rem" } },
  { size: "w-16 h-16", style: { top: "10rem", left: "3.5rem" } },
  { size: "w-20 h-20", style: { bottom: "3rem", right: "2.5rem" } }
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 glass-panel p-10 lg:p-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl space-y-6 text-right ms-auto"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
          <Sparkles className="h-4 w-4 text-sand" />
          <span>لأن تعلّم اللغة يجب أن يكون احتفالًا يوميًا</span>
        </div>
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          تعلّم لغات العالم عبر اللعب، القَصص، والمغامرات التفاعلية
        </h1>
        <p className="text-lg text-white/80 md:text-xl">
          LingoJoy هي منصة منغمسَة تمزج بين العلم والمتعة: ألعاب صغيرة، قصص مرئية،
          وتقنية نطق ذكية تساعدك على اكتشاف أكثر من 80 لغة بثقة وحماس.
        </p>
        <div className="flex flex-wrap justify-end gap-4">
          <motion.a
            href="#playground"
            className="flex items-center gap-2 rounded-full bg-sky-glow px-6 py-3 text-base font-semibold text-midnight transition hover:bg-white"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <PlayCircle className="h-5 w-5" />
            ابدأ رحلة اللعب
          </motion.a>
          <motion.a
            href="#tracks"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/20"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Globe className="h-5 w-5 text-mint" />
            استكشف المسارات
          </motion.a>
        </div>
        <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/5 px-4 py-5">
            <p className="text-3xl font-bold text-sand">80+</p>
            <p>لغة من حول العالم مع محتوى ثقافي حي.</p>
          </div>
          <div className="rounded-2xl bg-white/5 px-4 py-5">
            <p className="text-3xl font-bold text-mint">20 دقيقة</p>
            <p>متوسط وقت المهمة اليومية للحفاظ على عاداتك.</p>
          </div>
          <div className="rounded-2xl bg-white/5 px-4 py-5">
            <p className="text-3xl font-bold text-sunset">+92%</p>
            <p>من المتعلمين يشعرون بزيادة الثقة في النطق.</p>
          </div>
        </div>
      </motion.div>

      {floatingPlanets.map((planet, index) => (
        <motion.span
          key={index}
          className={`planet absolute ${planet.size} rounded-full opacity-80`}
          initial={{ opacity: 0, scale: 0.6, y: 80 }}
          animate={{ opacity: 0.9, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 * index }}
          aria-hidden
          style={{ ...planet.style, mixBlendMode: "screen" }}
        />
      ))}
    </section>
  );
}
