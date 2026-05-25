'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Badge from '@/components/Badge';
import GraphVisualization from '@/components/GraphVisualization';
import { FADE_UP, STAGGER, CARD_STAGGER, VIEWPORT } from '@/lib/animations';

function IconCheck() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

const DATA_SOURCES = [
  { title: 'Municipal Zoning Codes',  sub: '36,000+ jurisdictions',        freq: 'Weekly sync'  },
  { title: 'County Parcel Records',   sub: 'All 3,143 U.S. counties',      freq: 'Daily sync'   },
  { title: 'State Regulatory DBs',    sub: 'Variance approvals, hearings',  freq: 'Daily sync'   },
  { title: 'GIS & Spatial Data',      sub: 'Overlays, flood, fire zones',   freq: 'Weekly sync'  },
  { title: 'Planning Commission',     sub: 'Petitions before decisions',    freq: 'Real-time'    },
  { title: 'Historical Archives',     sub: '20+ years of zoning history',   freq: 'On-demand'    },
];

const AI_CAPS = [
  'Upzone probability scoring (0.0–1.0) for any parcel',
  'Development feasibility modeling: what can be built, estimated cost, projected yield',
  'Regulatory risk flagging: parcels in contested overlay zones or pending litigation',
  'Land use trajectory prediction: where is this neighborhood heading in 5 years?',
];

