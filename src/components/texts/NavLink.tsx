import { Link } from "react-router-dom";
import style from "./navLink.module.css";
const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <Link to={to} className={style.navlink}>
      {children}
    </Link>
  );
};

export default NavLink;
