import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-[2.25rem] font-[800] leading-[1.1] tracking-[-0.03em] text-[#5b21b6] mt-0 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-[1.4rem] font-[700] leading-[1.25] tracking-[-0.02em] text-[#0f0f11] mt-12 mb-4 border-b border-[#e4e4e7] pb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[1.1rem] font-[700] leading-[1.35] tracking-[-0.01em] text-[#0f0f11] mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-[1rem] leading-[1.85] text-[#3f3f46] mb-5">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="my-5 pl-6 space-y-2 list-disc marker:text-[#5b21b6]">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-5 pl-6 space-y-2 list-decimal marker:text-[#a1a1aa]">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-[1rem] leading-[1.75] text-[#3f3f46]">
        {children}
      </li>
    ),
    table: ({ children }) => (
      <div className="my-8 overflow-x-auto rounded-[10px] border border-[#e4e4e7]">
        <table className="min-w-full text-[0.9rem]">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-[#fafafa]">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="px-5 py-3 text-left text-[0.75rem] font-[600] uppercase tracking-[0.06em] text-[#71717a] border-b border-[#e4e4e7]">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-5 py-3.5 text-[#3f3f46] border-b border-[#f4f4f5] last-of-type:border-0">
        {children}
      </td>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-[#fafafa] transition-colors">
        {children}
      </tr>
    ),
    strong: ({ children }) => (
      <strong className="font-[600] text-[#0f0f11]">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-[#71717a]">{children}</em>
    ),
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded-[4px] bg-[#f5f3ff] text-[#5b21b6] text-[0.85em] font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-6 p-5 rounded-[10px] bg-[#1c1917] overflow-x-auto text-[0.875rem] leading-[1.7]">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 pl-5 border-l-[3px] border-[#5b21b6] text-[#71717a] italic">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-10 border-[#e4e4e7]" />,
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-[#5b21b6] underline underline-offset-2 hover:no-underline transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ...components,
  };
}
