import React from 'react';
import styles from './InlineImage.module.css';

interface InlineImageProps {
    children: JSX.Element,
}

export const InlineImage: React.FC<InlineImageProps & React.HTMLAttributes<HTMLDivElement>> = ({ children, className }): JSX.Element => {
    return (
        <div className={ [styles.imageContainer, className].join(" ") }>
            { children }
        </div>
    )
}
