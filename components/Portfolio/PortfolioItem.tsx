import type { StaticImageData } from "next/image";
import { GithubLogo } from "@phosphor-icons/react";

import appStyles from '@styles/App.module.css';
import styles from './PortfolioItem.module.css';
import { Carousel } from "@components/Carousel/";

type PortfolioItemProps = {
  children: JSX.Element | JSX.Element[],
  title: string,
  githubName: string,
  images: Array<StaticImageData>
}

const PortfolioItem: React.FC<PortfolioItemProps> = (
  {
    children,
    title,
    images,
    githubName
  }): JSX.Element => {
  return (
    <article>
      <h2>{title}</h2>
      <div className={appStyles.containerM0}>
        <div className={styles.portfolioItemInfo}>
          {children}
          <div className={styles.projectLinks}>
            <a
              href={ `https://github.com/smeyx/${ githubName }` }
              title="Auf Github ansehen"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              <GithubLogo size="2rem" weight="regular" />
            </a>
          </div>
        </div>
        <div className={styles.carousel}>
          <Carousel images={images}></Carousel>
        </div>
      </div>
    </article>
  );
};

export { PortfolioItem };
