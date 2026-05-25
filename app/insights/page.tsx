import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllInsights } from '@/lib/insights';

export const metadata: Metadata = {
  title: 'Insights & Research',
  description: 'Analysis, research, and perspective on zoning intelligence, property data, and AI-powered real estate infrastructure.',
};

export default async function InsightsPage() {
  const posts = await getAllInsights();

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">Insights &amp; Research</p>
          <h1 className="text-[2.5rem] font-[800] leading-[1.1] tracking-[-0.03em] text-zinc-900 dark:text-zinc-100 mb-4">
            Intelligence for the property industry
          </h1>
          <p className="text-[1.05rem] leading-[1.75] text-zinc-500 dark:text-zinc-400 max-w-xl">
            Research, analysis, and perspective on zoning data, land-use policy, and AI infrastructure for enterprise real estate.
          </p>
        </div>

        {/* Post list */}
        {posts.length === 0 ? (
          <p className="text-zinc-400 dark:text-zinc-600">No posts yet.</p>
        ) : (
          <ul className="space-y-px">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 py-6 border-b border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <div className="flex-1 pr-8">
                    <h2 className="text-[1rem] font-[600] text-zinc-900 dark:text-zinc-100 group-hover:text-accent dark:group-hover:text-accent transition-colors leading-[1.4] mb-1.5">
                      {post.title}
                    </h2>
                    <p className="text-[0.875rem] leading-[1.6] text-zinc-500 dark:text-zinc-400 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                  <time
                    dateTime={post.date}
                    className="shrink-0 text-[0.8rem] text-zinc-400 dark:text-zinc-600 mt-0.5"
                  >
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
