import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data.js";
import { HiMenu } from "react-icons/hi";
import { AiOutlineCloseSquare } from "react-icons/ai";

import Logo from "../images/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <AiOutlineCloseSquare /> : <HiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
