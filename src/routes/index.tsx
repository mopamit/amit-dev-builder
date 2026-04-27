import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  ArrowLeft,
  Highlighter,
  Lightbulb,
  Volume2,
  LifeBuoy,
  GitBranch,
  Route as RouteIcon,
  StickyNote,
  CheckSquare,
  ListChecks,
  SlidersHorizontal,
  UploadCloud,
  Mic,
  PenLine,
  TextCursorInput,
  Shuffle,
  Layers,
  ArrowDownUp,
  Gamepad2,
  Users as UsersIcon,
  BarChart3,
  Cloud,
  History,
} from "lucide-react";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/AnimatedSection";
import { ExpandableComponentCard, type ExpandableComponent } from "@/components/ExpandableComponentCard";
import { PageShell } from "@/components/PageShell";
import contentTextIcon from "@/assets/builder-icons/content-text.png";
import contentImageIcon from "@/assets/builder-icons/content-image.png";
import contentVideoIcon from "@/assets/builder-icons/content-video.png";
import contentEmbedIcon from "@/assets/builder-icons/content-embed.png";
import contentAudioIcon from "@/assets/builder-icons/content-audio.png";
import contentNoteIcon from "@/assets/builder-icons/content-note.png";
import exerciseParagraphIcon from "@/assets/builder-icons/exercise-paragraph.png";
import exerciseShortAnswerIcon from "@/assets/builder-icons/exercise-short-answer.png";
import exerciseChoiceIcon from "@/assets/builder-icons/exercise-choice.png";
import exerciseDragAnswerIcon from "@/assets/builder-icons/exercise-drag-answer.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Builder אמית — סביבת בנייה דיגיטלית מונגשת" },
      {
        name: "description",
        content:
          "מדריך הרכיבים של הבילדר הדיגיטלי המונגש של אמית — רכיבי תוכן, תרגול ופיגומים. לחיצה על כל רכיב פותחת פירוט שאלות והמלצות.",
      },
      { property: "og:title", content: "Builder אמית — מדריך רכיבים" },
      {
        property: "og:description",
        content: "רכיבי תוכן, תרגול ופיגומים בבילדר של אמית, עם שאלות למחשבה והמלצות פדגוגיות.",
      },
    ],
  }),
  component: LandingPage,
});

