import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, Lightbulb } from "lucide-react";

export type DetailEntry = {
  title: string;
  questions: string[];
  tips: string[];
};

export function ComponentDetails({ entries, accent = "lime" }: { entries: DetailEntry[]; accent?: "lime" | "sky" | "mint" | "teal" }) {
  const accentMap = {
    lime: "text-amit-olive border-amit-lime/40 bg-amit-lime/10",
    sky: "text-amit-teal border-amit-sky/40 bg-amit-sky/10",
    mint: "text-amit-forest border-amit-mint/40 bg-amit-mint/10",
    teal: "text-amit-teal border-amit-teal/40 bg-amit-teal/10",
  };
  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {entries.map((entry, i) => (
        <motion.div
          key={entry.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <AccordionItem
            value={entry.title}
            className={`border rounded-2xl px-5 sm:px-6 ${accentMap[accent]} backdrop-blur transition hover:shadow-[var(--shadow-card)]`}
          >
            <AccordionTrigger className="text-right hover:no-underline py-5">
              <span className="text-base sm:text-lg font-bold text-amit-navy">{entry.title}</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid md:grid-cols-2 gap-5 pb-2">
                <div className="bg-white/70 rounded-xl p-4 border border-amit-navy/5">
                  <div className="flex items-center gap-2 mb-3 text-amit-teal font-bold text-sm">
                    <HelpCircle className="h-4 w-4" />
                    שאלות למחשבה
                  </div>
                  <ul className="space-y-2 text-sm text-amit-navy/80 leading-relaxed">
                    {entry.questions.map((q) => (
                      <li key={q} className="flex gap-2">
                        <span className="text-amit-lime font-bold">•</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/70 rounded-xl p-4 border border-amit-navy/5">
                  <div className="flex items-center gap-2 mb-3 text-amit-olive font-bold text-sm">
                    <Lightbulb className="h-4 w-4" />
                    המלצות וטיפים
                  </div>
                  <ul className="space-y-2 text-sm text-amit-navy/80 leading-relaxed">
                    {entry.tips.map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="text-amit-sky font-bold">✓</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
}
