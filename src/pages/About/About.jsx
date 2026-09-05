import LeadershipSection from "../../components/home/LeadershipSection";
import CTASection from "../../components/home/CTASection";

import "./About.css";

const About = () => {
  return (
    <>
      <section className="about-page__hero">
        <div className="container-wide about-page__hero-inner">
          <div className="about-page__hero-content">
            <p className="about-page__eyebrow eyebrow">
              About AK and Associates
            </p>

            <h1 className="about-page__title page-title">
              Practical financial support for businesses that need clarity and
              structure.
            </h1>
          </div>

          <p className="about-page__hero-copy page-description">
            AK and Associates is an accounting and business advisory firm in
            Nepal, supporting businesses with accounting, payroll, tax matters,
            financial guidance and practical consulting.
          </p>
        </div>
      </section>

      <section className="about-page__intro">
        <div className="container-wide about-page__intro-inner">
          <p className="about-page__eyebrow eyebrow">The Firm</p>

          <div className="about-page__intro-content">
            <h2 className="about-page__intro-title section-title">
              Built around the financial work that keeps businesses running.
            </h2>

            <div className="about-page__intro-copy">
              <p className="about-page__lead body-text--strong">
                Established in 2078 B.S., AK and Associates works with
                businesses that need dependable support across their day-to-day
                financial operations.
              </p>

              <p className="body-text">
                Our focus is practical: keeping financial records organized,
                supporting payroll and tax-related work, helping businesses
                understand their numbers and providing guidance when financial
                decisions need greater clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-page__facts">
        <div className="container-wide about-page__facts-grid">
          <article className="about-page__fact">
            <span className="meta-text">01.</span>

            <div>
              <p className="meta-text">Established</p>
              <strong>2078 B.S.</strong>
            </div>
          </article>

          <article className="about-page__fact">
            <span className="meta-text">02.</span>

            <div>
              <p className="meta-text">Primary Focus</p>
              <strong>Accounting & Advisory</strong>
            </div>
          </article>

          <article className="about-page__fact">
            <span className="meta-text">03.</span>

            <div>
              <p className="meta-text">Business Support</p>
              <strong>Financial Operations</strong>
            </div>
          </article>

          <article className="about-page__fact">
            <span className="meta-text">04.</span>

            <div>
              <p className="meta-text">Based In</p>
              <strong>Nepal</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="about-page__approach">
        <div className="container-wide about-page__approach-inner">
          <div className="about-page__approach-heading">
            <p className="about-page__eyebrow eyebrow">Our Approach</p>

            <h2 className="section-title">
              Keep the financial side of business clear and useful.
            </h2>
          </div>

          <div className="about-page__approach-list">
            <article className="about-page__approach-item">
              <span className="meta-text">01.</span>

              <div>
                <h3 className="subsection-title">Understand first</h3>

                <p className="section-description">
                  We start by understanding the business, its financial
                  processes and where support is actually needed.
                </p>
              </div>
            </article>

            <article className="about-page__approach-item">
              <span className="meta-text">02.</span>

              <div>
                <h3 className="subsection-title">Bring structure</h3>

                <p className="section-description">
                  We help organize financial information and processes so they
                  are easier to manage and understand.
                </p>
              </div>
            </article>

            <article className="about-page__approach-item">
              <span className="meta-text">03.</span>

              <div>
                <h3 className="subsection-title">Stay practical</h3>

                <p className="section-description">
                  Our guidance focuses on real business needs without adding
                  unnecessary complexity.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <LeadershipSection />
      <CTASection />
    </>
  );
};

export default About;
