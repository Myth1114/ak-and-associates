import { Link } from "react-router-dom";
import { MoveUpRight } from "lucide-react";

import { services } from "../../data/services";

import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <section className="home-services">
      <div className="container-wide">
        <div className="home-services__header">
          <p className="home-services__eyebrow eyebrow">What We Do</p>

          <h2 className="section-title">
            Financial support built around
            <span> real business needs.</span>
          </h2>

          <p className="home-services__intro section-description">
            From day-to-day accounting and payroll to tax and business advisory,
            AK and Associates supports the financial work that keeps businesses
            organized and moving forward.
          </p>
        </div>

        <div className="home-services__list">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="home-services__row"
            >
              <span className="home-services__number meta-text">
                {service.number}.
              </span>

              <span className="home-services__name card-title">
                {service.title}
              </span>

              <span className="home-services__arrow" aria-hidden="true">
                <MoveUpRight size={19} strokeWidth={1} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
