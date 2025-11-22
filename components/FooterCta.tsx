"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function FooterCta() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-glow/30 via-sunset/20 to-mint/20 p-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-white/80">
          <Sparkles className="h-4 w-4 text-sand" />
          جاهز لجولة تعريفية مجانية عبر التطبيق؟
        </div>
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          انطلق في مغامرة لغوية عالمية خلال ثوانٍ
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-white/70">
          سجّل الآن لتحصل على 7 أيام من المحتوى الممتع المجاني، تحديات الواقع المعزز، ودروس
          مباشرة مع معلّمين دوليين.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="#"
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-midnight transition hover:bg-sand"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.97 }}
          >
            ابدأ الآن
            <ArrowRight className="h-4 w-4" />
          </motion.a>
          <motion.a
            href="#tracks"
            className="rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            جدولة جلسة تعريفية
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
