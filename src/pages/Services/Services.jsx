import { useRef } from "react";
import { Link } from "react-router-dom";

import { MoveRight, MoveUpRight } from "lucide-react";

import { services } from "../../data/services";

import useReveal from "../../hooks/useReveals";

import "./Services.css";
import SEO from "../../components/seo/SEO";
import { seo } from "../../data/seo";

const Services = () => {
  const pageRef = useRef(null);

  useReveal(pageRef);

  return (
    <div ref={pageRef}>
      <SEO {...seo.services} />
      <section
        className="services-page__hero"
        data-reveal-group
        data-reveal-immediate
      >
        <div className="container-wide services-page__hero-inner">
          <div>
            <p className="services-page__eyebrow eyebrow" data-reveal>
              Our Services
            </p>

            <h1 className="services-page__title page-title" data-reveal>
              Financial support built around how your business actually works.
            </h1>
          </div>

          <p className="services-page__hero-copy page-description" data-reveal>
            From accounting and payroll to tax guidance and business consulting,
            AK and Associates provides practical financial support designed to
            keep businesses organized, informed and moving forward.
          </p>
        </div>
      </section>

      <section className="services-page__list" data-reveal-group>
        <div className="container-wide">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="services-page__service"
              data-reveal
            >
              <div className="services-page__service-meta">
                <span className="meta-text">{service.number}.</span>

                <p className="meta-text">Service</p>
              </div>

              <div className="services-page__service-content">
                <h2 className="section-title">{service.title}</h2>

                <p className="section-description">{service.description}</p>
              </div>

              <div className="services-page__service-points">
                {service.points.map((point) => (
                  <div key={point} className="services-page__point">
                    <MoveUpRight size={16} strokeWidth={1} aria-hidden="true" />

                    <p className="body-text">{point}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-page__cta" data-reveal-group>
        <div className="container-wide services-page__cta-inner">
          <div>
            <p className="services-page__eyebrow eyebrow" data-reveal>
              Need Help Choosing?
            </p>

            <h2 className="section-title" data-reveal>
              Not sure which service fits your business?
            </h2>
          </div>

          <div className="services-page__cta-action">
            <p className="section-description" data-reveal>
              Tell us what you need support with and we can help identify the
              right starting point.
            </p>

            <Link to="/contact" className="services-page__cta-link" data-reveal>
              Talk to Us
              <MoveRight size={22} strokeWidth={1} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
