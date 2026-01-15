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
      {/* Broccoli florets - three overlapping circles forming the crown */}
      <circle cx="16" cy="9" r="7" fill="currentColor" />
      <circle cx="10" cy="13" r="6" fill="currentColor" />
      <circle cx="22" cy="13" r="6" fill="currentColor" />
      {/* Stem */}
      <path
        d="M13 17L14 28C14 29.1046 14.8954 30 16 30C17.1046 30 18 29.1046 18 28L19 17"
        fill="currentColor"
      />
    </svg>
  );
}
