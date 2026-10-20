export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "logo logo-compact" : "logo"}>
      <svg className="logo-mark" viewBox="0 0 32 32" aria-hidden="true">
        <rect x="1" y="1" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 24V8M23 24V8M9 16h14" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="logo-word">
        <span className="logo-name">Hofnie</span>
        <span className="logo-legal">Trading CC</span>
      </span>
    </span>
  );
}
