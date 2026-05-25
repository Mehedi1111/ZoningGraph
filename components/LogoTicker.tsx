'use client';

/* Brand-accurate wordmark logos as inline SVG */
const LOGOS = [
  {
    name: 'CoStar',
    logo: (
      <svg height="18" viewBox="0 0 90 18" fill="none" aria-label="CoStar">
        <text x="0" y="14" fontFamily="Urbanist, sans-serif" fontWeight="700" fontSize="15" fill="#1a1a2e" letterSpacing="-0.3">Co</text>
        <text x="24" y="14" fontFamily="Urbanist, sans-serif" fontWeight="700" fontSize="15" fill="#c8102e" letterSpacing="-0.3">Star</text>
      </svg>
    ),
  },
  {
    name: 'Tyler Technologies',
    logo: (
      <svg height="18" viewBox="0 0 140 18" fill="none" aria-label="Tyler Technologies">
        <rect x="0" y="3" width="3" height="12" rx="1" fill="#003f87"/>
        <text x="8" y="14" fontFamily="Urbanist, sans-serif" fontWeight="600" fontSize="13" fill="#003f87" letterSpacing="-0.2">Tyler Technologies</text>
      </svg>
    ),
  },
  {
    name: 'Esri',
    logo: (
      <svg height="20" viewBox="0 0 50 20" fill="none" aria-label="Esri">
        <circle cx="9" cy="10" r="8" fill="#007AC2" opacity="0.15"/>
        <circle cx="9" cy="10" r="5" fill="#007AC2" opacity="0.3"/>
        <circle cx="9" cy="10" r="2.5" fill="#007AC2"/>
        <text x="20" y="15" fontFamily="Urbanist, sans-serif" fontWeight="700" fontSize="14" fill="#007AC2" letterSpacing="-0.2">esri</text>
      </svg>
    ),
  },
  {
    name: 'Accela',
    logo: (
      <svg height="18" viewBox="0 0 72 18" fill="none" aria-label="Accela">
        <path d="M4 14L9 3L14 14" stroke="#00B140" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 10.5h6" stroke="#00B140" strokeWidth="1.5" strokeLinecap="round"/>
        <text x="18" y="14" fontFamily="Urbanist, sans-serif" fontWeight="600" fontSize="13.5" fill="#1a1a1a" letterSpacing="-0.2">Accela</text>
      </svg>
    ),
  },
  {
    name: 'JLL',
    logo: (
      <svg height="18" viewBox="0 0 40 18" fill="none" aria-label="JLL">
        <text x="0" y="14" fontFamily="Urbanist, sans-serif" fontWeight="800" fontSize="16" fill="#E41E20" letterSpacing="1">JLL</text>
      </svg>
    ),
  },
  {
    name: 'CBRE',
    logo: (
      <svg height="18" viewBox="0 0 54 18" fill="none" aria-label="CBRE">
        <text x="0" y="14" fontFamily="Urbanist, sans-serif" fontWeight="800" fontSize="15" fill="#00785A" letterSpacing="0.5">CBRE</text>
      </svg>
    ),
  },
  {
    name: 'Palantir',
    logo: (
      <svg height="18" viewBox="0 0 80 18" fill="none" aria-label="Palantir">
        <circle cx="8" cy="6" r="5" fill="#1a1a1a"/>
        <path d="M8 11v7" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="8" cy="11" r="3" fill="#1a1a1a" opacity="0.25"/>
        <text x="18" y="14" fontFamily="Urbanist, sans-serif" fontWeight="500" fontSize="13" fill="#1a1a1a" letterSpacing="-0.1">palantir</text>
      </svg>
    ),
  },
  {
    name: 'OpenGov',
    logo: (
      <svg height="18" viewBox="0 0 84 18" fill="none" aria-label="OpenGov">
        <path d="M2 14V6L8 2L14 6V14H10V10H6V14H2Z" stroke="#1B5E96" strokeWidth="1.4" strokeLinejoin="round"/>
        <text x="18" y="14" fontFamily="Urbanist, sans-serif" fontWeight="600" fontSize="13" fill="#1B5E96" letterSpacing="-0.2">OpenGov</text>
      </svg>
    ),
  },
  {
    name: 'RealPage',
    logo: (
      <svg height="18" viewBox="0 0 84 18" fill="none" aria-label="RealPage">
        <rect x="1" y="1" width="12" height="16" rx="2" stroke="#0072CE" strokeWidth="1.3"/>
        <path d="M4 6h5a2 2 0 0 1 0 4H4V6Z" stroke="#0072CE" strokeWidth="1" strokeLinejoin="round"/>
        <path d="M6 10l4 5" stroke="#0072CE" strokeWidth="1" strokeLinecap="round"/>
        <text x="17" y="14" fontFamily="Urbanist, sans-serif" fontWeight="600" fontSize="13" fill="#1a1a1a" letterSpacing="-0.2">RealPage</text>
      </svg>
    ),
  },
  {
    name: 'Yardi',
    logo: (
      <svg height="18" viewBox="0 0 56 18" fill="none" aria-label="Yardi">
        <path d="M7 2L12 10M7 2L2 10M7 10v6" stroke="#00833D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="17" y="14" fontFamily="Urbanist, sans-serif" fontWeight="600" fontSize="13" fill="#1a1a1a" letterSpacing="-0.2">Yardi</text>
      </svg>
    ),
  },
  {
    name: 'Cityworks',
    logo: (
      <svg height="18" viewBox="0 0 90 18" fill="none" aria-label="Cityworks">
        <rect x="1" y="6" width="4" height="11" rx="0.5" fill="#2563EB" opacity="0.5"/>
        <rect x="6" y="3" width="4" height="14" rx="0.5" fill="#2563EB" opacity="0.7"/>
        <rect x="11" y="8" width="4" height="9" rx="0.5" fill="#2563EB" opacity="0.5"/>
        <text x="19" y="14" fontFamily="Urbanist, sans-serif" fontWeight="600" fontSize="13" fill="#1a1a1a" letterSpacing="-0.2">Cityworks</text>
      </svg>
    ),
  },
];

const TRACK = [...LOGOS, ...LOGOS];

function LogoCard({ name, logo }: { name: string; logo: React.ReactNode }) {
  return (
    <div
      aria-label={name}
      className="flex items-center justify-center h-12 px-7 shrink-0 rounded-[10px] border border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-[0_1px_6px_rgba(0,0,0,0.06)] transition-all duration-200"
    >
      {logo}
    </div>
  );
}

export default function LogoTicker() {
  return (
    <section className="py-12 border-b border-zinc-100 overflow-hidden">
      <p className="section-label text-center mb-8">Built for the platforms shaping property intelligence</p>
      <div className="marquee-fade overflow-hidden">
        <div
          className="flex items-center gap-3 marquee-track"
          style={{ '--duration': '42s' } as React.CSSProperties}
        >
          {TRACK.map((logo, i) => (
            <LogoCard key={i} name={logo.name} logo={logo.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
