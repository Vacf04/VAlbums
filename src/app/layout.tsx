import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { UserContextProvider } from '@/context/UserContext';
import userGet from '@/actions/user-get';

const quickSand = Quicksand({
  variable: '--font-quick-sand',
});

export const metadata: Metadata = {
  title: 'VAlbuns',
  description: 'Buy the best albums here.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await userGet();

  return (
    <html lang="pt-BR">
      <body className={`${quickSand.variable} ${quickSand.variable}`}>
        <UserContextProvider user={user}>
          <Header />
          {children}
          <Footer />
        </UserContextProvider>
      </body>
    </html>
  );
}