const contentComponents: ExpandableComponent[] = [
  {
    imageSrc: contentTextIcon,
    title: "טקסט",
    desc: "הזנת טקסטים ופסקאות עם קיצורי עיצוב מלאים. מומלץ עד שתיים-שלוש שורות לפסקה.",
    color: "navy",
    questions: [
      "האם קיימת דרך להציג את הטקסט באופן אינטראקטיבי וחווייתי, כדי לעורר מוטיבציה ולעודד השתתפות?",
      "האם מדובר בתוכן חדש שדורש עיצוב מרווח ומדורג להפחתת עומס קוגניטיבי?",
      "האם מדובר בחזרה על חומר קיים שניתן לעצב באופן תמציתי ומרכז?",
      "האם מומלץ לשלב שאלת טרום-קריאה לעורר את סקרנות התלמיד?",
      "האם הטקסטים שנבחרו תואמים את רמת היכולת של התלמידים?",
    ],
    tips: [
      "להציג בצורה ברורה ציטוטים של מקורות שונים ולציין את המקור המדויק.",
      "לא לכתוב יותר משתי פסקאות ברצף.",
      "להקפיד על תצוגה שונה לכותרת ולמושגים חשובים בתוך הטקסט.",
      "קיצורי עיצוב: Ctrl+B (הדגשה), Ctrl+I (נטוי), Ctrl+U (קו תחתון).",
      "יישור פסקה: Ctrl+E מרכז, Ctrl+R ימין, Ctrl+L שמאל, Ctrl+J ישר לשני הצדדים.",
    ],
  },
  {
    imageSrc: contentImageIcon,
    title: "תמונה",
    desc: "בחירה ממאגר, העלאה מהמחשב/דרייב, או יצירה ב-AI. עדיף להטמיע את התמונה בתוך רכיב טקסט.",
    color: "sky",
    questions: [
      "האם התמונה משמשת כפיגום למידה?",
      "האם האיור/תמונה מסייעים בהמחשת מושגים מופשטים, או שעלולים לצמצם את מרחב הפרשנות?",
      "האם לתמונה ערך דידקטי מקדם הבנה, או שמדובר באלמנט חזותי שעלול להגביר עומס קוגניטיבי?",
    ],
    tips: [
      "ברוב המקרים נעדיף להטמיע תמונה בתוך רכיב טקסט.",
      "להוסיף Alt Text מתאר לכל תמונה לצרכי נגישות.",
    ],
  },
  {
    imageSrc: contentVideoIcon,
    title: "סרטון",
    desc: "העלאת MP4 או הטמעה מ-YouTube ו-Vimeo. אפשרות לשאלות שקופצות במהלך הצפייה.",
    color: "teal",
    questions: [
      "האם תרצו לצרף שאלות שקופצות בנקודות זמן ייעודיות לעידוד צפייה פעילה?",
      "באילו מצבים תרצו לצרף משימת צפייה מקדימה?",
      "מהו תפקיד הסרטון בשיעור? הקניה של חומר חדש, ביסוס ידע קודם, או יצירת מוטיבציה ורלוונטיות?",
    ],
    tips: [
      "לתחום את הסרטון כך שיהיה קולע ורלוונטי.",
      "מומלץ לכתוב בכותרת הנחיה לצפייה בסרטון.",
      "חובה לצרף כתוביות לכל סרטון.",
    ],
  },
  {
    imageSrc: contentEmbedIcon,
    title: "הטמעה",
    desc: "הטמעת תוכן מקוון מאתרים אחרים דרך קישור ייעודי להטמעה.",
    color: "olive",
    questions: [
      "מהו הערך המוסף של הטמעת התוכן החיצוני בסביבת הלמידה? תרגול או הקניית ידע?",
      "האם התוכן המוטמע משתלב היטב במסגרת הלמידה — פדגוגית וויזואלית?",
    ],
    tips: [
      "לצרף הנחיה ברורה מה התלמיד נדרש לבצע בתוכן.",
      "תכנים דיגיטליים עשירים מציבים אתגר נוסף — התלמיד נאלץ קודם להבין את הכלי.",
      "שימו לב — הלמידה שמתרחשת בתכנים מוטמעים אינה נשמרת על ידי המערכת.",
    ],
  },
  {
    imageSrc: contentAudioIcon,
    title: "שמע",
    desc: "העלאת קובץ אודיו מהמחשב — הסבר, שיר, פודקאסט וכד׳.",
    color: "mint",
    questions: [
      "לאילו תלמידים זה מתאים?",
      "האם הטקסט המושמע מתאים להיות מושמע ללא כתוביות או תמונת רקע?",
      "מהו התפקיד הדידקטי? תמיכה בלמידה רב-חושית, או הנגשת טקסט לתלמידים עם קשיי קריאה?",
    ],
    tips: [
      "להגדיר את מטרת ההאזנה ואת המשימה שעל התלמיד לבצע במהלך השמע או אחריו.",
      "אם מדובר בקטע ארוך — לעצור בנקודות זמן מוגדרות ולבקש מהתלמיד פעולה קטנה.",
      "ניתן לצרף תמליל לטובת תלמידים שמתקשים בשמיעה.",
    ],
  },
  {
    imageSrc: contentNoteIcon,
    title: "הערה",
    desc: "צירוף הערות לתלמיד מחוץ לרצף הלמידה — הבהרה, הרחבה או הנחיה.",
    color: "lime",
    questions: [
      "אילו סוגי הערות יכולות לתרום ללמידה בקורסים שלכם?",
      "מתי נכון לשלב הערה? להבהרת מידע, להרחבה (״הידעת״), או כהנחיה כללית?",
    ],
    tips: [
      "להשתמש בהערה כשרוצים לומר משהו שאינו חלק מרצף הלמידה — הנחיה או הבהרה.",
      "ניתן ליצור הערות בצבעים שונים — שימוש עקבי בצבע מסייע לזיהוי אופי ההערה.",
    ],
  },
];

