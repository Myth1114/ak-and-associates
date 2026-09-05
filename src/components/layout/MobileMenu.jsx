import { NavLink } from "react-router-dom";

import "./MobileMenu.css";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      id="mobile-menu"
      className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}
      aria-hidden={!isOpen}
    >
      <div className="mobile-menu__top">
        <NavLink
          to="/"
          className="mobile-menu__brand"
          onClick={onClose}
          aria-label="AK and Associates home"
        >
          ak<span>.</span>
        </NavLink>

        <button
          type="button"
          className="mobile-menu__close"
          onClick={onClose}
          aria-label="Close menu"
        >
          Close
        </button>
      </div>

      <nav className="mobile-menu__nav" aria-label="Mobile navigation">
        <NavLink to="/services" onClick={onClose}>
          <span>01</span>
          Services
        </NavLink>

        <NavLink to="/industries" onClick={onClose}>
          <span>02</span>
          Industries
        </NavLink>

        <NavLink to="/about" onClick={onClose}>
          <span>03</span>
          About
        </NavLink>

        <NavLink to="/contact" onClick={onClose}>
          <span>04</span>
          Contact
        </NavLink>
      </nav>

      <div className="mobile-menu__footer">
        <NavLink to="/contact" onClick={onClose}>
          Talk to Us ↗
        </NavLink>

        <p>AK and Associates</p>
        <p>Nepal</p>
      </div>
    </div>
  );
};

export default MobileMenu;
