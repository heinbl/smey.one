import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/header';
import Home from '../components/Intro/intro';

const Index: NextPage = () => {

  return (
    <>
      <Head>
        <title>Simon Meyer - Full-Stack-Developer</title>
        <meta name="description" content="Simon Meyer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Home />
    </>
  )
}

export default Index
