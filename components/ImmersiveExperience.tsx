"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Headphones, Users, MapPinned } from "lucide-react";

const experiences = [
  {
    icon: BrainCircuit,
    title: "ذكاء يتكيّف معك",
    description:
      "يقيس مخبر التعلّم نبرتك، سرعة إجاباتك، ومزاجك اليومي ليُنشئ جدولاً مرنًا شخصيًا."
  },
  {
    icon: Headphones,
    title: "مسرح صوتي تفاعلي",
    description:
      "تقمص شخصية في حوار حي مع أصوات واقعية، واحصل على تقييم فوري للنطق والتعبير."
  },
  {
    icon: Users,
    title: "مسابقات أصدقاء مباشرة",
    description:
      "كوّن نادي لغوي مع أصدقائك، تحدوا بعضكم في بطولات أسبوعية، واربحوا مكافآت جماعية."
  },
  {
    icon: MapPinned,
    title: "جولات الواقع المعزز",
    description:
      "استخدم هواتفكم لاستكشاف الأسواق والمتاحف افتراضيًا، وتعلم تعابير حقيقية من السكان المحليين."
  }
];

export function ImmersiveExperience() {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-3xl font-bold text-white">تجربة منغمسَة داخل عالم حقيقي</h2>
        <p className="text-sm text-white/60">
          صُمم المحتوى بالتعاون مع معلّمين، صانعي ألعاب، وخبراء ثقافيين من أكثر من 30 دولة.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.title}
            className="glass-panel h-full rounded-3xl p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <experience.icon className="mb-3 h-10 w-10 text-sand" />
            <h3 className="mb-2 text-xl font-semibold text-white">{experience.title}</h3>
            <p className="text-sm text-white/70">{experience.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
