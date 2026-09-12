import { Link } from "react-router-dom";
import { MapPin, MoveRight } from "lucide-react";

import "./CTASection.css";

const CTASection = () => {
  return (
    <section
      className="home-cta"
      aria-labelledby="home-cta-title"
      data-reveal-group
    >
      <div className="container-wide home-cta__inner">
        <div>
          <p className="home-cta__eyebrow eyebrow" data-reveal>
            Start a Conversation
          </p>

          <h2 id="home-cta-title" className="section-title" data-reveal>
            Need support with the financial side of your business?
          </h2>
        </div>

        <div className="home-cta__action">
          <p className="section-description" data-reveal>
            Tell us about your business and the financial or operational
            challenge you are facing. We’ll help identify where our support can
            be useful.
          </p>

          <div className="home-cta__location" data-reveal>
            <MapPin size={16} strokeWidth={1.4} aria-hidden="true" />

            <p>
              Bhairahawa, Nepal
              <span aria-hidden="true">·</span>
              Supporting businesses across Nepal
            </p>
          </div>

          <Link to="/contact" className="home-cta__button" data-reveal>
            <span>Talk to Us</span>

            <MoveRight size={22} strokeWidth={1} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
