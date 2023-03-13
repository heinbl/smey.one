import type { ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.css';
// import Logo from '@images/small_logo.svg';
import Logo from '@images/small.svg';
import { Cormorant } from '@next/font/google';

const headerFont = Cormorant({
  subsets: ['latin'],
})

export interface HeaderProps {};

export default function Header(props: HeaderProps): ReactElement {
  const { pathname } = useRouter();
  const path = pathname.replace(/\/+/i, '');
return (
  <header className={ [styles.header, headerFont.className].join(" ")}>
    <div className={ styles.headerInner }>
      <div className={ styles.imageContainer }>
        <Link href="/">
  { /*
          <Image
            className={styles.headerImage}
            src={Logo}
            alt="logo showing a black S"
            style={{ fill: '#fff' }}
          />
*/}
          <Logo className={styles.headerImage}/>
        </Link>
      </div>
        <nav className={styles.mobileNav}>
          <i className={ [styles.hamburger, styles.hamburgerOne].join(" ") }></i>
        </nav>
        <nav className={ styles.nav }>
          { /* <Link href="/" className={ styles.navItem }>About</Link> */}
          {/* <Link href="/coffee"><a className={ styles.navItem }>Coffee</a></Link> */}
          <Link className={ [path === 'drechseln' ? styles.navSelected : '', styles.navItem].join(" ") } href="/drechseln">Drechseln</Link>
        <Link className={ styles.navItem } target="_blank" rel="noopener noreferrer" href="/files/cv.pdf">Cv</Link>
          <Link className={ styles.navItem } target="_blank" rel="noopener noreferrer" href="mailto:simon.meyer@mailbox.org">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
}
