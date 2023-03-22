import type { ReactElement } from 'react';
import introStyles from './Intro.module.css';
import appStyles from '@styles/App.module.css';
import Link from 'next/link';
import { ArrowRight, ArrowDown } from '@phosphor-icons/react';
// import { Cormorant } from 'next/font/google';

// const cormorant = Cormorant({
//   subsets: ['latin']
// })

export interface IntroProps {};

export default function Intro(props: IntroProps): ReactElement {
  return (
    <div className={appStyles.container}>
      <div id="intro" className={appStyles.pageHeight}>
        <div className={introStyles.topContainer}>
          <section className={introStyles.infoBox}>
            <div className={introStyles.hero}>
              <h1 className={[introStyles.headline].join(" ")}>
                Moin.<br />
                Ich bin Simon,
              </h1>
              <h2 className={introStyles.subHeadline}>
                ein Full-Stack-Entwickler aus dem schönen Oldenburg.
              </h2>

              <h2 className={introStyles.subHeadline}>
                Außerdem liebe ich Basketball, {' '}
                arbeite gerne mit
                {' '}
                <Link href="/drechseln">
                  Holz
                </Link>
                {' '}
                und fahre
                {' '}
                Rennrad.
                { /* 
              <Link href="/fahrrad" >Rennrad</Link>.
                   */}
              </h2>
              <div className={ [appStyles.inlineContainer, appStyles.flexV].join(" ") } >
                <button className={ appStyles.actionButton }>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="mailto:simon.meyer@mailbox.org">
                    Schreib &apos;ne Mail
                  </a>
                    <ArrowRight size="1rem" />
                </button>
                  <a
                    className={ appStyles.actionButton }
                    href="#portfolio"
                  >
                    Portfolio
                    <ArrowDown size="1rem" />
                  </a>
                { /* 
              <button
                type="button"
                className={appStyles.actionButton}
              >
              </button>
                   */ }
              </div>
            </div>
            { /* 
          <a className={introStyles.mailMeButton} target="_blank" rel="noopener noreferrer" href="mailto:simon.meyer@mailbox.org">
            Schreib &apos;ne Mail
          </a>
               */}
          </section>
        </div>
      </div>
      <div id="portfolio" className={ [appStyles.pageHeight].join(" ") }>
        stuff
      </div>
    </div>
  );
}
