import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import amitLogo from "@/assets/amit-logo.png";

const tabs = [
  { to: "/" as const, label: "הבילדר" },
  { to: "/tools" as const, label: "כלים דיגיטליים" },
  { to: "/guidelines" as const, label: "הנחיות עיצוב ופיתוח" },
  { to: "/outputs" as const, label: "תוצרים דיגיטליים" },
];

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-20 px-4 sm:px-6 md:px-12 pt-6 pb-4 flex items-center justify-between gap-4 flex-wrap-reverse"
    >
      <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-bold text-amit-navy/70 flex-wrap">
        {tabs.map((t) => (
          <Link
            key={t.to}
            to={t.to}
            activeOptions={{ exact: true }}
            className="px-3 py-1.5 rounded-full hover:bg-white/70 hover:text-amit-navy transition-colors data-[status=active]:bg-amit-navy data-[status=active]:text-white"
          >
            {t.label}
          </Link>
        ))}
        <a
          href="https://chatgpt.com/g/g-696cffa9fbe881919c1dad635a50d6a0-klym-dygytlyym-mv-p-myt"
          target="_blank"
          rel="noopener noreferrer"
          className="ms-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amit-lime/30 border border-amit-lime/50 text-amit-olive hover:bg-amit-lime/50 transition-colors"
        >
          <Bot className="h-3.5 w-3.5" />
          הבוט שלנו
        </a>
      </nav>
      <Link to="/">
        <motion.img
          whileHover={{ rotate: -3, scale: 1.05 }}
          src={amitLogo}
          alt="לוגו רשת אמית"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />
      </Link>
    </motion.header>
  );
}

export function FloatingBotCTA() {
  return (
    <motion.a
      href="https://chatgpt.com/g/g-696cffa9fbe881919c1dad635a50d6a0-klym-dygytlyym-mv-p-myt"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 left-5 z-50 group inline-flex items-center gap-2 bg-amit-navy text-white ps-4 pe-5 py-3 rounded-full font-bold shadow-[var(--shadow-soft)] hover:bg-amit-teal transition-colors"
      aria-label="פתיחת הבוט הדיגיטלי לכלים"
    >
      <motion.span
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="bg-amit-lime/30 rounded-full p-1.5"
      >
        <Bot className="h-5 w-5" />
      </motion.span>
      <span className="hidden sm:inline">בוט הכלים שלנו</span>
      <span className="sm:hidden">בוט</span>
    </motion.a>
  );
}
