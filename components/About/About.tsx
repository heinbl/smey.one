import Link from 'next/link';
import Image from 'next/image';
import { InlineImage } from '@components/InlineImage';
import appStyles from '@styles/App.module.css';
import styles from './About.module.css';
import me from '@images/me.webp';
import { ArrowSquareOut } from '@phosphor-icons/react';
import rgbPlaceholder from '@lib/placeholder';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: [ '400', '700'],
});

interface AboutProps {

}

const About: React.FC<AboutProps> = (): JSX.Element => {
  return (
    <section>
      <h1 className={cormorant.className}>Moin. Ich bin Simon.</h1>
      <div className={styles.headerBox}>
        <InlineImage className={[styles.aboutImage, appStyles.oneThird].join(" ")}>
          <Image
            src={me}
            alt="this is a picture of simon."
            title="Simon"
            placeholder="blur"
            blurDataURL={rgbPlaceholder(252, 223, 166)}>
          </Image>
        </InlineImage>
        <section className={[appStyles.focusText, appStyles.twoThird].join(" ")}>
          <p>
            Ich bin Simon Meyer, ein Full-Stack-Entwickler aus {" "}
            <a
              href="https://www.openstreetmap.org/relation/62409"
              title="Oldenburg Openstreetmap"
              target="_blank"
              rel="noopener noreferrer">
              Oldenburg
              <ArrowSquareOut size="3vh"/>
            </a>
    ,{" "}
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
        <div className={appStyles.inlineContainer}>
          <section>
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
        </div>
      </section>
    </section>
  );
}

export default About;