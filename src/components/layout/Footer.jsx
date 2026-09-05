import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container-wide site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand-block">
            <Link
              to="/"
              className="site-footer__brand"
              aria-label="AK and Associates home"
            >
              ak<span>.</span>
            </Link>

            <p className="site-footer__description">
              Accounting, payroll, tax and business advisory support for
              businesses in Nepal.
            </p>
          </div>

          <div className="site-footer__links">
            <div className="site-footer__column">
              <p className="site-footer__label">Services</p>

              <Link to="/services">Accounting</Link>
              <Link to="/services">Payroll Management</Link>
              <Link to="/services">Tax Advisory</Link>
              <Link to="/services">Financial Advisory</Link>
              <Link to="/services">Business Consulting</Link>
              <Link to="/services">Outsourcing</Link>
            </div>

            <div className="site-footer__column">
              <p className="site-footer__label">Company</p>

              <Link to="/about">About</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} AK and Associates</p>

          <div className="site-footer__legal">
            <Link to="/contact">Privacy</Link>
            <Link to="/contact">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
