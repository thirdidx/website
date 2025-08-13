import type React from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Space_Mono } from 'next/font/google';
import { Provider } from 'jotai';
import './globals.css';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

const saolDisplay = localFont({
  src: [
    {
      path: '../public/fonts/SaolDisplay-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/SaolDisplay-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/SaolDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-saol-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'thirdindex',
  description:
    'digital studio and consultancy building custom web applications with engineering rigor and thoughtful design',
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
    <html lang="en" className={`${spaceMono.variable} ${saolDisplay.variable}`}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
