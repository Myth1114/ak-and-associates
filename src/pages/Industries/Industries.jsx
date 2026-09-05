import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

import { industryGroups } from "../../data/industries";

import "./Industries.css";

const Industries = () => {
  return (
    <>
      <section className="industries-page__hero">
        <div className="container-wide industries-page__hero-inner">
          <div>
            <p className="industries-page__eyebrow eyebrow">
              Industries We Support
            </p>

            <h1 className="industries-page__title page-title">
              Financial support shaped around the realities of different
              industries.
            </h1>
          </div>

          <p className="industries-page__hero-copy page-description">
            AK and Associates works with businesses across infrastructure,
            manufacturing, trade and agribusiness, providing accounting and
            advisory support that reflects how each sector operates.
          </p>
        </div>
      </section>

      <section className="industries-page__groups">
        <div className="container-wide">
          {industryGroups.map((group) => (
            <article
              key={group.id}
              id={group.id}
              className="industries-page__group"
            >
              <div className="industries-page__group-meta">
                <span className="meta-text">{group.number}.</span>
                <p className="meta-text">Industry Group</p>
              </div>

              <div className="industries-page__group-content">
                <h2 className="section-title">{group.title}</h2>

                <p className="section-description">
                  Financial and business support tailored to the operational
                  needs commonly found across this sector.
                </p>
              </div>

              <div className="industries-page__industry-list">
                {group.industries.map((industry) => (
                  <div
                    key={industry.id}
                    id={industry.id}
                    className="industries-page__industry"
                  >
                    <span className="meta-text">{industry.number}.</span>

                    <h3 className="card-title">{industry.title}</h3>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="industries-page__support">
        <div className="container-wide industries-page__support-inner">
          <p className="industries-page__eyebrow eyebrow">How We Support</p>

          <div>
            <h2 className="section-title">
              Different businesses. Different challenges. The financial
              fundamentals still need to stay clear.
            </h2>

            <p className="industries-page__support-copy section-description">
              Our role is to help businesses maintain organized accounting,
              payroll and financial processes while providing practical guidance
              around day-to-day and longer-term decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="industries-page__cta">
        <div className="container-wide industries-page__cta-inner">
          <div>
            <p className="industries-page__eyebrow eyebrow">Your Industry</p>

            <h2 className="section-title">
              Need financial support for your business?
            </h2>
          </div>

          <div className="industries-page__cta-action">
            <p className="section-description">
              Tell us about your business and the kind of financial support
              you’re looking for.
            </p>

            <Link to="/contact" className="industries-page__cta-link">
              Talk to Us
              <MoveRight size={22} strokeWidth={1} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
