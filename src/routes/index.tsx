import { createFileRoute } from "@tanstack/react-router";
import {
  FileText,
  Image as ImageIcon,
  Video,
  Code2,
  Volume2,
  StickyNote,
  PenLine,
  Type,
  MoveHorizontal,
  ListChecks,
  Layers,
  Sparkles,
  ShieldCheck,
  Accessibility,
  ArrowLeft,
  Github,
  BookOpen,
} from "lucide-react";
import { StyledCircularIcon } from "@/components/StyledCircularIcon";
import amitLogo from "@/assets/amit-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Builder אמית — סביבת בנייה דיגיטלית מונגשת למפתחים" },
      {
        name: "description",
        content:
          "תיעוד טכני ופדגוגי לבילדר של רשת אמית — סביבת בנייה דיגיטלית מונגשת ליצירת שיעורים אינטראקטיביים. מדריך רכיבים למפתחים.",
      },
      { property: "og:title", content: "Builder אמית — סביבת בנייה מונגשת" },
      {
        property: "og:description",
        content: "מדריך רכיבים ותיעוד למפתחים של הבילדר הדיגיטלי המונגש של רשת אמית.",
      },
    ],
  }),
  component: LandingPage,
});

const contentComponents = [
  {
    icon: FileText,
    title: "טקסט",
    desc: "הזנת טקסטים ופסקאות עם קיצורי עיצוב מלאים (Bold, Italic, יישור, רווחים). מומלץ עד שתיים-שלוש שורות לפסקה.",
    color: "navy" as const,
  },
  {
    icon: ImageIcon,
    title: "תמונה",
    desc: "העלאה מהמחשב/דרייב, בחירה ממאגר או יצירה ב-AI. עדיף להטמיע תמונה בתוך רכיב טקסט עבור הקשר דידקטי.",
    color: "sky" as const,
  },
  {
    icon: Video,
    title: "סרטון",
    desc: "העלאת MP4 או הטמעה מ-YouTube ו-Vimeo. תמיכה בשאלות קופצות במהלך הצפייה. כתוביות הן חובה.",
    color: "teal" as const,
  },
  {
    icon: Code2,
    title: "הטמעה",
    desc: "הטמעת תוכן מקוון מאתרים חיצוניים דרך קישור ייעודי. שימו לב — למידה במוטמעים אינה נשמרת במערכת.",
    color: "olive" as const,
  },
  {
    icon: Volume2,
    title: "שמע",
    desc: "העלאת קובץ אודיו: הסבר, שיר, פודקאסט. תומך בהנגשת טקסט ולמידה רב-חושית. מומלץ לצרף תמליל.",
    color: "mint" as const,
  },
  {
    icon: StickyNote,
    title: "הערה",
    desc: "הוספת הנחיות והבהרות בצבעים שונים, מחוץ לרצף הלמידה. שימוש עקבי בצבע מסייע לזיהוי אופי ההערה.",
    color: "lime" as const,
  },
];

const exerciseComponents = [
  {
    icon: PenLine,
    title: "פסקה",
    desc: "תרגיל פתוח עם תיבת תשובה. תומך בפסקה ריקה, השלמת טקסט קיים או משיכת תשובה לטבלה.",
    color: "teal" as const,
  },
  {
    icon: Type,
    title: "תשובה קצרה",
    desc: "שאלה אחת או רצף שאלות קצרות. אפשרות להגדיר תשובה מדויקת לבדיקה אוטומטית (מילה, שורש וכו׳).",
    color: "sky" as const,
  },
  {
    icon: MoveHorizontal,
    title: "משיכת תשובה",
    desc: "גרירת מילים או ביטויים למיקום הנכון בטקסט. תומך בלמידה אקטיבית ובארגון מידע.",
    color: "mint" as const,
  },
  {
    icon: ListChecks,
    title: "בחירה מרובה",
    desc: "שאלות אמריקאיות עם תשובה אחת או מספר תשובות נכונות. מתאים לבדיקת ידע ולתרגול ממוקד.",
    color: "olive" as const,
  },
];

