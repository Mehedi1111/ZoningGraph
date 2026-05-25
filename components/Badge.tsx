interface BadgeProps {
  label: string;
  dot?: boolean;
}

export default function Badge({ label, dot = false }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-accent-border bg-accent-subtle text-[11px] font-[600] tracking-[0.07em] uppercase text-accent-text">
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-accent"
          style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
        />
      )}
      {label}
    </span>
  );
}
