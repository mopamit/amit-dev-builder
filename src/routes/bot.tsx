import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { BOT_URL } from "@/lib/bot";

export const Route = createFileRoute("/bot")({
  head: () => ({
    meta: [
      { title: "מעבר לבוט הכלים" },
      { name: "robots", content: "noindex" },
      { name: "referrer", content: "no-referrer" },
    ],
  }),
  component: BotRedirect,
});

function BotRedirect() {
  useEffect(() => {
    // Top-level navigation outside any iframe sandbox; no referrer is sent.
    window.location.replace(BOT_URL);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <h1 className="text-2xl font-bold text-amit-navy mb-3">פותח את בוט הכלים…</h1>
        <p className="text-amit-navy/70 mb-6">
          אם הדפדפן לא מעביר אותך אוטומטית, לחצ/י על הקישור:
        </p>
        <a
          href={BOT_URL}
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-amit-navy text-white px-6 py-3 rounded-full font-bold hover:bg-amit-teal transition"
        >
          פתיחת בוט הכלים ↗
        </a>
      </div>
    </div>
  );
}
