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
            <div >
                {
                    [...Array(5)].map(i => {
                        return (
                            <InlineImage key={i}>
                                <Image
                                    src={'/images/drechseln/1.jpg'}
                                    alt="image showing woodwork"
                                    width={'100'}
                                    height={'100'}
                                />
                            </InlineImage>
                        );
                    })
                }
            </div>
        </div>    
    );
}