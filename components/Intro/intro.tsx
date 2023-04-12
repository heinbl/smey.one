import type { ReactElement } from 'react';
import appStyles from '@styles/App.module.css';
import { Portfolio } from '@components/Portfolio';
import { Info } from '@components/Info';
// import { Cormorant } from 'next/font/google';

// const cormorant = Cormorant({
//   subsets: ['latin']
// })

export interface IntroProps {};

export default function Intro(props: IntroProps): ReactElement {
  return (
    <div className={appStyles.container}>
      <Info />
      <Portfolio />
    </div>
  );
}
