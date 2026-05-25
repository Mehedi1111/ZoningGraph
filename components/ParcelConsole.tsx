'use client';

import { motion } from 'framer-motion';

const PARCELS = [
  { apn: '043-221-088', address: '2847 Ridgeline Ave, Los Angeles', zone: 'R-2',  use: 'Residential', upzone: 78, active: true  },
  { apn: '043-221-089', address: '2849 Ridgeline Ave, Los Angeles', zone: 'R-2',  use: 'Residential', upzone: 62, active: false },
  { apn: '043-222-001', address: '3100 Sunset Blvd, Los Angeles',   zone: 'C-1',  use: 'Commercial',  upzone: 11, active: false },
  { apn: '043-222-002', address: '3102 Sunset Blvd, Los Angeles',   zone: 'MR-1', use: 'Mixed Use',   upzone: 48, active: false },
  { apn: '043-223-005', address: '415 Oak Street, Los Angeles',     zone: 'R-1',  use: 'Residential', upzone: 19, active: false },
];

function UpzoneBar({ val }: { val: number }) {
  const color = val >= 60 ? '#5b21b6' : val >= 30 ? '#7c3aed' : '#a78bfa';
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-20 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={{ width: `${val}%` }}
          transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
        />
      </div>
      <span className="text-[12px] font-[600] tabular-nums" style={{ color }}>{val}%</span>
    </div>
  );
}

export default function ParcelConsole() {
  return (
    <div className="w-full rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
      {/* Window chrome */}
      <div className="flex items-center gap-3 px-4 py-3 bg-zinc-50 border-b border-zinc-200">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        </div>
        <span className="text-[12px] font-[500] text-zinc-400 font-mono tracking-tight">ZoningGraph — Parcel Intelligence Console</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full bg-emerald-500"
            style={{ animation: 'pulse-dot 2.5s ease-in-out infinite' }}
          />
          <span className="text-[11px] text-zinc-400 font-[500]">Live</span>
        </div>
      </div>

      {/* Query bar */}
      <div className="px-4 py-2.5 border-b border-zinc-100 flex items-center gap-3 bg-white">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="7" cy="7" r="5"/>
          <path d="M11 11l3 3"/>
        </svg>
        <span className="text-[12px] font-mono text-zinc-400">
          parcels.query(<span className="text-accent">jurisdiction</span>=<span className="text-zinc-600">&quot;Los Angeles&quot;</span>,{' '}
          <span className="text-accent">sort</span>=<span className="text-zinc-600">&quot;upzone_probability&quot;</span>)
        </span>
        <span className="ml-auto text-[11px] font-[500] text-zinc-400 font-mono">47ms</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-100">
              {['APN', 'Address', 'Zone', 'Use Class', 'Upzone Signal'].map(h => (
                <th key={h} className="px-4 py-2.5 text-left section-label whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PARCELS.map((p, i) => (
              <motion.tr
                key={p.apn}
                className={[
                  'border-b border-zinc-50 last:border-0 transition-colors',
                  p.active ? 'bg-accent-subtle' : 'hover:bg-zinc-50/60',
                ].join(' ')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.06 }}
              >
                <td className="px-4 py-3 font-mono text-[12px] text-zinc-500 font-[500] whitespace-nowrap">
                  {p.active && <span className="mr-2 text-accent">›</span>}
                  {p.apn}
                </td>
                <td className="px-4 py-3 text-[13px] text-zinc-700 font-[500] whitespace-nowrap">{p.address}</td>
                <td className="px-4 py-3">
                  <span className={[
                    'inline-block px-2 py-0.5 rounded text-[11px] font-[600]',
                    p.active
                      ? 'bg-accent-border text-accent-text'
                      : 'bg-zinc-100 text-zinc-600',
                  ].join(' ')}>
                    {p.zone}
                  </span>
                </td>
                <td className="px-4 py-3 text-[13px] text-zinc-600 font-[400]">{p.use}</td>
                <td className="px-4 py-3"><UpzoneBar val={p.upzone} /></td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer bar */}
      <div className="px-4 py-2.5 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between">
        <span className="text-[11px] text-zinc-400 font-[500]">Showing 5 of 47,382,019 parcels</span>
        <span className="text-[11px] text-zinc-400 font-mono">v2.4.1 · SOC 2 Type II</span>
      </div>
    </div>
  );
}
