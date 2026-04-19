import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  Lightbulb,
  Palette,
  Rocket,
  Users,
} from "lucide-react";
import { StyledCircularIcon } from "@/components/StyledCircularIcon";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/AnimatedSection";
import { ComponentDetails, type DetailEntry } from "@/components/ComponentDetails";
import amitLogo from "@/assets/amit-logo.png";

const contentDetails: DetailEntry[] = [
  {
    title: "טקסט — קיצורי עיצוב והנחיות פדגוגיות",
    questions: [
      "האם הטקסטים שנבחרו תואמים את רמת היכולת של התלמידים?",
      "האם מדובר בתוכן חדש שדורש עיצוב מרווח להפחתת עומס קוגניטיבי?",
      "האם מומלץ לשלב שאלת טרום-קריאה לעורר סקרנות?",
    ],
    tips: [
      "קיצורי עיצוב: Ctrl+B (הדגשה), Ctrl+I (נטוי), Ctrl+U (קו תחתון)",
      "יישור: Ctrl+E מרכז, Ctrl+R ימין, Ctrl+L שמאל, Ctrl+J ישר לשני הצדדים",
      "להקפיד על תצוגה שונה של כותרת ומושגים חשובים",
      "לא לכתוב יותר משתי פסקאות ברצף",
    ],
  },
  {
    title: "תמונה — שיקולים דידקטיים",
    questions: [
      "האם לתמונה ערך דידקטי המקדם הבנה, או שמא היא מגבירה עומס קוגניטיבי?",
      "האם התמונה משמשת כפיגום למידה?",
      "האם האיור מסייע בהמחשת מושגים מופשטים או מצמצם פרשנות?",
    ],
    tips: [
      "מומלץ להטמיע תמונות בתוך רכיב טקסט להקשר דידקטי",
      "ניתן להעלות מהמחשב, מהדרייב, מהמאגר או ליצור ב-AI",
      "להוסיף Alt Text מתאר לכל תמונה לצרכי נגישות",
    ],
  },
  {
    title: "סרטון — הטמעה והנגשה",
    questions: [
      "האם אורך הסרטון מתאים לטווח הקשב של התלמיד?",
      "האם נדרשות שאלות עצירה במהלך הצפייה לבדיקת הבנה?",
    ],
    tips: [
      "תמיכה בהעלאת MP4 או הטמעה מ-YouTube ו-Vimeo",
      "כתוביות הן חובה — ניתן להפיק אוטומטית",
      "לשלב שאלות פופ-אפ במהלך הסרטון לעידוד מעורבות",
    ],
  },
  {
    title: "שמע והערה",
    questions: [
      "האם השמע משמש כהנגשה (הקראה) או כתוכן עצמאי (פודקאסט)?",
      "האם ההערה ברורה ולא נבלעת ברצף הלמידה?",
    ],
    tips: [
      "לצרף תמליל לקובצי שמע לטובת תלמידים שמתקשים בשמיעה",
      "להשתמש בצבעי הערה עקביים לפי סוג ההנחיה",
    ],
  },
];

