import { Link } from "react-router-dom";

import { services } from "../../data/services";

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

              {services.map((service) => (
                <Link key={service.id} to={`/services#${service.id}`}>
                  {service.title}
                </Link>
              ))}
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
