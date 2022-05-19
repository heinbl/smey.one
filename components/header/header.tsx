import type { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import HeaderImage from '../../public/images/header.jpg';

export interface HeaderProps {};

export default function Header(props: HeaderProps): ReactElement {
  return (
    <header className={ styles.header }>
      <div className={ styles.headerInner }>
        <div className={ styles.imageContainer }>
          <Image 
            className={ styles.headerImage }
            src={ HeaderImage } 
            alt="a small programmer in the wild"
            layout="responsive"
          />
        </div>
        <nav className={ styles.nav }>
          <Link href="/"><a className={ styles.navItem }>About</a></Link>
          <Link href="CV"><a className={ styles.navItem }>CV</a></Link>
          <a className={ styles.navItem } target="_blank" rel="noopener noreferrer" href="mailto:simon.meyer@mailbox.org">Contact</a>
        </nav>
      </div>
    </header>
  );
}
