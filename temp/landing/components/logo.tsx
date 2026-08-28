import { cn } from "@/lib/utils";
import { copy } from "@/lib/copy";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <a
      href="/"
      aria-label={copy.nav.logo}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <LogoMark className="size-9 shrink-0 transition-transform duration-300 group-hover:scale-105" />
      {showWordmark ? (
        <span className="text-lg font-bold tracking-tight">
          <span className="text-emerald-400">WA</span>
          <span className="text-slate-100"> LeadGrab</span>
        </span>
      ) : null}
    </a>
  );
}

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="logoGradient"
          x1="8"
          y1="6"
          x2="34"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#34D399" />
          <stop offset="1" stopColor="#10B981" />
        </linearGradient>
        <linearGradient
          id="logoSheen"
          x1="12"
          y1="8"
          x2="28"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0.35" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <filter
          id="logoGlow"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow ring */}
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="11"
        fill="#10B981"
        fillOpacity="0.12"
      />

      {/* Main mark: chat bubble + export sheet */}
      <path
        d="M10 8h20a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4h-11l-5.5 4.1a1.2 1.2 0 0 1-1.9-1V27H10a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4Z"
        fill="url(#logoGradient)"
        filter="url(#logoGlow)"
      />

      {/* Sheet overlay */}
      <rect
        x="14"
        y="12"
        width="14"
        height="12"
        rx="2"
        fill="#022C22"
        fillOpacity="0.28"
      />

      {/* Contact rows inside chat */}
      <circle cx="17" cy="16" r="1.3" fill="#ECFDF5" />
      <rect x="20" y="15.1" width="6.5" height="1.6" rx="0.8" fill="#ECFDF5" />

      <circle cx="17" cy="20" r="1.3" fill="#D1FAE5" fillOpacity="0.9" />
      <rect x="20" y="19.1" width="5.5" height="1.6" rx="0.8" fill="#D1FAE5" fillOpacity="0.9" />

      <circle cx="17" cy="24" r="1.3" fill="#A7F3D0" fillOpacity="0.85" />
      <rect x="20" y="23.1" width="7" height="1.6" rx="0.8" fill="#A7F3D0" fillOpacity="0.85" />

      {/* Export arrow — grab & pull out */}
      <path
        d="M29.5 28.5 32 31l2.5-2.5M32 31V25.5"
        stroke="#022C22"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top sheen */}
      <path
        d="M10 8h20a4 4 0 0 1 4 4v5H10V8Z"
        fill="url(#logoSheen)"
      />
    </svg>
  );
}
