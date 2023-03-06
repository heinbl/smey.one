import Head from 'next/head';
import { Montserrat } from '@next/font/google';
type LayoutProps = {
  children: React.ReactNode;
}

const font = Montserrat({
  subsets: ['latin'],
  // weight: '400',
});

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <main className={ font.className }>{ children }</main>
    </>
  );
}
