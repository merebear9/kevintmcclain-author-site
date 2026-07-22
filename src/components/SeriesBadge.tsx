export default function SeriesBadge({
  size = "lg",
  className = "",
}: {
  size?: "lg" | "sm";
  className?: string;
}) {
  const isLg = size === "lg";
  return (
    <div
      className={`deco-frame inline-flex items-center gap-3 px-6 py-3 sm:gap-4 sm:px-10 sm:py-4 ${className}`}
    >
      <span className="text-gold/70">&#9670;</span>
      <p
        className={`font-deco font-bold tracking-[0.3em] text-gold-bright ${
          isLg ? "text-lg sm:text-2xl" : "text-xs sm:text-sm"
        }`}
      >
        THE RIVER WITCHES
      </p>
      <span className="text-gold/70">&#9670;</span>
    </div>
  );
}
