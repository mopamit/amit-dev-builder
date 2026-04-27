import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Search,
  ExternalLink,
  Bot,
  Gamepad2,
  Video,
  Sparkles,
  ImageIcon,
  Mic,
  Wrench,
  Code2,
  MessageSquare,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/AnimatedSection";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "כלים דיגיטליים למפתחים — אמית" },
      {
        name: "description",
        content:
          "מאגר כלים דיגיטליים למפתחים ומורים: משחוק, AI, וידאו, אנימציה ועוד. כולל קישור לבוט הכלים של אמית.",
      },
      { property: "og:title", content: "כלים דיגיטליים — אמית" },
      {
        property: "og:description",
        content: "מאגר כלים דיגיטליים מסונן לפי קטגוריות, עם קישור לבוט הכלים של אמית.",
      },
    ],
  }),
  component: ToolsPage,
});

type Tool = { name: string; url: string; desc: string };
type Category = { id: string; title: string; icon: typeof Sparkles; color: ColorKey; tools: Tool[] };
type ColorKey = "lime" | "sky" | "teal" | "mint" | "olive" | "navy";

const categories: Category[] = [
  {
    id: "interactive",
    title: "חוויות אינטראקטיביות ומשחוק",
    icon: Gamepad2,
    color: "lime",
    tools: [
      { name: "Kahoot!", url: "https://kahoot.com", desc: "פלטפורמה ליצירת חידונים אינטראקטיביים בזמן אמת ללמידה חווייתית." },
      { name: "Opinion Stage", url: "https://www.opinionstage.com", desc: "כלי ליצירת סקרים, שאלונים ודיונים אינטראקטיביים." },
      { name: "Common Ninja", url: "https://www.commoninja.com", desc: "פלטפורמה ליצירת ווידג'טים לאתרים: סקרים, טפסים וגלריות." },
      { name: "ThingLink", url: "https://www.thinglink.com", desc: "כלי להוספת תגיות אינטראקטיביות לתמונות, וידאו וסיורי 360°." },
      { name: "Wordwall", url: "https://wordwall.net", desc: "יצירת פעילויות אינטראקטיביות כמו משחקים וחידונים." },
      { name: "Genially", url: "https://genially.com", desc: "יצירת מצגות, משחקים ואינפוגרפיות אינטראקטיביות." },
      { name: "Quizlet", url: "https://quizlet.com", desc: "כלי ללמידה באמצעות כרטיסיות, תרגולים ומשחקים." },
      { name: "Interacty", url: "https://interacty.me", desc: "יצירת חוויות אינטראקטיביות וסיפורים דיגיטליים." },
      { name: "Mentimeter", url: "https://www.mentimeter.com", desc: "קליקרים, הצבעות וחידונים בזמן אמת במצגות." },
    ],
  },
  {
    id: "video",
    title: "עריכת וידאו ואנימציה",
    icon: Video,
    color: "sky",
    tools: [
      { name: "Runway", url: "https://runwayml.com", desc: "פלטפורמת AI לעריכת וידאו, תמונות ואפקטים." },
      { name: "Synthesia", url: "https://www.synthesia.io", desc: "יצירת סרטונים עם אווטרים מדברים ללא צורך בצילום." },
      { name: "HeyGen", url: "https://www.heygen.com", desc: "יצירת סרטונים עם דמויות AI ותסריטים אוטומטיים." },
      { name: "Higgsfield AI", url: "https://higgsfield.ai", desc: "כלי ליצירת תוכן וידאו יצירתי באמצעות בינה מלאכותית." },
      { name: "Kapwing", url: "https://www.kapwing.com", desc: "עורך וידאו אונליין עם כתוביות וכלי עריכה נוחים." },
      { name: "Videvo", url: "https://www.videvo.net", desc: "מאגר חינמי של סרטונים ותמונות לשימוש חופשי." },
      { name: "D-ID", url: "https://www.d-id.com", desc: "הפיכת תמונות לדמויות מדברות." },
      { name: "Doodle Maker", url: "https://www.doodlemaker.com", desc: "יצירת סרטוני דודל (ציור) עם קריינות אוטומטית." },
      { name: "Camtasia", url: "https://www.techsmith.com/camtasia.html", desc: "תוכנת הקלטת מסך ועריכת סרטונים מקצועית." },
      { name: "FlipHTML5", url: "https://fliphtml5.com", desc: "יצירת ספרים דיגיטליים אינטראקטיביים מקבצים." },
      { name: "Pika", url: "https://pika.art", desc: "יצירת סרטוני וידאו קצרים מטקסט או תמונות." },
      { name: "Kling AI", url: "https://www.klingai.com", desc: "פלטפורמה ליצירת וידאו ותוכן חזותי באמצעות AI." },
      { name: "Skybox AI", url: "https://skybox.blockadelabs.com", desc: "יצירת סביבות תלת־ממדיות ו־360° מתוך תיאור טקסטואלי." },
    ],
  },
  {
    id: "ai-chat",
    title: "AI — שיחה וכתיבה",
    icon: MessageSquare,
    color: "teal",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com", desc: "כלי ליצירת תוכן, רעיונות, סיכומים והסברים חכמים." },
    ],
  },
  {
    id: "ai-image",
    title: "AI — יצירת תמונות",
    icon: ImageIcon,
    color: "mint",
    tools: [
      { name: "Midjourney", url: "https://www.midjourney.com", desc: "יצירת תמונות אומנותיות באמצעות תיאור טקסטואלי." },
      { name: "Perchance AI", url: "https://perchance.org/ai-text-to-image-generator", desc: "כלי חינמי ופשוט ליצירת תמונות AI ללא הרשמה." },
    ],
  },
  {
    id: "ai-dev",
    title: "AI — פיתוח ואוטומציה",
    icon: Code2,
    color: "olive",
    tools: [
      { name: "Lovable", url: "https://lovable.dev", desc: "יצירת אתרים ואפליקציות באמצעות שיחה עם AI." },
    ],
  },
  {
    id: "voice",
    title: "קול ודיבור",
    icon: Mic,
    color: "navy",
    tools: [
      { name: "Murf AI", url: "https://murf.ai", desc: "הפיכת טקסט לקריינות קולית במגוון קולות." },
      { name: "ElevenLabs", url: "https://www.elevenlabs.io", desc: "יצירת קולות AI טבעיים ואיכותיים במיוחד." },
    ],
  },
  {
    id: "extras",
    title: "כלים משלימים",
    icon: Wrench,
    color: "lime",
    tools: [
      { name: "MathType", url: "https://www.wiris.com/mathtype", desc: "כלי לכתיבת נוסחאות מתמטיות במסמכים." },
      { name: "Gamma", url: "https://gamma.app", desc: "יצירת מצגות איכותיות ומעוצבות במהירות." },
      { name: "Bitly", url: "https://bit.ly", desc: "קיצור קישורים וניהול הפניות." },
    ],
  },
];

