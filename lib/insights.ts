import fs from 'fs';
import path from 'path';

export type InsightMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

const CONTENT_DIR = path.join(process.cwd(), 'content', 'insights');

export async function getAllInsights(): Promise<InsightMeta[]> {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'));

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '');
      const mod = await import(`@/content/insights/${slug}.mdx`);
      const meta = mod.metadata as InsightMeta;
      return { ...meta, slug };
    }),
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
