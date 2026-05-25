'use client';

const TESTIMONIALS_A = [
  {
    quote: "ZoningGraph reduced our permit intelligence research from 3 weeks to 3 hours. It's the most impactful data layer we've added to our platform.",
    name: 'Sarah Chen',
    title: 'VP of Product',
    company: 'GovTech Platform',
    initials: 'SC',
  },
  {
    quote: "The upzone probability scores are the most actionable regulatory signal we've ever seen. It reshaped how we underwrite acquisitions.",
    name: 'Marcus Webb',
    title: 'Head of Acquisitions',
    company: 'PE Real Estate Fund',
    initials: 'MW',
  },
  {
    quote: "We embedded the ZoningGraph API in four days. Our engineers had never worked with parcel data before. The documentation is exceptional.",
    name: 'Priya Anand',
    title: 'CTO',
    company: 'PropTech Startup',
    initials: 'PA',
  },
  {
    quote: "Real-time webhook notifications changed how we monitor our portfolio. We now catch regulatory shifts weeks before our competitors.",
    name: 'James Okoro',
    title: 'Director of Data',
    company: 'National Developer',
    initials: 'JO',
  },
];

const TESTIMONIALS_B = [
  {
    quote: "We replaced six months of manual GIS work with a single API call. ZoningGraph is the infrastructure layer our city planning software was missing.",
    name: 'Elena Torres',
    title: 'Engineering Lead',
    company: 'City Planning Platform',
    initials: 'ET',
  },
  {
    quote: "The graph model genuinely changes what's possible. Cross-referencing zoning codes, overlays, and variance history in one query is transformative.",
    name: 'David Kim',
    title: 'Data Science Director',
    company: 'Urban Analytics Firm',
    initials: 'DK',
  },
  {
    quote: "Our clients expect us to know zoning trends before the market does. ZoningGraph makes that possible. It's become central to our advisory process.",
    name: 'Rachel Stone',
    title: 'Partner',
    company: 'Planning Consultancy',
    initials: 'RS',
  },
  {
    quote: "The institutional-grade API design signals that this team understands enterprise requirements. Security, SLAs, webhooks — it's all there on day one.",
    name: 'Tom Adeyemi',
    title: 'VP of Engineering',
    company: 'Real Estate Intelligence Co.',
    initials: 'TA',
  },
];

/* Duplicate for seamless infinite loop */
const TRACK_A = [...TESTIMONIALS_A, ...TESTIMONIALS_A];
const TRACK_B = [...TESTIMONIALS_B, ...TESTIMONIALS_B];

function TestimonialCard({
  quote, name, title, company, initials,
}: {
  quote: string; name: string; title: string; company: string; initials: string;
}) {
  return (
    <div className="w-[360px] shrink-0 rounded-xl border border-zinc-100 bg-white p-6 shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:border-zinc-200 hover:shadow-[0_2px_10px_rgba(0,0,0,0.07)] transition-all duration-200">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#5b21b6" opacity="0.7">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        ))}
      </div>
      <p className="text-[14px] text-zinc-700 leading-[1.65] font-[400] mb-5">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-zinc-50">
        <div className="w-8 h-8 rounded-full bg-accent-subtle border border-accent-border flex items-center justify-center shrink-0">
          <span className="text-[10px] font-[700] text-accent-text">{initials}</span>
        </div>
        <div>
          <p className="text-[13px] font-[600] text-zinc-800 leading-none">{name}</p>
          <p className="text-[11px] text-zinc-400 font-[400] mt-0.5">{title} · {company}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialMarquee() {
  return (
    <section className="py-24 border-b border-zinc-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 mb-12">
        <p className="section-label mb-4">What enterprises say</p>
        <h2 className="text-[clamp(26px,3vw,40px)] font-[600] tracking-[-0.02em] text-zinc-900 leading-[1.15] max-w-xl">
          Trusted by the teams that can't afford to be wrong.
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {/* Row 1 — scrolls left */}
        <div className="marquee-fade overflow-hidden">
          <div
            className="flex gap-4 marquee-track"
            style={{ '--duration': '48s' } as React.CSSProperties}
          >
            {TRACK_A.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="marquee-fade overflow-hidden">
          <div
            className="flex gap-4 marquee-track-reverse"
            style={{ '--duration': '52s' } as React.CSSProperties}
          >
            {TRACK_B.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
