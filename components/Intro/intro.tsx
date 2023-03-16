import type { ReactElement } from 'react';
import introStyles from './Intro.module.css';
import appStyles from '@styles/App.module.css';
import Link from 'next/link';
// import { Cormorant } from 'next/font/google';

// const cormorant = Cormorant({
//   subsets: ['latin']
// })

export interface IntroProps {};

export default function Intro(props: IntroProps): ReactElement {
  return (
    <div className={appStyles.container}>
      <div className={introStyles.topContainer}>
        <div className={introStyles.infoBox}>
          <div className={introStyles.hero}>
            <h1 className={[introStyles.headline].join(" ")}>
              Moin.
            </h1>
            <h1 className={introStyles.headline}>
              Ich bin Simon,
            </h1>
            <h2 className={introStyles.subHeadline}>
              ein Full-Stack-Entwickler aus dem schönen Oldenburg.
            </h2>

            <h2 className={introStyles.subHeadline}>
              Außerdem liebe ich Basketball, {' '}
              drehe krumme Dinger aus
              {' '}
              <Link href="/drechseln">
                Holz
              </Link>
              {' '}
              und fahre
              {' '}
              <Link href="/fahrrad">Fahrrad</Link>.
            </h2>
          <button
            type="button"
            className={appStyles.actionButton}
          >
           Sieh dir meine Arbeit an. 
          </button>
          </div>
    { /* 
          <a className={introStyles.mailMeButton} target="_blank" rel="noopener noreferrer" href="mailto:simon.meyer@mailbox.org">
            Schreib &apos;ne Mail
          </a>
  */}
        </div>
      </div>
    </div>
  );
}
