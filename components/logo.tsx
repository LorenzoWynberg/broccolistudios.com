interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`inline-flex flex-col leading-tight ${className}`}>
      <span className="text-xl font-bold tracking-tight">Broccoli</span>
      <span className="text-sm font-medium tracking-widest">STUDIOS</span>
    </span>
  );
}
