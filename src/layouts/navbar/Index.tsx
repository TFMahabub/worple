import logo from "../../assets/logo.png";
import Container from "../../components/global/Container";
import style from "./index.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Container>
        <div className={style.container}>
          <div className={style.logo_wrapper}>
            <img src={logo} className={style.logo} />
          </div>
          <div>menus</div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
