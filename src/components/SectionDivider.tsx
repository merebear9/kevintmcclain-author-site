import MoonMark from "./MoonMark";

export default function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/70 sm:w-20" />
      <MoonMark className="h-4 w-4 text-gold" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/70 sm:w-20" />
    </div>
  );
}
