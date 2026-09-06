import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="home-cta" data-reveal-group>
      <div className="container-wide home-cta__inner">
        <div>
          <p className="home-cta__eyebrow eyebrow" data-reveal>
            Start a Conversation
          </p>

          <h2 className="section-title" data-reveal>
            Need support with the financial side of your business?
          </h2>
        </div>

        <div className="home-cta__action">
          <p className="section-description" data-reveal>
            Tell us what you need help with, and we’ll point you in the right
            direction.
          </p>

          <Link to="/contact" className="home-cta__button" data-reveal>
            Talk to Us
            <MoveRight size={22} strokeWidth={1} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
