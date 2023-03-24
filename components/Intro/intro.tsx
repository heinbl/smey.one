import type { ReactElement } from 'react';
import introStyles from './Intro.module.css';
import appStyles from '@styles/App.module.css';
import Link from 'next/link';
import { Portfolio } from '@components/Portfolio';
import { ArrowRight, ArrowDown } from '@phosphor-icons/react';
// import { Cormorant } from 'next/font/google';

// const cormorant = Cormorant({
//   subsets: ['latin']
// })

export interface IntroProps {};

export default function Intro(props: IntroProps): ReactElement {
  return (
    <div className={appStyles.container}>
      <div id="intro" className={appStyles.pageHeight} style={{ scrollMarginTop: '75px' }}>
        <div id="top-container" className={introStyles.topContainer}>
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
              <div className={ [appStyles.inlineContainer].join(" ") } >
                  <a
                    className={ [appStyles.actionButton, appStyles.pageLink].join(" ") }
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="mailto:simon.meyer@mailbox.org">
                    { /* <span className={ appStyles.secondaryText }>simon.meyer@mailbox.org</span> */ }
                    Schreib &apos;ne Mail
                    <ArrowRight size="1rem" />
                  </a>
                  <a
                    className={ [appStyles.actionButton, appStyles.pageLink].join(" ")}
                    href="#portfolio"
                  >
                    Portfolio
                    <ArrowDown size="1rem" />
                  </a>
                { /* 
                <h1 >
                  <a
                    className={appStyles.pageLink}
                    href="#portfolio"
                  >
                    Portfolio
                    <ArrowDown size="1rem" />
                  </a>
                </h1>
                <h1>
                  <a
                    className={ appStyles.pageLink }
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="mailto:simon.meyer@mailbox.org">
                    Schreib &apos;ne Mail
                    <ArrowRight size="1rem" />
                  </a>
                </h1>
                  */ }
                { /* 
                   */ }
              </div>
            </div>
          </section>
        </div>
      </div>
      <Portfolio />
    </div>
  );
}
