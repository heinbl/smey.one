import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/header';
import Intro from '../components/Intro/intro';

const Index: NextPage = () => {

  return (
    <>
      <Head>
        <title>Simon Meyer - Full-Stack-Developer</title>
        <meta name="description" content="Simon Meyer ist ein Full-Stack-Entwickler aus Nartum/Oldenburg." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Intro />
    </>
  )
}

export default Index
