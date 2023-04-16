import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { VscAccount } from "react-icons/vsc";
import { VscHeart } from "react-icons/vsc";
import SearchModal from "./SearchModal";
import ShoppingListModal from "./ShoppingListModal";
import { ThemeProvider } from "./ThemeContext";

import "../css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Update isMobile state based on viewport width
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Call handleResize initially to set isMobile state
    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on unmount
    };
  }, []);

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
          <div className="menu-wrap">
            <input
              type="checkbox"
              className="toggler"
              checked={menuOpen}
              onChange={handleToggleMenu}
            />
            <div className="hamburger">
              <div></div>
            </div>
            <div className="menu">
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
                      <Link to="/My-recipes" onClick={handleCloseMenu}>
                        Din kokbok
                      </Link>
                    </li>
                    <li>
                      <Link to="/Login" onClick={handleCloseMenu}>
                        Logga in
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-big-box">
            <div className="nav-text">
              <Link to="/">Kokboken.se</Link>
            </div>
            <div>
              <button onClick={ThemeProvider.toggleTheme}> Themes</button>
            </div>
            <div className="nav-icon-box">
              {isMobile ? (
                <div>
                  <SearchModal />
                </div>
              ) : (
                <div>
                  {/*OBS Sökfunktionen funkar endast i modalen änsålänge,i mobilformat */}
                  <input
                    className="search-field"
                    type="text"
                    placeholder="Sök recept"
                  />
                </div>
              )}
              <div>
                <ShoppingListModal />
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
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
