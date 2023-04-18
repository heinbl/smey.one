import Head from 'next/head';
import appStyles from '@styles/App.module.css';
import { Cormorant_Garamond } from 'next/font/google';
import { About } from '@components/About';
import type { NextPage } from "next";

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: [ '400', '700' ],
});

export interface PageProps {

}

const Simon: NextPage<PageProps> = ({ }): JSX.Element => {
  return (
    <div className={[appStyles.container, appStyles.withFade].join(" ")}>
      <Head>
        <title>Simon</title>
      </Head>
      <About />
    </div>
  )
}

export default Simon;
