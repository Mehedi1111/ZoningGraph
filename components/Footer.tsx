import Link from 'next/link';

function Mark() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="7.5" height="7.5" rx="1.5" stroke="#5b21b6" strokeWidth="1.5"/>
      <rect x="11.5" y="11.5" width="7.5" height="7.5" rx="1.5" stroke="#5b21b6" strokeWidth="1.5"/>
      <line x1="4.75" y1="8.5" x2="4.75" y2="11.5" stroke="#5b21b6" strokeWidth="1.5"/>
      <line x1="15.25" y1="8.5" x2="15.25" y2="11.5" stroke="#5b21b6" strokeWidth="1.5"/>
      <line x1="8.5" y1="4.75" x2="11.5" y2="4.75" stroke="#5b21b6" strokeWidth="1.5"/>
      <line x1="8.5" y1="15.25" x2="11.5" y2="15.25" stroke="#5b21b6" strokeWidth="1.5"/>
    </svg>
  );
}

const COLS = [
  { title: 'Product',  links: [{ href: '/platform', l: 'Platform' }, { href: '/intelligence', l: 'Intelligence' }, { href: '/use-cases', l: 'Use Cases' }] },
  { title: 'Company',  links: [{ href: '/acquire',   l: 'Acquire Domain' }, { href: '/acquire', l: 'About' }, { href: '/acquire', l: 'Contact' }] },
  { title: 'Legal',    links: [{ href: '/acquire',   l: 'Privacy' }, { href: '/acquire', l: 'Terms' }] },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Mark />
              <span className="text-[14px] font-[600] text-zinc-900">ZoningGraph</span>
            </div>
            <p className="text-[13px] text-zinc-500 leading-relaxed max-w-[200px]">
              Property intelligence for the enterprise.
            </p>
            <a href="mailto:hello@madebyevoke.com"
              className="mt-3 block text-[13px] font-[500] text-accent hover:text-accent-hover transition-colors">
              hello@madebyevoke.com
            </a>
          </div>
          {COLS.map(({ title, links }) => (
            <div key={title}>
              <p className="section-label mb-4">{title}</p>
              <ul className="space-y-2.5">
                {links.map(({ href, l }) => (
                  <li key={l}>
                    <Link href={href}
                      className="text-[13px] font-[500] text-zinc-500 hover:text-zinc-800 transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-zinc-200 pt-6 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-[12px] text-zinc-400">© 2026 ZoningGraph. All rights reserved.</p>
          <p className="text-[12px] text-zinc-400">
            Domain available —{' '}
            <a href="mailto:hello@madebyevoke.com" className="text-accent hover:underline">
              hello@madebyevoke.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
