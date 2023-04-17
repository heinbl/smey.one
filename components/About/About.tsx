import Link from 'next/link';
import Image from 'next/image';
import { InlineImage } from '@components/InlineImage';
import appStyles from '@styles/App.module.css';
import styles from './About.module.css';
import me from '@images/me.webp';
import { ArrowRight } from '@phosphor-icons/react';

interface AboutProps {

}

const About: React.FC<AboutProps> = (): JSX.Element => {
  return (
    <div>
      <h1>Moin. Ich bin Simon.</h1>
      <div className={styles.headerBox}>
        <InlineImage className={[styles.aboutImage, appStyles.oneThird].join(" ")}>
          <Image
            src={me}
            alt="this is a picture of simon."
            title="Simon">
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
          <Link href="/#projekte" className={[appStyles.bigLink, appStyles.teaserLink, appStyles.mediumMargin].join(" ")}>
            Meine Projekte
            </Link>
      <div className={appStyles.smallMargin}>
        <h2>Offline</h2>
        <div className={appStyles.inlineContainer}>
          <section>
            <p>
              Wenn ich nicht gerade am Rechner sitze, könnt ihr mich dabei erwischen, wie ich einen Basketball ins Körbchen werfe.
              Oder ich sitze auf meinem Rennrad.
            </p>
            <p>
              Ansonsten findet man mich in meiner Werkstatt in der ich hauptsächlich
              {" "}
              <Link
                href="/drechseln"
                title="Seite über meine Arbeiten">drechsle</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;