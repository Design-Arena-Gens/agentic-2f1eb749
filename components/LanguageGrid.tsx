"use client";

import { motion } from "framer-motion";
import { Compass, BookOpenCheck } from "lucide-react";
import { languageTracks } from "../data/languages";

export function LanguageGrid() {
  return (
    <section id="tracks" className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-white/5 p-3">
            <Compass className="h-5 w-5 text-sand" />
          </span>
          <div>
            <h2 className="text-3xl font-bold text-white">مسارات لغوية عالمية</h2>
            <p className="text-sm text-white/60">
              اختر الرحلة التي تناسب مستواك، وسيقوم مختبر الذكاء بدعمك بخطوات مرنة.
            </p>
          </div>
        </div>
        <div className="hidden text-sm text-white/60 md:block">
          +80 لغة متاحة | تحديثات أسبوعية للقصص والألعاب
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {languageTracks.map((track, index) => (
          <motion.article
            key={track.id}
            className="glass-panel relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-2 hover:bg-white/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <span className="absolute right-6 top-6 rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
              {track.level}
            </span>
            <div className="mb-4 flex items-baseline justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-sand">{track.nativeName}</h3>
                <p className="text-sm text-white/70">{track.name}</p>
              </div>
              <span className="rounded-full bg-sunset/20 px-3 py-1 text-xs text-sunset">
                {track.continent}
              </span>
            </div>
            <p className="mb-4 text-sm text-white/75">{track.funFact}</p>
            <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/60">
              <BookOpenCheck className="h-4 w-4 text-mint" />
              ركّز على
            </h4>
            <ul className="mb-4 flex flex-wrap gap-2 text-xs">
              {track.focusSkills.map((skill) => (
                <li key={skill} className="rounded-full bg-white/10 px-3 py-1 text-white/80">
                  {skill}
                </li>
              ))}
            </ul>
            <div className="space-y-2 text-sm text-white/80">
              {track.challenges.map((challenge) => (
                <div key={challenge.title} className="rounded-2xl bg-white/5 p-3">
                  <p className="font-semibold text-mint">{challenge.title}</p>
                  <p className="text-xs text-white/60">{challenge.description}</p>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
