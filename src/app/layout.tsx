import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './reset.min.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Austin Chiatto | Portfolio 2023',
  description: 'My portfolio'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