// AMIT drive icon IDs from prompt
const driveIcons = {
  start: "1n24RcSHlP_kalrDjtDWAkbGfDOo1AVUx",
  instructions: "11brKm4UhEQOL3dG4NbJnRYYUugpOnV4r",
  settings: "1Z3dKftDfk8_p_fj1V2t-yrcWpUNMj2Is",
  trophy: "1sc7nR8OGs-Vmp11ThxwtBMm3Q0uc2qen",
  hint: "1f4OwKXsOmIudR0stREmPTkBzi1tLd8RZ",
  levels: "1oFqmMOL8gw7XHi0Q7fGdK-EQ1JQmKhOg",
  menu: "1w4vgV6BhjEoUX7r8zcdil4TdqoZICGHp",
  timer: "1HgdXB6UDu2oSCaM_Ip76KS4ecTCSQWkE",
  navForward: "14ZYoGYRBytjpVQKIMrhL7O1fz0g0EFho",
  navBack: "1n4wFOT_gFbVTpvFKbPkto8K4_3-3ZXkQ",
  coins: "1gPyOe2mopw1D_fSCuVaFpDtp-S54jHqj",
  heart: "1DL9Y1-qg4j79TVoly6GVe1ziwTwfkKfD",
  streak: "1NxEIWmZ3i_9TWnSGAQ2UuDJnlTlgyADs",
  reset: "1Fvt--8I3VF9zK_Bi6_Dech_COZbAwuJ-",
  home: "1GQcqcC7jSx1OPvKq39TxS_jhNrokQ4J9",
};

