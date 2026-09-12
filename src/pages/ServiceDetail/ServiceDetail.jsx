import { useRef } from "react";

import { Link, useParams } from "react-router-dom";

import { ArrowLeft, MoveRight, MoveUpRight } from "lucide-react";

import SEO from "../../components/seo/SEO";

import useReveal from "../../hooks/useReveals";

import { getServiceBySlug, services } from "../../data/services";

import NotFound from "../NotFound";

import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { slug } = useParams();

  const pageRef = useRef(null);

  useReveal(pageRef);

  const service = getServiceBySlug(slug);

  if (!service) {
    return <NotFound />;
  }

  const otherServices = services.filter((item) => item.id !== service.id);

  return (
    <div ref={pageRef}>
      <SEO
        title={service.detail.seoTitle}
        description={service.detail.seoDescription}
        path={`/services/${service.slug}`}
      />

      {/* ========================================
          HERO
      ======================================== */}
      <section
        className="service-detail__hero"
        aria-labelledby="service-detail-title"
        data-reveal-group
        data-reveal-immediate
      >
        <div className="container-wide service-detail__hero-inner">
          <div className="service-detail__hero-main">
            <Link to="/services" className="service-detail__back" data-reveal>
              <ArrowLeft size={17} strokeWidth={1.4} aria-hidden="true" />

              <span>All Services</span>
            </Link>

            <p className="service-detail__eyebrow eyebrow" data-reveal>
              {service.number}. {service.detail.eyebrow}
            </p>

            <h1
              id="service-detail-title"
              className="service-detail__title page-title"
              data-reveal
            >
              {service.detail.title}
            </h1>
          </div>

          <div className="service-detail__hero-side">
            <p className="page-description" data-reveal>
              {service.detail.intro}
            </p>

            <Link
              to={`/contact?service=${service.id}`}
              className="service-detail__primary-link"
              data-reveal
            >
              <span>Discuss {service.title}</span>

              <MoveRight size={20} strokeWidth={1.3} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          OVERVIEW
      ======================================== */}
      <section
        className="service-detail__overview"
        aria-labelledby="service-overview-title"
        data-reveal-group
      >
        <div className="container-wide service-detail__overview-inner">
          <p className="service-detail__eyebrow eyebrow" data-reveal>
            Overview
          </p>

          <div className="service-detail__overview-content">
            <h2
              id="service-overview-title"
              className="section-title"
              data-reveal
            >
              Financial support built around practical business needs.
            </h2>

            <p className="body-text--strong" data-reveal>
              {service.detail.overview}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          SUPPORT
      ======================================== */}
      <section
        className="service-detail__support"
        aria-labelledby="service-support-title"
        data-reveal-group
      >
        <div className="container-wide service-detail__support-inner">
          <div className="service-detail__support-heading">
            <p className="service-detail__eyebrow eyebrow" data-reveal>
              What We Support
            </p>

            <h2
              id="service-support-title"
              className="section-title"
              data-reveal
            >
              {service.detail.supportTitle}
            </h2>
          </div>

          <div className="service-detail__support-list">
            {service.points.map((point, index) => (
              <article
                key={point}
                className="service-detail__support-item"
                data-reveal
              >
                <span className="meta-text">
                  {String(index + 1).padStart(2, "0")}.
                </span>

                <div>
                  <MoveUpRight size={18} strokeWidth={1.2} aria-hidden="true" />

                  <h3 className="card-title">{point}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          WHO IT IS FOR
      ======================================== */}
      <section
        className="service-detail__fit"
        aria-labelledby="service-fit-title"
        data-reveal-group
      >
        <div className="container-wide service-detail__fit-inner">
          <div>
            <p className="service-detail__eyebrow eyebrow" data-reveal>
              When It Can Help
            </p>

            <h2 id="service-fit-title" className="section-title" data-reveal>
              Support when your business needs greater financial clarity.
            </h2>
          </div>

          <div className="service-detail__fit-copy">
            <p className="section-description" data-reveal>
              {service.detail.idealFor}
            </p>

            <Link
              to={`/contact?service=${service.id}`}
              className="service-detail__text-link"
              data-reveal
            >
              Talk to us about {service.title.toLowerCase()}
              <MoveRight size={18} strokeWidth={1.3} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          OTHER SERVICES
      ======================================== */}
      <section
        className="service-detail__other"
        aria-labelledby="other-services-title"
        data-reveal-group
      >
        <div className="container-wide">
          <div className="service-detail__other-heading">
            <div>
              <p className="service-detail__eyebrow eyebrow" data-reveal>
                Other Services
              </p>

              <h2
                id="other-services-title"
                className="section-title"
                data-reveal
              >
                Explore more ways we support businesses.
              </h2>
            </div>

            <Link
              to="/services"
              className="service-detail__text-link"
              data-reveal
            >
              View all services
              <MoveRight size={18} strokeWidth={1.3} aria-hidden="true" />
            </Link>
          </div>

          <div className="service-detail__other-grid">
            {otherServices.map((item) => (
              <Link
                key={item.id}
                to={`/services/${item.slug}`}
                className="service-detail__other-item"
                data-reveal
              >
                <span className="meta-text">{item.number}.</span>

                <div>
                  <h3 className="card-title">{item.title}</h3>

                  <p className="body-text">{item.shortDescription}</p>
                </div>

                <MoveUpRight size={20} strokeWidth={1.2} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
