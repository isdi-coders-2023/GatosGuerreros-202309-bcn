import FooterStyled from "./FooterStyled";
interface FooterProps {
  text: string;
}

const Footer = ({ text }: FooterProps): React.ReactElement => {
  return (
    <FooterStyled className="footer">
      <div className="footer__icons">
        <a
          className="footer__social-media-link"
          href="https://www.instagram.com/"
        >
          <img
            alt="Instagram logo"
            width="30px"
            height="30px"
            src="/images/icons/instagramLogo.svg"
            aria-label="Instagram logo that redirects to our Instagram page"
            className="footer__icon"
          />
        </a>
        <a
          className="footer__social-media-link"
          href="https://www.facebook.com/"
        >
          <img
            width="30px"
            height="30px"
            src="/images/icons/facebookLogo.svg"
            alt="Facebook logo"
            aria-label="Facebook logo that redirects to our Facebook page"
            className="footer__icon"
          />
        </a>
        <a className="footer__social-media-link" href="https://www.x.com/">
          <img
            width="30px"
            height="30px"
            src="/images/icons/xLogo.svg"
            alt="X logo"
            aria-label="X (formerly Twitter) logo that redirects to our X page"
            className="footer__icon"
          />
        </a>
      </div>
      <span className="footer__copyright-notice">{text}</span>
    </FooterStyled>
  );
};

export default Footer;
