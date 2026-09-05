import { team } from "../../data/team";

import "./LeadershipSection.css";

const LeadershipSection = () => {
  return (
    <section className="home-leadership">
      <div className="container-wide">
        <div className="home-leadership__header">
          <p className="eyebrow">Leadership</p>

          <h2 className="section-title">
            The people behind
            <span> AK and Associates.</span>
          </h2>

          <p className="home-leadership__intro section-description">
            Leadership focused on practical financial management, clear
            communication and long-term business support.
          </p>
        </div>

        <div className="home-leadership__grid">
          {team.map((person) => (
            <article key={person.id} className="home-leadership__person">
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
