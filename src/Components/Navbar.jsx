import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <img src="/mylogo.png" alt="mylogo" className="mylogo"></img>
      <ul className="navbar_links">
        <li className="link">
          <Link to="herosection" smooth={true} spy={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="link">
          <Link to="about" smooth={true} spy={true} duration={500}>
            About
          </Link>
        </li>
        <li className="link">
          <Link to="services" smooth={true} spy={true} duration={500}>
            Services
          </Link>
        </li>
        <li className="link">
          <Link to="portfolio" smooth={true} spy={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className="link">
          <Link to="contact" smooth={true} spy={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
