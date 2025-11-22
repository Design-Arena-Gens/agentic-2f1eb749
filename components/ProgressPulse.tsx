"use client";

import { motion } from "framer-motion";
import { Activity, Flame } from "lucide-react";

const streakData = [
  { day: "الأحد", value: 3 },
  { day: "الاثنين", value: 5 },
  { day: "الثلاثاء", value: 6 },
  { day: "الأربعاء", value: 4 },
  { day: "الخميس", value: 7 },
  { day: "الجمعة", value: 8 },
  { day: "السبت", value: 9 }
];

export function ProgressPulse() {
  const maxValue = Math.max(...streakData.map((d) => d.value));

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-sunset/20 p-3">
            <Activity className="h-5 w-5 text-sunset" />
          </span>
          <div>
            <h2 className="text-3xl font-bold text-white">نبض تقدّمك</h2>
            <p className="text-sm text-white/60">
              خوارزمية الحماس تتابع تقدّمك وتُعدّل الأهداف لتحقيق حفظ طويل الأمد.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-white/70">
          <Flame className="h-4 w-4 text-sand" />
          سلسلة التعلم الحالية: 42 يومًا
        </div>
      </div>

      <div className="glass-panel overflow-hidden rounded-3xl p-6">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">طاقتك الأسبوعية</h3>
            <div className="flex items-end justify-between gap-3">
              {streakData.map((day, index) => (
                <motion.div
                  key={day.day}
                  className="relative flex w-full flex-col items-center gap-2 text-xs text-white/70"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  style={{ transformOrigin: "bottom" }}
                >
                  <motion.span
                    className="w-full rounded-full bg-gradient-to-t from-sky-glow/40 to-mint"
                    style={{ height: `${(day.value / maxValue) * 160}px`, minHeight: "12px" }}
                    whileHover={{ translateY: -6 }}
                  />
                  <span>{day.day}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-3xl bg-white/5 p-5 text-sm text-white/70">
            <div>
              <h4 className="text-base font-semibold text-white">حالتك اليوم</h4>
              <p>حافظت على سرعة إجابات 92٪ في مهمة النطق. رائع!</p>
            </div>
            <div>
              <h4 className="text-base font-semibold text-white">اقتراح فوري</h4>
              <p>
                جرب تحدي Karaoke الجديد باليابانية لتحسين الجمل الطويلة. 12 دقيقة فقط
                لاستكماله.
              </p>
            </div>
            <button className="w-full rounded-full bg-mint px-4 py-2 text-sm font-semibold text-midnight transition hover:bg-white">
              ابدأ تحدي اليوم
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
