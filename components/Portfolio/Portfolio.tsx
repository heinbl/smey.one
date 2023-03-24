import React from 'react';
import appStyles from '@styles/App.module.css';

type PortfolioProps = {

}

export const Portfolio: React.FC<PortfolioProps> = (): JSX.Element => {
  return (
      <section id="portfolio" className={ [appStyles.scrollMargin, appStyles.pageHeight].join(" ") } >
        <div className={ [appStyles.inlineContainer].join(" ")}>
          <h1>Portfolio</h1>
        </div>
      </section>
  );
}
