import type { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import HeaderImage from '../../public/images/header2.jpg';
import Logo from '../../public/images/simon_logo.svg';

export interface HeaderProps {};

export default function Header(props: HeaderProps): ReactElement {
  return (
    <header className={ styles.header }>
      <div className={ styles.headerInner }>
        <nav className={ styles.nav }>
        <div className={ styles.imageContainer }>
          <Image 
            className={ styles.headerImage }
            src={ Logo } 
            alt="a small programmer in the wild"
          />
        </div>
          <Link href="/" className={ styles.navItem }>About</Link>
          {/* <Link href="/coffee"><a className={ styles.navItem }>Coffee</a></Link> */}
          <Link className={ styles.navItem } target="_blank" rel="noopener noreferrer" href="/files/cv.pdf">CV(GER)</Link>
          <Link className={ styles.navItem } target="_blank" rel="noopener noreferrer" href="mailto:simon.meyer@mailbox.org">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