const exerciseDetails: DetailEntry[] = [
  {
    title: "פסקה ותשובה קצרה",
    questions: [
      "האם השאלה פתוחה מספיק לעודד חשיבה, או ממוקדת לבדיקת ידע?",
      "האם נדרשת בדיקה אוטומטית או משוב מורה?",
    ],
    tips: [
      "פסקה ריקה לתשובה חופשית, או השלמה בתוך טקסט קיים",
      "תשובה קצרה תומכת בבדיקה אוטומטית של מילה, שורש או ביטוי",
    ],
  },
  {
    title: "התאמה ומיון",
    questions: [
      "האם הקטגוריות מובחנות בצורה ברורה?",
      "האם מספר הפריטים אינו יוצר עומס ויזואלי?",
    ],
    tips: [
      "התאמה: גרירת זוגות מתאימים בין שתי עמודות",
      "מיון: חלוקת פריטים לקבוצות לפי מאפיין משותף",
    ],
  },
  {
    title: "כלים שיתופיים — לוח, סקר, ענן מילים",
    questions: [
      "האם הכלי מקדם דיון אמיתי בכיתה או רק תיעוד?",
      "האם הוגדרו כללי שיח ברורים לפני השימוש?",
    ],
    tips: [
      "לוח שיתופי לרעיונות חופשיים וסיעור מוחות",
      "סקר לזיהוי דעות וטעויות נפוצות",
      "ענן מילים להמחשה ויזואלית של תפיסות הכיתה",
    ],
  },
  {
    title: "הקלטה, לוח ציור והעלאת קובץ",
    questions: [
      "האם הפורמט שנבחר תואם את סוג ההבעה הנדרש מהתלמיד?",
      "האם יש כלי תמיכה לתלמידים שמתקשים בהקלטה/ציור?",
    ],
    tips: [
      "הקלטת קול לתרגול הבעה בעל-פה ושפה זרה",
      "לוח ציור לפתרון בעיות מתמטיות וסקיצות",
      "העלאת קובץ לעבודות מורחבות וצירוף מסמכים",
    ],
  },
];

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
  { icon: FileText, title: "טקסט", desc: "הזנת טקסטים ופסקאות עם קיצורי עיצוב מלאים (Bold, Italic, יישור, רווחים). מומלץ עד שתיים-שלוש שורות לפסקה.", color: "navy" as const },
  { icon: ImageIcon, title: "תמונה", desc: "העלאה מהמחשב/דרייב, בחירה ממאגר או יצירה ב-AI. עדיף להטמיע תמונה בתוך רכיב טקסט עבור הקשר דידקטי.", color: "sky" as const },
  { icon: Video, title: "סרטון", desc: "העלאת MP4 או הטמעה מ-YouTube ו-Vimeo. תמיכה בשאלות קופצות במהלך הצפייה. כתוביות הן חובה.", color: "teal" as const },
  { icon: Code2, title: "הטמעה", desc: "הטמעת תוכן מקוון מאתרים חיצוניים דרך קישור ייעודי. שימו לב — למידה במוטמעים אינה נשמרת במערכת.", color: "olive" as const },
  { icon: Volume2, title: "שמע", desc: "העלאת קובץ אודיו: הסבר, שיר, פודקאסט. תומך בהנגשת טקסט ולמידה רב-חושית. מומלץ לצרף תמליל.", color: "mint" as const },
  { icon: StickyNote, title: "הערה", desc: "הוספת הנחיות והבהרות בצבעים שונים, מחוץ לרצף הלמידה. שימוש עקבי בצבע מסייע לזיהוי אופי ההערה.", color: "lime" as const },
];

const exerciseComponents = [
  { icon: PenLine, title: "פסקה", desc: "תרגיל פתוח עם תיבת תשובה. תומך בפסקה ריקה, השלמת טקסט קיים או משיכת תשובה לטבלה.", color: "teal" as const },
  { icon: Type, title: "תשובה קצרה", desc: "שאלה אחת או רצף שאלות קצרות. אפשרות להגדיר תשובה מדויקת לבדיקה אוטומטית (מילה, שורש וכו׳).", color: "sky" as const },
  { icon: MoveHorizontal, title: "משיכת תשובה", desc: "גרירת מילים או ביטויים למיקום הנכון בטקסט. תומך בלמידה אקטיבית ובארגון מידע.", color: "mint" as const },
  { icon: ListChecks, title: "בחירה מרובה", desc: "שאלות אמריקאיות עם תשובה אחת או מספר תשובות נכונות. מתאים לבדיקת ידע ולתרגול ממוקד.", color: "olive" as const },
];

const workflow = [
  { num: "01", icon: Lightbulb, title: "תכנון פדגוגי", desc: "בחירת מטרות הלמידה, רצף הרכיבים והדרך בה התלמיד יחווה את החומר.", color: "lime" as const },
  { num: "02", icon: Palette, title: "בנייה ויזואלית", desc: "גרירה ושילוב רכיבי תוכן ותרגול בקנבס מותאם RTL — ללא צורך בקוד.", color: "sky" as const },
  { num: "03", icon: ShieldCheck, title: "בדיקת נגישות", desc: "סקירה אוטומטית של ניגודיות, ARIA וניווט מקלדת לפני פרסום.", color: "mint" as const },
  { num: "04", icon: Rocket, title: "פרסום ושיתוף", desc: "שליחת השיעור לתלמידים בלינק, מעקב אחר התקדמות וניתוח תוצאות.", color: "teal" as const },
];

