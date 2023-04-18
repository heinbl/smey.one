import Head from 'next/head';
import Header from '@components/Header/header';
import { Montserrat, Cormorant_Garamond } from 'next/font/google';
type LayoutProps = {
  children: React.ReactNode;
}

// TODO: fix font, when google fonts are fixed @vercel
 const font = Montserrat({
   subsets: ['latin'],
   weight: 'variable',
 });

 const cormo = Cormorant_Garamond({
   subsets: ['latin'],
   weight: ['300', '400', '500', '600', '700'],
 });
export default function Layout({ children }: LayoutProps) {
  return (
    <main className={ font.className }>
      <Header />
      {children}
    </main>
  );
}
