import { Coffee, Heart } from '@phosphor-icons/react';
import { footerStyles } from './'
import appStyles from '@styles/App.module.css';

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={ footerStyles.footer }>
      <div className={[footerStyles.innerFooter, appStyles.centered].join(" ")}>
        <p className={footerStyles.footerItem}>
          <b>&copy; 2023</b>
          <br />
          <a href="https://www.hiresimon.de">Simon Meyer</a>
        </p>
        <p className={footerStyles.footerItem}>
          Made with
          <Heart className={ [footerStyles.icon, footerStyles.heartIcon].join(" ") } size="2vh" weight="duotone" fill="currentColor" />
          and a lot of espresso.
        </p>
        <p className={footerStyles.footerItem}>
          <b>Socials</b>
          <br />
          <a href="https://github.com/smeyx" title="GitHub page" >GitHub</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer;