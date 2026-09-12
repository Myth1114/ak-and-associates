import { useRef } from "react";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

import { industryGroups } from "../../data/industries";
import { seo } from "../../data/seo";

import useReveal from "../../hooks/useReveals";

import SEO from "../../components/seo/SEO";

import "./Industries.css";

const Industries = () => {
  const pageRef = useRef(null);

  useReveal(pageRef);

  return (
    <div ref={pageRef}>
      <SEO {...seo.industries} />

      {/* ========================================
          HERO
      ======================================== */}

      <section
        className="industries-page__hero"
        data-reveal-group
        data-reveal-immediate
      >
        <div className="container-wide industries-page__hero-inner">
          <div>
            <p className="industries-page__eyebrow eyebrow" data-reveal>
              Industries We Support
            </p>

            <h1 className="industries-page__title page-title" data-reveal>
              Financial support shaped around the realities of different
              industries.
            </h1>
          </div>

          <p
            className="industries-page__hero-copy page-description"
            data-reveal
          >
            AK and Associates supports businesses across infrastructure,
            production, trade, technology, services, hospitality and other
            sectors with accounting, payroll, tax and financial guidance shaped
            around how each business operates.
          </p>
        </div>
      </section>

      {/* ========================================
          INDUSTRY GROUPS
      ======================================== */}

      <section className="industries-page__groups">
        <div className="container-wide">
          {industryGroups.map((group) => (
            <article
              key={group.id}
              id={group.id}
              className="industries-page__group"
              data-reveal-group
            >
              <div className="industries-page__group-meta" data-reveal>
                <span className="meta-text">{group.number}.</span>
                <p className="meta-text">Industry Group</p>
              </div>

              <div className="industries-page__group-content" data-reveal>
                <h2 className="section-title">{group.title}</h2>

                <p className="section-description">{group.description}</p>
              </div>

              <div className="industries-page__industry-list" data-reveal>
                {group.industries.map((industry) => (
                  <Link
                    key={industry.id}
                    id={industry.id}
                    to={`/industries/${industry.slug}`}
                    className="industries-page__industry"
                    aria-label={`Explore ${industry.title}`}
                  >
                    <span className="meta-text">{industry.number}.</span>

                    <div className="industries-page__industry-main">
                      <h3 className="card-title">{industry.title}</h3>

                      <p className="industries-page__industry-description">
                        {industry.shortDescription}
                      </p>
                    </div>

                    <MoveRight
                      className="industries-page__industry-arrow"
                      size={20}
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================
          HOW WE SUPPORT
      ======================================== */}

      <section className="industries-page__support" data-reveal-group>
        <div className="container-wide industries-page__support-inner">
          <p className="industries-page__eyebrow eyebrow" data-reveal>
            How We Support
          </p>

          <div>
            <h2 className="section-title" data-reveal>
              Different businesses. Different challenges. The financial
              fundamentals still need to stay clear.
            </h2>

            <p
              className="industries-page__support-copy section-description"
              data-reveal
            >
              Our role is to help businesses maintain organized accounting,
              payroll and financial processes while providing practical guidance
              around day-to-day and longer-term decisions.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          CTA
      ======================================== */}

      <section className="industries-page__cta" data-reveal-group>
        <div className="container-wide industries-page__cta-inner">
          <div>
            <p className="industries-page__eyebrow eyebrow" data-reveal>
              Your Industry
            </p>

            <h2 className="section-title" data-reveal>
              Need financial support for your business?
            </h2>
          </div>

          <div className="industries-page__cta-action">
            <p className="section-description" data-reveal>
              Tell us about your business and the kind of financial support
              you’re looking for.
            </p>

            <Link
              to="/contact"
              className="industries-page__cta-link"
              data-reveal
            >
              <span>Talk to Us</span>

              <MoveRight size={22} strokeWidth={1} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
