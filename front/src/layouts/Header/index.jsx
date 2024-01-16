import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header id="Header">
      <nav id="NavHeader">
        <div className="logo">
          <img
            src="https://preview.colorlib.com/theme/educature/img/logo.png.webp"
            alt=""
          />
        </div>
        <div className="navBtns">
          <ul>
            <NavLink
              to={"/"}
              className={true ? "activeNavLink" : "pendingNavLink"}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/Add"}
              className={true ? "activeNavLink" : "pendingNavLink"}
            >
              <li>Add</li>
            </NavLink>
            <NavLink
              to={"/Wishlist"}
              className={true ? "activeNavLink" : "pendingNavLink"}
            >
              <li>Wishlist</li>
            </NavLink>
            <NavLink
              to={"/Basket"}
              className={true ? "activeNavLink" : "pendingNavLink"}
            >
              <li>Basket</li>
            </NavLink>
            <NavLink
              to={"/"}
              className={true ? "activeNavLink" : "pendingNavLink"}
            >
              <li>Contact</li>
            </NavLink>
            <NavLink
              to={"/"}
              className={true ? "activeNavLink" : "pendingNavLink"}
            >
              <li>Blog</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
