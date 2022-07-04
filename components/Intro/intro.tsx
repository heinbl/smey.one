import type { ReactElement } from 'react';
import { useRef, useEffect } from 'react';
import homeStyles from './Intro.module.css';
import Link from 'next/link';
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
      <div className={ homeStyles.container }>
        {/* <div className={ homeStyles.imageBox }> */}
        {/*   <Image */} 
        {/*     className={ homeStyles.rndImage } */}
        {/*     src={ HeaderImage } */}
        {/*     alt="Image of a programmer in the wild." */}
        {/*     layout="responsive" */}
        {/*   /> */}
        {/* </div> */}
        <div className={ homeStyles.intro }>
          <div className={ homeStyles.infoBox }>
            <h1 className={ homeStyles.headline }>
              Hi, i&apos;m Simon,
            </h1>
            <h2 className={ homeStyles.subHeadline }>
              a Full-Stack-Developer from Germany.
            </h2>
            <a target="_blank" rel="noopener noreferrer" href="mailto:simon.meyer@mailbox.org">
              <button className={ homeStyles.mailMeButton }>
                Say hi!
              </button>
            </a>
          </div>
          <div className={ homeStyles.descBox }>
            <div className={ homeStyles.introParagraph }>
              <p>
                I&apos;m an aspiring Full-Stack-Developer based in Oldenburg, Lower Saxony and excel in <b ref={ underlineRef }>JS/Node.js</b>, <b>PHP</b>, <b>HTML</b>, <b>CSS</b>, Linux. I also like working with modern libraries like <b>React</b>, <b>Next.js</b> or <b>Express</b>. Fun Fact: I know how to quit (and use) VIM.
              </p>
              <p>
                I&apos;m a quick learner and like learning something new (currently this is&nbsp;
                <Link href="/woodturning">
                  <a>woodturning</a>
                </Link>
                ). 
              </p>
              <p>
                One of my biggest loves - besides the obvious - is <b>basketball</b>. 
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
