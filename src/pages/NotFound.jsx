import { Link } from "react-router-dom";
import { MoveLeft, MoveUpRight } from "lucide-react";

import "./NotFound.css";
import SEO from "../components/seo/SEO";
import { seo } from "../data/seo";

const NotFound = () => {
  return (
    <section className="not-found">
      <SEO {...seo.notFound} />
      <div className="container-wide not-found__inner">
        <div className="not-found__meta">
          <span className="eyebrow">Error 404</span>
          <span className="not-found__number" aria-hidden="true">
            404
          </span>
        </div>

        <div className="not-found__content">
          <h1 className="page-title">This page doesn’t seem to exist.</h1>

          <p className="page-description">
            The page may have moved, the address may be incorrect, or the link
            may no longer be available.
          </p>

          <div className="not-found__actions">
            <Link to="/" className="not-found__primary">
              <MoveLeft size={18} strokeWidth={1.2} />
              Back to Home
            </Link>

            <Link to="/contact" className="not-found__secondary">
              Contact Us
              <MoveUpRight size={17} strokeWidth={1.2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
