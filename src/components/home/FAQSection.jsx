import { useState } from "react";
import { Plus } from "lucide-react";

import { faqs } from "../../data/faqs";

import "./FAQSection.css";

const FAQSection = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className="home-faq" aria-labelledby="faq-title" data-reveal-group>
      <div className="container-wide home-faq__inner">
        <div className="home-faq__intro">
          <p className="home-faq__eyebrow eyebrow" data-reveal>
            Frequently Asked Questions
          </p>

          <h2 id="faq-title" className="section-title" data-reveal>
            A few things you may
            <span> want to know.</span>
          </h2>

          <p className="home-faq__description section-description" data-reveal>
            Clear answers to some common questions businesses may have before
            working with AK and Associates.
          </p>
        </div>

        <div className="home-faq__list" data-reveal>
          {faqs.map((faq, index) => {
            const isOpen = activeId === faq.id;

            return (
              <article
                key={faq.id}
                className={`home-faq__item ${
                  isOpen ? "home-faq__item--open" : ""
                }`}
              >
                <h3 className="home-faq__question">
                  <button
                    type="button"
                    className="home-faq__trigger"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="home-faq__number meta-text">
                      {String(index + 1).padStart(2, "0")}.
                    </span>

                    <span className="card-title">{faq.question}</span>

                    <Plus
                      className="home-faq__icon"
                      size={20}
                      strokeWidth={1.3}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  id={`faq-answer-${faq.id}`}
                  className="home-faq__answer"
                  aria-hidden={!isOpen}
                >
                  <div className="home-faq__answer-inner">
                    <p className="section-description">{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
