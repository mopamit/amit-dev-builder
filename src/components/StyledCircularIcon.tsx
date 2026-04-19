import { useState, type ComponentType } from "react";
import { HelpCircle } from "lucide-react";

type AmitColor = "lime" | "navy" | "sky" | "teal" | "mint" | "olive" | "forest";

const colorMap: Record<AmitColor, string> = {
  lime: "bg-amit-lime",
  navy: "bg-amit-navy",
  sky: "bg-amit-sky",
  teal: "bg-amit-teal",
  mint: "bg-amit-mint",
  olive: "bg-amit-olive",
  forest: "bg-amit-forest",
};

const sizeMap = {
  sm: "h-12 w-12",
  md: "h-16 w-16",
  lg: "h-20 w-20",
  xl: "h-24 w-24",
};

interface StyledCircularIconProps {
  driveId: string;
  alt: string;
  color?: AmitColor;
  size?: keyof typeof sizeMap;
  fallback?: ComponentType<{ className?: string }>;
}

export function StyledCircularIcon({
  driveId,
  alt,
  color = "navy",
  size = "md",
  fallback: Fallback = HelpCircle,
}: StyledCircularIconProps) {
  const [errored, setErrored] = useState(false);
  const src = `https://drive.google.com/thumbnail?id=${driveId}&sz=w1000`;

  return (
    <div
      className={`${colorMap[color]} ${sizeMap[size]} rounded-full flex items-center justify-center shadow-[var(--shadow-card)] shrink-0 overflow-hidden ring-2 ring-white/40`}
    >
      {errored ? (
        <Fallback className="h-1/2 w-1/2 text-white" />
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setErrored(true)}
          className="h-full w-full object-contain p-2"
          loading="lazy"
        />
      )}
    </div>
  );
}
