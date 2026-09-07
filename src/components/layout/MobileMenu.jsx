import { useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import BusinessCardDownload from "../business-card/BusinessCardDownload";
import BrandMark from "../ui/BrandMark";

import "./MobileMenu.css";

const MobileMenu = ({ isOpen, onClose }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname]);

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
            <BrandMark className="brand-mark--compact" />
          </Link>

          <button
            type="button"
            className="mobile-menu__close"
            onClick={onClose}
            aria-label="Close navigation menu"
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
          <BusinessCardDownload
            variant="menu"
            label="Download Business Card"
            showIntro={false}
          />
          <p>A.K. and Associates</p>
          <p>Nepal</p>
        </div>
      </aside>
    </div>
  );
};

export default MobileMenu;
