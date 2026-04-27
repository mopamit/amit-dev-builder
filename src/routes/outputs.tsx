import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Construction, FileBox, GraduationCap, Sparkles } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/AnimatedSection";

export const Route = createFileRoute("/outputs")({
  head: () => ({
    meta: [
      { title: "תוצרים דיגיטליים — אמית" },
      { name: "description", content: "גלריית תוצרים דיגיטליים של הצוות. בקרוב." },
      { property: "og:title", content: "תוצרים דיגיטליים — אמית" },
      { property: "og:description", content: "גלריית תוצרים דיגיטליים של הצוות הדיגיטלי באמית. בקרוב." },
    ],
  }),
  component: OutputsPage,
});

const planned = [
  { icon: FileBox, title: "תבניות שיעור", desc: "תבניות מוכנות לשימוש לפי סוגי תוכן — עברית, מדעים, מתמטיקה ועוד." },
  { icon: GraduationCap, title: "מערכי הוראה", desc: "מערכי הוראה מלאים שעוצבו בבילדר — מקור השראה ולמידה." },
  { icon: Sparkles, title: "פרויקטים נבחרים", desc: "תוצרים יוצאי דופן של מורות ומורים שמדגימים את כוח הכלי." },
];

function OutputsPage() {
  return (
    <PageShell>
      <section className="relative z-10 px-4 sm:px-6 md:px-12 pt-6 pb-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-amit-lime/25 border border-amit-lime/50 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amit-olive mb-5"
        >
          <Construction className="h-4 w-4" />
          בעבודה — תוצרים יתווספו בהמשך
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight"
        >
          תוצרים דיגיטליים
          <br />
          <span className="bg-gradient-to-l from-amit-lime via-amit-mint to-amit-teal bg-clip-text text-transparent">
            של הצוות שלנו
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-amit-navy/75 leading-relaxed"
        >
          כאן יוצגו תוצרים דיגיטליים נבחרים של הצוות — תבניות, מערכי הוראה
          ופרויקטים מיוחדים שאפשר ללמוד מהם ולהשתמש בהם.
        </motion.p>
      </section>

      <AnimatedSection className="relative z-10 px-4 sm:px-6 md:px-12 pb-16 max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-3 gap-5"
        >
          {planned.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-7 border border-amit-navy/8 shadow-[var(--shadow-card)] text-center"
              >
                <div className="bg-amit-lime/30 h-14 w-14 rounded-2xl flex items-center justify-center mb-5 mx-auto">
                  <Icon className="h-7 w-7 text-amit-olive" strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-amit-navy/70 text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-4 text-xs font-bold text-amit-navy/40 uppercase tracking-wider">בקרוב</div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatedSection>
    </PageShell>
  );
}
