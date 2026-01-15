interface LogoProps {
  className?: string;
  height?: number;
}

export function Logo({ className = '', height = 24 }: LogoProps) {
  // Aspect ratio ~6:1 for the wordmark
  const width = height * 6;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* BROCCOLI - bold, tight tracking */}
      <text
        x="0"
        y="21"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="-1"
      >
        BROCCOLI
      </text>
      {/* STUDIOS - lighter weight, spaced out */}
      <text
        x="97"
        y="21"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="400"
        letterSpacing="3"
      >
        STUDIOS
      </text>
    </svg>
  );
}
