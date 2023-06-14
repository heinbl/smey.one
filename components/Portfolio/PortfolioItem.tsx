import type { StaticImageData } from "next/image";
import { Link, GithubLogo } from "@phosphor-icons/react";

import appStyles from '@styles/App.module.css';
import styles from './PortfolioItem.module.css';
import { Carousel } from "@components/Carousel/";

type PortfolioItemProps = {
  children: JSX.Element | JSX.Element[],
  title: string,
  githubName: string,
  images: Array<StaticImageData>,
  tags?: string[];
  link?: string,
}

const PortfolioItem: React.FC<PortfolioItemProps> = (
  {
    children,
    title,
    images,
    githubName,
    tags,
    link
  }): JSX.Element => {
  return (
    <article className={ styles.container }>
      <div className={[appStyles.containerM0].join(" ")}>
        <section className={styles.portfolioItemInfo}>
        <div className={styles.carousel}>
          <Carousel images={images} title={`Ein Bild das das Projekt ${title} zeigt.`}></Carousel>
        </div>
          <section className={styles.projectInfo}>
            <div>
              <h3>{title}</h3>
              {children}
            </div>
            <footer>
              <aside className={styles.projectLinks}>
                <a
                  href={`https://github.com/smeyx/${githubName}`}
                  title="Auf Github ansehen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[styles.projectLink].join(" ")}
                >
                  <GithubLogo size="3vh" weight="duotone" />
                  GitHub
                </a>
                {
                  link ?
                    <a
                      href={ link }
                      title="Link zum Projekt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={[styles.projectLink].join(" ")}
                    >
                      <Link size="3vh" weight="duotone" />
                      Homepage
                    </a>
                    : null
                }
              </aside>
              <aside className={[styles.tagList].join(" ")}>

                {
                  tags ? tags.map((t, index) => (
                    <span key={index} className={styles.tag} > {t}</span>
                  ))
                    : null
                }
              </aside>
            </footer>
          </section>
        </section>
      </div>
    </article>
  );
};

export { PortfolioItem };
