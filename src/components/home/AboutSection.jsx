import { Link } from "react-router-dom";

import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="home-about" data-reveal-group>
      <div className="container-wide home-about__inner">
        <div className="home-about__left">
          <p className="home-about__eyebrow eyebrow" data-reveal>
            About AK and Associates
          </p>

          <h2 className="section-title" data-reveal>
            A practical partner for the financial side of your business.
          </h2>
        </div>

        <div className="home-about__right">
          <p className="home-about__lead body-text--strong" data-reveal>
            AK and Associates helps businesses manage accounting, payroll, tax
            matters and day-to-day financial operations with greater clarity and
            structure.
          </p>

          <p className="home-about__description body-text" data-reveal>
            Established in 2078 B.S., the firm works with businesses across
            infrastructure, manufacturing, trade and agribusiness, providing
            practical support around the financial work that keeps operations
            running.
          </p>

          <div className="home-about__facts" data-reveal>
            <div>
              <span className="meta-text">Established</span>
              <strong>2078 B.S.</strong>
            </div>

            <div>
              <span className="meta-text">Focus</span>
              <strong>Accounting & Advisory</strong>
            </div>

            <div>
              <span className="meta-text">Location</span>
              <strong>Nepal</strong>
            </div>
          </div>

          <Link to="/about" className="home-about__link" data-reveal>
            Learn more about the firm
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
