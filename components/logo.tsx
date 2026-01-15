interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = '', size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Abstract B mark - interconnected nodes representing ecosystems */}
      {/* Top loop of B */}
      <circle cx="10" cy="9" r="3" fill="currentColor" />
      <circle cx="20" cy="6" r="2.5" fill="currentColor" />
      <circle cx="24" cy="12" r="2" fill="currentColor" />
      <path d="M10 9L20 6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 6L24 12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 12L10 9" stroke="currentColor" strokeWidth="1.5" />

      {/* Bottom loop of B */}
      <circle cx="10" cy="23" r="3" fill="currentColor" />
      <circle cx="22" cy="19" r="2.5" fill="currentColor" />
      <circle cx="25" cy="26" r="2" fill="currentColor" />
      <path d="M10 23L22 19" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22 19L25 26" stroke="currentColor" strokeWidth="1.5" />
      <path d="M25 26L10 23" stroke="currentColor" strokeWidth="1.5" />

      {/* Connecting spine */}
      <path d="M10 9L10 23" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
