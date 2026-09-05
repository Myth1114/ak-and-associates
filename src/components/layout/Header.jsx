import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import MobileMenu from "./MobileMenu";

import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isMenuOpen);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="container-wide site-header__inner">
          <Link
            to="/"
            className="site-header__brand"
            aria-label="AK and Associates home"
          >
            <span className="site-header__brand-text">ak</span>
            <span className="site-header__brand-dot">.</span>
          </Link>

          <nav className="site-header__nav" aria-label="Primary navigation">
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/industries">Industries</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <Link to="/contact" className="site-header__cta">
            Talk to Us
            <span aria-hidden="true">↗</span>
          </Link>

          <button
            className="site-header__menu-button"
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
