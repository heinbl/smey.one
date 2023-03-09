import React from 'react';
import styles from './InlineImage.module.css';

interface InlineImageProps {
    children: JSX.Element[],
}

export const InlineImage: React.FC<InlineImageProps> = ({ children }): JSX.Element => {
    return (
        <div className={ styles.imageContainer }>
            { children }
        </div>
    )
}