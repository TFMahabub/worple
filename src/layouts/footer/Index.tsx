import { InstagramIcon } from "../../assets/icons/Instagram";
import { TwitterIcon } from "../../assets/icons/Twitter";
import { WhatsappIcon } from "../../assets/icons/Whatsapp";
import logo from "../../assets/logo.png";
import Container from "../../components/global/Container";
import style from "./index.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container flex padding="50px 0">
        <div className={style.rightSide_wrapper}>
          <div className={style.logo_wrapper}>
            <img src={logo} className={style.logo} />
          </div>
          <div className={style.social_wrapper}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <WhatsappIcon />
            </a>
          </div>
        </div>
        <div className={style.leftSide_wrapper}>
          <div className={style.contentItem}>
            <MenuText>warpleについて</MenuText>
            <ul>
              <MenuTextLight>warpleについて</MenuTextLight>
              <MenuTextLight>warpleについて</MenuTextLight>
              <MenuTextLight>warpleについて</MenuTextLight>
              <MenuTextLight>warpleについて</MenuTextLight>
            </ul>
          </div>
          <div className={style.contentItem}>
            <MenuText>warpleについて</MenuText>
            <ul>
              <MenuTextLight>warpleについて</MenuTextLight>
              <MenuTextLight>warpleについて</MenuTextLight>
              <MenuTextLight>warpleについて</MenuTextLight>
              <MenuTextLight>warpleについて</MenuTextLight>
            </ul>
          </div>
          <div className={style.contentItem}>
            <MenuText>warpleについて</MenuText>
            <ul>
              <MenuTextLight>warpleについて</MenuTextLight>
              <MenuTextLight>warpleについて</MenuTextLight>
              <MenuTextLight>warpleについて</MenuTextLight>
              <MenuTextLight>warpleについて</MenuTextLight>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

const MenuText = ({ children }: { children: React.ReactNode }) => {
  return <h4 className={style.menuText}>{children}</h4>;
};

const MenuTextLight = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className={style.menuTextLight}>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </li>
  );
};
