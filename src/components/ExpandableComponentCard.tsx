import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Lightbulb } from "lucide-react";
import { staggerItem } from "@/components/AnimatedSection";

export type AmitColor = "navy" | "sky" | "teal" | "mint" | "olive" | "lime" | "forest";

export type ExpandableComponent = {
  imageSrc?: string;
  icon?: React.ReactNode;
  title: string;
  desc: string;
  color: AmitColor;
  questions?: string[];
  tips?: string[];
};

const bgMap: Record<AmitColor, string> = {
  navy: "bg-amit-navy",
  sky: "bg-amit-sky",
  teal: "bg-amit-teal",
  mint: "bg-amit-mint",
  olive: "bg-amit-olive",
  lime: "bg-amit-lime",
  forest: "bg-amit-forest",
};

export function ExpandableComponentCard(props: ExpandableComponent) {
  const { imageSrc, icon, title, desc, color, questions, tips } = props;
  const [open, setOpen] = useState(false);
  const hasDetails = (questions && questions.length > 0) || (tips && tips.length > 0);

  return (
    <motion.article
      variants={staggerItem}
      layout
      className={`group relative bg-white rounded-2xl border border-amit-navy/8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 overflow-hidden ${
        open ? "ring-2 ring-amit-lime/40" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => hasDetails && setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`details-${title}`}
        className="w-full text-right p-6 cursor-pointer disabled:cursor-default"
        disabled={!hasDetails}
      >
        <div
          className={`absolute -top-10 -left-10 h-32 w-32 ${bgMap[color]} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}
        />
        <div className="flex items-start gap-4">
          <motion.div
            whileHover={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 0.5 }}
            className="shrink-0 h-16 w-16 sm:h-18 sm:w-18 rounded-3xl flex items-center justify-center bg-white border border-amit-navy/8 shadow-[var(--shadow-card)] p-2.5"
          >
            {imageSrc ? (
              <img src={imageSrc} alt={title} className="h-full w-full object-contain" loading="lazy" />
            ) : (
              <div className={`h-full w-full rounded-2xl ${bgMap[color]}/15 flex items-center justify-center text-amit-navy`}>
                {icon}
              </div>
            )}
          </motion.div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-amit-navy">{title}</h3>
              {hasDetails && (
                <motion.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-amit-navy/50"
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.span>
              )}
            </div>
            <p className="mt-1.5 text-amit-navy/70 text-sm leading-relaxed">{desc}</p>
            {hasDetails && (
              <span className="mt-2 inline-block text-[11px] font-bold text-amit-teal/80 tracking-wide uppercase">
                {open ? "סגירת פירוט ▲" : "לחצו לפירוט מלא ▼"}
              </span>
            )}
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && hasDetails && (
          <motion.div
            id={`details-${title}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 grid md:grid-cols-2 gap-4">
              {questions && questions.length > 0 && (
                <div className="bg-amit-lime/10 border border-amit-lime/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3 text-amit-olive font-bold text-sm">
                    <HelpCircle className="h-4 w-4" />
                    שאלות למחשבה
                  </div>
                  <ul className="space-y-2 text-sm text-amit-navy/85 leading-relaxed">
                    {questions.map((q) => (
                      <li key={q} className="flex gap-2">
                        <span className="text-amit-lime font-bold leading-snug">•</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {tips && tips.length > 0 && (
                <div className="bg-amit-sky/10 border border-amit-sky/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3 text-amit-teal font-bold text-sm">
                    <Lightbulb className="h-4 w-4" />
                    המלצות לביצוע
                  </div>
                  <ul className="space-y-2 text-sm text-amit-navy/85 leading-relaxed">
                    {tips.map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="text-amit-sky font-bold leading-snug">✓</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
