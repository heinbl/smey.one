import { PortfolioItem } from './'
import appStyles from '@styles/App.module.css';
import { Cormorant_Garamond } from 'next/font/google';
// change
import voss1 from '@images/portfolio/voss/1.webp';
import voss2 from '@images/portfolio/voss/2.webp';
import voss3 from '@images/portfolio/voss/3.webp';
import voss4 from '@images/portfolio/voss/4.webp';

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
        <PortfolioItem
          title="VOSS"
          githubName="voss-web"
          images={[voss1, voss2, voss3, voss4]}
        >
          <p className={appStyles.smallMargin}>
            Voss ist eine Software um automatisiert erstellte Rechnung an Personen zu versenden.
            Geschrieben in <b>Typescript</b> mit <b>Next.js</b> und <b>sqlite3</b>.
            Die Rechnung werden in einem festen Layout mit <b>jspdf</b> erstellt.
          </p>
        </PortfolioItem>
      </div>
    </section>
  );
}
