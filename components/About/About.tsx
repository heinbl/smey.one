import Link from 'next/link';
import Image from 'next/image';
import { InlineImage } from '@components/InlineImage';
import appStyles from '@styles/App.module.css';
import styles from './About.module.css';
import me from '@images/me.webp';
import { ArrowSquareOut } from '@phosphor-icons/react';
import rgbPlaceholder from '@lib/placeholder';
import { Cormorant_Garamond } from 'next/font/google';
import JavascriptLogo from '@images/icons/javascript.svg';
import TypescriptLogo from '@images/icons/typescript.svg';
import PhpLogo from '@images/icons/php.svg';
import HtmlLogo from '@images/icons/html.svg';
import Css3Logo from '@images/icons/css3.svg';
import ReactLogo from '@images/icons/react.svg';
import LinuxLogo from '@images/icons/linux.svg';
import NextLogo from '@images/icons/next.svg';
import NodeLogo from '@images/icons/node.svg';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: [ '400', '700'],
});

interface AboutProps {

}

const About: React.FC<AboutProps> = (): JSX.Element => {
  return (
    <section>
      <h1 className={cormorant.className}>Moin. Ich bin Simon,</h1>
      <div className={styles.headerBox}>
        <InlineImage className={[styles.aboutImage, appStyles.oneThird].join(" ")}>
          <Image
            src={me}
            alt="this is a picture of simon."
            title="Simon"
            loading="eager"
            placeholder="blur"
            blurDataURL={rgbPlaceholder(252, 223, 166)}
            sizes="
            (max-width: 600px) 100vw,
            (max-width: 900px) 50vw,
            33vw"
            >
          </Image>
        </InlineImage>
        <section className={[appStyles.focusText, appStyles.twoThird].join(" ")}>
          <p>
            ein Full-Stack-Entwickler aus {" "}
            <a
              href="https://www.openstreetmap.org/relation/62409"
              title="Oldenburg Openstreetmap"
              target="_blank"
              rel="noopener noreferrer">
              Oldenburg
              <ArrowSquareOut size="2vh"/>
            </a>
    {" "}
            mit einer Vorliebe für kreative Problemlösungen.
          </p>
          { /* 
          <p>
            Ich liebe es, mit modernen Technologien zu arbeiten und mich neuen Herausforderungen
            zu stellen.
          </p>
  */ }
          <p>
            Mein Fokus liegt darauf, benutzerfreundliche und moderne Webanwendungen zu erstellen, die sich nahtlos in die digitale
            Welt integrieren.
          </p>
        </section>
      </div>
      <section className={appStyles.smallMargin}>
        <h2>Skills</h2>
        <p>Ich arbeite mit einem vielseitigen Skillset im Front- und Backend. Aktuell begeistern mich hauptsächlich die folgenden Technologien.</p>
        <aside className={styles.codeIconWrapper}>
          <JavascriptLogo className={styles.codeIcon} />
          <TypescriptLogo className={styles.codeIcon} />
          <HtmlLogo className={styles.codeIcon} />
          <Css3Logo className={styles.codeIcon} />
          <ReactLogo className={styles.codeIcon} />
          <NodeLogo className={styles.codeIcon} />
          <PhpLogo className={styles.codeIcon} />
          <NextLogo className={styles.codeIcon} />
        </aside>
      </section>
    {/* 
          <Link href="/#projekte" className={[appStyles.bigLink, appStyles.teaserLink, appStyles.mediumMargin].join(" ")}>
            Meine Projekte
            </Link>
      <section className={appStyles.smallMargin}>
        <h2>Skills</h2>
        <div className={appStyles.inlineContainer}>
*/}
          <figure className={ [ appStyles.quote, cormorant.className ].join(" ") }>
            <q>
            There is nothing so useless as doing efficiently that which should not be done at all.
            </q>
            <figcaption>— Peter Drucker</figcaption>
          </figure>
    {/*
        </div>
      </section>
*/}
      <section className={appStyles.smallMargin}>
        <h2>Offline</h2>
          <section className={ appStyles.inlineContainer }>
            <p>
              Wenn ich nicht gerade am Rechner sitze, könnt ihr mich dabei erwischen, wie ich einen Basketball ins Körbchen werfe.
              Oder ich sitze auf meinem Rennrad.
            </p>
            <p>
              Ansonsten findet man mich in meiner Werkstatt, in der ich hauptsächlich
              {" "}
              <Link
                href="/drechseln"
                title="Seite über meine Arbeiten">drechsle</Link>.
            </p>
          </section>
      </section>
    </section>
  );
}

export default About;