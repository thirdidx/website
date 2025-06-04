import type React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inconsolata, Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inconsolata',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'thirdindex',
  description:
    'Tech consultancy and digital studio building custom web applications with engineering rigor and thoughtful design',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${inconsolata.variable}`}>
      <body>{children}</body>
    </html>
  );
}
