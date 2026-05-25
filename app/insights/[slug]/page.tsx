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
      title: metadata.title,
      description: metadata.description,
    };
  } catch {
    return { title: 'Insight' };
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
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Back link */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-1.5 text-[0.8rem] text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors mb-12"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M8.5 2.5L4 7l4.5 4.5"/>
          </svg>
          Insights
        </Link>

        {/* Article */}
        <article>
          {/* Meta */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <time dateTime={metadata.date} className="text-[0.8rem] text-zinc-400 dark:text-zinc-500">
              {formattedDate}
            </time>
            <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" aria-hidden="true" />
            <span className="text-[0.8rem] text-zinc-400 dark:text-zinc-500">ZoningGraph Team</span>
          </div>

          {/* MDX content */}
          <div className="insight-prose">
            <Post />
          </div>

          {/* Author bio */}
          <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <rect x="1" y="1" width="7.5" height="7.5" rx="1.5" stroke="#5b21b6" strokeWidth="1.5"/>
                  <rect x="11.5" y="1" width="7.5" height="7.5" rx="1.5" stroke="#5b21b6" strokeWidth="1.5" opacity=".5"/>
                  <rect x="1" y="11.5" width="7.5" height="7.5" rx="1.5" stroke="#5b21b6" strokeWidth="1.5" opacity=".5"/>
                  <rect x="11.5" y="11.5" width="7.5" height="7.5" rx="1.5" stroke="#5b21b6" strokeWidth="1.5"/>
                  <line x1="4.75" y1="8.5" x2="4.75" y2="11.5" stroke="#5b21b6" strokeWidth="1.5"/>
                  <line x1="15.25" y1="8.5" x2="15.25" y2="11.5" stroke="#5b21b6" strokeWidth="1.5"/>
                  <line x1="8.5" y1="4.75" x2="11.5" y2="4.75" stroke="#5b21b6" strokeWidth="1.5"/>
                  <line x1="8.5" y1="15.25" x2="11.5" y2="15.25" stroke="#5b21b6" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <p className="text-[0.875rem] font-[600] text-zinc-900 dark:text-zinc-100 mb-0.5">ZoningGraph Team</p>
                <p className="text-[0.825rem] leading-[1.6] text-zinc-500 dark:text-zinc-400">
                  ZoningGraph builds AI-powered zoning intelligence for enterprise property platforms, investors, and developers.
                </p>
              </div>
            </div>
          </div>
        </article>

      </div>
    </div>
  );
}