const colorMap: Record<ColorKey, { bg: string; text: string; ring: string; chip: string }> = {
  lime: { bg: "bg-amit-lime", text: "text-amit-olive", ring: "ring-amit-lime/40", chip: "bg-amit-lime/20 border-amit-lime/40" },
  sky: { bg: "bg-amit-sky", text: "text-amit-teal", ring: "ring-amit-sky/40", chip: "bg-amit-sky/20 border-amit-sky/40" },
  teal: { bg: "bg-amit-teal", text: "text-amit-teal", ring: "ring-amit-teal/40", chip: "bg-amit-teal/15 border-amit-teal/40" },
  mint: { bg: "bg-amit-mint", text: "text-amit-forest", ring: "ring-amit-mint/40", chip: "bg-amit-mint/25 border-amit-mint/40" },
  olive: { bg: "bg-amit-olive", text: "text-amit-olive", ring: "ring-amit-olive/40", chip: "bg-amit-olive/15 border-amit-olive/40" },
  navy: { bg: "bg-amit-navy", text: "text-amit-navy", ring: "ring-amit-navy/40", chip: "bg-amit-navy/10 border-amit-navy/30" },
};

function ToolsPage() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .filter((c) => activeCat === "all" || c.id === activeCat)
      .map((c) => ({
        ...c,
        tools: c.tools.filter(
          (t) =>
            !q ||
            t.name.toLowerCase().includes(q) ||
            t.desc.toLowerCase().includes(q),
        ),
      }))
      .filter((c) => c.tools.length > 0);
  }, [query, activeCat]);

  const totalCount = categories.reduce((s, c) => s + c.tools.length, 0);

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative z-10 px-4 sm:px-6 md:px-12 pt-6 pb-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-amit-sky/20 border border-amit-sky/40 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amit-teal mb-5"
        >
          <Sparkles className="h-4 w-4" />
          {totalCount} כלים נבחרים · מתעדכן באופן שוטף
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight"
        >
          כלים דיגיטליים
          <br />
          <span className="bg-gradient-to-l from-amit-sky via-amit-teal to-amit-mint bg-clip-text text-transparent">
            לצוות הדיגיטלי
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-amit-navy/75 leading-relaxed"
        >
          מאגר כלים שאנחנו אוהבים — לחוויות אינטראקטיביות, וידאו, AI, קול, ועוד.
          חפשו, סננו, ופתחו את הבוט שלנו לקבלת המלצה מותאמת.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          href="https://bit.ly/DigitalAmit"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-3 bg-amit-navy text-white ps-5 pe-7 py-3.5 rounded-full font-bold shadow-[var(--shadow-soft)] hover:bg-amit-teal transition"
        >
          <span className="bg-amit-lime/30 rounded-full p-1.5">
            <Bot className="h-5 w-5" />
          </span>
          פתחו את בוט הכלים שלנו
        </motion.a>
      </section>

      {/* Search & filter */}
      <AnimatedSection className="relative z-10 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
        <div className="bg-white/70 backdrop-blur rounded-3xl p-4 sm:p-5 border border-amit-navy/10 shadow-[var(--shadow-card)]">
          <div className="relative">
            <Search className="absolute end-4 top-1/2 -translate-y-1/2 h-5 w-5 text-amit-navy/40" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="חיפוש כלי לפי שם או תיאור…"
              className="w-full bg-white border border-amit-navy/15 rounded-2xl py-3 ps-4 pe-12 text-base focus:outline-none focus:ring-2 focus:ring-amit-teal/40 focus:border-amit-teal transition"
              aria-label="חיפוש כלים"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <CategoryChip active={activeCat === "all"} onClick={() => setActiveCat("all")} label="הכל" colorClasses="bg-amit-navy/10 border-amit-navy/30" activeClasses="bg-amit-navy text-white border-amit-navy" />
            {categories.map((c) => {
              const cm = colorMap[c.color];
              const Icon = c.icon;
              return (
                <CategoryChip
                  key={c.id}
                  active={activeCat === c.id}
                  onClick={() => setActiveCat(c.id)}
                  label={c.title}
                  icon={<Icon className="h-3.5 w-3.5" />}
                  colorClasses={cm.chip}
                  activeClasses={`${cm.bg} text-white border-transparent`}
                />
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Tools grid by category */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 py-10 max-w-6xl mx-auto space-y-12">
        {filtered.length === 0 && (
          <div className="text-center py-16 text-amit-navy/60 font-semibold">
            לא נמצאו כלים מתאימים. נסו חיפוש אחר.
          </div>
        )}
        {filtered.map((cat) => {
          const cm = colorMap[cat.color];
          const Icon = cat.icon;
          return (
            <AnimatedSection key={cat.id}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`${cm.bg} h-11 w-11 rounded-2xl flex items-center justify-center ring-4 ring-white/40`}>
                  <Icon className="h-5 w-5 text-white" strokeWidth={2.2} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-amit-navy">{cat.title}</h2>
                <span className="text-sm font-bold text-amit-navy/40">({cat.tools.length})</span>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {cat.tools.map((t) => (
                  <motion.a
                    key={t.name}
                    variants={staggerItem}
                    whileHover={{ y: -4 }}
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white rounded-2xl p-5 border border-amit-navy/8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-amit-navy">{t.name}</h3>
                      <ExternalLink className={`h-4 w-4 ${cm.text} opacity-50 group-hover:opacity-100 transition shrink-0 mt-1`} />
                    </div>
                    <p className="text-sm text-amit-navy/70 leading-relaxed">{t.desc}</p>
                    <div className={`mt-3 text-xs font-semibold ${cm.text} truncate`}>
                      {t.url.replace(/^https?:\/\//, "")}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </AnimatedSection>
          );
        })}
      </div>
    </PageShell>
  );
}

function CategoryChip({
  label,
  active,
  onClick,
  icon,
  colorClasses,
  activeClasses,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  colorClasses: string;
  activeClasses: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold border transition ${
        active ? activeClasses : `${colorClasses} text-amit-navy hover:bg-white`
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
