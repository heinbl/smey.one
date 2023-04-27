import { readdirSync } from 'fs';
import Image from 'next/image';
import Head from 'next/head';
import rgbPlaceholder from '@lib/placeholder';
import { InlineImage } from '@components/InlineImage/';
import appStyles from '@styles/App.module.css';
import { GetStaticProps, NextPage } from "next";
import { join } from 'path';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: [ '700'],
});

interface PageProps {
    imagePaths: string[];
}

const Drechseln: NextPage<PageProps> = ({ imagePaths }) => {
    return (
        <section className={ [appStyles.container, appStyles.withFade].join(" ")}>
            <Head>
                <title>Drechseln</title>   
            </Head>
            <h1 className={ cormorant.className }>
                Ich und mein Holz.
            </h1>
            <p>
                Ich arbeite gerne mit Holz, sei es um Feuerholz zu sägen, oder etwas herzustellen, 
                weil der Rohstoff unglaublich vielseitig ist. Die Möglichkeiten sind unendlich.
            </p>
            <p>
                So wird aus einem Stück <strong>Feuerholz </strong>beispielsweise eine
                <strong> Pfeffermühle</strong>, oder ein <strong>Kerzenständer</strong>.
                Voraussetzung ist meist nur ein scharfes Werkzeug. Und natürlich eine
                <i> Drechselbank ;)</i>.
            </p>
            <p>&nbsp;</p>
            <p>
                <i>Hier ein paar Eindrücke.</i>
            </p>
            <article className={ appStyles.imageContainer }>
                {
                    imagePaths && imagePaths.map( (filename, i)=> { 
                        return (
                            <InlineImage key={i}>
                                <Image
                                    key={i}
                                    src={ `/images/drechseln/${filename}` }
                                    height={ 500 }
                                    width={ 500 }
                                    quality={50}
                                    alt="image showing woodwork"
                                    placeholder="blur"
                                    blurDataURL={ rgbPlaceholder(252, 223, 166) }
                                    loading={ i && i === 1 ? 'eager' : 'lazy' }
                                    sizes="
                                    (max-width: 600px) 90vw,
                                    (max-width: 900px) 50vw,
                                    33vw"
                                />
                            </InlineImage>
                        );
                    })
                }
            </article>
        </section>    
    );
}

export const getStaticProps: GetStaticProps = (context) => {
    const imagePaths = new Array();
    const files = readdirSync(join(process.cwd(), 'public/images/drechseln'))
    files.map(f => {
        if(f.toLowerCase().endsWith('.webp')) imagePaths.push(f);
    });

    return {
        props: {
            imagePaths
        } 
    }
}
export default Drechseln;