import Head from 'next/head';
import Link from 'next/link';
import appStyles from '@styles/App.module.css';
import type { NextPage } from "next";
import { InlineImage } from '@components/InlineImage';
import Image from 'next/image';
import me from '@images/me.webp'

export interface PageProps {

}

const Simon: NextPage<PageProps> = ({ }): JSX.Element => {
  return (
    <div className={[appStyles.container, appStyles.withFade].join(" ")}>
      <Head>
        <title>Simon</title>
      </Head>
      <h1>Moin. Ich bin Simon.</h1>
      <div className={appStyles.inlineContainer}>
        <InlineImage className="">
          <Image
            src={me}
            alt="this is a picture of simon."
            title="Simon">
          </Image>
        </InlineImage>
        <section className={ appStyles.focusText }>
          <p>
            Also, ich bin Simon Meyer, ein Full-Stack-Entwickler aus {" "}
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
          <Link href="/#projekte" className={ [ appStyles.bigLink, appStyles.teaserLink, appStyles.mediumMargin ].join(" ") }>Projekte</Link>
        </section>
      </div>
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
  )
}

export default Simon;
