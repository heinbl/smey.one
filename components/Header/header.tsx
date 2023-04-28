import { useState, ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.css';
import Logo from '@images/small.svg';
import { EnvelopeSimpleOpen } from '@phosphor-icons/react';
 import { Cormorant_Garamond } from 'next/font/google';

//TODO: fix font, when google fonts are fixed @vercel
 const headerFont = Cormorant_Garamond({
   subsets: ['latin'],
   weight: [ '400' ],
 })

export interface HeaderProps {};

export default function Header(props: HeaderProps): ReactElement {
  const [showHamburger, setShowHamburger] = useState<boolean>(false);
  const { pathname, asPath } = useRouter();
  const path = pathname.replace(/\/+/i, '');
  const subpath = asPath.replace(/\/\#+/i, '');
return (
  <header className={[styles.header, headerFont.className].join(" ")}>
    <div className={styles.headerInner}>
      <div className={styles.imageContainer}>
        <Link 
          scroll={false}
          href="/#intro"
          title="Startseite">
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
          <span className={ styles.hamburgerMenu}>
            <span className={styles.hamburgerLinks}>
              <Link 
                scroll={false}
                className={[(subpath === 'intro' || (subpath === '/' && !path)) ? styles.hamburgerItemSelected : '', styles.hamburgerItem].join(" ")}
                onClick={() => setShowHamburger(false)}
                href="/#intro"
                title="Startseite">
                Home
              </Link>
              <Link 
                className={[(path === 'simon') ? styles.hamburgerItemSelected : '', styles.hamburgerItem].join(" ")}
                onClick={() => setShowHamburger(false)}
                href="/simon"
                title="Simon">
                Simon
              </Link>
              <Link 
                className={[subpath === 'projekte' ? styles.hamburgerItemSelected : '', styles.hamburgerItem].join(" ")}
                onClick={() => setShowHamburger(false)}
                scroll={false}
                href="/#projekte"
                title="Projekte">
                Projekte
              </Link>
              <Link
                className={[path === 'drechseln' ? styles.hamburgerItemSelected : '', styles.hamburgerItem].join(" ")}
                href="/drechseln"
                onClick={() => setShowHamburger(false)}
                title="Drechseln"
                >
                Drechseln
              </Link>
              <Link
                className={styles.hamburgerItem}
                target="_blank"
                rel="noopener noreferrer"
                href="/files/cv.pdf"
                title="Lebenslauf"
                onClick={() => setShowHamburger(!false)}
                >
                Cv
              </Link>
              <Link
                className={styles.hamburgerItem}
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:hej-simon@mailbox.org"
                title="Kontakt"
                onClick={() => setShowHamburger(!false)}
                >
                Kontakt
              </Link>
            </span>
          </span>
          <i className={[styles.hamburger, styles.hamburgerOne].join(" ")}></i>
        </label>
      </nav>
      <nav className={styles.nav}>
              <Link className={path === 'simon' ? styles.navItemSelected : ''}
                href="/simon"
                title="Simon">
                Simon
              </Link>
              <Link 
                scroll={false}
                title="Projekte"
                href="/#projekte">
                Projekte
              </Link>
              <Link className={path === 'drechseln' ? styles.navItemSelected : ''}
              title="Drechseln"
                href="/drechseln">
                Drechseln
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                title="Lebenslauf"
                href="/files/cv.pdf">
                Cv
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                title="Kontakt"
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
