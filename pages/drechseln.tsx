import type { ReactElement } from "react";
import Image from 'next/image';
import { InlineImage } from '@components/InlineImage/';
import appStyles from '@styles/App.module.css';

interface DrechselnProps {

}

export default function Drechseln(props: DrechselnProps): ReactElement {
    return (
        <div className={ [appStyles.container, appStyles.containerWithFade].join(" ")}>
            <p>Ab und an drehe ich etwas an der Drechselbank.</p>
            <div className={ appStyles.imageContainer }>
                {
                    [...Array(20)].map((i, x) => {
                        return (
                            <InlineImage key={i}>
                                <Image
                                    src={`/images/drechseln/${ (x+1)%2 === 0 ? '2' : '1'}.webp`}
                                    height={ 500 }
                                    width={ 500 }
                                    alt="image showing woodwork"
                                />
                            </InlineImage>
                        );
                    })
                }
            </div>
        </div>    
    );
}
