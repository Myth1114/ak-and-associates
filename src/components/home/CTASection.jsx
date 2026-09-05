import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="home-cta">
      <div className="container-wide home-cta__inner">
        <div>
          <p className="home-cta__eyebrow eyebrow">Start a Conversation</p>

          <h2 className="section-title">
            Need support with the financial side of your business?
          </h2>
        </div>

        <div className="home-cta__action">
          <p className="section-description">
            Tell us what you need help with, and we’ll point you in the right
            direction.
          </p>

          <Link to="/contact" className="home-cta__button">
            Talk to Us
            <MoveRight size={22} strokeWidth={1} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