const principles = [
  { icon: Accessibility, title: "נגישות מובנית", desc: "כל רכיב נבנה בהתאם לתקן WCAG 2.1 AA — ניווט מקלדת, ARIA, ניגודיות צבעים ותמיכה בקוראי מסך.", color: "bg-amit-lime/15", iconColor: "text-amit-olive" },
  { icon: Layers, title: "ארכיטקטורת רכיבים", desc: "רכיבים מודולריים, Composition-friendly, עם API ברור. קלים להרחבה ולקסטומיזציה.", color: "bg-amit-sky/15", iconColor: "text-amit-teal" },
  { icon: ShieldCheck, title: "פדגוגיה ראשונה", desc: "כל רכיב מלווה בשאלות למחשבה ובהמלצות לביצוע — תיעוד שמשלב מפתחים ומורים.", color: "bg-amit-mint/15", iconColor: "text-amit-forest" },
  { icon: Users, title: "שיתופי ורב-משתמשי", desc: "מורים יכולים לשתף שיעורים, להעתיק תבניות ולעבוד יחד על אותו מערך לימוד.", color: "bg-amit-lime/15", iconColor: "text-amit-olive" },
];

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
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div dir="rtl" className="min-h-screen relative overflow-x-hidden">
      {/* Decorative blobs + grid */}
      <div className="pointer-events-none absolute inset-0 amit-grid-bg" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amit-lime/25 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-amit-sky/25 blur-3xl animate-float-slower" />
      <div className="pointer-events-none absolute top-2/3 left-1/4 h-72 w-72 rounded-full bg-amit-mint/20 blur-3xl animate-float-slow" />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 px-4 sm:px-6 md:px-12 pt-6 pb-4 flex items-center justify-between gap-4 flex-wrap-reverse"
      >
        <nav className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-amit-navy/70">
          <a href="#workflow" className="hover:text-amit-navy transition story-link">תהליך</a>
          <span className="opacity-30">·</span>
          <a href="#components" className="hover:text-amit-navy transition story-link">רכיבים</a>
          <span className="opacity-30">·</span>
          <a href="#icons" className="hover:text-amit-navy transition story-link">אייקונים</a>
          <span className="opacity-30">·</span>
          <a href="#stack" className="hover:text-amit-navy transition story-link">מפתחים</a>
        </nav>
        <motion.img
          whileHover={{ rotate: -3, scale: 1.05 }}
          src={amitLogo}
          alt="לוגו רשת אמית"
          className="h-10 sm:h-12 md:h-16 w-auto object-contain"
        />
      </motion.header>

      {/* Hero */}
      <section ref={heroRef} className="relative z-10 px-4 sm:px-6 md:px-12 pt-8 sm:pt-12 pb-16 sm:pb-20 max-w-6xl mx-auto text-center">
        <motion.div style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-amit-lime/20 border border-amit-lime/40 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amit-olive mb-6"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.span>
            תיעוד למפתחים · גרסה 1.0
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight"
          >
            הבילדר הדיגיטלי
            <br />
            <span className="bg-gradient-to-l from-amit-sky via-amit-teal to-amit-mint bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_6s_linear_infinite]">
              המונגש של אמית
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-amit-navy/75 leading-relaxed"
          >
            סביבת בנייה ליצירת שיעורים אינטראקטיביים, נגישים ומותאמים אישית.
            רכיבי הצגת תוכן ורכיבי תרגול שמאפשרים למורים לבנות חוויית למידה עשירה — ולכם, המפתחים, ארכיטקטורת רכיבים ברורה ומודולרית.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#components"
              className="group inline-flex items-center gap-3 bg-amit-navy text-white px-7 py-3.5 rounded-full font-bold shadow-[var(--shadow-soft)] hover:bg-amit-teal transition"
            >
              צלילה לרכיבים
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#stack"
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-amit-navy/15 text-amit-navy px-6 py-3.5 rounded-full font-semibold hover:bg-white transition"
            >
              <BookOpen className="h-5 w-5" />
              המדריך הטכני
            </motion.a>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { k: "10+", v: "סוגי רכיבים" },
              { k: "WCAG 2.1", v: "תקן נגישות" },
              { k: "RTL", v: "תמיכה מלאה" },
              { k: "AI", v: "יצירת תכנים" },
            ].map((s) => (
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -4, scale: 1.02 }}
                key={s.v}
                className="bg-white/70 backdrop-blur rounded-2xl p-5 border border-amit-navy/10 shadow-[var(--shadow-card)]"
              >
                <div className="text-3xl font-black text-amit-teal">{s.k}</div>
                <div className="text-sm font-semibold text-amit-navy/70 mt-1">{s.v}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Workflow timeline */}
      <AnimatedSection id="workflow" className="relative z-10 px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs sm:text-sm font-bold text-amit-olive tracking-widest uppercase">איך זה עובד</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2">מרעיון לשיעור — בארבעה צעדים</h2>
          <p className="text-amit-navy/70 mt-3 max-w-xl mx-auto">
            תהליך ברור שמלווה את המורה משלב התכנון ועד הפרסום לתלמידים.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative"
        >
          {workflow.map((w) => {
            const Icon = w.icon;
            const bg = { lime: "bg-amit-lime", sky: "bg-amit-sky", mint: "bg-amit-mint", teal: "bg-amit-teal" }[w.color];
            return (
              <motion.div
                key={w.num}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="relative bg-white rounded-3xl p-6 border border-amit-navy/8 shadow-[var(--shadow-card)] overflow-hidden"
              >
                <div className={`absolute -top-6 -left-6 h-20 w-20 ${bg} opacity-10 rounded-full blur-2xl`} />
                <div className="text-5xl font-black text-amit-navy/10 absolute top-3 left-4">{w.num}</div>
                <div className={`${bg} h-12 w-12 rounded-2xl flex items-center justify-center mb-4 ring-4 ring-white/40`}>
                  <Icon className="h-6 w-6 text-white" strokeWidth={2.2} />
                </div>
                <h3 className="text-lg font-bold mb-2">{w.title}</h3>
                <p className="text-amit-navy/70 text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatedSection>

      {/* Content Components */}
      <AnimatedSection id="components" className="relative z-10 px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10 gap-4">
          <motion.div whileHover={{ rotate: 8, scale: 1.08 }}>
            <StyledCircularIcon driveId={driveIcons.instructions} alt="הוראות" color="lime" size="lg" />
          </motion.div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-amit-lime tracking-widest uppercase">חלק א׳</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2">רכיבי הצגת תוכן</h2>
            <p className="text-amit-navy/70 mt-3 max-w-xl mx-auto">
              רכיבים שמשמשים להעברת מידע לתלמיד — טקסט, מדיה, הטמעות והערות.
            </p>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {contentComponents.map((c) => (
            <ComponentCard key={c.title} {...c} />
          ))}
        </motion.div>

        <div className="mt-10">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-5 text-amit-navy">העמקה — שאלות ותשובות לכל רכיב</h3>
          <ComponentDetails entries={contentDetails} accent="lime" />
        </div>
      </AnimatedSection>

      {/* Exercise Components */}
      <AnimatedSection className="relative z-10 px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10 gap-4">
          <motion.div whileHover={{ rotate: -8, scale: 1.08 }}>
            <StyledCircularIcon driveId={driveIcons.trophy} alt="הישגים" color="sky" size="lg" />
          </motion.div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-amit-mint tracking-widest uppercase">חלק ב׳</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2">רכיבי תרגול</h2>
            <p className="text-amit-navy/70 mt-3 max-w-xl mx-auto">
              רכיבים אינטראקטיביים שמאפשרים לתלמיד לתרגל, לכתוב ולהיבדק.
            </p>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {exerciseComponents.map((c) => (
            <ComponentCard key={c.title} {...c} />
          ))}
        </motion.div>

        <div className="mt-10">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-5 text-amit-navy">סוגי תרגילים מתקדמים וכלים שיתופיים</h3>
          <ComponentDetails entries={exerciseDetails} accent="sky" />
        </div>
      </AnimatedSection>

      {/* Icon Library Showcase */}
      <AnimatedSection id="icons" className="relative z-10 px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs sm:text-sm font-bold text-amit-teal tracking-widest uppercase">ספריית UI</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2">אייקונים עגולים מותאמים אמית</h2>
          <p className="text-amit-navy/70 mt-3 max-w-2xl mx-auto">
            ערכת אייקונים עקבית למצבי המשחק והניווט בבילדר. כל אייקון מגיע עם Fallback אוטומטי
            במקרה שתמונת המקור לא נטענת — לשמירה על שלמות עיצובית.
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur rounded-3xl border border-amit-navy/10 p-6 sm:p-8 md:p-10 shadow-[var(--shadow-card)]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 place-items-center"
          >
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
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Quote / Pedagogy banner */}
      <AnimatedSection className="relative z-10 px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-bl from-amit-lime/15 via-white to-amit-sky/15 rounded-[2.5rem] p-8 sm:p-12 md:p-16 border border-amit-navy/10 shadow-[var(--shadow-card)] text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-amit-lime/30 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-amit-sky/30 blur-3xl" />
          <div className="relative">
            <div className="text-6xl text-amit-lime/60 font-black leading-none mb-4">״</div>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-amit-navy leading-snug max-w-3xl mx-auto">
              הבילדר אינו רק כלי טכני — הוא מרחב חשיבה פדגוגית שמתרגם רעיון של מורה לחוויית למידה אינטראקטיבית, נגישה ומכבדת.
            </p>
            <div className="mt-6 text-sm font-semibold text-amit-teal tracking-wide">
              ✦ עקרון הליבה של אמית דיגיטל
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Developer / Stack */}
      <AnimatedSection id="stack" className="relative z-10 px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs sm:text-sm font-bold text-amit-forest tracking-widest uppercase">למפתחים</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2">עקרונות הארכיטקטורה</h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {principles.map((p) => (
            <FeatureBlock key={p.title} {...p} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 bg-amit-navy text-white rounded-3xl p-8 sm:p-10 md:p-14 relative overflow-hidden shadow-[var(--shadow-soft)]"
        >
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-amit-lime/30 blur-3xl animate-float-slow" />
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-amit-sky/30 blur-3xl animate-float-slower" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              מוכנים להתחיל לבנות?
            </h2>
            <p className="mt-4 text-white/80 text-base sm:text-lg leading-relaxed">
              סקור את התיעוד המלא של הרכיבים, ה-Hooks וה-API. אם יש שאלות — צוות הפיתוח של אמית כאן בשבילך.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="inline-flex items-center gap-2 bg-amit-lime text-amit-navy px-7 py-3.5 rounded-full font-bold hover:bg-white transition"
              >
                <Github className="h-5 w-5" />
                למאגר הקוד
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/20 transition"
              >
                <BookOpen className="h-5 w-5" />
                תיעוד API
              </motion.a>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

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
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group relative bg-white rounded-2xl p-6 border border-amit-navy/8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 overflow-hidden"
    >
      <div className={`absolute -top-10 -left-10 h-32 w-32 ${bgMap[color]} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
      <motion.div
        whileHover={{ rotate: [0, -8, 8, 0] }}
        transition={{ duration: 0.5 }}
        className={`${bgMap[color]} h-14 w-14 rounded-2xl flex items-center justify-center mb-5 ring-4 ring-white/40`}
      >
        <Icon className="h-7 w-7 text-white" strokeWidth={2.2} />
      </motion.div>
      <h3 className="text-xl font-bold mb-2 relative">{title}</h3>
      <p className="text-amit-navy/70 text-sm leading-relaxed relative">{desc}</p>
    </motion.article>
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
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4, scale: 1.05 }}
      className="flex flex-col items-center gap-2"
    >
      <StyledCircularIcon driveId={id} alt={label} color={color} size="md" fallback={fallback} />
      <span className="text-xs font-semibold text-amit-navy/70">{label}</span>
    </motion.div>
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
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl p-7 border border-amit-navy/8 shadow-[var(--shadow-card)] h-full"
    >
      <div className={`${color} h-14 w-14 rounded-2xl flex items-center justify-center mb-5`}>
        <Icon className={`h-7 w-7 ${iconColor}`} strokeWidth={2.2} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-amit-navy/70 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
