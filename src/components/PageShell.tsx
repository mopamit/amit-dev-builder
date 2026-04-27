import { ReactNode } from "react";
import { SiteHeader, FloatingBotCTA } from "./SiteHeader";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div dir="rtl" className="min-h-screen relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 amit-grid-bg" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amit-lime/25 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-amit-sky/25 blur-3xl animate-float-slower" />
      <div className="pointer-events-none absolute top-2/3 left-1/4 h-72 w-72 rounded-full bg-amit-mint/20 blur-3xl animate-float-slow" />

      <SiteHeader />
      {children}
      <FloatingBotCTA />

      <footer className="relative z-10 px-6 md:px-12 py-10 text-center text-sm text-amit-navy/60 font-semibold">
        © רשת אמית · חינוך שרואה רחוק · בילדר דיגיטלי מונגש
      </footer>
    </div>
  );
}
