'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  { href: '/platform',     label: 'Platform'      },
  { href: '/use-cases',    label: 'Use Cases'     },
  { href: '/intelligence', label: 'Intelligence'  },
  { href: '/insights',     label: 'Insights'      },
  { href: '/acquire',      label: 'Acquire'       },
];

export default function Navbar() {
  const [scrolled,   setScrolled  ] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-all duration-200',
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-[0_1px_0_rgba(0,0,0,0.04)]'
            : 'bg-white border-b border-transparent',
        ].join(' ')}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-[60px]">
          <Link href="/" aria-label="ZoningGraph home">
            <Image
              src="/zoniggraph logo colored.png"
              alt="ZoningGraph"
              height={28}
              width={160}
              className="h-7 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={[
                  'text-[14px] font-[500] transition-colors duration-150',
                  pathname === href
                    ? 'text-zinc-900'
                    : 'text-zinc-500 hover:text-zinc-800',
                ].join(' ')}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="https://madebyevoke.com/contact"
              className="text-[14px] font-[500] text-zinc-500 hover:text-zinc-800 transition-colors">
              Sign in
            </Link>
            <Link
              href="https://madebyevoke.com/contact"
              className="inline-flex items-center gap-1 bg-zinc-900 text-white text-[13px] font-[600] px-4 py-2 rounded-[7px] hover:bg-zinc-800 transition-colors"
            >
              Acquire domain
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            className="lg:hidden p-1.5 text-zinc-500 hover:text-zinc-800"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              {mobileOpen
                ? <><path d="M4 4l12 12"/><path d="M16 4L4 16"/></>
                : <><path d="M3 6h14"/><path d="M3 10h14"/><path d="M3 14h14"/></>
              }
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-white border-b border-zinc-200 px-5 py-4 lg:hidden"
          >
            {LINKS.map(({ href, label }) => (
              <Link key={href} href={href}
                className="block py-3 text-[15px] font-[500] text-zinc-600 hover:text-zinc-900 border-b border-zinc-100 last:border-0">
                {label}
              </Link>
            ))}
            <Link href="https://madebyevoke.com/contact"
              className="mt-4 block w-full bg-zinc-900 text-white text-[14px] font-[600] text-center py-3 rounded-[8px] hover:bg-zinc-800 transition-colors">
              Acquire domain
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
