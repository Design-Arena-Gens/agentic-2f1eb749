"use client";

import { motion } from "framer-motion";
import { Trophy, Timer, Sparkles } from "lucide-react";
import { missions } from "../data/missions";

export function MissionCarousel() {
  return (
    <section id="playground" className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-mint/20 p-3">
            <Trophy className="h-5 w-5 text-mint" />
          </span>
          <div>
            <h2 className="text-3xl font-bold text-white">مختبر المتعة اليومية</h2>
            <p className="text-sm text-white/60">
              تحديات قصيرة وغنية بالطاقة، تبني عادة لغوية مرنة وتُبقي حماسك مشتعلًا.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-white/70">
          <Sparkles className="h-4 w-4 text-sand" />
          يتم ضبط المهام تلقائيًا وفق تقدمك
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {missions.map((mission, index) => (
          <motion.article
            key={mission.id}
            className="relative flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-white/8 to-white/2 p-6 shadow-lg shadow-black/20"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                  <Timer className="h-4 w-4 text-sand" />
                  {mission.duration}
                </span>
                <span className="rounded-full bg-sunset/20 px-3 py-1 text-sunset">
                  +{mission.xp} XP
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">{mission.title}</h3>
              <ul className="space-y-2 text-sm text-white/75">
                {mission.steps.map((step) => (
                  <li
                    key={step}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
                  >
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-white/70">
              <span>المكافأة</span>
              <span className="rounded-full bg-mint/20 px-3 py-1 text-mint">
                {mission.reward}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
