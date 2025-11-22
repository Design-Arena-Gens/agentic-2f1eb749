"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "سارة - الإمارات",
    role: "مصممة ألعاب تعليمية",
    quote:
      "لم أشعر من قبل أن تعلّم اللغة يُشبه دخول مدينة ملاهٍ ثقافية. مهام Karaoke جعلتني أتحدث الإسبانية بثقة لأول مرة."
  },
  {
    name: "ماكس - ألمانيا",
    role: "مصور رحلات",
    quote:
      "ركّزت على السواحلية قبل رحلة شرق إفريقيا. القصص التفاعلية مع الواقع المعزز منحتني تعابير محلية في وقت قياسي."
  },
  {
    name: "ليلى - المغرب",
    role: "طالبة لغات",
    quote:
      "لعبة Story Quest جعلتني أعشق اليابانية. أحببت المتابعة اليومية لأن كل يوم له طابع جديد."
  }
];

export function Testimonials() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-white/5 p-3">
          <Quote className="h-5 w-5 text-sky-glow" />
        </span>
        <div>
          <h2 className="text-3xl font-bold text-white">أصوات من المجتمع</h2>
          <p className="text-sm text-white/60">
            مجتمع LingoJoy يضم متعلمين، معلمين، ومبدعين يشاركون شغف اللغات.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.name}
            className="glass-panel h-full rounded-3xl p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <p className="mb-4 text-sm leading-relaxed text-white/75">“{testimonial.quote}”</p>
            <footer className="text-xs uppercase tracking-wide text-white/50">
              <span className="font-semibold text-white">{testimonial.name}</span>
              <span className="block text-white/40">{testimonial.role}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
