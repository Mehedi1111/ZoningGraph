'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ParcelConsole from '@/components/ParcelConsole';
import AnimatedCounter from '@/components/AnimatedCounter';
import LogoTicker from '@/components/LogoTicker';
import TestimonialMarquee from '@/components/TestimonialMarquee';
import { FADE_UP, STAGGER, CARD_STAGGER, VIEWPORT } from '@/lib/animations';

const HERO_WORDS = ['enterprise.', 'real estate.', 'investors.', 'developers.', 'cities.', 'government.'];

/* ── tiny icons ──────────────────────────────── */
const Icon = ({ d, d2 }: { d: string; d2?: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />{d2 && <path d={d2} />}
  </svg>
);
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#5b21b6" strokeWidth="2" strokeLinecap="round">
    <polyline points="2 8 6 12 14 4"/>
  </svg>
);

const PROBLEMS = [
  {
    num: '01',
    title: '36,000 fragmented sources',
    body: 'Zoning data lives across thousands of jurisdictions in incompatible formats — PDFs, legacy GIS layers, and static tables that haven\'t been updated in years.',
  },
  {
    num: '02',
    title: 'Decisions made in the dark',
    body: 'Rezoning petitions, overlay amendments, and variance approvals take weeks to surface publicly. The smart money has already moved by then.',
  },
  {
    num: '03',
    title: 'No connected view',
    body: 'Parcel records, zoning codes, land-use history, and regulatory pipelines are never connected. Every analysis starts from scratch.',
  },
];

const FEATURES = [
  {
    title: 'Graph Intelligence',
    body: 'Every zoning code, parcel, overlay, and regulatory event mapped as nodes and edges. Queries that take 12 SQL joins execute in a single traversal.',
    tag: 'Knowledge Graph',
    icon: 'M18 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    icon2: 'M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49',
  },
  {
    title: 'Regulatory Radar',
    body: 'Track rezoning petitions, variance applications, and code amendments the day they\'re filed — not weeks later. Intelligence before it\'s news.',
    tag: 'Real-Time',
    icon: 'M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM4.93 4.93A10 10 0 1 0 19.07 19.07',
  },
  {
    title: 'Parcel Intelligence',
    body: 'Permitted uses, height limits, FAR, ADU eligibility, setbacks, variance history, and AI-scored development potential — for any parcel, instantly.',
    tag: 'Parcel API',
    icon: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
  },
  {
    title: 'Platform Integration',
    body: 'REST and GraphQL APIs with enterprise SLAs, webhooks for regulatory events, and TypeScript, Python, and Java SDKs. Built for scale.',
    tag: 'Developer-First',
    icon: 'M16 18l6-6-6-6',
    icon2: 'M8 6l-6 6 6 6',
  },
];

const USE_CASES = [
  { num: '01', title: 'Real Estate Platforms', body: 'Give buyers, developers, and investors the intelligence layer that transforms listings into development insight.', tag: 'CoStar · Homes.com · Zillow' },
  { num: '02', title: 'GovTech & Planning',    body: 'Replace static code lookups with a live graph that updates automatically when regulations change.',              tag: 'Tyler Technologies · Accela' },
  { num: '03', title: 'Developers & Investors', body: 'Identify undervalued parcels and anticipate rezoning tailwinds before the market prices them in.',             tag: 'REITs · Family Offices' },
  { num: '04', title: 'Urban Planners',         body: 'Connect zoning history, infrastructure, and demographic data to build policy backed by graph intelligence.',   tag: 'Municipalities · Consultancies' },
];

