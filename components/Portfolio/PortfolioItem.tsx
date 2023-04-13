import type { StaticImageData } from "next/image";

import appStyles from '@styles/App.module.css';
import styles from './PortfolioItem.module.css';
import Slideshow from "@components/Carousel";

type PortfolioItemProps = {
  children: JSX.Element | JSX.Element[],
  title: string,
  githubName: string,
  images: Array<StaticImageData>
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ children, title, images }): JSX.Element => {
  return (
    <article>
      <h2>{title}</h2>
      <div className={appStyles.containerM0}>
        <div className={styles.portfolioItemInfo}>
          {children}
        </div>
        <div className={styles.carousel}>
          <Slideshow images={images}></Slideshow>
        </div>
      </div>
    </article>
  );
};

export { PortfolioItem };
