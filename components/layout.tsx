import Header from '@components/Header/header';
import Footer from '@components/Footer/';
import { Montserrat } from 'next/font/google';
type LayoutProps = {
  children: React.ReactNode;
}

// TODO: fix font, when google fonts are fixed @vercel
 const font = Montserrat({
   subsets: ['latin'],
 });

export default function Layout({ children }: LayoutProps) {
  return (
    <main className={ font.className }>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
