interface LogoProps {
  className?: string;
  width?: number;
}

export function Logo({ className = '', width = 120 }: LogoProps) {
  const height = width * 0.45;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 54"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* BROCCOLI */}
      {/* B */}
      <path d="M0 0h7v2h4v2h2v4h-2v2h-4v2h4v2h2v4h-2v2h-4v2H0V0zm6 8h3V4H6v4zm0 10h3v-4H6v4z" />
      {/* R */}
      <path d="M16 0h11v2h2v6h-2v2h-4l6 12h-6l-5-10v10h-6V0h4zm6 8h3V4h-3v4z" />
      {/* O */}
      <path d="M32 2V0h9v2h2v18h-2v2h-9v-2h-2V2h2zm4 16h3V4h-3v14z" />
      {/* C */}
      <path d="M46 2V0h11v6h-6V4h-3v14h3v-2h6v6H46v-2h-2V2h2z" />
      {/* C */}
      <path d="M60 2V0h11v6h-6V4h-3v14h3v-2h6v6H60v-2h-2V2h2z" />
      {/* O */}
      <path d="M74 2V0h9v2h2v18h-2v2h-9v-2h-2V2h2zm4 16h3V4h-3v14z" />
      {/* L */}
      <path d="M88 0h6v18h7v4H88V0z" />
      {/* I */}
      <path d="M104 0h6v22h-6V0z" />

      {/* STUDIOS */}
      {/* S */}
      <path d="M0 32h10v3H4v4h6v3h4v6H4v3h10v3H0v-6h4v-3H0v-6h4v-4H0v-3z" />
      {/* T */}
      <path d="M17 32h14v3h-4v19h-6V35h-4v-3z" />
      {/* U */}
      <path d="M34 32h6v16h4V32h6v19h-4v3H38v-3h-4V32z" />
      {/* D */}
      <path d="M53 32h10v3h4v16h-4v3H53V32zm6 19h4V35h-4v16z" />
      {/* I */}
      <path d="M70 32h6v22h-6V32z" />
      {/* O */}
      <path d="M79 35v-3h10v3h4v16h-4v3H79v-3h-4V35h4zm4 13h4V35h-4v13z" />
      {/* S */}
      <path d="M96 32h14v3h-10v4h6v3h4v6h-4v3h-10v-3h10v-3h-6v-3h-4v-7h4v-3z" />
    </svg>
  );
}