function LandingPage() {
  return (
    <div dir="rtl" className="min-h-screen relative overflow-x-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amit-lime/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-amit-sky/20 blur-3xl" />

      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 md:px-12 pt-6 pb-4 flex items-center justify-between gap-4 flex-wrap-reverse">
        <nav className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-amit-navy/70">
          <a href="#components" className="hover:text-amit-navy transition">רכיבים</a>
          <span className="opacity-30">·</span>
          <a href="#icons" className="hover:text-amit-navy transition">אייקונים</a>
          <span className="opacity-30">·</span>
          <a href="#stack" className="hover:text-amit-navy transition">מפתחים</a>
        </nav>
        <img
          src={amitLogo}
          alt="לוגו רשת אמית"
          className="h-10 sm:h-12 md:h-16 w-auto object-contain"
        />
      </header>

      {/* Hero */}
      <section className="relative z-10 px-4 sm:px-6 md:px-12 pt-8 sm:pt-12 pb-16 sm:pb-20 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-amit-lime/20 border border-amit-lime/40 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amit-olive mb-6">
          <Sparkles className="h-4 w-4" />
          תיעוד למפתחים · גרסה 1.0
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
          הבילדר הדיגיטלי
          <br />
          <span className="bg-gradient-to-l from-amit-sky to-amit-teal bg-clip-text text-transparent">
            המונגש של אמית
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-amit-navy/75 leading-relaxed">
          סביבת בנייה ליצירת שיעורים אינטראקטיביים, נגישים ומותאמים אישית.
          רכיבי הצגת תוכן ורכיבי תרגול שמאפשרים למורים לבנות חוויית למידה עשירה — ולכם, המפתחים, ארכיטקטורת רכיבים ברורה ומודולרית.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#components"
            className="group inline-flex items-center gap-3 bg-amit-navy text-white px-7 py-3.5 rounded-full font-bold shadow-[var(--shadow-soft)] hover:bg-amit-teal transition"
          >
            צלילה לרכיבים
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition" />
          </a>
          <a
            href="#stack"
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-amit-navy/15 text-amit-navy px-6 py-3.5 rounded-full font-semibold hover:bg-white transition"
          >
            <BookOpen className="h-5 w-5" />
            המדריך הטכני
          </a>
        </div>

        {/* Stat strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "10+", v: "סוגי רכיבים" },
            { k: "WCAG 2.1", v: "תקן נגישות" },
            { k: "RTL", v: "תמיכה מלאה" },
            { k: "AI", v: "יצירת תכנים" },
          ].map((s) => (
            <div
              key={s.v}
              className="bg-white/70 backdrop-blur rounded-2xl p-5 border border-amit-navy/10 shadow-[var(--shadow-card)]"
            >
              <div className="text-3xl font-black text-amit-teal">{s.k}</div>
              <div className="text-sm font-semibold text-amit-navy/70 mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Content Components */}
      <section id="components" className="relative z-10 px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10 gap-4">
          <StyledCircularIcon driveId={driveIcons.instructions} alt="הוראות" color="lime" size="lg" />
          <div>
            <div className="text-xs sm:text-sm font-bold text-amit-lime tracking-widest uppercase">חלק א׳</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2">רכיבי הצגת תוכן</h2>
            <p className="text-amit-navy/70 mt-3 max-w-xl mx-auto">
              רכיבים שמשמשים להעברת מידע לתלמיד — טקסט, מדיה, הטמעות והערות.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contentComponents.map((c) => (
            <ComponentCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      {/* Exercise Components */}
      <section className="relative z-10 px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10 gap-4">
          <StyledCircularIcon driveId={driveIcons.trophy} alt="הישגים" color="sky" size="lg" />
          <div>
            <div className="text-xs sm:text-sm font-bold text-amit-mint tracking-widest uppercase">חלק ב׳</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2">רכיבי תרגול</h2>
            <p className="text-amit-navy/70 mt-3 max-w-xl mx-auto">
              רכיבים אינטראקטיביים שמאפשרים לתלמיד לתרגל, לכתוב ולהיבדק.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {exerciseComponents.map((c) => (
            <ComponentCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      {/* Icon Library Showcase */}
      <section id="icons" className="relative z-10 px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs sm:text-sm font-bold text-amit-teal tracking-widest uppercase">ספריית UI</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2">אייקונים עגולים מותאמים אמית</h2>
          <p className="text-amit-navy/70 mt-3 max-w-2xl mx-auto">
            ערכת אייקונים עקבית למצבי המשחק והניווט בבילדר. כל אייקון מגיע עם Fallback אוטומטי
            במקרה שתמונת המקור לא נטענת — לשמירה על שלמות עיצובית.
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur rounded-3xl border border-amit-navy/10 p-8 md:p-10 shadow-[var(--shadow-card)]">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 place-items-center">
            <IconLabel id={driveIcons.start} label="התחל" color="lime" fallback={Sparkles} />
            <IconLabel id={driveIcons.home} label="בית" color="navy" />
            <IconLabel id={driveIcons.menu} label="תפריט" color="teal" />
            <IconLabel id={driveIcons.settings} label="הגדרות" color="sky" />
            <IconLabel id={driveIcons.instructions} label="הוראות" color="olive" />
            <IconLabel id={driveIcons.hint} label="רמז" color="lime" />
            <IconLabel id={driveIcons.timer} label="טיימר" color="forest" />
            <IconLabel id={driveIcons.heart} label="לב" color="navy" />
            <IconLabel id={driveIcons.coins} label="מטבעות" color="lime" />
            <IconLabel id={driveIcons.trophy} label="גביע" color="sky" />
            <IconLabel id={driveIcons.streak} label="סטרייק" color="teal" />
            <IconLabel id={driveIcons.levels} label="רמות" color="mint" />
            <IconLabel id={driveIcons.reset} label="איפוס" color="olive" />
            <IconLabel id={driveIcons.navForward} label="קדימה" color="forest" />
            <IconLabel id={driveIcons.navBack} label="אחורה" color="navy" />
            <IconLabel id={driveIcons.menu} label="עוד" color="sky" />
          </div>
        </div>
      </section>

      {/* Developer / Stack */}
      <section id="stack" className="relative z-10 px-6 md:px-12 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-5">
          <FeatureBlock
            icon={Accessibility}
            title="נגישות מובנית"
            desc="כל רכיב נבנה בהתאם לתקן WCAG 2.1 AA — ניווט מקלדת, ARIA, ניגודיות צבעים ותמיכה בקוראי מסך."
            color="bg-amit-lime/15"
            iconColor="text-amit-olive"
          />
          <FeatureBlock
            icon={Layers}
            title="ארכיטקטורת רכיבים"
            desc="רכיבים מודולריים, Composition-friendly, עם API ברור. קלים להרחבה ולקסטומיזציה."
            color="bg-amit-sky/15"
            iconColor="text-amit-teal"
          />
          <FeatureBlock
            icon={ShieldCheck}
            title="פדגוגיה ראשונה"
            desc="כל רכיב מלווה בשאלות למחשבה ובהמלצות לביצוע — תיעוד שמשלב מפתחים ומורים."
            color="bg-amit-mint/15"
            iconColor="text-amit-forest"
          />
        </div>

        <div className="mt-10 bg-amit-navy text-white rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-[var(--shadow-soft)]">
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-amit-lime/30 blur-3xl" />
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-amit-sky/30 blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white">
              מוכנים להתחיל לבנות?
            </h2>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">
              סקור את התיעוד המלא של הרכיבים, ה-Hooks וה-API. אם יש שאלות — צוות הפיתוח של אמית כאן בשבילך.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-amit-lime text-amit-navy px-7 py-3.5 rounded-full font-bold hover:bg-white transition"
              >
                <Github className="h-5 w-5" />
                למאגר הקוד
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/20 transition"
              >
                <BookOpen className="h-5 w-5" />
                תיעוד API
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-6 md:px-12 py-10 text-center text-sm text-amit-navy/60 font-semibold">
        © רשת אמית · חינוך שרואה רחוק · בילדר דיגיטלי מונגש
      </footer>
    </div>
  );
}

function ComponentCard({
  icon: Icon,
  title,
  desc,
  color,
}: {
  icon: typeof FileText;
  title: string;
  desc: string;
  color: "navy" | "sky" | "teal" | "mint" | "olive" | "lime" | "forest";
}) {
  const bgMap = {
    navy: "bg-amit-navy",
    sky: "bg-amit-sky",
    teal: "bg-amit-teal",
    mint: "bg-amit-mint",
    olive: "bg-amit-olive",
    lime: "bg-amit-lime",
    forest: "bg-amit-forest",
  };
  return (
    <article className="group bg-white rounded-2xl p-6 border border-amit-navy/8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-300">
      <div
        className={`${bgMap[color]} h-14 w-14 rounded-2xl flex items-center justify-center mb-5 ring-4 ring-white/40 group-hover:scale-110 transition`}
      >
        <Icon className="h-7 w-7 text-white" strokeWidth={2.2} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-amit-navy/70 text-sm leading-relaxed">{desc}</p>
    </article>
  );
}

function IconLabel({
  id,
  label,
  color,
  fallback,
}: {
  id: string;
  label: string;
  color: "lime" | "navy" | "sky" | "teal" | "mint" | "olive" | "forest";
  fallback?: typeof Sparkles;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <StyledCircularIcon driveId={id} alt={label} color={color} size="md" fallback={fallback} />
      <span className="text-xs font-semibold text-amit-navy/70">{label}</span>
    </div>
  );
}

function FeatureBlock({
  icon: Icon,
  title,
  desc,
  color,
  iconColor,
}: {
  icon: typeof Accessibility;
  title: string;
  desc: string;
  color: string;
  iconColor: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-7 border border-amit-navy/8 shadow-[var(--shadow-card)]">
      <div className={`${color} h-14 w-14 rounded-2xl flex items-center justify-center mb-5`}>
        <Icon className={`h-7 w-7 ${iconColor}`} strokeWidth={2.2} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-amit-navy/70 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
