import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Construction, Palette, Code2, Accessibility } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/AnimatedSection";

export const Route = createFileRoute("/guidelines")({
  head: () => ({
    meta: [
      { title: "הנחיות לעיצוב ופיתוח — אמית" },
      { name: "description", content: "הנחיות לעיצוב ופיתוח בסביבה הדיגיטלית של רשת אמית — בקרוב." },
      { property: "og:title", content: "הנחיות לעיצוב ופיתוח — אמית" },
      { property: "og:description", content: "הנחיות עיצוב ופיתוח לצוות הדיגיטלי של אמית. בקרוב." },
    ],
  }),
  component: GuidelinesPage,
});

const VISUAL_LANGUAGE_DOC = "https://docs.google.com/document/d/1-PHnU9dqr5MG2gSRJuZFx_ERjrO6qV_p3TsZmdit0rg/edit?usp=sharing";

const planned = [
  {
    icon: Palette,
    title: "שפה ויזואלית",
    desc: "צבעי מותג, טיפוגרפיה, גריד ומרווחים — איך לשמור על אחידות בין הרכיבים.",
    href: VISUAL_LANGUAGE_DOC,
    cta: "פתיחת המסמך",
  },
  { icon: Code2, title: "תקני קוד", desc: "מבנה רכיבים, קונבנציות שמות, ניהול state ועקרונות Composition." },
  { icon: Accessibility, title: "נגישות", desc: "WCAG 2.1 AA: ניגודיות, ניווט מקלדת, ARIA וקוראי מסך." },
];

function GuidelinesPage() {
  return (
    <PageShell>
      <section className="relative z-10 px-4 sm:px-6 md:px-12 pt-6 pb-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-amit-mint/25 border border-amit-mint/50 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amit-forest mb-5"
        >
          <Construction className="h-4 w-4" />
          בעבודה — בקרוב מידע מורחב
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight"
        >
          הנחיות לעיצוב ופיתוח
          <br />
          <span className="bg-gradient-to-l from-amit-mint via-amit-teal to-amit-sky bg-clip-text text-transparent">
            בסביבה דיגיטלית
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-amit-navy/75 leading-relaxed"
        >
          העמוד הזה ירכז את ההנחיות הוויזואליות, הטכנולוגיות והפדגוגיות לעבודה
          בסביבת הפיתוח של אמית. כתיבה בקרוב.
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
                <div className="bg-amit-mint/30 h-14 w-14 rounded-2xl flex items-center justify-center mb-5 mx-auto">
                  <Icon className="h-7 w-7 text-amit-forest" strokeWidth={2.2} />
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
