import type { ReactElement } from 'react';
import { useRef, useEffect } from 'react';
import introStyles from './Intro.module.css';
import Link from 'next/link';
import Image from 'next/image';
import BackgroundImage from '../../public/images/bg_small.jpg';
import Logo from '../../public/images/simon_logo.svg';
import { annotate } from 'rough-notation';


export interface IntroProps {};

export default function Intro(props: IntroProps): ReactElement {
  const underlineRef = useRef<HTMLElement | null>(null);

  // useEffect(() => {
  //   const annoTag:HTMLElement | null = underlineRef.current;
  //   if(annoTag) {
  //     const annotation = annotate(annoTag, { type: 'underline', color: 'rgb(135, 127, 73)' });
  //     annotation.show();
  //   } }, []);

  return (
    <div className={introStyles.container}>
      {/* <div className={ introStyles.imageBox }> */}
      {/*   <Image */}
      {/*     className={ introStyles.rndImage } */}
      {/*     src={ HeaderImage } */}
      {/*     alt="Image of a programmer in the wild." */}
      {/*     layout="responsive" */}
      {/*   /> */}
      {/* </div> */}

      <div className={introStyles.topContainer}>
        { /*<span className={ introStyles.topText }>Simon Meyer</span> */}
    <div className={introStyles.imageContainer}>
          <Image className={introStyles.bgImage} src={BackgroundImage} alt="a programmer in the wild" />
    </div>
        <div className={introStyles.infoBox}>
          <div className={ introStyles.hero}>
            <h1 className={introStyles.headline}>
              Moin. Ich bin Simon,
            </h1>
            <h2 className={introStyles.subHeadline}>
              ein Full-Stack-Entwickler aus dem schönen Oldenburg. <br />

            </h2>
            <h2 className={introStyles.subHeadline}>
              Außerdem mag ich Basketball, {' '}
              drehe krumme Dinger aus
              {' '}
              <Link href="/holz">
                Holz
              </Link>
              {' '}
              und fahre
              {' '}
              <Link href="/fahrrad">Fahrrad</Link>.
            </h2>
          </div>
          <a className={introStyles.mailMeButton} target="_blank" rel="noopener noreferrer" href="mailto:simon.meyer@mailbox.org">
            Schreib &apos;ne Mail
          </a>
        </div>
      </div>
      <div className={introStyles.intro}>
        <div className={introStyles.descBox}>
          <div className={introStyles.introParagraph}>
            <p>
              {/* I&apos;m an aspiring Full-Stack-Developer based in Oldenburg, Lower Saxony and excel in <b ref={ underlineRef }>JS/Node.js</b>, <b>PHP</b>, <b>HTML</b>, <b>CSS</b> and Linux. I also like working with modern libraries like <b>React</b>, <b>Next.js</b> or <b>Express</b>. I know how to quit (and use) VIM. */}
              { /* Ich entwickle Projekte unter anderem mit <b>Javascript/Node.js, PHP, HTML, CSS</b>. Dabei arbeite ich gerne mit modernen Frameworks wie React, Next.js oder Svelte. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
