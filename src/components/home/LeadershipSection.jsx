import { team } from "../../data/team";

import "./LeadershipSection.css";

const LeadershipSection = () => {
  return (
    <section className="home-leadership" data-reveal-group>
      <div className="container-wide">
        <div className="home-leadership__header">
          <p className="eyebrow" data-reveal>
            Leadership
          </p>

          <h2 className="section-title" data-reveal>
            The people behind
            <span> AK and Associates.</span>
          </h2>

          <p className="home-leadership__intro section-description" data-reveal>
            Leadership focused on practical financial management, clear
            communication and long-term business support.
          </p>
        </div>

        <div className="home-leadership__grid">
          {team.map((person) => (
            <article
              key={person.id}
              className="home-leadership__person"
              data-reveal
            >
              <div className="home-leadership__image">
                <img src={person.image} alt={person.alt} />
              </div>

              <div className="home-leadership__info">
                <div>
                  <span className="meta-text">{person.number}.</span>

                  <p className="meta-text">{person.role}</p>
                </div>

                <h3 className="subsection-title">{person.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
