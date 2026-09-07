import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import BrandMark from "../ui/BrandMark";

import "./BusinessCard.css";

const BusinessCard = () => {
  return (
    <article
      className="business-card"
      aria-label="AK and Associates business card"
    >
      <div className="business-card__left">
        <BrandMark className="business-card__brand" />

        <p className="business-card__category">
          Accounting &amp; Business Advisory
        </p>

        <div className="business-card__accent-line" aria-hidden="true" />

        <p className="business-card__statement">
          Practical financial support for <span>businesses in Nepal.</span>
        </p>
      </div>

      <div className="business-card__divider" aria-hidden="true" />

      <div className="business-card__right">
        <div className="business-card__detail">
          <div className="business-card__icon">
            <Phone size={28} strokeWidth={1.5} aria-hidden="true" />
          </div>

          <div>
            <p className="business-card__label">Phone</p>
            <p className="business-card__value">9847031266</p>
          </div>
        </div>

        <div className="business-card__detail">
          <div className="business-card__icon">
            <Mail size={28} strokeWidth={1.5} aria-hidden="true" />
          </div>

          <div>
            <p className="business-card__label">Email</p>
            <p className="business-card__value">akandassociates@gmail.com</p>
          </div>
        </div>

        <div className="business-card__detail">
          <div className="business-card__icon">
            <MapPin size={28} strokeWidth={1.5} aria-hidden="true" />
          </div>

          <div>
            <p className="business-card__label">Office</p>
            <p className="business-card__value">
              Siddharthanagar-06,
              <br />
              Bhairahawa, Nepal
            </p>
          </div>
        </div>

        <div className="business-card__detail">
          <div className="business-card__icon">
            <Clock3 size={28} strokeWidth={1.5} aria-hidden="true" />
          </div>

          <div>
            <p className="business-card__label">Hours</p>
            <p className="business-card__value">10:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BusinessCard;
