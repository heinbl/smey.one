import React from 'react';
import Image from 'next/image';
import appStyles from '@styles/App.module.css';
import { InlineImage } from '@components/InlineImage';
import voss from '@images/portfolio/3.webp';

type PortfolioProps = {

}

export const Portfolio: React.FC<PortfolioProps> = (): JSX.Element => {
  return (
      <section id="portfolio" className={ [appStyles.scrollMargin, appStyles.pageHeight].join(" ") } >
        <div className={ [appStyles.inlineContainer, appStyles.flexV].join(" ")}>
          <h1>Portfolio</h1>
          <InlineImage >
            <Image 
              src={voss}
              alt="image showing voss invoice software"
              />
          </InlineImage>
        </div>
      </section>
  );
}
