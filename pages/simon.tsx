import Head from 'next/head';
import appStyles from '@styles/App.module.css';
import { About } from '@components/About';
import type { NextPage } from "next";

export interface PageProps {

}

const Simon: NextPage<PageProps> = ({ }): JSX.Element => {
  return (
    <div className={[appStyles.container, appStyles.withFade].join(" ")}>
      <Head>
        <title>Simon - Über Simon</title>
      </Head>
      <About />
    </div>
  )
}

export default Simon;
