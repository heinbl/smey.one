import { readdirSync } from 'fs';
import Image from 'next/image';
import Head from 'next/head';
import rgbPlaceholder from '@lib/placeholder';
import { InlineImage } from '@components/InlineImage/';
import appStyles from '@styles/App.module.css';
import { GetStaticProps, NextPage } from "next";
import { join } from 'path';

interface PageProps {
    imagePaths: string[];
}

const Drechseln: NextPage<PageProps> = ({ imagePaths }) => {
    return (
        <div className={ [appStyles.container, appStyles.withFade].join(" ")}>
            <Head>
                <title>Drechseln</title>   
            </Head>
            <h1>
                Ich und mein Holz.
            </h1>
            <p>
                Ich arbeite gerne mit Holz, sei es Feuerholz zu sägen, oder etwas herzustellen, 
                weil der Rohstoff unglaublich vielseitig ist.
            </p>
            <p>
                Das Drechseln begeistert mich, weil es unzählige Möglichkeiten gibt, etwas mit
                einfachen Mitteln zu schaffen.
            </p>
            <p>
                So wird aus einem Stück <strong>Feuerholz </strong>beispielsweise eine
                <strong> Pfeffermühle</strong>, oder ein <strong>Kerzenständer</strong>.
                Vorraussetzung ist meist nur ein scharfes Werkzeug. Und natürlich eine
                <i> Drechselbank ;)</i>.
            </p>
            <p>&nbsp;</p>
            <p>
                <i>Hier ein paar Eindrücke.</i>
            </p>
            <div className={ appStyles.imageContainer }>
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
                                    blurDataURL={ rgbPlaceholder(220, 255, 253) }
                                />
                            </InlineImage>
                        );
                    })
                }
            </div>
        </div>    
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