const exerciseComponents: ExpandableComponent[] = [
  {
    imageSrc: exerciseParagraphIcon,
    title: "פסקה",
    desc: "תרגיל עם תשובה פתוחה — פסקה ריקה, השלמת טקסט קיים, או משיכת תשובה לטבלה.",
    color: "teal",
    questions: [
      "האם המטרה היא הבעה חופשית (ואז תיבת טקסט ריקה)?",
      "האם המטרה היא קריאה פעילה הדורשת עבודה עם הטקסט (ואז נספק טקסט קיים לעריכה)?",
      "האם המטרה היא ארגון ומיון מידע (ואז נצרף תבנית מובנית כמו טבלה או שלד לכתיבה)?",
      "בעידן ה-AI — מהו הערך המוסף של משימת פסקה? שיקוף עמדה אישית, ניתוח מקורות או תרגול מיומנות?",
    ],
    tips: [
      "להשתמש בשאלות פתוחות שאין להן תשובה חד-משמעית, או לתרגול ניסוח, הבעה וארגון ידע.",
      "בטבלה ניתן לשלב פיגומים: קריטריונים להשוואה, מחסן מילים, תחילת משפט או רמזים בטקסט.",
    ],
  },
  {
    imageSrc: exerciseShortAnswerIcon,
    title: "תשובה קצרה",
    desc: "תרגיל עם תשובה קצרה — שאלה אחת או רצף שאלות. אפשרות להגדרת בדיקה אוטומטית.",
    color: "sky",
    questions: [
      "מתי נייצר רצף של תשובות קצרות באותו רכיב, ומתי נפריד לתרגילים נפרדים?",
      "באילו מצבים נרצה שתלמיד ינסח באופן חופשי? לשליפת מידע ממוקד, או לבניית טיעון (אז נעדיף פסקה)?",
    ],
    tips: [
      "כאשר יש רק תשובה אחת נכונה (כמו שורש או ציטוט מסוים) — להגדיר בדיקה אוטומטית.",
      "פיצול משימה מורכבת לשדות קטנים מאפשר תרגול מבלי לאבד את ההקשר.",
    ],
  },
  {
    imageSrc: exerciseDragAnswerIcon,
    title: "משיכת תשובה",
    desc: "התלמיד גורר תשובה למקומה. תומך בלמידה אקטיבית ובארגון מידע.",
    color: "mint",
    questions: [
      "האם נרצה שהתלמיד יראה את תשובתו הקודמת כדי לתקן/לדייק אותה לאור ידע חדש?",
      "האם הצגת התשובה הקודמת עוזרת לתלמיד להתמקד, או עלולה לקבע אותו למחשבה ישנה?",
    ],
    tips: [
      "כיום זמין ברכיבי בחירה, תשובה קצרה ופסקה.",
      "להפעלת מצב משיכת תשובה — יש לפנות לתמיכה לעזרה.",
    ],
  },
  {
    imageSrc: exerciseChoiceIcon,
    title: "בחירה",
    desc: "שאלות אמריקאיות עם תשובה אחת או מספר תשובות נכונות.",
    color: "olive",
    questions: [
      "מהי מטרת המשימה — זיהוי עובדה (בחירה בודדת) או בחינת מורכבות עם מספר היבטים נכונים (בחירה מרובה)?",
      "מתי נבחר בשאלה עם תשובה יחידה ומתי בבחירה מרובה הדורשת יכולת הכללה?",
    ],
    tips: [
      "השלמת מילים, בחירה או התאמה נותנים לתלמיד ביטחון — התשובה מולו ועליו רק לזהותה.",
      "לבחור מסיחים שעוזרים לוודא הבנה, בלי לייצר בלבול שמתסכל את התלמידים לשווא.",
    ],
  },
  {
    icon: <Highlighter className="h-9 w-9" />,
    title: "סימון",
    desc: "תרגיל בו התלמיד מסמן מילים או ביטויים בכמה קטגוריות צבעוניות.",
    color: "lime",
    questions: [
      "מהי מטרת המשימה? זיהוי ושיקוף של מידע (איתור מילים) או מיון וסיווג (עובדה מול טיעון, סיבה מול תוצאה)?",
    ],
    tips: [
      "סימון מרובה — להגדיר כמה קטגוריות שונות, ולכל אחת צבע ייחודי.",
      "כאשר אפשרויות הסימון אינן חד-משמעיות — מומלץ להגדיר את התרגיל ללא ציון.",
    ],
  },
  {
    icon: <SlidersHorizontal className="h-9 w-9" />,
    title: "טווח",
    desc: "התלמיד מדרג את מידת ההסכמה, ההבנה או התחושה על סולם רציף.",
    color: "sky",
    questions: [
      "להשתמש בשאלת טווח רגילה או בשאלת סקר מסוג טווח (שיתופית)?",
      "מהי מטרת המשימה — רפלקטיבית, הבעת עמדה או השערה?",
    ],
    tips: [
      "להגדיר באופן ברור את העוגנים — מה מופיע בקצוות.",
      "מספר אי-זוגי מאפשר עמדה נייטרלית; מספר זוגי מחייב נקיטת עמדה.",
      "מתאים כשאלה מקדימה לבדיקת עמדה או כרפלקציה — כדאי לאפשר לתלמיד להסביר.",
    ],
  },
  {
    icon: <UploadCloud className="h-9 w-9" />,
    title: "העלאת קובץ",
    desc: "התלמידים יכולים להעלות תמונות, סרטונים, מצגות, קבצי PDF ועוד.",
    color: "teal",
    questions: [
      "מהו הערך המוסף במשימה שמבוצעת מחוץ לסביבה הדיגיטלית? תיעוד תופעה, ראיון, או ייצוג ידע דרך כתיבה ושרטוט?",
    ],
    tips: ["להגדיר לתלמיד פורמט הגשה רצוי (PDF, JPG וכו׳)."],
  },
  {
    icon: <Mic className="h-9 w-9" />,
    title: "הקלטה",
    desc: "התלמידים מקליטים תשובות קוליות.",
    color: "mint",
    questions: [
      "מה הערך המוסף — תרגול הגייה ושטף, חלופה לכתיבה לתלמידים שמתקשים, או תיעוד תהליך (פודקאסט/חשיבה בקול)?",
    ],
    tips: [
      "מומלץ כאשר חשוב לשמוע את התלמיד עונה — לא רק לגיוון.",
      "להנחות את התלמידים להקליט במקום שקט ככל האפשר.",
      "להגדיר זמן מינימום ומקסימום להקלטה.",
      "אין בדיקה אוטומטית — המורה בודק/ת באופן ידני.",
    ],
  },
  {
    icon: <PenLine className="h-9 w-9" />,
    title: "לוח ציור",
    desc: "תרגיל ציור חופשי או ציור על גבי תמונה לבחירתכם.",
    color: "olive",
    questions: ["כיצד לוח הציור מקדם את הלמידה — תוצר גרפי, או ערוץ ביטוי נוסף לייצוג ידע?"],
    tips: ["ניתן להטמיע תמונה/טקסט/מפה כרקע קבוע, שעליו התלמיד יסמן מבלי למחוק את המקור."],
  },
  {
    icon: <TextCursorInput className="h-9 w-9" />,
    title: "השלמת מילים",
    desc: "השלמה דרך בנק מילים, רשימה נפתחת או כתיבה חופשית.",
    color: "lime",
    questions: [
      "האם המשימה מהווה פיגום לקראת שאלה פתוחה ומורכבת יותר?",
      "אילו מילים נבחר למחוק — מילים הקשורות לתוכן או מילות קישור?",
      "באיזה סוג השלמה נבחר — בנק מילים, רשימה נפתחת או השלמה חופשית?",
      "באילו מצבים נרצה להוסיף מסיחים? האם המסיחים מאתגרים מספיק?",
    ],
    tips: [
      "השלמת מילים, בחירה או התאמה נותנים לתלמיד ביטחון — התשובה מולו.",
      "השלמת מילים היא דרך טובה לוודא הבנה מתוך הקשר.",
    ],
  },
  {
    icon: <Shuffle className="h-9 w-9" />,
    title: "התאמה",
    desc: "משימות התאמה — תמונה, תמונה וטקסט, או טקסט בלבד.",
    color: "sky",
    questions: [
      "באילו מצבים נרצה להוסיף מסיחים?",
      "האם הקשר בין הפרטים ברור וחד-משמעי, או שעלולה להיווצר תסכול בגלל כפל משמעויות?",
    ],
    tips: [
      "מתאים להערכת ידע הקשרי (אוצר מילים/מושגים, סמלים).",
      "מתאים לזיהוי קשרים: סיבה-תוצאה, בעיה-פתרון, מושג-ייצוג ויזואלי.",
    ],
  },
  {
    icon: <Layers className="h-9 w-9" />,
    title: "מיון",
    desc: "מיון של מילים או משפטים לקבוצות. ניתן להוסיף מסיחים שלא שייכים לאף קטגוריה.",
    color: "teal",
    questions: [
      "מתי נשתמש בהתאמה ומתי במיון? בדיקת ידע עובדתי (התאמה) מול ביצוע הבנה ויישום (מיון).",
      "האם נציין במפורש מה הקטגוריות?",
      "האם נשתמש במסיחים?",
    ],
    tips: ["מתאים להבנת קריטריונים ומאפיינים — הן כהערכה, והן כביצוע הבנה של מבנה, תהליך וקשרים."],
  },
  {
    icon: <ArrowDownUp className="h-9 w-9" />,
    title: "סידור",
    desc: "סידור של מילים, משפטים או תמונות ברצף.",
    color: "mint",
    questions: ["האם המטרה היא הבנת תהליכים, רצף כרונולוגי או היסטורי?"],
    tips: [
      "מתאים להבנת שלבים בתהליך או רצף אירועים.",
      "ניתן להשתמש לדירוג על פי סולם ערכים או חשיבות בעיני התלמיד — ללא בדיקה אוטומטית.",
    ],
  },
  {
    icon: <Gamepad2 className="h-9 w-9" />,
    title: "משחק AI",
    desc: "יצירת משחקים אינטראקטיביים בעזרת AI בתוך הבילדר. המערכת בודקת ומשקפת תוצאות.",
    color: "olive",
    questions: [
      "מהי מטרת המשחק — הקניה או תרגול?",
      "באיזה שלב בשיעור נכון לשלב משחק?",
      "איזה ידע נרצה שייוותר עם התלמיד בסיום המשחק?",
    ],
    tips: [
      "כיום היצירה נעשית בעזרת פרומפט בודד — מומלץ לבקש עזרה מ-AI בכתיבת הפרומפט.",
      "לימוד כללי משחק חדשים דורש ריכוז והבנה גבוהים מהתלמיד.",
      "המערכת יודעת להעריך את המשימה ולתת ציון.",
    ],
  },
  {
    icon: <UsersIcon className="h-9 w-9" />,
    title: "לוח שיתופי",
    desc: "כלי שיתופי מסוג Padlet — תלמידים מעלים תוצרים ורואים את חבריהם.",
    color: "lime",
    questions: [
      "מהו הערך המוסף של למידה שיתופית בשלב זה — חשיפה למגוון דעות, השראה, למידת עמיתים, גיבוש קהילה?",
      "כיצד נדאג שהתלמיד יפיק ערך מהצפייה בתוצרי חבריו?",
      "האם ננחה לסוג תוצר מסוים או ניתן יד חופשית?",
    ],
    tips: [
      "מומלץ למשימה אחת בלבד עם הנחיה ברורה.",
      "להגביר שיתופיות — לבקש מהתלמידים להגיב לדברי חבריהם.",
      "מומלץ לשלב באסיף השיעור.",
    ],
  },
  {
    icon: <BarChart3 className="h-9 w-9" />,
    title: "סקר",
    desc: "אמריקאי, טווח, בעד ונגד או כרטיסיות — תלמידים רואים מה ענו אחרים.",
    color: "sky",
    questions: ["האם הסקר נועד לעורר סקרנות או להציג למשתמש את תשובתו ביחס לקבוצה?"],
    tips: ["להתייחס לתוצאות הסקר בהמשך השיעור."],
  },
  {
    icon: <Cloud className="h-9 w-9" />,
    title: "ענן מילים",
    desc: "כלי ויזואלי המזקק טקסט רב לתמונה אחת — גודל המילה משקף את שכיחותה.",
    color: "teal",
    questions: [
      "מהי מטרת ענן המילים — סיעור מוחות או זיהוי דפוסים ושיקוף תמונת מצב?",
      "האם ההיבט הוויזואלי משרת את הלמידה?",
      "האם אופי התשובות הצפוי קצר וחזרתי דיו לייצר ענן אפקטיבי?",
    ],
    tips: [
      "מתאים לבירור ידע קודם, זיהוי דגשים בטקסט ושאלות רפלקטיביות.",
      "להנחות את התלמידים לכתוב עד שתי מילים.",
      "להתייחס לתמונה שעלתה מהענן בהמשך השיעור.",
    ],
  },
  {
    icon: <History className="h-9 w-9" />,
    title: "משיכת תשובה לאורך הקורס",
    desc: "תשובת התלמיד תופיע בהמשך הקורס — באותו שיעור או בשיעורים הבאים.",
    color: "navy",
    questions: [
      "האם נרצה שהתלמיד יראה את תשובתו הקודמת כדי לתקן/לדייק לאור ידע חדש, או לאסוף ידע לאורך הלמידה?",
      "האם הצגת התשובה הקודמת עוזרת להתמקד או מקבעת חשיבה ישנה?",
    ],
    tips: [
      "כיום זמין ברכיבי בחירה, תשובה קצרה ופסקה.",
      "להפעלה — יש לפנות לתמיכה.",
    ],
  },
];

