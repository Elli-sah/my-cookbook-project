import { Link } from "react-router-dom";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
// import { RxHamburgerMenu } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";
import { VscHeart } from "react-icons/vsc";

import "../css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="header">
          <div class="menu-wrap">
            <input
              type="checkbox"
              class="toggler"
              checked={menuOpen}
              onChange={handleToggleMenu}
            />
            <div class="hamburger">
              <div></div>
            </div>
            <div class="menu">
              <div>
                <div>
                  <ul className="nav">
                    <li>
                      <Link to="/" onClick={handleCloseMenu}>
                        Hem
                      </Link>
                    </li>
                    <li>
                      <Link to="/Recipes" onClick={handleCloseMenu}>
                        Recept
                      </Link>
                    </li>
                    <li>
                      <Link to="/Shoppinglist" onClick={handleCloseMenu}>
                        shoppinglistan
                      </Link>
                    </li>
                    <li>
                      <Link to="/My-recipes" onClick={handleCloseMenu}>
                        Egna recept
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-text">
            <Link to="/">Kokboken.se</Link>
          </div>
          <div>
            <CiSearch className="nav-icons" />
          </div>
          <div>
            <Link to="/Favorites">
              <VscHeart className="nav-icons" />
            </Link>
          </div>
          <div className="login-div">
            <Link to="/Login">
              <VscAccount className="nav-icons" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;