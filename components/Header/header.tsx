import { useState, ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.css';
import Logo from '@images/small.svg';
import { EnvelopeSimpleOpen } from '@phosphor-icons/react';
// import { Cormorant } from 'next/font/google';

//TODO: fix font, when google fonts are fixed @vercel
// const headerFont = Cormorant({
//   subsets: ['latin'],
// })

export interface HeaderProps {};

export default function Header(props: HeaderProps): ReactElement {
  const [showHamburger, setShowHamburger] = useState<boolean>(false);
  const { pathname, asPath } = useRouter();
  const path = pathname.replace(/\/+/i, '');
  const subpath = asPath.replace(/\/\#+/i, '');
return (
  <header className={[styles.header].join(" ")}>
    <div className={styles.headerInner}>
      <div className={styles.imageContainer}>
        <Link 
          scroll={false}
          href="/#intro">
          <Logo
            className={[styles.headerImage, showHamburger ? styles.hamburgerHeader : ''].join(" ")}
            onClick={ () => setShowHamburger(false) }
          />
        </Link>
      </div>
      <nav className={styles.mobileNav}>
        <input type="checkbox"
          style={{ display: 'none' }}
          onClick={() => setShowHamburger(!showHamburger)}
          className={ showHamburger ? styles.hamburgerActive : '' }
          id="hamburger-active" />
        <label className={[styles.hamburgerBox].join(" ")} htmlFor="hamburger-active">
          <div className={ styles.hamburgerMenu}>
            <div className={styles.hamburgerLinks}>
              <Link 
                scroll={false}
                className={[(subpath === 'intro' || (subpath === '/' && !path)) ? styles.hamburgerItemSelected : '', styles.hamburgerItem].join(" ")}
                onClick={() => setShowHamburger(false)}
                href="/#intro">
                Home
              </Link>
              <Link 
                className={[(path === 'simon') ? styles.hamburgerItemSelected : '', styles.hamburgerItem].join(" ")}
                onClick={() => setShowHamburger(false)}
                href="/simon">
                Simon
              </Link>
              <Link 
                className={[subpath === 'projekte' ? styles.hamburgerItemSelected : '', styles.hamburgerItem].join(" ")}
                onClick={() => setShowHamburger(false)}
                scroll={false}
                href="/#projekte">
                Projekte
              </Link>
              <Link
                className={[path === 'drechseln' ? styles.hamburgerItemSelected : '', styles.hamburgerItem].join(" ")}
                href="/drechseln"
                onClick={() => setShowHamburger(false)}
                >
                Drechseln
              </Link>
              <Link
                className={styles.hamburgerItem}
                target="_blank"
                rel="noopener noreferrer"
                href="/files/cv.pdf"
                onClick={() => setShowHamburger(!false)}
                >
                Cv
              </Link>
              <Link
                className={styles.hamburgerItem}
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:hej-simon@mailbox.org"
                onClick={() => setShowHamburger(!false)}
                >
                Kontakt
              </Link>
            </div>
          </div>
          <i className={[styles.hamburger, styles.hamburgerOne].join(" ")}></i>
        </label>
      </nav>
      <nav className={styles.nav}>
              <Link className={path === 'simon' ? styles.navItemSelected : ''}
                href="/simon">
                Simon
              </Link>
              <Link 
                scroll={false}
                href="/#projekte">
                Projekte
              </Link>
              <Link className={path === 'drechseln' ? styles.navItemSelected : ''}
                href="/drechseln">
                Drechseln
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="/files/cv.pdf">
                Cv
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:hej-simon@mailbox.org">
                Kontakt
              </Link>
        { /* <Link href="/" className={ styles.navItem }>About</Link> */}
        {/* <Link href="/coffee"><a className={ styles.navItem }>Coffee</a></Link> */}
      </nav>
    </div>
  </header>
  );
}
