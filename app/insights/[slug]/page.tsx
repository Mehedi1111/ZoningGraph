import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllInsights } from '@/lib/insights';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllInsights();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { metadata } = await import(`@/content/insights/${slug}.mdx`);
    return {
      title: `${metadata.title} | ZoningGraph`,
      description: metadata.description,
    };
  } catch {
    return { title: 'Insight | ZoningGraph' };
  }
}

export const dynamicParams = false;

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;

  let Post: React.ComponentType;
  let metadata: { title: string; description: string; date: string };

  try {
    const mod = await import(`@/content/insights/${slug}.mdx`);
    Post = mod.default;
    metadata = mod.metadata;
  } catch {
    notFound();
  }

  const formattedDate = new Date(metadata.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-white pt-28 pb-28 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Back link */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-1.5 text-[0.78rem] font-[500] text-[#a1a1aa] hover:text-[#5b21b6] transition-colors mb-14"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 2.5L4.5 7 9 11.5" />
          </svg>
          All Insights
        </Link>

        {/* Article header */}
        <div className="mb-10 pb-10 border-b border-[#e4e4e7]">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f5f3ff] border border-[#ede9fe] text-[0.7rem] font-[600] uppercase tracking-[0.08em] text-[#3730a3]">
              <span className="w-1 h-1 rounded-full bg-[#5b21b6]" aria-hidden="true" />
              ZoningGraph Team
            </span>
            <span className="text-[#e4e4e7]" aria-hidden="true">·</span>
            <time dateTime={metadata.date} className="text-[0.78rem] text-[#a1a1aa]">
              {formattedDate}
            </time>
          </div>
        </div>

        {/* MDX content */}
        <article>
          <div className="insight-prose">
            <Post />
          </div>

          {/* Author bio */}
          <div className="mt-16 pt-10 border-t border-[#e4e4e7]">
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl bg-[#f5f3ff] border border-[#ede9fe] flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <rect x="1" y="1" width="7.5" height="7.5" rx="1.5" stroke="#5b21b6" strokeWidth="1.5" />
                  <rect x="11.5" y="1" width="7.5" height="7.5" rx="1.5" stroke="#5b21b6" strokeWidth="1.5" opacity=".45" />
                  <rect x="1" y="11.5" width="7.5" height="7.5" rx="1.5" stroke="#5b21b6" strokeWidth="1.5" opacity=".45" />
                  <rect x="11.5" y="11.5" width="7.5" height="7.5" rx="1.5" stroke="#5b21b6" strokeWidth="1.5" />
                  <line x1="4.75" y1="8.5" x2="4.75" y2="11.5" stroke="#5b21b6" strokeWidth="1.5" />
                  <line x1="15.25" y1="8.5" x2="15.25" y2="11.5" stroke="#5b21b6" strokeWidth="1.5" />
                  <line x1="8.5" y1="4.75" x2="11.5" y2="4.75" stroke="#5b21b6" strokeWidth="1.5" />
                  <line x1="8.5" y1="15.25" x2="11.5" y2="15.25" stroke="#5b21b6" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <p className="text-[0.875rem] font-[600] text-[#0f0f11] mb-1">ZoningGraph Team</p>
                <p className="text-[0.825rem] leading-[1.65] text-[#71717a]">
                  ZoningGraph builds AI-powered zoning intelligence for enterprise property platforms, investors, and developers.
                </p>
              </div>
            </div>

            {/* Back to insights */}
            <div className="mt-8">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f5f3ff] border border-[#ede9fe] text-[0.8rem] font-[600] text-[#5b21b6] hover:bg-[#ede9fe] transition-colors"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 2.5L4.5 7 9 11.5" />
                </svg>
                Back to all insights
              </Link>
            </div>
          </div>
        </article>

      </div>
    </div>
  );
}
