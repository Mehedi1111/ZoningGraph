'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Badge from '@/components/Badge';
import { FADE_UP, STAGGER, VIEWPORT } from '@/lib/animations';

function IconCheck() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function ListingCard() {
  return (
    <div className="w-full rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <div className="bg-zinc-50 border-b border-zinc-200 px-5 py-3 flex items-center justify-between">
        <span className="text-[12px] font-[500] text-zinc-500">2847 Ridgeline Ave, Los Angeles</span>
        <span className="text-[11px] font-[600] px-2 py-0.5 rounded bg-accent-subtle text-accent-text">R-2 Zone</span>
      </div>
      <div className="p-5">
        <p className="section-label mb-4">ZoningGraph Intelligence</p>
        <div className="grid grid-cols-2 gap-y-4 gap-x-6">
          {[
            { key: 'ADU Eligible',      val: 'Yes',     accent: true  },
            { key: 'Max Height',         val: '35 ft',   accent: false },
            { key: 'Upzone Probability', val: '78%',     accent: true  },
            { key: 'Recent Variances',   val: '2 (2023)',accent: false },
          ].map(({ key, val, accent }) => (
            <div key={key}>
              <p className="text-[11px] text-zinc-400 font-[500] mb-0.5">{key}</p>
              <p className={`text-[14px] font-[600] ${accent ? 'text-accent' : 'text-zinc-800'}`}>{val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlanningDashboard() {
  return (
    <div className="w-full rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <div className="px-5 py-3 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between">
        <span className="text-[12px] font-[500] text-zinc-500">Permit Queue — Active</span>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-[500] text-emerald-600">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" style={{ animation: 'pulse-dot 2.5s ease-in-out infinite' }}/>
          Live Sync
        </span>
      </div>
      <div className="divide-y divide-zinc-100">
        {[
          { id: 'LA-2025-0441', type: 'ADU Addition',   zone: 'R-2',  status: 'Pending',  color: 'text-amber-600 bg-amber-50' },
          { id: 'LA-2025-0439', type: 'Rezoning Req.',  zone: 'C-2',  status: 'Review',   color: 'text-accent-text bg-accent-subtle' },
          { id: 'LA-2025-0435', type: 'Variance Req.',  zone: 'MR-1', status: 'Approved', color: 'text-emerald-700 bg-emerald-50' },
          { id: 'LA-2025-0431', type: 'Code Amendment', zone: 'R-1',  status: 'Filed',    color: 'text-zinc-600 bg-zinc-100' },
        ].map(({ id, type, zone, status, color }) => (
          <div key={id} className="flex items-center justify-between px-5 py-3 gap-3">
            <div>
              <p className="font-[600] text-[13px] text-zinc-800">{type}</p>
              <p className="text-zinc-400 text-[11px] font-mono">{id} · {zone}</p>
            </div>
            <span className={`text-[10px] font-[600] px-2 py-0.5 rounded uppercase tracking-wide ${color}`}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortfolioMap() {
  const heat = [0.9,0.3,0.7,0.1,0.8,0.4,0.6,0.2,0.5,0.85,0.15,0.7,0.3,0.9,0.4,0.6,0.2,0.75,0.55,0.35,0.8,0.1,0.65,0.45,0.7,0.25,0.9,0.5,0.15,0.8,0.35,0.6,0.4,0.7,0.2,0.85,0.5,0.3,0.75,0.1,0.6,0.4,0.8,0.25,0.55,0.7,0.35,0.9,0.15,0.65,0.45,0.8,0.3,0.5,0.75,0.2,0.4,0.85,0.6,0.1,0.7,0.35,0.55,0.25];
  return (
    <div className="w-full rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <div className="px-5 py-3 bg-zinc-50 border-b border-zinc-200">
        <span className="text-[12px] font-[500] text-zinc-500">Upzone Opportunity — Greater LA Metro</span>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-8 gap-1 mb-4">
          {Array.from({ length: 64 }).map((_, i) => {
            const h = heat[i % heat.length];
            const opacity = 0.15 + h * 0.85;
            return (
              <div key={i} className="aspect-square rounded-sm bg-accent" style={{ opacity }}/>
            );
          })}
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-accent"/>
            <span className="text-[11px] text-zinc-500 font-[500]">High upzone signal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-accent-subtle border border-accent-border"/>
            <span className="text-[11px] text-zinc-500 font-[500]">Low</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PolicyGraph() {
  return (
    <div className="w-full rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <div className="px-5 py-3 bg-zinc-50 border-b border-zinc-200">
        <span className="text-[12px] font-[500] text-zinc-500">Historical Zoning Shifts — District 4</span>
      </div>
      <div className="p-5">
        <svg viewBox="0 0 320 140" className="w-full h-auto">
          {['2005', '2010', '2015', '2020', '2025'].map((y, i) => (
            <text key={y} x={i * 72 + 24} y={135} fontSize="8" fontFamily="Urbanist" fill="#a1a1aa" textAnchor="middle">{y}</text>
          ))}
          {[
            { vals: [30,35,40,45,55], color: '#5b21b6' },
            { vals: [20,18,22,28,35], color: '#71717a' },
            { vals: [15,12,10,8,5],   color: '#e4e4e7' },
          ].map(({ vals, color }, si) =>
            vals.map((v, i) => (
              <rect key={`${si}-${i}`} x={i*72+10+si*16} y={120-v*1.5} width={12} height={v*1.5} rx="2" fill={color}/>
            ))
          )}
        </svg>
        <div className="flex items-center gap-5 mt-2">
          {[{ c:'#5b21b6',l:'R-2'},{ c:'#71717a',l:'Mixed'},{ c:'#e4e4e7',l:'R-1'}].map(({c,l})=>(
            <div key={l} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-sm border border-zinc-200" style={{background:c}}/>
              <span className="text-[11px] text-zinc-500 font-[500]">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const USE_CASES = [
  {
    badge: 'Real Estate Platforms',
    title: 'The zoning intelligence layer your platform is missing.',
    body: 'Your listings show what a property is. ZoningGraph tells users what it can become. Embed parcel-level zoning intelligence — permitted uses, development potential, regulatory trajectory — directly into your property platform.',
    bullets: [
      'Parcel-level zoning data for every listing',
      'Development potential scoring — what can be built, what\'s likely to change',
      'API-first — embeds into any property data stack in days, not months',
    ],
    buyers: 'Ideal for: CoStar · Homes.com · Zillow · Redfin · LoopNet',
    Visual: ListingCard,
    imageLeft: false,
    bg: 'bg-white',
  },
  {
    badge: 'GovTech & Planning Software',
    title: 'Replace static code lookups with live graph intelligence.',
    body: 'Your permitting and planning platform processes thousands of zoning inquiries. ZoningGraph replaces brittle, static code lookups with a live, connected intelligence layer that updates automatically when codes change.',
    bullets: [
      'Automatic sync with municipal zoning ordinances and amendments',
      'Webhook alerts when regulatory events affect active cases',
      'White-label ready — brand the intelligence layer as your own',
    ],
    buyers: 'Ideal for: Tyler Technologies · Accela · OpenGov · Cityworks',
    Visual: PlanningDashboard,
    imageLeft: true,
    bg: 'bg-zinc-50',
  },
  {
    badge: 'Developers & Investors',
    title: 'Move on opportunity before the market prices it in.',
    body: 'Rezoning is the single largest driver of value creation in real estate — and the least well-monitored signal in any investor\'s toolkit. ZoningGraph gives development teams and capital allocators the regulatory intelligence to act before listings reflect it.',
    bullets: [
      'Upzone probability scoring for any parcel or corridor',
      'Regulatory pipeline monitoring — petitions, hearings, votes',
      'Portfolio-level zoning risk and opportunity reports',
    ],
    buyers: 'Ideal for: Family Offices · PE Real Estate · National Developers',
    Visual: PortfolioMap,
    imageLeft: false,
    bg: 'bg-white',
  },
  {
    badge: 'Urban Planners & Consultants',
    title: 'Build policy on intelligence, not anecdote.',
    body: 'Urban planning decisions ripple for decades. ZoningGraph gives planners and consultants a connected view of zoning history, land use patterns, infrastructure investment, and community impact data — all in one graph.',
    bullets: [
      'Historical zoning data going back 20+ years',
      'Cross-jurisdictional analysis — compare zoning frameworks across cities',
      'Export-ready reports for public hearings and policy submissions',
    ],
    buyers: 'Ideal for: Municipalities · Planning Consultancies · State Agencies',
    Visual: PolicyGraph,
    imageLeft: true,
    bg: 'bg-zinc-50',
  },
];

export default function UseCasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 px-6 border-b border-zinc-200">
        <motion.div initial="hidden" animate="visible" variants={STAGGER}
          className="max-w-3xl mx-auto flex flex-col items-center text-center gap-5">
          <motion.div variants={FADE_UP}><Badge label="Use Cases" /></motion.div>
          <motion.h1 variants={FADE_UP} className="font-[600] text-[clamp(36px,5vw,64px)] text-zinc-900 tracking-[-0.03em] leading-[1.05]">
            Every property decision starts with zoning.
          </motion.h1>
          <motion.p variants={FADE_UP} className="text-zinc-500 text-[18px] leading-[1.7] max-w-[540px]">
            ZoningGraph serves the platforms, governments, and enterprises that shape how cities grow.
          </motion.p>
        </motion.div>
      </section>

      {/* Use case sections */}
      {USE_CASES.map(({ badge, bg, title, body, bullets, buyers, Visual, imageLeft }) => (
        <section key={badge} className={`${bg} py-24 px-6 border-b border-zinc-100`}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}
              className={`flex flex-col ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-14 items-center`}
            >
              <div className="lg:w-1/2">
                <motion.div variants={FADE_UP}><Badge label={badge} /></motion.div>
                <motion.h2 variants={FADE_UP}
                  className="font-[600] text-[clamp(24px,2.8vw,36px)] text-zinc-900 tracking-[-0.02em] mt-5 leading-tight">
                  {title}
                </motion.h2>
                <motion.p variants={FADE_UP} className="text-zinc-500 text-[16px] leading-[1.75] mt-4">
                  {body}
                </motion.p>
                <motion.ul variants={FADE_UP} className="mt-6 flex flex-col gap-3">
                  {bullets.map(b => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-accent-subtle text-accent flex items-center justify-center shrink-0">
                        <IconCheck/>
                      </span>
                      <span className="text-zinc-600 text-[14px] leading-relaxed">{b}</span>
                    </li>
                  ))}
                </motion.ul>
                <motion.p variants={FADE_UP} className="text-[12px] font-[500] text-zinc-400 mt-5">
                  {buyers}
                </motion.p>
                <motion.div variants={FADE_UP} className="mt-5">
                  <Link href="https://madebyevoke.com/contact"
                    className="text-accent font-[600] text-[14px] hover:underline underline-offset-4">
                    Explore the Platform API →
                  </Link>
                </motion.div>
              </div>

              <motion.div
                variants={{ hidden: { opacity: 0, x: imageLeft ? -24 : 24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}
                className="lg:w-1/2"
              >
                <Visual />
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-white py-24 px-6 border-t border-zinc-200">
        <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}
          className="max-w-xl mx-auto text-center">
          <motion.h2 variants={FADE_UP} className="font-[600] text-[clamp(26px,3vw,40px)] text-zinc-900 tracking-[-0.02em]">
            See which use case fits your platform.
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-zinc-500 text-[16px] mt-4 mb-8">
            Talk to us about embedding ZoningGraph into your stack.
          </motion.p>
          <motion.div variants={FADE_UP} className="flex flex-wrap gap-3 justify-center">
            <Link href="https://madebyevoke.com/contact" className="bg-zinc-900 text-white font-[600] text-[14px] px-6 py-3 rounded-[8px] hover:bg-zinc-800 transition-colors">
              Start the Conversation
            </Link>
            <Link href="/intelligence" className="border border-zinc-200 bg-white text-zinc-700 font-[600] text-[14px] px-6 py-3 rounded-[8px] hover:border-zinc-300 hover:bg-zinc-50 transition-colors">
              See the Intelligence Layer
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