const scaffoldingComponents: ExpandableComponent[] = [
  {
    icon: <Highlighter className="h-9 w-9" />,
    title: "מילה חמה",
    desc: "טקסט צף לתרגום או הסבר. קיים רק ברכיב טקסט — לא על שאלות.",
    color: "lime",
    questions: [
      "האם המושג שבחרנו להסביר הכרחי להבנת הטקסט או המשימה?",
      "האם המידע ב״מילה החמה״ חיוני להשלמת המשימה הנוכחית?",
      "באיזו מידה הוספת המילה החמה מפחיתה עומס קוגניטיבי, ואולי כדאי לשלב את ההסבר בטקסט הגלוי?",
    ],
    tips: [
      "מתאים להבהרת מושג משמעותי להבנת התוכן בתוך טקסט.",
      "להגביל את מספר המילים החמות בפסקה.",
      "לנסח את ההסבר באופן תמציתי, בהיר וקצר.",
    ],
  },
  {
    icon: <Lightbulb className="h-9 w-9" />,
    title: "רמז",
    desc: "קיים לצד כל שאלה — ניתן להכניס טקסט, אודיו, הטמעה, תמונה או סרטון. לא קיים ברכיב טקסט.",
    color: "sky",
    questions: [
      "האם הרמז מתפקד כפיגום שמכוון לדרך הפתרון, או כ״קיצור דרך״ שחוסך מהתלמיד את המאמץ המחשבתי?",
      "אילו רמזים יסייעו לתלמידים שמתקשים בשאלות מסדר גבוה?",
      "האם להוסיף היבט רפלקטיבי שישקף לתלמיד את אופן השימוש ברמזים?",
    ],
    tips: [
      "ניתן להשתמש כהנחיה, הבהרה או דוגמה — כפיגום עבור התלמיד.",
      "ניתן להוסיף טקסט, תמונה או קישור.",
    ],
  },
  {
    icon: <Volume2 className="h-9 w-9" />,
    title: "הקראה",
    desc: "הוספת שמע ברכיב טקסט — באמצעות AI או הקלטה ידנית.",
    color: "teal",
    questions: [
      "באיזה אופן ההקראה מסייעת — פיגום לתלמיד שמתקשה בקריאה, או הדגמת קריאה נכונה עם הטעמה ועצירות?",
      "אם המטרה היא לשפר שטף קריאה — האם ההקראה מונעת תרגול משמעותי?",
      "האם שילוב הקראה וקריאה יוצר עומס?",
      "האם הקראה ב-AI מתאימה, או שיש להקליט באופן עצמאי (דיוק בהגייה ובמבטא)?",
    ],
    tips: [
      "בטקסט עם דיוקים מיוחדים בקריאה (למשל תנ״ך) — מומלץ הקלטה ולא AI.",
      "קיים רק על רכיב טקסט.",
    ],
  },
  {
    icon: <LifeBuoy className="h-9 w-9" />,
    title: "כלי עזר צדיים",
    desc: "תוכן מלווה זמין לתלמיד לאורך כל השיעור — תנ״ך שטיינזלץ, מפות, מילון מונחים ועוד.",
    color: "mint",
    questions: [
      "האם כלי העזר משרתים את המשימה או מהווים הסחת דעת טכנית?",
      "האם הם צריכים להיות נגישים לאורך כל הקורס או רק בשיעורים ספציפיים?",
      "כמה כלי עזר נרצה להנגיש?",
      "האם להפנות במשימות מסוימות, או לתת שימוש עצמאי?",
    ],
    tips: [
      "להוסיף הסבר על כלי העזר ודרך השימוש בפעם הראשונה שתלמידים פוגשים אותו.",
      "ניתן לבחור את הסמל של כלי העזר שיופיע בצד.",
      "לבחירת הפתרון הטכנולוגי — מומלץ להתייעץ עם הצוות הדיגיטלי.",
    ],
  },
  {
    icon: <GitBranch className="h-9 w-9" />,
    title: "בחירת תלמיד (שאלת נתיבים)",
    desc: "בחירה של התלמיד במסלול בו ימשיך ללמוד. הדגש על עצמאות הבחירה.",
    color: "olive",
    questions: [
      "האם הבחירה היא לפי רמת קושי, סוג תוצר או נושא העמקה?",
      "באיזו נקודה הנתיבים נפגשים חזרה?",
      "האם התלמיד חוזר לשיעור עם ידע ייחודי שעליו לשתף, או שכולם חוזרים לאותה נקודת בסיס?",
    ],
    tips: [
      "להפעלת שאלת הנתיבים — לפנות לתמיכה בווצאפ ולציין שם הקורס, השיעור, קישור, המקטע והעמודים של כל נתיב.",
    ],
  },
  {
    icon: <RouteIcon className="h-9 w-9" />,
    title: "מסלולים",
    desc: "ניתוב אוטומטי של תלמיד למסלול למידה מותאם, על פי לוגיקה של רמת קושי או שליטה במיומנות.",
    color: "navy",
    questions: [
      "באילו מצבים נרצה לבחור עבור התלמיד את המסלול אליו יגיע?",
      "האם ואיך נשקף לתלמיד את המסלול בו הוא נמצא?",
      "מה התנאים לפיהם המערכת תנתב את התלמיד?",
    ],
    tips: ["מומלץ להיעזר בתמיכה כדי ללמוד על האפשרויות של מסלולים."],
  },
  {
    icon: <StickyNote className="h-9 w-9" />,
    title: "הערה",
    desc: "צירוף הערות והבהרות לתלמיד — מחוץ לרצף הלמידה, בצבעים שונים.",
    color: "lime",
    questions: [
      "אילו סוגי הערות יכולות לתרום ללמידה בקורסים שלכם?",
      "מתי נכון לשלב הערה — הבהרת מידע, הרחבה (״הידעת״) או הנחיה כללית?",
    ],
    tips: [
      "להשתמש כשרוצים לומר משהו שאינו חלק מרצף הלמידה — הנחיה או הבהרה.",
      "ניתן ליצור הערות בצבעים שונים — שימוש עקבי מסייע לזיהוי אופי ההערה.",
    ],
  },
];

