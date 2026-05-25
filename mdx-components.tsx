import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-[2.25rem] font-[800] leading-[1.1] tracking-[-0.03em] text-accent mt-0 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-[1.4rem] font-[700] leading-[1.25] tracking-[-0.02em] text-zinc-900 dark:text-zinc-100 mt-12 mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[1.1rem] font-[700] leading-[1.35] tracking-[-0.01em] text-zinc-900 dark:text-zinc-100 mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-[1rem] leading-[1.8] text-zinc-600 dark:text-zinc-400 mb-5">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="my-5 pl-6 space-y-2 list-disc marker:text-accent">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-5 pl-6 space-y-2 list-decimal marker:text-zinc-400 dark:marker:text-zinc-500">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-[1rem] leading-[1.75] text-zinc-600 dark:text-zinc-400">
        {children}
      </li>
    ),
    table: ({ children }) => (
      <div className="my-8 overflow-x-auto rounded-[10px] border border-zinc-200 dark:border-zinc-800">
        <table className="min-w-full text-[0.9rem]">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-zinc-50 dark:bg-zinc-900">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="px-5 py-3 text-left text-[0.75rem] font-[600] uppercase tracking-[0.06em] text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-5 py-3.5 text-zinc-700 dark:text-zinc-300 border-b border-zinc-100 dark:border-zinc-800/60 last-of-type:border-0">
        {children}
      </td>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/30 transition-colors">
        {children}
      </tr>
    ),
    strong: ({ children }) => (
      <strong className="font-[600] text-zinc-900 dark:text-zinc-100">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-zinc-500 dark:text-zinc-400">{children}</em>
    ),
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded-[4px] bg-zinc-100 dark:bg-zinc-800 text-accent dark:text-accent text-[0.85em] font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-6 p-5 rounded-[10px] bg-zinc-900 dark:bg-zinc-950 border border-zinc-800 overflow-x-auto text-[0.875rem] leading-[1.7]">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 pl-5 border-l-[3px] border-accent text-zinc-500 dark:text-zinc-400 italic">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-10 border-zinc-200 dark:border-zinc-800" />,
    a: ({ href, children }) => (
      <a href={href} className="text-accent dark:text-accent underline underline-offset-2 hover:no-underline transition-colors" target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    ),
    ...components,
  };
}
