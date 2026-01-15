interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="text-lg font-black tracking-tight">BROCCOLI</span>
      <span className="text-[0.65rem] font-medium tracking-[0.35em]">STUDIOS</span>
    </span>
  );
}
