import { Link } from "react-router-dom";

import "./ProcessSection.css";

const ProcessSection = () => {
  return (
    <section className="home-process">
      <div className="container-wide home-process__inner">
        <div className="home-process__intro">
          <p className="home-process__eyebrow eyebrow">How We Help</p>

          <h2 className="section-title">
            Practical financial support,
            <span> without unnecessary complexity.</span>
          </h2>

          <p className="home-process__description section-description">
            We work closely with businesses to understand their financial
            operations, organize the essentials and provide clear support where
            it matters most.
          </p>

          <Link to="/about" className="home-process__link">
            About AK and Associates
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="home-process__steps">
          <article className="home-process__step">
            <div className="home-process__step-top">
              <span className="meta-text">01.</span>
              <p className="meta-text">Understand</p>
            </div>

            <h3 className="subsection-title">Understand the business</h3>

            <p className="section-description">
              We begin by understanding how your business operates, where the
              financial work happens and what support is actually needed.
            </p>
          </article>

          <article className="home-process__step">
            <div className="home-process__step-top">
              <span className="meta-text">02.</span>
              <p className="meta-text">Organize</p>
            </div>

            <h3 className="subsection-title">Bring structure to the numbers</h3>

            <p className="section-description">
              Accounting, payroll and related financial processes are organized
              so information stays clear, timely and easier to manage.
            </p>
          </article>

          <article className="home-process__step">
            <div className="home-process__step-top">
              <span className="meta-text">03.</span>
              <p className="meta-text">Support</p>
            </div>

            <h3 className="subsection-title">
              Stay involved as the business moves
            </h3>

            <p className="section-description">
              We continue supporting day-to-day financial needs while providing
              practical guidance for important business decisions.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
