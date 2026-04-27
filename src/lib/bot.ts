export const BOT_URL = "https://chatgpt.com/g/g-696cffa9fbe881919c1dad635a50d6a0-klym-dygytlyym-mv-p-myt";

export function openBotUrl() {
  if (typeof window === "undefined") return;

  const openedWindow = window.open(BOT_URL, "_blank", "noopener,noreferrer");

  if (openedWindow) {
    openedWindow.opener = null;
    return;
  }

  window.location.assign(BOT_URL);
}