export default function IntelligencePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 px-6 border-b border-zinc-200">
        <motion.div initial="hidden" animate="visible" variants={STAGGER}
          className="max-w-3xl mx-auto flex flex-col items-center text-center gap-5">
          <motion.div variants={FADE_UP}><Badge label="The Intelligence Layer" dot /></motion.div>
          <motion.h1 variants={FADE_UP}
            className="font-[600] text-[clamp(34px,5vw,62px)] text-zinc-900 tracking-[-0.03em] leading-[1.05]">
            A living graph of how cities are zoned — and how they&apos;re changing.
          </motion.h1>
          <motion.p variants={FADE_UP} className="text-zinc-500 text-[18px] leading-[1.7] max-w-[560px]">
            ZoningGraph isn&apos;t a zoning database. It&apos;s a continuously updated knowledge graph that
            understands zoning as a system of relationships.
          </motion.p>
        </motion.div>
      </section>

      {/* Graph explainer */}
      <section className="bg-white py-24 px-6 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <GraphVisualization />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}>
            <motion.div variants={FADE_UP}><Badge label="How It Works" /></motion.div>
            <motion.h2 variants={FADE_UP}
              className="font-[600] text-[clamp(24px,2.8vw,38px)] text-zinc-900 tracking-[-0.02em] mt-5 leading-tight">
              Every parcel. Every relationship. Connected.
            </motion.h2>
            <motion.p variants={FADE_UP} className="text-zinc-500 text-[16px] leading-[1.75] mt-4">
              Traditional zoning databases store facts. ZoningGraph stores relationships. When a
              rezoning petition is filed, 47 connected data points update instantly: parcel nodes,
              overlay edges, permitted use lists, variance histories, neighboring parcel implications.
            </motion.p>
            <motion.p variants={FADE_UP} className="text-zinc-500 text-[16px] leading-[1.75] mt-3">
              The graph understands context. A flat table never can.
            </motion.p>
            <motion.div variants={FADE_UP}
              className="mt-8 bg-zinc-50 rounded-xl border border-zinc-200 p-5 grid grid-cols-2 gap-5">
              {[
                { val: '14+', label: 'Node types per parcel' },
                { val: '47',  label: 'Edges updated per event' },
                { val: '<1s', label: 'Graph traversal time' },
                { val: '∞',   label: 'Relationship depth' },
              ].map(({ val, label }) => (
                <div key={label}>
                  <p className="font-[600] text-[26px] text-zinc-900 leading-none tabular-nums">{val}</p>
                  <p className="text-zinc-500 text-[13px] font-[500] mt-1">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="bg-zinc-50 py-24 px-6 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}
            className="flex flex-col items-center text-center mb-14">
            <motion.p variants={FADE_UP} className="section-label mb-3">Data Sources</motion.p>
            <motion.h2 variants={FADE_UP}
              className="font-[600] text-[clamp(26px,3vw,42px)] text-zinc-900 tracking-[-0.02em]">
              Where the intelligence comes from.
            </motion.h2>
            <motion.p variants={FADE_UP} className="text-zinc-500 text-[16px] mt-4 max-w-md">
              ZoningGraph ingests, normalizes, and continuously updates from primary sources.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={CARD_STAGGER}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DATA_SOURCES.map(({ title, sub, freq }) => (
              <motion.div key={title} variants={FADE_UP} className="card p-6">
                <h3 className="font-[600] text-[15px] text-zinc-900 mb-1.5">{title}</h3>
                <p className="text-zinc-500 text-[13px] leading-relaxed mb-4">{sub}</p>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-[500] text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" style={{ animation: 'pulse-dot 2.5s ease-in-out infinite' }}/>
                  {freq}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Layer */}
      <section className="bg-white py-24 px-6 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}>
            <motion.div variants={FADE_UP}><Badge label="AI Layer" /></motion.div>
            <motion.h2 variants={FADE_UP}
              className="font-[600] text-[clamp(24px,2.8vw,38px)] text-zinc-900 tracking-[-0.02em] mt-5 leading-tight">
              The intelligence layer on top of the graph.
            </motion.h2>
            <motion.p variants={FADE_UP} className="text-zinc-500 text-[16px] leading-[1.75] mt-4">
              Raw zoning data becomes intelligence when relationships are understood at scale.
              ZoningGraph&apos;s AI layer scores development potential, models upzone probability, flags
              regulatory risk, and predicts land use trajectory — turning a graph of facts into a
              system of insight.
            </motion.p>
            <motion.ul variants={FADE_UP} className="mt-7 flex flex-col gap-3.5">
              {AI_CAPS.map(cap => (
                <li key={cap} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-accent-subtle text-accent flex items-center justify-center shrink-0">
                    <IconCheck />
                  </span>
                  <span className="text-zinc-600 text-[14px] leading-relaxed">{cap}</span>
                </li>
              ))}
            </motion.ul>
            <motion.div variants={FADE_UP} className="mt-8">
              <Link href="https://madebyevoke.com/contact" className="inline-flex bg-zinc-900 text-white font-[600] text-[14px] px-6 py-3 rounded-[8px] hover:bg-zinc-800 transition-colors">
                Get Intelligence Access
              </Link>
            </motion.div>
          </motion.div>

          {/* AI output cards */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT} transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-4">
            {[
              { label: 'Upzone Probability',     val: '0.78',    sub: 'Parcel 043-221-088',  bar: 78  },
              { label: 'Dev. Feasibility Score', val: '84/100',  sub: 'Mixed-use potential', bar: 84  },
              { label: 'Regulatory Risk',         val: 'Low',     sub: 'No active litigation',bar: 20  },
              { label: 'Land Use Trajectory',    val: 'Upzoning',sub: 'Within 3–5 years',    bar: 65  },
            ].map(({ label, val, sub, bar }) => (
              <div key={label} className="card p-5">
                <p className="section-label mb-3">{label}</p>
                <p className="font-[600] text-[22px] text-zinc-900 leading-none tabular-nums mb-1">{val}</p>
                <p className="text-zinc-400 text-[12px] font-[500] mb-4">{sub}</p>
                <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-zinc-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { num: '47M+', label: 'Parcels', sub: 'All 50 states indexed' },
              { num: '36K+', label: 'Jurisdictions', sub: 'Municipal + county + state' },
              { num: '20yr', label: 'History', sub: 'Full zoning audit trail' },
            ].map(({ num, label, sub }) => (
              <motion.div key={label} variants={FADE_UP} className="py-6 md:py-0">
                <p className="font-[600] text-[44px] text-white leading-none tabular-nums">{num}</p>
                <p className="font-[600] text-[15px] text-zinc-400 mt-2">{label}</p>
                <p className="text-zinc-600 text-[13px] font-[400] mt-1">{sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 px-6 border-t border-zinc-200">
        <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}
          className="max-w-xl mx-auto text-center">
          <motion.h2 variants={FADE_UP} className="font-[600] text-[clamp(26px,3vw,40px)] text-zinc-900 tracking-[-0.02em]">
            Own the intelligence layer.
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-zinc-500 text-[16px] mt-4 mb-8">
            Acquire ZoningGraph.com and the underlying platform technology.
          </motion.p>
          <motion.div variants={FADE_UP} className="flex flex-wrap gap-3 justify-center">
            <Link href="https://madebyevoke.com/contact" className="bg-zinc-900 text-white font-[600] text-[14px] px-6 py-3 rounded-[8px] hover:bg-zinc-800 transition-colors">
              Begin Acquisition
            </Link>
            <Link href="/platform" className="border border-zinc-200 bg-white text-zinc-700 font-[600] text-[14px] px-6 py-3 rounded-[8px] hover:border-zinc-300 hover:bg-zinc-50 transition-colors">
              Explore the Platform
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
