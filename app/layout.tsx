import type React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inconsolata, Geist } from 'next/font/google';
import { Provider } from 'jotai';

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-geist',
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
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.png',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon-dark.png',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${inconsolata.variable}`}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