export default function HomePage() {
  const [wordIndex, setWordIndex] = useState(0);
  const isFirstWord = useRef(true);

  useEffect(() => {
    const t = setInterval(() => {
      isFirstWord.current = false;
      setWordIndex(i => (i + 1) % HERO_WORDS.length);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ── HERO ──────────────────────────────── */}
      <section className="pt-36 pb-20 px-5 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
              className="mb-5"
            >
              <span className="section-label">Property Intelligence Platform</span>
            </motion.div>

            <h1 className="text-[clamp(38px,5vw,62px)] font-[600] tracking-[-0.025em] leading-[1.1] text-zinc-900 mb-5">
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12, ease: 'easeOut' }}
                className="block"
              >
                Zoning intelligence
              </motion.span>
              <span className="block">
                <motion.span
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.22, ease: 'easeOut' }}
                >
                  {'for '}
                </motion.span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    exit={{ opacity: 0, y: -12, transition: { duration: 0.18, ease: 'easeIn' } }}
                    className="inline-block"
                  >
                    {HERO_WORDS[wordIndex].split('').map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: (isFirstWord.current ? 0.32 : 0.08) + i * 0.055,
                          duration: 0.42,
                          ease: 'backOut',
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            {/* Subtitle line — x.ai style */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.82, ease: 'easeOut' }}
              className="text-[18px] font-[500] text-zinc-700 leading-[1.45] mb-4"
            >
              The AI knowledge graph for every property decision.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.95, ease: 'easeOut' }}
              className="text-[15px] font-[400] text-zinc-400 leading-[1.65] max-w-[480px] mb-8"
            >
              ZoningGraph connects zoning codes, parcels, and regulatory events into a unified
              knowledge graph — queryable by any platform, in milliseconds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.08, ease: 'easeOut' }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/platform"
                className="inline-flex items-center gap-1 bg-zinc-900 text-white text-[14px] font-[600] px-5 py-2.5 rounded-[8px] hover:bg-zinc-800 transition-colors"
              >
                Explore the platform
              </Link>
              <Link
                href="https://madebyevoke.com/contact"
                className="inline-flex items-center gap-1 bg-white text-zinc-700 text-[14px] font-[600] px-5 py-2.5 rounded-[8px] border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all"
              >
                Acquire this domain
              </Link>
            </motion.div>
          </div>

          {/* Product console */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
          >
            <ParcelConsole />
          </motion.div>
        </div>
      </section>

      {/* ── METRICS ───────────────────────────── */}
      <section className="py-14 px-5 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: <AnimatedCounter to={47} suffix="M+" />, label: 'Parcels indexed' },
              { val: '50',       label: 'U.S. states covered' },
              { val: '36K+',    label: 'Jurisdictions' },
              { val: '<100ms',  label: 'p95 API latency' },
            ].map(({ val, label }) => (
              <div key={label}>
                <p className="text-[32px] font-[600] tracking-[-0.02em] text-zinc-900 leading-none mb-1.5">
                  {val}
                </p>
                <p className="text-[13px] font-[500] text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOGO TICKER ───────────────────────── */}
      <LogoTicker />

      {/* ── PROBLEM ───────────────────────────── */}
      <section className="py-24 px-5 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}
            className="max-w-2xl mb-14"
          >
            <motion.p variants={FADE_UP} className="section-label mb-4">The challenge</motion.p>
            <motion.h2 variants={FADE_UP}
              className="text-[clamp(28px,3.5vw,44px)] font-[600] tracking-[-0.02em] text-zinc-900 leading-[1.15]">
              Zoning data exists everywhere.<br />Zoning intelligence exists nowhere.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={CARD_STAGGER}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {PROBLEMS.map(({ num, title, body }) => (
              <motion.div key={num} variants={FADE_UP} className="card p-7">
                <span className="text-[11px] font-[600] text-zinc-300 font-mono mb-5 block">{num}</span>
                <h3 className="text-[17px] font-[600] text-zinc-900 mb-3 tracking-[-0.01em]">{title}</h3>
                <p className="text-[14px] text-zinc-500 leading-[1.65] font-[400]">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────── */}
      <section className="py-24 px-5 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}>
            <motion.p variants={FADE_UP} className="section-label mb-4">How it works</motion.p>
            <motion.h2 variants={FADE_UP}
              className="text-[clamp(26px,3vw,40px)] font-[600] tracking-[-0.02em] text-zinc-900 leading-[1.15] mb-5">
              One graph. Every zoning relationship. Instantly queryable.
            </motion.h2>
            <motion.p variants={FADE_UP} className="text-[16px] text-zinc-500 leading-[1.65] mb-8 max-w-md">
              ZoningGraph ingests zoning ordinances, parcel records, overlay districts, and
              variance histories — then maps every relationship as a living knowledge graph.
            </motion.p>
            <motion.ul variants={FADE_UP} className="space-y-3 mb-8">
              {[
                'Graph-native — every data point is a node, every relationship an edge',
                'Automatic ingestion from municipal portals and county records',
                'GraphQL and REST APIs for any product stack',
              ].map(t => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-accent-subtle border border-accent-border flex items-center justify-center shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="text-[14px] text-zinc-600 leading-[1.5]">{t}</span>
                </li>
              ))}
            </motion.ul>
            <motion.div variants={FADE_UP}>
              <Link href="/platform"
                className="text-[14px] font-[600] text-accent hover:text-accent-hover transition-colors">
                See full platform capabilities →
              </Link>
            </motion.div>
          </motion.div>

          {/* Code card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="rounded-xl border border-zinc-200 bg-zinc-900 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-zinc-800/60">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <span className="ml-2 text-[11px] text-zinc-500 font-mono">query.graphql</span>
              </div>
              <pre className="px-5 py-5 text-[12.5px] leading-[1.9] font-mono overflow-x-auto">
                <code>
                  <span className="text-purple-400">query</span>
                  <span className="text-zinc-100"> ParcelIntelligence </span>
                  <span className="text-zinc-500">{'{'}</span>{'\n'}
                  {'  '}<span className="text-sky-400">parcel</span>
                  <span className="text-zinc-500">(apn: </span>
                  <span className="text-emerald-400">&quot;043-221-088&quot;</span>
                  <span className="text-zinc-500">) {'{'}</span>{'\n'}
                  {'    '}<span className="text-sky-400">zoning_code</span>
                  <span className="text-zinc-600">      </span>
                  <span className="text-zinc-500"># </span><span className="text-zinc-500">&quot;R-2&quot;</span>{'\n'}
                  {'    '}<span className="text-sky-400">permitted_uses</span>
                  <span className="text-zinc-500">    # </span><span className="text-zinc-500">[&quot;SFR&quot;, &quot;ADU&quot;]</span>{'\n'}
                  {'    '}<span className="text-sky-400">max_height_ft</span>
                  <span className="text-zinc-500">     # </span><span className="text-amber-400">35</span>{'\n'}
                  {'    '}<span className="text-sky-400">upzone_probability</span>
                  <span className="text-zinc-500"> # </span><span className="text-amber-400">0.78</span>{'\n'}
                  {'    '}<span className="text-sky-400">overlay_districts</span>{'\n'}
                  {'    '}<span className="text-sky-400">recent_variances</span>{'\n'}
                  {'  '}<span className="text-zinc-500">{'}'}</span>{'\n'}
                  <span className="text-zinc-500">{'}'}</span>
                </code>
              </pre>
              <div className="px-5 py-3 border-t border-white/6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[11px] text-zinc-500 font-mono">Response: 48ms · 200 OK</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────── */}
      <section className="py-24 px-5 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}
            className="max-w-xl mb-12">
            <motion.p variants={FADE_UP} className="section-label mb-4">Capabilities</motion.p>
            <motion.h2 variants={FADE_UP}
              className="text-[clamp(26px,3vw,40px)] font-[600] tracking-[-0.02em] text-zinc-900 leading-[1.15]">
              Built for the decisions that move markets.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={CARD_STAGGER}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {FEATURES.map(({ title, body, tag, icon, icon2 }) => (
              <motion.div key={title} variants={FADE_UP} className="card p-7">
                <div className="w-9 h-9 rounded-lg bg-accent-subtle border border-accent-border flex items-center justify-center mb-5 text-accent">
                  <Icon d={icon} d2={icon2} />
                </div>
                <h3 className="text-[16px] font-[600] text-zinc-900 mb-2.5 tracking-[-0.01em]">{title}</h3>
                <p className="text-[14px] text-zinc-500 leading-[1.65] mb-4">{body}</p>
                <span className="text-[11px] font-[600] text-accent tracking-[0.04em]">{tag}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────── */}
      <TestimonialMarquee />

      {/* ── USE CASES ─────────────────────────── */}
      <section className="py-24 px-5 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}
            className="mb-12">
            <motion.p variants={FADE_UP} className="section-label mb-4">Who uses ZoningGraph</motion.p>
            <motion.h2 variants={FADE_UP}
              className="text-[clamp(26px,3vw,40px)] font-[600] tracking-[-0.02em] text-zinc-900 leading-[1.15]">
              Every property decision starts with zoning.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={CARD_STAGGER}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {USE_CASES.map(({ num, title, body, tag }) => (
              <motion.div key={num} variants={FADE_UP} className="card bg-white p-6">
                <span className="text-[11px] font-[600] text-zinc-200 font-mono block mb-6">{num}</span>
                <h3 className="text-[15px] font-[600] text-zinc-900 mb-2.5 tracking-[-0.005em]">{title}</h3>
                <p className="text-[13px] text-zinc-500 leading-[1.6] mb-4">{body}</p>
                <p className="text-[12px] font-[600] text-accent">{tag}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────── */}
      <section className="py-24 px-5 bg-zinc-900">
        <motion.div
          initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}
          className="max-w-6xl mx-auto"
        >
          <motion.p variants={FADE_UP} className="section-label text-zinc-500 mb-4">Domain acquisition</motion.p>
          <motion.h2 variants={FADE_UP}
            className="text-[clamp(28px,4vw,52px)] font-[600] tracking-[-0.025em] text-white leading-[1.1] mb-5 max-w-2xl">
            ZoningGraph.com is available.
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-[16px] text-zinc-400 leading-[1.65] max-w-lg mb-8">
            This domain names a category at the intersection of AI and property intelligence —
            a market expanding rapidly under housing reform and enterprise data demand.
          </motion.p>
          <motion.div variants={FADE_UP} className="flex flex-wrap gap-3">
            <Link href="https://madebyevoke.com/contact"
              className="inline-flex items-center bg-white text-zinc-900 text-[14px] font-[600] px-5 py-2.5 rounded-[8px] hover:bg-zinc-100 transition-colors">
              Begin acquisition →
            </Link>
            <Link href="/platform"
              className="inline-flex items-center text-zinc-400 text-[14px] font-[500] px-5 py-2.5 rounded-[8px] border border-zinc-700 hover:border-zinc-500 hover:text-zinc-200 transition-all">
              Explore the platform
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
