import { Link } from "react-router-dom";
import ajayKurmi from "../../assets/team/ajay-kurmi.png";
import shivKumar from "../../assets/team/shiv-kumar.png";

import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="home-hero">
        <div className="container-wide home-hero__inner">
          <div className="home-hero__content">
            <p className="home-hero__eyebrow">Accounting & Business Advisory</p>

            <h1 className="home-hero__title">
              Accounting that keeps your business moving
              <span>.</span>
            </h1>

            <p className="home-hero__description">
              AK and Associates supports businesses with accounting, payroll,
              tax advisory, financial guidance and practical business
              consulting.
            </p>

            <div className="home-hero__actions">
              <Link to="/services" className="home-hero__primary">
                Explore Services
                <span aria-hidden="true">→</span>
              </Link>

              <Link to="/contact" className="home-hero__secondary">
                Talk to Us
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="home-hero__services" aria-label="Our services">
            <div className="home-hero__service">
              <span>01.</span>
              <p>Accounting</p>
            </div>

            <div className="home-hero__service">
              <span>02.</span>
              <p>Payroll Management</p>
            </div>

            <div className="home-hero__service">
              <span>03.</span>
              <p>Tax Advisory</p>
            </div>

            <div className="home-hero__service">
              <span>04.</span>
              <p>Financial Advisory</p>
            </div>

            <div className="home-hero__service">
              <span>05.</span>
              <p>Business Consulting</p>
            </div>

            <div className="home-hero__service">
              <span>06.</span>
              <p>Outsourcing</p>
            </div>
          </div>
        </div>

        <div className="container-wide home-hero__bottom">
          <p>
            Established <strong>2078 B.S.</strong>
          </p>

          <span className="home-hero__line" />

          <p>Supporting businesses in Nepal</p>
        </div>
      </section>
      <section className="home-services">
        <div className="container-wide">
          <div className="home-services__header">
            <p className="home-services__eyebrow">What We Do</p>

            <h2>
              Financial support built around
              <span> real business needs.</span>
            </h2>

            <p className="home-services__intro">
              From day-to-day accounting and payroll to tax and business
              advisory, AK and Associates supports the financial work that keeps
              businesses organized and moving forward.
            </p>
          </div>

          <div className="home-services__list">
            <a href="/services#accounting" className="home-services__row">
              <span className="home-services__number">01.</span>
              <span className="home-services__name">Accounting</span>
              <span className="home-services__arrow">↗</span>
            </a>

            <a href="/services#payroll" className="home-services__row">
              <span className="home-services__number">02.</span>
              <span className="home-services__name">Payroll Management</span>
              <span className="home-services__arrow">↗</span>
            </a>

            <a href="/services#tax" className="home-services__row">
              <span className="home-services__number">03.</span>
              <span className="home-services__name">Tax Advisory</span>
              <span className="home-services__arrow">↗</span>
            </a>

            <a
              href="/services#financial-advisory"
              className="home-services__row"
            >
              <span className="home-services__number">04.</span>
              <span className="home-services__name">Financial Advisory</span>
              <span className="home-services__arrow">↗</span>
            </a>

            <a
              href="/services#business-consulting"
              className="home-services__row"
            >
              <span className="home-services__number">05.</span>
              <span className="home-services__name">Business Consulting</span>
              <span className="home-services__arrow">↗</span>
            </a>

            <a href="/services#outsourcing" className="home-services__row">
              <span className="home-services__number">06.</span>
              <span className="home-services__name">Outsourcing Services</span>
              <span className="home-services__arrow">↗</span>
            </a>
          </div>
        </div>
      </section>
      <section className="home-industries">
        <div className="container-wide">
          <div className="home-industries__header">
            <p className="home-industries__eyebrow">Industries</p>

            <h2>
              Experience across the industries that
              <span> keep business moving.</span>
            </h2>

            <p className="home-industries__intro">
              We support businesses across infrastructure, manufacturing, trade
              and agriculture with accounting and financial management tailored
              to their day-to-day operations.
            </p>
          </div>

          <div className="home-industries__grid">
            <article className="home-industries__group">
              <div className="home-industries__group-top">
                <span className="home-industries__number">01.</span>
                <p>Sector</p>
              </div>

              <h3>Infrastructure</h3>

              <div className="home-industries__items">
                <div>
                  <span>01</span>
                  <p>Construction</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Energy</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Mineral</p>
                </div>
              </div>
            </article>

            <article className="home-industries__group">
              <div className="home-industries__group-top">
                <span className="home-industries__number">02.</span>
                <p>Sector</p>
              </div>

              <h3>Trade & Commerce</h3>

              <div className="home-industries__items">
                <div>
                  <span>01</span>
                  <p>Manufacturing</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Trade & Commerce</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Agribusiness</p>
                </div>
              </div>
            </article>
          </div>

          <div className="home-industries__footer">
            <p>
              Every industry has different financial requirements. Our approach
              starts with understanding how your business operates.
            </p>

            <Link to="/industries">
              Explore Industries
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="home-process">
        <div className="container-wide home-process__inner">
          <div className="home-process__intro">
            <p className="home-process__eyebrow">How We Help</p>

            <h2>
              Practical financial support,
              <span> without unnecessary complexity.</span>
            </h2>

            <p>
              We work closely with businesses to understand their financial
              operations, organize the essentials and provide clear support
              where it matters most.
            </p>

            <Link to="/about" className="home-process__link">
              About AK and Associates
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="home-process__steps">
            <article className="home-process__step">
              <div className="home-process__step-top">
                <span>01.</span>
                <p>Understand</p>
              </div>

              <h3>Understand the business</h3>

              <p>
                We begin by understanding how your business operates, where the
                financial work happens and what support is actually needed.
              </p>
            </article>

            <article className="home-process__step">
              <div className="home-process__step-top">
                <span>02.</span>
                <p>Organize</p>
              </div>

              <h3>Bring structure to the numbers</h3>

              <p>
                Accounting, payroll and related financial processes are
                organized so information stays clear, timely and easier to
                manage.
              </p>
            </article>

            <article className="home-process__step">
              <div className="home-process__step-top">
                <span>03.</span>
                <p>Support</p>
              </div>

              <h3>Stay involved as the business moves</h3>

              <p>
                We continue supporting day-to-day financial needs while
                providing practical guidance for important business decisions.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="home-about">
        <div className="container-wide home-about__inner">
          <div className="home-about__left">
            <p className="home-about__eyebrow">About AK and Associates</p>

            <h2>
              A practical partner for the financial side of your business.
            </h2>
          </div>

          <div className="home-about__right">
            <p className="home-about__lead">
              AK and Associates helps businesses manage accounting, payroll, tax
              matters and day-to-day financial operations with greater clarity
              and structure.
            </p>

            <p>
              Established in 2078 B.S., the firm works with businesses across
              infrastructure, manufacturing, trade and agribusiness, providing
              practical support around the financial work that keeps operations
              running.
            </p>

            <div className="home-about__facts">
              <div>
                <span>Established</span>
                <strong>2078 B.S.</strong>
              </div>

              <div>
                <span>Focus</span>
                <strong>Accounting & Advisory</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>Nepal</strong>
              </div>
            </div>

            <Link to="/about" className="home-about__link">
              Learn more about the firm
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="home-leadership">
        <div className="container-wide">
          <div className="home-leadership__header">
            <p className="home-leadership__eyebrow">Leadership</p>

            <h2>
              The people behind
              <span> AK and Associates.</span>
            </h2>

            <p>
              Leadership focused on practical financial management, clear
              communication and long-term business support.
            </p>
          </div>

          <div className="home-leadership__grid">
            <article className="home-leadership__person">
              <div className="home-leadership__image">
                <img
                  src={ajayKurmi}
                  alt="Ajay Kurmi, Consultant of AK and Associates"
                />
              </div>

              <div className="home-leadership__info">
                <div>
                  <span>01.</span>
                  <p>Consultant</p>
                </div>

                <h3>Ajay Kurmi</h3>
              </div>
            </article>

            <article className="home-leadership__person">
              <div className="home-leadership__image">
                <img
                  src={shivKumar}
                  alt="Shiv Kumar, Manager at AK and Associates"
                />
              </div>

              <div className="home-leadership__info">
                <div>
                  <span>02.</span>
                  <p>Manager</p>
                </div>

                <h3>Shiv Kumar</h3>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="home-cta">
        <div className="container-wide home-cta__inner">
          <div>
            <p className="home-cta__eyebrow">Start a Conversation</p>

            <h2>Need support with the financial side of your business?</h2>
          </div>

          <div className="home-cta__action">
            <p>
              Tell us what you need help with, and we’ll point you in the right
              direction.
            </p>

            <Link to="/contact" className="home-cta__button">
              Talk to Us
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
