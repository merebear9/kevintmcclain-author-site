export default function WaveSwirls({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
    >
      <path
        d="M0 60 Q 50 20 100 60 T 200 60 T 300 60 T 400 60 T 500 60 T 600 60 T 700 60 T 800 60 T 900 60 T 1000 60 T 1100 60 T 1200 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="100" cy="60" r="18" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="100" cy="60" r="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="500" cy="60" r="14" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="900" cy="60" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="900" cy="60" r="11" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}
