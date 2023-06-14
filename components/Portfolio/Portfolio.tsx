import { PortfolioItem } from './'
import appStyles from '@styles/App.module.css';
import { Cormorant_Garamond } from 'next/font/google';
// change
import voss1 from '@images/portfolio/voss/1.webp';
import voss2 from '@images/portfolio/voss/2.webp';
import voss3 from '@images/portfolio/voss/3.webp';
import voss4 from '@images/portfolio/voss/4.webp';
// change
import homepage1 from '@images/portfolio/homepage/1.webp';
import homepage2 from '@images/portfolio/homepage/2.webp';
import homepage3 from '@images/portfolio/homepage/3.webp';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: [ '400', '700' ],
});

type PortfolioProps = {

}

export const Portfolio: React.FC<PortfolioProps> = (): JSX.Element => {

  return (
    <section id="projekte" className={[appStyles.scrollMargin, appStyles.pageHeight].join(" ")} >
      <div className={[appStyles.containerM0, appStyles.flexV].join(" ")}>
        <h2 className={[appStyles.bigHeadline, cormorant.className].join(" ")}>Projekte</h2>
        <section className={appStyles.gridContainer}>
          <PortfolioItem
            title="VOSS (work in progress)"
            githubName="voss-web"
            images={[voss1, voss2, voss3, voss4]}
            tags={['typescript', 'react', 'next.js', 'sqlite3', 'jspdf']}
          >
            <p className={appStyles.smallMargin}>
              VOSS ist eine Software um automatisiert erstellte Rechnung an Kunden zu versenden. 
              Rechnungs- und Kundendaten werden in einer Datenbank erfasst. Die Rechnungserstellung erfolgt dann automatisiert.
            </p>
          </PortfolioItem>
          <PortfolioItem
            title="Private Homepage"
            githubName="smey.one"
            images={[homepage1, homepage2, homepage3]}
            tags={['react', 'next.js', 'typescript']}
            link="https://www.hiresimon.de"
          >
            <p className={appStyles.smallMargin}>
              Meine private Homepage mit Portfolio, meinen Drechselarbeiten und mehr.
              Die Seite ist verboten schnell und komplett responsive.
            </p>
          </PortfolioItem>
        </section>
      </div>
    </section>
  );
}
