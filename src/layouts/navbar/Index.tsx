import { useState } from "react";
import { Link } from "react-router-dom";
import { Cross } from "../../assets/icons/Cross";
import { HamburgerMenu } from "../../assets/icons/Hamburger";
import logo from "../../assets/logo.png";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import Container from "../../components/global/Container";
import NavLink from "../../components/texts/NavLink";
import style from "./index.module.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className={style.navbar}>
      <Container>
        <div className={style.container}>
          <div className={style.logo_wrapper}>
            <img src={logo} className={style.logo} />
          </div>
          <div className={style.navlink_wrapper}>
            <Link to="/about" className={style.button}>
              <PrimaryButton>ログイン・新規会員登録</PrimaryButton>
            </Link>
            {isOpen ? (
              <Cross
                onClick={() => setOpen((cur: boolean) => !cur)}
                className={style.displayed}
              />
            ) : (
              <HamburgerMenu
                onClick={() => setOpen((cur: boolean) => !cur)}
                className={style.displayed}
              />
            )}
            <div
              className={`${style.navlink_wrapper2} ${
                isOpen && style.isOpenNavMenu
              }`}
            >
              <NavLink to="/about">warpleについて</NavLink>
              <NavLink to="/about">warpleについて</NavLink>
              <NavLink to="/about">warpleについて</NavLink>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
