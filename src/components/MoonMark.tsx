export default function MoonMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M15.5 4.5a8 8 0 1 0 4.6 14.5A9.5 9.5 0 1 1 15.5 4.5Z"
        fill="currentColor"
      />
      <path d="M19 3.5l.6 1.5 1.5.6-1.5.6-.6 1.5-.6-1.5-1.5-.6 1.5-.6.6-1.5Z" fill="currentColor" />
      <path d="M21.3 8l.4 1 1 .4-1 .4-.4 1-.4-1-1-.4 1-.4.4-1Z" fill="currentColor" />
    </svg>
  );
}
