interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-baseline gap-1 ${className}`}>
      <span className="text-xl font-black tracking-tighter">BROCCOLI</span>
      <span className="text-xl font-light tracking-[0.2em]">STUDIOS</span>
    </span>
  );
}
