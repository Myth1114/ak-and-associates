import { Link } from "react-router-dom";

import { industryGroups } from "../../data/industries";

import "./IndustriesSection.css";

const IndustriesSection = () => {
  return (
    <section className="home-industries" data-reveal-group>
      <div className="container-wide">
        <div className="home-industries__header">
          <p className="eyebrow" data-reveal>
            Industries
          </p>

          <h2 className="section-title" data-reveal>
            Experience across the industries that
            <span> keep business moving.</span>
          </h2>

          <p className="home-industries__intro section-description" data-reveal>
            We support businesses across infrastructure, production, trade,
            technology, services and hospitality with accounting and financial
            management shaped around their day-to-day operations.
          </p>
        </div>

        <div className="home-industries__grid">
          {industryGroups.map((group) => {
            const isSingleIndustry = group.industries.length === 1;

            return (
              <article
                key={group.id}
                className={`home-industries__group ${
                  isSingleIndustry ? "home-industries__group--single" : ""
                }`}
                data-reveal
              >
                <div className="home-industries__group-top">
                  <span className="meta-text">{group.number}.</span>

                  <p className="meta-text">Sector</p>
                </div>

                <h3 className="subsection-title">{group.title}</h3>

                <div className="home-industries__items">
                  {group.industries.map((industry) => (
                    <div key={industry.id}>
                      <span className="meta-text">{industry.number}.</span>

                      <p className="body-text--strong">{industry.title}</p>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="home-industries__footer" data-reveal>
          <p className="section-description">
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
  );
};

export default IndustriesSection;
