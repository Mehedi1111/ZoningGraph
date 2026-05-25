import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-urbanist',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ZoningGraph — AI-Powered Zoning Intelligence',
    template: '%s | ZoningGraph',
  },
  description:
    'ZoningGraph transforms fragmented zoning codes, parcel histories, and land-use regulations into a unified AI knowledge graph for enterprise property platforms.',
  keywords: ['zoning intelligence', 'property data', 'GovTech', 'parcel data', 'AI', 'real estate'],
  openGraph: {
    title: 'ZoningGraph — AI-Powered Zoning Intelligence',
    description: 'The intelligence layer real estate has been missing.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={urbanist.variable} suppressHydrationWarning>
      <head>
        {/* Prevent flash of unstyled content on theme load */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}})();` }} />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
