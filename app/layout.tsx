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
  icons: {
    icon: '/zoniggraph logo icon.png',
    apple: '/zoniggraph logo icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
