import type { ReactElement } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
// import Logo from '@images/small_logo.svg';
import Logo from '@images/small.svg';
import { Cormorant } from '@next/font/google';

const headerFont = Cormorant({
  subsets: ['latin'],
})

export interface HeaderProps {};

export default function Header(props: HeaderProps): ReactElement {
return (
  <header className={ styles.header && headerFont.className}>
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
        <nav className={ styles.nav }>
          { /* <Link href="/" className={ styles.navItem }>About</Link> */}
          {/* <Link href="/coffee"><a className={ styles.navItem }>Coffee</a></Link> */}
          <Link className={ styles.navItem } target="_blank" rel="noopener noreferrer" href="/files/cv.pdf">Cv</Link>
          <Link className={ styles.navItem } target="_blank" rel="noopener noreferrer" href="mailto:simon.meyer@mailbox.org">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