function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <PageShell>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative z-10 px-4 sm:px-6 md:px-12 pt-8 sm:pt-12 pb-12 sm:pb-16 max-w-6xl mx-auto text-center"
      >
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
            מדריך רכיבים · גרסה 1.0
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
            רכיבי הצגת תוכן, רכיבי תרגול ורכיבי פיגומים — הכול במקום אחד.
            <br />
            לחיצה על כל רכיב פותחת פירוט מלא של שאלות למחשבה והמלצות לביצוע.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#content"
              className="group inline-flex items-center gap-3 bg-amit-navy text-white px-7 py-3.5 rounded-full font-bold shadow-[var(--shadow-soft)] hover:bg-amit-teal transition"
            >
              צלילה לרכיבים
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Content Components */}
      <ComponentSection
        id="content"
        eyebrow="חלק א׳"
        eyebrowColor="text-amit-lime"
        title="רכיבי הצגת תוכן"
        subtitle="רכיבים שמשמשים להעברת מידע לתלמיד — טקסט, מדיה, הטמעות והערות."
        items={contentComponents}
        gridCols="grid sm:grid-cols-2 lg:grid-cols-2 gap-5"
      />

      {/* Exercise Components */}
      <ComponentSection
        id="exercise"
        eyebrow="חלק ב׳"
        eyebrowColor="text-amit-mint"
        title="רכיבי תרגול"
        subtitle="רכיבים אינטראקטיביים שמאפשרים לתלמיד לתרגל, לכתוב, לשתף וליצור."
        items={exerciseComponents}
        gridCols="grid sm:grid-cols-2 lg:grid-cols-2 gap-5"
      />

      {/* Scaffolding Components */}
      <ComponentSection
        id="scaffolding"
        eyebrow="חלק ג׳"
        eyebrowColor="text-amit-teal"
        title="רכיבי פיגומים"
        subtitle="רכיבים תומכי-למידה שעוטפים את חוויית התלמיד — רמזים, הקראה, כלי עזר ומסלולים."
        items={scaffoldingComponents}
        gridCols="grid sm:grid-cols-2 lg:grid-cols-2 gap-5"
      />
    </PageShell>
  );
}

function ComponentSection({
  id,
  eyebrow,
  eyebrowColor,
  title,
  subtitle,
  items,
  gridCols,
}: {
  id: string;
  eyebrow: string;
  eyebrowColor: string;
  title: string;
  subtitle: string;
  items: ExpandableComponent[];
  gridCols: string;
}) {
  return (
    <AnimatedSection
      id={id}
      className="relative z-10 px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-6xl mx-auto"
    >
      <div className="text-center mb-10">
        <div className={`text-xs sm:text-sm font-bold ${eyebrowColor} tracking-widest uppercase`}>
          {eyebrow}
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2">{title}</h2>
        <p className="text-amit-navy/70 mt-3 max-w-xl mx-auto">{subtitle}</p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className={gridCols}
      >
        {items.map((c) => (
          <ExpandableComponentCard key={c.title} {...c} />
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
