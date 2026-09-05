import { Link } from "react-router-dom";
import { MoveUpRight } from "lucide-react";

import { services } from "../../data/services";

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="home-hero">
      <div className="container-wide home-hero__inner">
        <div className="home-hero__content">
          <p className="home-hero__eyebrow eyebrow">
            Accounting & Business Advisory
          </p>

          <h1 className="home-hero__title page-title">
            Accounting that keeps your business <span>moving.</span>
          </h1>

          <p className="home-hero__description page-description">
            AK and Associates supports businesses with accounting, payroll, tax
            advisory, financial guidance and practical business consulting.
          </p>

          <div className="home-hero__actions">
            <Link to="/services" className="home-hero__primary">
              Explore Services
              <span aria-hidden="true">→</span>
            </Link>

            <Link to="/contact" className="home-hero__secondary">
              Talk to Us
              <MoveUpRight size={16} strokeWidth={1} />
            </Link>
          </div>
        </div>

        <div className="home-hero__services" aria-label="Our services">
          {services.map((service) => (
            <div key={service.id} className="home-hero__service">
              <span>{service.number}.</span>
              <p>{service.title}</p>
            </div>
          ))}
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
  );
};

export default HeroSection;
