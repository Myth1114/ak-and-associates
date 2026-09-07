import { Link } from "react-router-dom";

import "./WhyAKSection.css";

const reasons = [
  {
    number: "01.",
    title: "Practical Guidance",
    description:
      "Financial support focused on what your business actually needs, with clear guidance you can use in day-to-day decisions.",
  },
  {
    number: "02.",
    title: "Clear Financial Information",
    description:
      "We help keep accounting, payroll and financial information organized so it is easier to understand and act on.",
  },
  {
    number: "03.",
    title: "Ongoing Support",
    description:
      "Our work goes beyond one-off tasks, providing dependable support as your financial and operational needs develop.",
  },
  {
    number: "04.",
    title: "Local Understanding",
    description:
      "Support shaped around the practical realities and requirements of businesses operating in Nepal.",
  },
];

const WhyAKSection = () => {
  return (
    <section
      className="why-ak"
      aria-labelledby="why-ak-title"
      data-reveal-group
    >
      <div className="container-wide">
        <div className="why-ak__header">
          <div>
            <p className="why-ak__eyebrow eyebrow" data-reveal>
              Why AK
            </p>

            <h2 id="why-ak-title" className="section-title" data-reveal>
              Financial support built around
              <span> how businesses actually work.</span>
            </h2>
          </div>

          <div className="why-ak__intro" data-reveal>
            <p className="section-description">
              We focus on making financial work clearer, more organized and
              genuinely useful to the people running the business.
            </p>

            <Link to="/about" className="why-ak__link">
              Learn more about us
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="why-ak__reasons">
          {reasons.map((reason) => (
            <article key={reason.number} className="why-ak__reason" data-reveal>
              <span className="why-ak__number meta-text">{reason.number}</span>

              <div className="why-ak__reason-content">
                <h3 className="card-title">{reason.title}</h3>

                <p className="section-description">{reason.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAKSection;
