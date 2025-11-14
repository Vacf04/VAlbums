import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const quickSand = Quicksand({
  variable: '--font-quick-sand',
});

export const metadata: Metadata = {
  title: 'VAlbuns',
  description: 'Buy the best albums here.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${quickSand.variable} ${quickSand.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
