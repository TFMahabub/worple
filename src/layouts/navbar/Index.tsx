import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import Container from "../../components/global/Container";
import NavLink from "../../components/texts/NavLink";
import style from "./index.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Container>
        <div className={style.container}>
          <div className={style.logo_wrapper}>
            <img src={logo} className={style.logo} />
          </div>
          <div className={style.navlink_wrapper}>
            <NavLink to="/about">warpleについて</NavLink>
            <NavLink to="/about">warpleについて</NavLink>
            <NavLink to="/about">warpleについて</NavLink>
            <Link to="/about" className={style.button}>
              <PrimaryButton>ログイン・新規会員登録</PrimaryButton>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
