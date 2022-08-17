import { Link, NavLink } from "react-router-dom";
import { links } from "../data.js";
import { HiMenu } from "react-icons/hi";

import Logo from "../images/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className="nav__links">
          {links.map(({ name, path }, index) => {
            return (
              <li>
                <NavLink to={path}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav__toggle-btn">
          <HiMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
