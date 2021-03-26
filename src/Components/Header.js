import React, { useState } from "react";
import { DiBower } from "react-icons/di";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click); //opposite of original state (true)
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header-con">
            <div className="logo-container">
              <Link to="/">
                Flying Duck <DiBower></DiBower>
              </Link>
            </div>
            <ul className={click ? "menu active" : "menu"}>
              <li className="menu-link" onClick={closeMobileMenu}>
                <Link to="/About">About</Link>
              </li>
              <li className="menu-link" onClick={closeMobileMenu}>
                <Link to="/Subscribe">Contact</Link>
              </li>
              <li
                className="menu-link"
                id="blog"
                onClick={closeMobileMenu}
              >
                <a href="#">Blog</a>
                <div class="dropdown-content">
                  <Link to="/Chaing mai">Chaing mai</Link>
                  <Link to="/Bangkok">Bangkok</Link>
                  <Link to="/Phuket">Phuket</Link>
                </div>
              </li>
            </ul>
            <div className="mobile-menu" onClick={handleClick}>
              {click ? <FiX /> : <FiMenu />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
