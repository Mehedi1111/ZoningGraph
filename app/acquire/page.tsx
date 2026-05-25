'use client';

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

const INCLUDES = [
  'Both .com domains — full transfer',
  'Clean transfer via Namecheap / GoDaddy',
  'No trademark conflicts — clear IP',
  'Exclusive — not listed on any marketplace',
  'Direct negotiation, no broker fees',
];

const SIGNALS = [
  {
    title: 'Market Timing',
    body: 'Housing reform mandates across 40+ states are forcing municipalities to modernize zoning systems. Federal infrastructure investment is accelerating smart city data platforms. The window to own this category name is now.',
  },
  {
    title: 'Category Naming Power',
    body: 'FinOps, MLOps, DevOps — domain names that defined operational categories became anchors of billion-dollar markets. ZoningGraph names the zoning intelligence category with the same precision.',
  },
  {
    title: 'Enterprise Buyer Fit',
    body: 'CoStar Group. Tyler Technologies. Esri. Accela. JLL. Every major player in property data, GovTech, and real estate intelligence has a product roadmap where this domain fits naturally.',
  },
];

export default function AcquirePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 px-6 border-b border-zinc-200">
        <motion.div initial="hidden" animate="visible" variants={STAGGER}
          className="max-w-3xl mx-auto flex flex-col items-center text-center gap-5">
          <motion.div variants={FADE_UP}><Badge label="Domain Acquisition" /></motion.div>
          <motion.h1 variants={FADE_UP}
            className="font-[600] text-[clamp(36px,5vw,64px)] text-zinc-900 tracking-[-0.03em] leading-[1.05]">
            ZoningGraph.com is available for acquisition.
          </motion.h1>
          <motion.p variants={FADE_UP} className="text-zinc-500 text-[18px] leading-[1.7] max-w-[560px]">
            This domain names a category at the intersection of AI intelligence, property data,
            and government regulation — a market growing rapidly under housing reform and smart
            city investment.
          </motion.p>
          <motion.div variants={FADE_UP} className="flex flex-wrap gap-3 justify-center mt-2">
            <a href="https://madebyevoke.com/contact" className="bg-zinc-900 text-white font-[600] text-[14px] px-6 py-3 rounded-[8px] hover:bg-zinc-800 transition-colors">
              Start the Conversation
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Package cards */}
      <section className="bg-zinc-50 py-20 px-6 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}
            className="flex flex-col items-center text-center mb-12">
            <motion.p variants={FADE_UP} className="section-label mb-3">Acquisition Paths</motion.p>
            <motion.h2 variants={FADE_UP}
              className="font-[600] text-[clamp(24px,3vw,40px)] text-zinc-900 tracking-[-0.02em]">
              Choose your acquisition path.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Package */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT} transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative bg-white rounded-xl border-2 border-accent p-8 shadow-[0_2px_12px_rgba(91,33,182,0.08)]"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-accent text-white text-[10px] font-[600] px-3 py-1 rounded-full uppercase tracking-widest">
                  Recommended
                </span>
              </div>
              <h3 className="font-[600] text-[20px] text-zinc-900 mb-6">Full Package</h3>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center justify-between p-4 bg-accent-subtle rounded-[8px] border border-accent-border">
                  <span className="font-[600] text-[16px] text-accent">ZoningGraph.com</span>
                  <span className="text-[11px] font-[500] text-zinc-500">Primary brand</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-[8px] border border-zinc-200">
                  <span className="font-[600] text-[16px] text-zinc-700">ZoningOps.com</span>
                  <span className="text-[11px] font-[500] text-zinc-500">Ops platform brand</span>
                </div>
              </div>
              <div className="border-t border-zinc-100 pt-6 mb-6">
                <ul className="flex flex-col gap-3">
                  {INCLUDES.map(i => (
                    <li key={i} className="flex items-center gap-2.5 text-[13px] text-zinc-600">
                      <span className="w-5 h-5 rounded-full bg-accent-subtle text-accent flex items-center justify-center shrink-0">
                        <IconCheck />
                      </span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="https://madebyevoke.com/contact"
                className="block bg-zinc-900 text-white font-[600] text-[14px] text-center px-6 py-3 rounded-[8px] hover:bg-zinc-800 transition-colors">
                Inquire About Package
              </a>
            </motion.div>

            {/* Single Domain */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT} transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="bg-white rounded-xl border border-zinc-200 p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              <h3 className="font-[600] text-[20px] text-zinc-900 mb-6">Single Domain</h3>
              <div className="flex flex-col gap-3 mb-6">
                {[
                  { name: 'ZoningGraph.com', desc: 'AI knowledge graph brand' },
                  { name: 'ZoningOps.com',   desc: 'Operational platform brand' },
                ].map(({ name, desc }) => (
                  <div key={name} className="flex items-center gap-3 p-4 bg-zinc-50 rounded-[8px] border border-zinc-200">
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-300 shrink-0"/>
                    <div>
                      <p className="font-[600] text-[14px] text-zinc-800">{name}</p>
                      <p className="text-zinc-500 text-[12px] font-[400]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-zinc-100 pt-6 mb-6">
                <ul className="flex flex-col gap-3">
                  {INCLUDES.slice(0, 3).map(i => (
                    <li key={i} className="flex items-center gap-2.5 text-[13px] text-zinc-600">
                      <span className="w-5 h-5 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center shrink-0">
                        <IconCheck />
                      </span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="https://madebyevoke.com/contact"
                className="block border border-zinc-200 bg-zinc-50 text-zinc-700 font-[600] text-[14px] text-center px-6 py-3 rounded-[8px] hover:bg-zinc-100 transition-colors">
                Inquire About Single Domain
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why This Domain */}
      <section className="bg-white py-20 px-6 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}
            className="flex flex-col items-center text-center mb-12">
            <motion.p variants={FADE_UP} className="section-label mb-3">Why This Domain</motion.p>
            <motion.h2 variants={FADE_UP}
              className="font-[600] text-[clamp(24px,3vw,40px)] text-zinc-900 tracking-[-0.02em]">
              Three signals. One clear opportunity.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={CARD_STAGGER}
            className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SIGNALS.map(({ title, body }) => (
              <motion.div key={title} variants={FADE_UP} className="card p-7">
                <h3 className="font-[600] text-[17px] text-zinc-900 mb-3">{title}</h3>
                <p className="text-zinc-500 text-[14px] leading-[1.65]">{body}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Target acquirer strip */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT} transition={{ duration: 0.5 }}
            className="mt-8 bg-zinc-50 rounded-xl border border-zinc-200 p-7">
            <p className="section-label mb-5 text-center">Natural acquirers include</p>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {['CoStar Group', 'Tyler Technologies', 'Esri', 'Accela', 'JLL', 'CBRE', 'Palantir', 'OpenGov', 'Cityworks'].map(c => (
                <span key={c}
                  className="px-4 py-2 bg-white border border-zinc-200 rounded-[8px] text-[13px] font-[500] text-zinc-600 hover:border-zinc-300 transition-colors">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Get In Touch */}
      <section id="inquiry" className="bg-zinc-50 py-20 px-6 border-b border-zinc-200">
        <div className="max-w-md mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}
            className="text-center mb-10">
            <motion.p variants={FADE_UP} className="section-label mb-3">Get In Touch</motion.p>
            <motion.h2 variants={FADE_UP}
              className="font-[600] text-[clamp(24px,3vw,38px)] text-zinc-900 tracking-[-0.02em]">
              Start the conversation.
            </motion.h2>
            <motion.p variants={FADE_UP} className="text-zinc-500 text-[15px] mt-3">
              Reach out directly. No brokers. No auctions. Fast and transparent.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT} transition={{ duration: 0.45, ease: 'easeOut' }}
            className="bg-white rounded-xl border border-zinc-200 p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-center"
          >
            <div className="w-12 h-12 bg-accent-subtle border border-accent-border rounded-full flex items-center justify-center mx-auto mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5b21b6" strokeWidth="1.8" strokeLinecap="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3 className="font-[600] text-[18px] text-zinc-900 mb-2">Ready to talk?</h3>
            <p className="text-zinc-500 text-[14px] leading-[1.65] mb-6">
              Fill out our contact form and we&apos;ll get back to you within 24 hours.
              No brokers, no auctions — just a direct conversation.
            </p>
            <a
              href="https://madebyevoke.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white font-[600] text-[14px] px-6 py-3 rounded-[8px] hover:bg-zinc-800 transition-colors"
            >
              Get in touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
            <p className="mt-5 text-[13px] text-zinc-400">
              Or email us at{' '}
              <a href="mailto:hello@madebyevoke.com" className="text-accent font-[500] hover:underline">
                hello@madebyevoke.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-zinc-900 py-20 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={STAGGER}
          className="max-w-2xl mx-auto text-center">
          <motion.p variants={FADE_UP} className="text-[11px] font-[500] uppercase tracking-widest text-zinc-500 mb-4">
            Strategic Acquisition
          </motion.p>
          <motion.h2 variants={FADE_UP}
            className="font-[600] text-[clamp(26px,3.5vw,48px)] text-white tracking-[-0.02em] leading-tight">
            The category is forming. Own it.
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-zinc-400 text-[16px] mt-4 leading-[1.7]">
            ZoningGraph.com is the defining brand name in zoning intelligence. It won&apos;t be
            available forever.
          </motion.p>
          <motion.div variants={FADE_UP} className="mt-8">
            <a href="https://madebyevoke.com/contact"
              className="inline-flex border border-white/20 text-white font-[600] text-[14px] px-6 py-3 rounded-[8px] hover:bg-white/10 transition-colors">
              Begin Acquisition →
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
