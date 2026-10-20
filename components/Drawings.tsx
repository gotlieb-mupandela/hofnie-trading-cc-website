import type { ReactNode } from "react";

type Variant = "house" | "plan" | "section" | "yard";

export function StudyDrawing({ variant = "house" }: { variant?: Variant }) {
  if (variant === "plan") return <PlanStudy />;
  if (variant === "section") return <SectionStudy />;
  if (variant === "yard") return <YardStudy />;
  return <HouseStudy />;
}

function Frame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 640 460" className="study" role="img" aria-hidden="true">
      <rect width="640" height="460" rx="28" fill="#f7f1e6" />
      <g stroke="#1e3328" strokeOpacity="0.08" strokeWidth="1">
        {Array.from({ length: 12 }, (_, index) => (
          <line key={`v-${index}`} x1={40 + index * 52} y1="24" x2={40 + index * 52} y2="436" />
        ))}
        {Array.from({ length: 8 }, (_, index) => (
          <line key={`h-${index}`} x1="24" y1={36 + index * 52} x2="616" y2={36 + index * 52} />
        ))}
      </g>
      {children}
    </svg>
  );
}

function HouseStudy() {
  return (
    <Frame>
      <circle cx="520" cy="92" r="28" fill="#c6a15a" />
      <path d="M92 392h470" stroke="#1e3328" strokeWidth="2" />
      <path d="M78 392c28-46 48-46 70 0" fill="none" stroke="#1e3328" strokeWidth="2" />
      <circle cx="112" cy="330" r="26" fill="#c6a15a" fillOpacity="0.45" stroke="#1e3328" strokeWidth="2" />
      <path d="M150 214 310 104l160 110" fill="#b84321" stroke="#1e3328" strokeWidth="2" />
      <rect x="176" y="214" width="268" height="178" fill="#efe4d2" stroke="#1e3328" strokeWidth="2" />
      <rect x="206" y="248" width="58" height="46" fill="#f7f1e6" stroke="#1e3328" strokeWidth="2" />
      <rect x="356" y="248" width="58" height="46" fill="#f7f1e6" stroke="#1e3328" strokeWidth="2" />
      <path d="M235 248v46M206 271h58M385 248v46M356 271h58" stroke="#1e3328" strokeWidth="1.5" />
      <rect x="286" y="300" width="48" height="92" fill="#1e3328" />
      <path d="M168 250v142M452 250v142" stroke="#1e3328" strokeWidth="2" />
      <path d="M150 250h320" stroke="#1e3328" strokeWidth="2" />
      <text x="40" y="52" fill="#1e3328" fontSize="16" fontFamily="Georgia, serif">
        Illustrated study
      </text>
    </Frame>
  );
}

function PlanStudy() {
  return (
    <Frame>
      <rect x="90" y="70" width="460" height="320" fill="none" stroke="#1e3328" strokeWidth="2" />
      <path d="M90 210h250M340 70v320M250 210v180" stroke="#1e3328" strokeWidth="2" />
      <rect x="120" y="100" width="90" height="70" fill="#efe4d2" stroke="#1e3328" strokeWidth="2" />
      <rect x="380" y="110" width="130" height="90" fill="#b84321" fillOpacity="0.85" stroke="#1e3328" strokeWidth="2" />
      <rect x="120" y="250" width="90" height="100" fill="none" stroke="#1e3328" strokeWidth="2" />
      <path d="M380 250h140M380 290h140M380 330h140" stroke="#c6a15a" strokeWidth="6" />
      <text x="40" y="52" fill="#1e3328" fontSize="16" fontFamily="Georgia, serif">
        Plan study
      </text>
    </Frame>
  );
}

function SectionStudy() {
  return (
    <Frame>
      <path d="M70 380h500" stroke="#1e3328" strokeWidth="2" />
      <rect x="140" y="160" width="250" height="220" fill="#efe4d2" stroke="#1e3328" strokeWidth="2" />
      <path d="M140 160 265 70l125 90" fill="#1e3328" />
      <rect x="410" y="230" width="140" height="150" fill="#f7f1e6" stroke="#b84321" strokeWidth="3" />
      <path d="M410 230h140" stroke="#b84321" strokeWidth="8" />
      <path d="M170 200h70M170 230h70M270 200h70M270 230h70" stroke="#1e3328" strokeWidth="2" />
      <path d="M150 300h230" stroke="#c6a15a" strokeWidth="8" />
      <text x="40" y="52" fill="#1e3328" fontSize="16" fontFamily="Georgia, serif">
        Section study
      </text>
    </Frame>
  );
}

function YardStudy() {
  return (
    <Frame>
      <path d="M60 360h520" stroke="#1e3328" strokeWidth="2" />
      <rect x="80" y="150" width="480" height="210" fill="#efe4d2" stroke="#1e3328" strokeWidth="2" />
      <path d="M80 150h480" stroke="#1e3328" strokeWidth="10" />
      <rect x="250" y="210" width="150" height="150" fill="#b84321" stroke="#1e3328" strokeWidth="2" />
      <path d="M110 250h100M110 290h100M110 330h100" stroke="#c6a15a" strokeWidth="8" />
      <path d="M430 240h90M430 280h90M430 320h90" stroke="#1e3328" strokeWidth="2" />
      <text x="40" y="52" fill="#1e3328" fontSize="16" fontFamily="Georgia, serif">
        Yard study
      </text>
    </Frame>
  );
}
