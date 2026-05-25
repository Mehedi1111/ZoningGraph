import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllInsights } from '@/lib/insights';

export const metadata: Metadata = {
  title: 'Insights & Research | ZoningGraph',
  description: 'Analysis, research, and perspective on zoning intelligence, property data, and AI-powered real estate infrastructure.',
};

export default async function InsightsPage() {
  const posts = await getAllInsights();

  return (
    <div className="min-h-screen pt-32 pb-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f5f3ff] border border-[#ede9fe] mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5b21b6]" aria-hidden="true" />
            <span className="text-[0.7rem] font-[600] uppercase tracking-[0.1em] text-[#3730a3]">
              Insights &amp; Research
            </span>
          </div>
          <h1 className="text-[3.25rem] font-[800] leading-[1.05] tracking-[-0.04em] text-[#0f0f11] mb-5">
            Intelligence for<br className="hidden sm:block" /> the property industry
          </h1>
          <p className="text-[1.05rem] leading-[1.75] text-[#71717a] max-w-lg">
            Research, analysis, and perspective on zoning data, land-use policy,
            and AI infrastructure for enterprise real estate.
          </p>
        </div>

        {/* Post grid */}
        {posts.length === 0 ? (
          <p className="text-[#a1a1aa]">No posts yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group relative flex flex-col bg-white border border-[#e4e4e7] rounded-2xl p-7 overflow-hidden hover:border-[#5b21b6] hover:shadow-[0_4px_28px_rgba(91,33,182,0.09)] transition-all duration-200"
              >
                {/* Top accent bar — slides in on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] bg-[#5b21b6] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-t-2xl"
                />

                {/* Decorative post number */}
                <span
                  aria-hidden="true"
                  className="absolute top-5 right-6 text-[3.75rem] font-[900] leading-none select-none pointer-events-none tabular-nums"
                  style={{ color: '#f0f0f1' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Date */}
                <time
                  dateTime={post.date}
                  className="text-[0.72rem] font-[500] tracking-[0.04em] text-[#a1a1aa] mb-4 block"
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>

                {/* Title */}
                <h2 className="text-[1.1rem] font-[700] leading-[1.4] tracking-[-0.02em] text-[#0f0f11] group-hover:text-[#5b21b6] transition-colors duration-200 mb-3 pr-12 flex-none">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-[0.875rem] leading-[1.72] text-[#71717a] line-clamp-3 flex-1 mb-7">
                  {post.description}
                </p>

                {/* Read link */}
                <div className="flex items-center gap-1.5 text-[0.78rem] font-[600] text-[#a1a1aa] group-hover:text-[#5b21b6] transition-colors duration-200 mt-auto">
                  Read article
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <path d="M2.5 6.5h8M7 2.5l4 4-4 4" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
