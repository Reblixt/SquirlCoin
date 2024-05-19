import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../content/img/sqrrrl-logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div id="menu-icon" onClick={toggleMenu} className={isOpen ? "open" : ""}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to={"/"}>
            <img
              src={logo}
              alt="Logo"
              className="logo"
              onClick={() => setIsOpen(false)}
            />
          </NavLink>
        </li>
        <li><NavLink to={"/"} onClick={toggleMenu}>Squirl Coin</NavLink></li>
        <li><NavLink to={"/transact"} onClick={toggleMenu}>Nut trading</NavLink></li>
        <li><NavLink to={"/blockchain"} onClick={toggleMenu}>Blockchain</NavLink></li>
        <li><NavLink to={"/block"} onClick={toggleMenu}>Block</NavLink></li>
      </ul>
    </nav>
  )
}