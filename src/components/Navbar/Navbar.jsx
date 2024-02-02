import React from "react";
import "../Navbar/Navbar.css";
import ham from "../../assets/ham.png";
import facebook from "../../assets/facebook.png";
import logo from "../../assets/logo.png";
import insta from "../../assets/insta.png";
import icon3 from "../../assets/icon3.png";
import search from "../../assets/search.png";

const Navbar = () => {
  return (
    <nav className="container">
        <div className="nav_left">
          <img src={ham} alt="ham" className="ham-logo" />
          <img src={logo} alt="nav_logo" className="nav_logo" />
        </div>
        <div className="nav-right">
          <div className="nav_icons">
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
            <img src={icon3} alt="" />
          </div>
          <img src={search} alt="" />
        </div>
    </nav>
  );
};

export default Navbar;
