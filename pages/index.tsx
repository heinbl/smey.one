import type { NextPage } from 'next'
import Head from 'next/head'
import Intro from '@components/Intro/intro';

const Index: NextPage = () => {

  return (
    <>
      <Head>
        <title>Simon Meyer - Full-Stack-Developer aus Oldenburg in Niedersachsen</title>
      </Head>
      <Intro />
    </>
  )
}

export default Index
