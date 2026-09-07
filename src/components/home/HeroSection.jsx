import { Link } from "react-router-dom";

import { services } from "../../data/services";

import "./HeroSection.css";
import BusinessCardDownload from "../business-card/BusinessCardDownload";

const HeroSection = () => {
  return (
    <section
      className="home-hero"
      aria-labelledby="home-hero-title"
      data-reveal-group
      data-reveal-immediate
    >
      <div className="container-wide home-hero__inner">
        <div className="home-hero__content">
          <p className="home-hero__eyebrow eyebrow" data-reveal>
            Accounting & Business Advisory
          </p>

          <h1
            id="home-hero-title"
            className="home-hero__title page-title"
            data-reveal
          >
            Accounting that keeps your business <span>moving.</span>
          </h1>

          <p className="home-hero__description page-description" data-reveal>
            AK and Associates supports businesses with accounting, payroll, tax
            advisory, financial guidance and practical business consulting.
          </p>

          <div className="home-hero__actions" data-reveal>
            <Link to="/services" className="home-hero__primary">
              <span>Explore Services</span>
              <span aria-hidden="true">→</span>
            </Link>

            <BusinessCardDownload
              variant="hero"
              label="Business Card"
              showIntro={false}
            />
          </div>
        </div>

        <div
          className="home-hero__services"
          aria-label="Our services"
          data-reveal
        >
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="home-hero__service"
            >
              <span>{service.number}.</span>
              <p>{service.title}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="container-wide home-hero__bottom" data-reveal>
        <p>
          Established <strong>2078 B.S.</strong>
        </p>

        <span className="home-hero__line" aria-hidden="true" />

        <p>Supporting businesses in Nepal</p>
      </div>
    </section>
  );
};

export default HeroSection;
