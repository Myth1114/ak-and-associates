import { NavLink, Link } from "react-router-dom";

import "./MobileMenu.css";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}
      aria-hidden={!isOpen}
    >
      <button
        className="mobile-menu__backdrop"
        type="button"
        aria-label="Close mobile menu"
        onClick={onClose}
      />

      <aside
        id="mobile-menu"
        className="mobile-menu__panel"
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu__top">
          <Link
            to="/"
            className="mobile-menu__brand"
            onClick={onClose}
            aria-label="AK and Associates home"
          >
            ak<span>.</span>
          </Link>

          <button
            type="button"
            className="mobile-menu__close"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <nav className="mobile-menu__nav">
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
          <Link to="/contact" onClick={onClose}>
            Talk to Us ↗
          </Link>

          <p>AK and Associates</p>
          <p>Nepal</p>
        </div>
      </aside>
    </div>
  );
};

export default MobileMenu;
