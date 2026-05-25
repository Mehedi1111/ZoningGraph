'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Badge from '@/components/Badge';
import { FADE_UP, STAGGER, CARD_STAGGER, VIEWPORT } from '@/lib/animations';

function IconCheck() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

const STEPS = [
  {
    step: '01',
    title: 'Ingest',
    body: 'Municipal portals, county GIS systems, state databases, and regulatory filings — ingested, normalized, and versioned automatically.',
  },
  {
    step: '02',
    title: 'Connect',
    body: 'Every data point mapped as a node. Every relationship mapped as an edge. Zoning codes, parcels, overlays, variances — all connected in a live graph.',
  },
  {
    step: '03',
    title: 'Query',
    body: 'GraphQL and REST APIs return structured intelligence for any parcel, district, or regulatory event in milliseconds.',
  },
];

const ARCH_ROWS = [
  {
    imageLeft: true,
    badge: 'Architecture',
    title: 'Graph-Native From the Ground Up',
    body: 'Built on a property graph database — not a relational schema with joins. Every zoning entity is a first-class node. Every relationship is a typed edge. Queries that would require 12 SQL joins execute in a single graph traversal.',
    bullets: [
      'Property graph, not relational schema',
      'Single traversal replaces 12-join queries',
      'Edge types: zoning_applies_to, overlaps_with, permits_use',
    ],
    visual: (
      <div className="w-full rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <div className="px-5 py-3 bg-zinc-50 border-b border-zinc-200">
          <span className="text-[11px] font-[500] text-zinc-400 font-mono tracking-tight">graph_schema.gql</span>
        </div>
        <div className="p-6">
          <svg viewBox="0 0 420 200" className="w-full h-auto" fill="none">
            {['Municipal Portals', 'County GIS', 'State DBs', 'Filings'].map((label, i) => (
              <g key={label}>
                <rect x={10} y={20 + i * 44} width={110} height={32} rx="5" fill="#f5f3ff" stroke="#ede9fe" strokeWidth="1"/>
                <text x={65} y={40 + i * 44} textAnchor="middle" fontSize="9" fontFamily="Urbanist" fontWeight="600" fill="#5b21b6">{label}</text>
                <line x1={120} y1={36 + i * 44} x2={160} y2={36 + i * 44} stroke="#e4e4e7" strokeWidth="1" strokeDasharray="4 3"/>
              </g>
            ))}
            <rect x={160} y={55} width={100} height={90} rx="10" fill="#f5f3ff" stroke="#5b21b6" strokeWidth="1.5"/>
            <text x={210} y={97} textAnchor="middle" fontSize="10" fontFamily="Urbanist" fontWeight="600" fill="#5b21b6">Graph DB</text>
            <text x={210} y={113} textAnchor="middle" fontSize="8" fontFamily="Urbanist" fontWeight="500" fill="#71717a">property graph</text>
            <rect x={300} y={55} width={100} height={90} rx="10" fill="#fafafa" stroke="#e4e4e7" strokeWidth="1.5"/>
            <text x={350} y={97} textAnchor="middle" fontSize="10" fontFamily="Urbanist" fontWeight="600" fill="#0f0f11">API Layer</text>
            <text x={350} y={113} textAnchor="middle" fontSize="8" fontFamily="Urbanist" fontWeight="500" fill="#71717a">GraphQL + REST</text>
            <path d="M260 100 L295 100" stroke="#5b21b6" strokeWidth="1.5" markerEnd="url(#arr2)"/>
            <defs>
              <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#5b21b6"/>
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    ),
  },
  {
    imageLeft: false,
    badge: 'Real-Time',
    title: 'Real-Time Regulatory Events',
    body: 'Subscribe to webhooks for any parcel, district, or jurisdiction. When a rezoning petition is filed, a variance is approved, or a code amendment is adopted — your platform knows within minutes, not months.',
    bullets: [
      'Sub-minute latency from filing to webhook',
      'Jurisdiction-level or parcel-level subscriptions',
      'ISO 8601 timestamps, structured JSON payloads',
    ],
    visual: (
      <div className="w-full rounded-xl border border-zinc-200 bg-zinc-900 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"/>
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"/>
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"/>
          </div>
          <span className="ml-2 text-[11px] text-zinc-400 font-mono">webhook_event.json</span>
        </div>
        <pre className="p-6 text-[12px] leading-[1.85] font-mono overflow-x-auto">
          <code>
            <span className="text-zinc-500">{'{'}</span>{'\n'}
            {'  '}<span className="text-accent-border">&quot;event&quot;</span><span className="text-zinc-500">: </span><span className="text-emerald-400">&quot;rezoning.filed&quot;</span>,{'\n'}
            {'  '}<span className="text-accent-border">&quot;parcel&quot;</span><span className="text-zinc-500">: </span><span className="text-emerald-400">&quot;043-221-088&quot;</span>,{'\n'}
            {'  '}<span className="text-accent-border">&quot;jurisdiction&quot;</span><span className="text-zinc-500">: </span><span className="text-emerald-400">&quot;Los Angeles, CA&quot;</span>,{'\n'}
            {'  '}<span className="text-accent-border">&quot;current_zone&quot;</span><span className="text-zinc-500">: </span><span className="text-emerald-400">&quot;R-2&quot;</span>,{'\n'}
            {'  '}<span className="text-accent-border">&quot;proposed_zone&quot;</span><span className="text-zinc-500">: </span><span className="text-emerald-400">&quot;MR-1&quot;</span>,{'\n'}
            {'  '}<span className="text-accent-border">&quot;upzone_delta&quot;</span><span className="text-zinc-500">: </span><span className="text-amber-300">+0.31</span>{'\n'}
            <span className="text-zinc-500">{'}'}</span>
          </code>
        </pre>
      </div>
    ),
  },
  {
    imageLeft: true,
    badge: 'Performance',
    title: 'Enterprise-Grade Performance',
    body: '99.9% uptime SLA. Sub-100ms p95 response times. Regional failover. SOC 2 Type II compliant. Built for platforms serving millions of queries per day.',
    bullets: [
      'Active-active multi-region replication',
      '99.9% contractual uptime SLA',
      'SOC 2 Type II + GDPR compliant',
    ],
    visual: (
      <div className="w-full rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <div className="px-5 py-3 bg-zinc-50 border-b border-zinc-200">
          <span className="text-[11px] font-[500] text-zinc-400 font-mono tracking-tight">API Latency — P-percentile</span>
        </div>
        <div className="p-6">
          {[{ label: 'p50', val: '28ms', pct: 28 }, { label: 'p95', val: '74ms', pct: 74 }, { label: 'p99', val: '148ms', pct: 100 }].map(({ label, val, pct }) => (
            <div key={label} className="flex items-center gap-4 mb-5 last:mb-0">
              <span className="font-[600] text-[13px] text-zinc-500 w-8">{label}</span>
              <div className="flex-1 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                />
              </div>
              <span className="font-[600] text-[14px] text-accent w-14 text-right tabular-nums">{val}</span>
            </div>
          ))}
          <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-wrap gap-4">
            {['99.9% SLA', 'SOC 2 Type II', 'Regional Failover'].map(l => (
              <span key={l} className="inline-flex items-center gap-1.5 text-[12px] font-[500] text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/>{l}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 px-6 border-b border-zinc-200">
        <motion.div
          initial="hidden" animate="visible" variants={STAGGER}
          className="max-w-3xl mx-auto flex flex-col items-center text-center gap-5"
        >
          <motion.div variants={FADE_UP}><Badge label="The Platform" /></motion.div>
          <motion.h1 variants={FADE_UP} className="font-[600] text-[clamp(36px,5vw,64px)] text-zinc-900 tracking-[-0.03em] leading-[1.05]">
            Zoning intelligence, engineered for enterprise.
          </motion.h1>
          <motion.p variants={FADE_UP} className="text-zinc-500 text-[18px] leading-[1.7] max-w-[540px]">
            ZoningGraph is a graph-native intelligence platform that connects every layer of
            property regulation into one unified, queryable dataset.
          </motion.p>
          <motion.div variants={FADE_UP} className="flex flex-wrap gap-3 justify-center mt-2">
            <Link href="https://madebyevoke.com/contact" className="bg-zinc-900 text-white font-[600] text-[14px] px-6 py-3 rounded-[8px] hover:bg-zinc-800 transition-colors">
              Request Access
            </Link>
            <Link href="/intelligence" className="border border-zinc-200 bg-white text-zinc-700 font-[600] text-[14px] px-6 py-3 rounded-[8px] hover:border-zinc-300 hover:bg-zinc-50 transition-colors">
              See Intelligence Layer
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="bg-zinc-50 py-24 px-6 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}
            className="flex flex-col items-center text-center mb-14">
            <motion.p variants={FADE_UP} className="section-label mb-3">How It Works</motion.p>
            <motion.h2 variants={FADE_UP} className="font-[600] text-[clamp(26px,3vw,42px)] text-zinc-900 tracking-[-0.02em]">
              From raw data to real intelligence.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={CARD_STAGGER}
            className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STEPS.map(({ step, title, body }) => (
              <motion.div key={title} variants={FADE_UP} className="card p-7 relative">
                <div className="absolute top-5 right-5 font-[600] text-[36px] leading-none text-zinc-100 select-none tabular-nums">{step}</div>
                <p className="section-label mb-4">{step}</p>
                <h3 className="font-[600] text-[18px] text-zinc-900 mb-3">{title}</h3>
                <p className="text-zinc-500 text-[14px] leading-[1.65]">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Architecture Rows */}
      <section className="bg-white py-6 px-6">
        <div className="max-w-6xl mx-auto">
          {ARCH_ROWS.map(({ imageLeft, badge, title, body, bullets, visual }) => (
            <motion.div
              key={title}
              initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}
              className={`flex flex-col ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-14 items-center py-20 border-b border-zinc-100 last:border-0`}
            >
              <motion.div variants={FADE_UP} className="lg:w-1/2">
                <p className="section-label mb-4">{badge}</p>
                <h2 className="font-[600] text-[clamp(24px,2.8vw,38px)] text-zinc-900 tracking-[-0.02em] leading-tight">{title}</h2>
                <p className="text-zinc-500 text-[16px] leading-[1.75] mt-4">{body}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {bullets.map(t => (
                    <li key={t} className="flex items-center gap-2.5 text-[14px] text-zinc-600">
                      <span className="w-5 h-5 rounded-full bg-accent-subtle text-accent flex items-center justify-center shrink-0">
                        <IconCheck/>
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, x: imageLeft ? 32 : -32 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}
                className="lg:w-1/2"
              >
                {visual}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* API Showcase */}
      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}
            className="text-center mb-12">
            <motion.h2 variants={FADE_UP} className="font-[600] text-[clamp(28px,3.5vw,48px)] text-white tracking-[-0.025em] leading-tight">
              A clean API. A complete graph.
            </motion.h2>
            <motion.p variants={FADE_UP} className="text-zinc-400 text-[17px] mt-4">
              Three lines to query a parcel. One endpoint for the entire graph.
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <div className="px-5 py-3 bg-white/5 border-b border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-border"/>
                <span className="text-[11px] font-[500] text-zinc-400 font-mono uppercase tracking-widest">Request</span>
              </div>
              <pre className="p-6 text-[12px] leading-[1.9] font-mono overflow-x-auto">
                <code>
                  <span className="text-accent-border">query</span><span className="text-white"> ParcelIntelligence </span><span className="text-zinc-500">{'{'}</span>{'\n'}
                  {'  '}<span className="text-zinc-300">parcel</span><span className="text-zinc-500">(apn: </span><span className="text-emerald-400">&quot;043-221-088-000&quot;</span><span className="text-zinc-500">) {'{'}</span>{'\n'}
                  {'    '}<span className="text-zinc-300">zoning_code</span>{'\n'}
                  {'    '}<span className="text-zinc-300">permitted_uses</span>{'\n'}
                  {'    '}<span className="text-zinc-300">max_height_ft</span>{'\n'}
                  {'    '}<span className="text-zinc-300">upzone_probability</span>{'\n'}
                  {'    '}<span className="text-zinc-300">overlay_districts</span>{'\n'}
                  {'  '}<span className="text-zinc-500">{'}'}</span>{'\n'}
                  <span className="text-zinc-500">{'}'}</span>
                </code>
              </pre>
            </div>
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <div className="px-5 py-3 bg-white/5 border-b border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"/>
                <span className="text-[11px] font-[500] text-zinc-400 font-mono uppercase tracking-widest">Response — 48ms</span>
              </div>
              <pre className="p-6 text-[12px] leading-[1.9] font-mono overflow-x-auto">
                <code>
                  <span className="text-zinc-500">{'{'}</span>{'\n'}
                  {'  '}<span className="text-zinc-300">&quot;zoning_code&quot;</span><span className="text-zinc-500">: </span><span className="text-emerald-400">&quot;R-2 Residential&quot;</span>,{'\n'}
                  {'  '}<span className="text-zinc-300">&quot;permitted_uses&quot;</span><span className="text-zinc-500">: </span><span className="text-emerald-400">[&quot;SFR&quot;, &quot;ADU&quot;, &quot;Duplex&quot;]</span>,{'\n'}
                  {'  '}<span className="text-zinc-300">&quot;max_height_ft&quot;</span><span className="text-zinc-500">: </span><span className="text-amber-300">35</span>,{'\n'}
                  {'  '}<span className="text-zinc-300">&quot;upzone_probability&quot;</span><span className="text-zinc-500">: </span><span className="text-amber-300">0.78</span>,{'\n'}
                  {'  '}<span className="text-zinc-300">&quot;overlay_districts&quot;</span><span className="text-zinc-500">: </span><span className="text-emerald-400">[&quot;Hillside&quot;, &quot;Fire Zone 3&quot;]</span>{'\n'}
                  <span className="text-zinc-500">{'}'}</span>
                </code>
              </pre>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={VIEWPORT}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-8 md:gap-16 justify-center mt-12 pt-12 border-t border-white/10">
            {[
              { num: '47M+', label: 'Parcels' },
              { num: '50', label: 'States' },
              { num: 'GraphQL + REST', label: 'Protocols' },
              { num: '<100ms', label: 'p95 Latency' },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="font-[600] text-[22px] text-white tabular-nums">{num}</span>
                <span className="text-[12px] text-zinc-500 font-[500] mt-1">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-24 px-6 border-t border-zinc-200">
        <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}
          className="max-w-xl mx-auto text-center">
          <motion.h2 variants={FADE_UP} className="font-[600] text-[clamp(26px,3vw,40px)] text-zinc-900 tracking-[-0.02em]">
            Ready to embed zoning intelligence?
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-zinc-500 text-[16px] mt-4 mb-8">
            Request API access or begin the acquisition conversation.
          </motion.p>
          <motion.div variants={FADE_UP} className="flex flex-wrap gap-3 justify-center">
            <Link href="https://madebyevoke.com/contact" className="bg-zinc-900 text-white font-[600] text-[14px] px-6 py-3 rounded-[8px] hover:bg-zinc-800 transition-colors">
              Request API Access
            </Link>
            <Link href="/use-cases" className="border border-zinc-200 bg-white text-zinc-700 font-[600] text-[14px] px-6 py-3 rounded-[8px] hover:border-zinc-300 hover:bg-zinc-50 transition-colors">
              See Use Cases
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
