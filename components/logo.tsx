interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="text-lg font-black tracking-tight">BROCCOLI</span>
      <span className="text-xs font-medium tracking-[0.25em]">STUDIOS</span>
    </span>
  );
}
