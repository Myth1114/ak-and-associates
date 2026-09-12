import { useRef } from "react";

import LeadershipSection from "../../components/home/LeadershipSection";
import CTASection from "../../components/home/CTASection";
import SEO from "../../components/seo/SEO";

import useReveal from "../../hooks/useReveals";

import { seo } from "../../data/seo";

import "./About.css";

const About = () => {
  const pageRef = useRef(null);

  useReveal(pageRef);

  return (
    <div ref={pageRef}>
      <SEO {...seo.about} />

      {/* ========================================
          HERO
      ======================================== */}
      <section
        className="about-page__hero"
        aria-labelledby="about-page-title"
        data-reveal-group
        data-reveal-immediate
      >
        <div className="container-wide about-page__hero-inner">
          <div className="about-page__hero-content">
            <p className="about-page__eyebrow eyebrow" data-reveal>
              About AK and Associates
            </p>

            <h1
              id="about-page-title"
              className="about-page__title page-title"
              data-reveal
            >
              Practical financial support for businesses that need clarity and
              structure.
            </h1>
          </div>

          <p className="about-page__hero-copy page-description" data-reveal>
            AK and Associates is an accounting and business advisory firm based
            in Siddharthanagar-06, Bhairahawa, Nepal, supporting businesses with
            accounting, payroll management, tax advisory, financial guidance and
            practical business consulting.
          </p>
        </div>
      </section>

      {/* ========================================
          THE FIRM
      ======================================== */}
      <section
        className="about-page__intro"
        aria-labelledby="about-firm-title"
        data-reveal-group
      >
        <div className="container-wide about-page__intro-inner">
          <p className="about-page__eyebrow eyebrow" data-reveal>
            The Firm
          </p>

          <div className="about-page__intro-content">
            <h2
              id="about-firm-title"
              className="about-page__intro-title section-title"
              data-reveal
            >
              Built around the financial work that keeps businesses running.
            </h2>

            <div className="about-page__intro-copy">
              <p className="body-text--strong" data-reveal>
                Established in 2078 B.S., AK and Associates works with
                businesses that need dependable support across their day-to-day
                financial operations.
              </p>

              <p className="body-text" data-reveal>
                Our focus is practical: maintaining organized financial
                information, supporting payroll and tax-related work, helping
                businesses understand their financial position and providing
                guidance when important decisions need greater clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          FACTS
      ======================================== */}
      <section
        className="about-page__facts"
        aria-label="AK and Associates at a glance"
        data-reveal-group
      >
        <div className="container-wide about-page__facts-grid">
          <article className="about-page__fact" data-reveal>
            <span className="meta-text">01.</span>

            <div>
              <p className="meta-text">Established</p>
              <strong>2078 B.S.</strong>
            </div>
          </article>

          <article className="about-page__fact" data-reveal>
            <span className="meta-text">02.</span>

            <div>
              <p className="meta-text">Proprietor Experience</p>
              <strong>10+ years</strong>
            </div>
          </article>

          <article className="about-page__fact" data-reveal>
            <span className="meta-text">03.</span>

            <div>
              <p className="meta-text">Clients Supported</p>
              <strong>100+</strong>
            </div>
          </article>

          <article className="about-page__fact" data-reveal>
            <span className="meta-text">04.</span>

            <div>
              <p className="meta-text">Based In</p>
              <strong>Bhairahawa, Nepal</strong>
            </div>
          </article>
        </div>
      </section>

      {/* ========================================
          APPROACH
      ======================================== */}
      <section
        className="about-page__approach"
        aria-labelledby="about-approach-title"
        data-reveal-group
      >
        <div className="container-wide about-page__approach-inner">
          <div className="about-page__approach-heading">
            <p className="about-page__eyebrow eyebrow" data-reveal>
              Our Approach
            </p>

            <h2 id="about-approach-title" className="section-title" data-reveal>
              Keep the financial side of business clear and useful.
            </h2>
          </div>

          <div className="about-page__approach-list">
            <article className="about-page__approach-item" data-reveal>
              <span className="meta-text">01.</span>

              <div>
                <h3 className="subsection-title">Understand first</h3>

                <p className="section-description">
                  We begin by understanding the business, its financial
                  processes and where support can make a practical difference.
                </p>
              </div>
            </article>

            <article className="about-page__approach-item" data-reveal>
              <span className="meta-text">02.</span>

              <div>
                <h3 className="subsection-title">Bring structure</h3>

                <p className="section-description">
                  We help organize financial information and processes so they
                  become easier to manage, review and use in everyday business
                  decisions.
                </p>
              </div>
            </article>

            <article className="about-page__approach-item" data-reveal>
              <span className="meta-text">03.</span>

              <div>
                <h3 className="subsection-title">Stay practical</h3>

                <p className="section-description">
                  Our guidance stays focused on real business needs, clear
                  information and practical financial management without
                  unnecessary complexity.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <LeadershipSection />

      <CTASection />
    </div>
  );
};

export default About;
