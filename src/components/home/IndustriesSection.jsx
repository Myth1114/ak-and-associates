import { Link } from "react-router-dom";

import { industryGroups } from "../../data/industries";

import "./IndustriesSection.css";

const IndustriesSection = () => {
  return (
    <section className="home-industries">
      <div className="container-wide">
        <div className="home-industries__header">
          <p className="eyebrow">Industries</p>

          <h2 className="section-title">
            Experience across the industries that
            <span> keep business moving.</span>
          </h2>

          <p className="home-industries__intro section-description">
            We support businesses across infrastructure, manufacturing, trade
            and agriculture with accounting and financial management tailored to
            their day-to-day operations.
          </p>
        </div>

        <div className="home-industries__grid">
          {industryGroups.map((group) => (
            <article key={group.id} className="home-industries__group">
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
          ))}
        </div>

        <div className="home-industries__footer">
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
