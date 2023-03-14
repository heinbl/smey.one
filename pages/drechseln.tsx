import Image from 'next/image';
import rgbPlaceholder from '@lib/placeholder';
import { InlineImage } from '@components/InlineImage/';
import appStyles from '@styles/App.module.css';
import { NextPage } from "next";

const Drechseln: NextPage = () => {
    return (
        <div className={ [appStyles.container, appStyles.containerWithFade].join(" ")}>
            <p>
                Ab und an drehe ich etwas an der Drechselbank.
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
            <p>
                <i>Hier ein paar Impressionen.</i>
            </p>
            <div className={ appStyles.imageContainer }>
                {
                    [...Array(20)].map((i, x) => {
                        const dataUrl = `/images/drechseln/${ (x+1)%2 === 0 ? '2' : '1'}.webp`;
                        return (
                            <InlineImage key={i}>
                                <Image
                                    key={i}
                                    src={ dataUrl }
                                    height={ 500 }
                                    width={ 500 }
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

export default Drechseln;