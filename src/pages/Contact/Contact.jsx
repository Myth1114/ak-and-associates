import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Mail,
  MapPin,
  MoveRight,
  Phone,
  Clock3,
  MessageCircle,
} from "lucide-react";

import { services } from "../../data/services";

import useReveal from "../../hooks/useReveals";

import "./Contact.css";
import SEO from "../../components/seo/SEO";
import { seo } from "../../data/seo";

const Contact = () => {
  const pageRef = useRef(null);

  useReveal(pageRef);
  const [searchParams] = useSearchParams();

  const requestedService = searchParams.get("service");

  const selectedService = services.some(
    (service) => service.id === requestedService
  )
    ? requestedService
    : "";
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact form:", formData);
  };
  useEffect(() => {
    const requestedService = searchParams.get("service");

    const isValidService = services.some(
      (service) => service.id === requestedService
    );

    setFormData((current) => ({
      ...current,
      service: isValidService ? requestedService : "",
    }));
  }, [searchParams]);
  return (
    <div ref={pageRef}>
      <SEO {...seo.contact} />
      <section
        className="contact-page__hero"
        data-reveal-group
        data-reveal-immediate
      >
        <div className="container-wide contact-page__hero-inner">
          <div>
            <p className="contact-page__eyebrow eyebrow" data-reveal>
              Contact AK and Associates
            </p>

            <h1 className="contact-page__title page-title" data-reveal>
              Let’s talk about the financial side of your business.
            </h1>
          </div>

          <p className="contact-page__hero-copy page-description" data-reveal>
            Whether you need help with accounting, payroll, tax matters,
            financial guidance or business support, tell us what you need and
            we’ll help you identify the right starting point.
          </p>
        </div>
      </section>

      <section className="contact-page__main" data-reveal-group>
        <div className="container-wide contact-page__main-inner">
          <div className="contact-page__details">
            <div className="contact-page__details-heading">
              <p className="eyebrow" data-reveal>
                Contact Details
              </p>

              <h2 className="section-title" data-reveal>
                Reach us directly.
              </h2>
            </div>

            <div className="contact-page__details-list">
              <a
                href="tel:+9779847031266"
                className="contact-page__detail"
                data-reveal
              >
                <div className="contact-page__detail-icon">
                  <Phone size={20} strokeWidth={1.4} />
                </div>

                <div>
                  <p className="meta-text">Phone</p>
                  <strong>9847031266</strong>
                </div>

                <MoveRight
                  className="contact-page__detail-arrow"
                  size={20}
                  strokeWidth={1}
                />
              </a>

              <a
                href="https://wa.me/9779847031266"
                target="_blank"
                rel="noreferrer"
                className="contact-page__detail"
                data-reveal
              >
                <div className="contact-page__detail-icon">
                  <MessageCircle size={20} strokeWidth={1.4} />
                </div>

                <div>
                  <p className="meta-text">WhatsApp</p>
                  <strong>9847031266</strong>
                </div>

                <MoveRight
                  className="contact-page__detail-arrow"
                  size={20}
                  strokeWidth={1}
                />
              </a>

              <a
                href="mailto:akandassociates@gmail.com"
                className="contact-page__detail"
                data-reveal
              >
                <div className="contact-page__detail-icon">
                  <Mail size={20} strokeWidth={1.4} />
                </div>

                <div>
                  <p className="meta-text">Email</p>
                  <strong>akandassociates@gmail.com</strong>
                </div>

                <MoveRight
                  className="contact-page__detail-arrow"
                  size={20}
                  strokeWidth={1}
                />
              </a>

              <div
                className="contact-page__detail contact-page__detail--static"
                data-reveal
              >
                <div className="contact-page__detail-icon">
                  <MapPin size={20} strokeWidth={1.4} />
                </div>

                <div>
                  <p className="meta-text">Office</p>
                  <strong>Siddharthanagar-06, Bhairahawa, Nepal</strong>
                </div>
              </div>

              <div
                className="contact-page__detail contact-page__detail--static"
                data-reveal
              >
                <div className="contact-page__detail-icon">
                  <Clock3 size={20} strokeWidth={1.4} />
                </div>

                <div>
                  <p className="meta-text">Office Hours</p>
                  <strong>10:00 AM – 6:00 PM</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-page__form-wrap">
            <div className="contact-page__form-heading">
              <p className="eyebrow" data-reveal>
                Send an Enquiry
              </p>

              <h2 className="section-title" data-reveal>
                Tell us what you need help with.
              </h2>

              <p className="section-description" data-reveal>
                Share a few details about your business and the support you’re
                looking for.
              </p>
            </div>

            <form
              className="contact-page__form"
              onSubmit={handleSubmit}
              data-reveal
            >
              <div className="contact-page__field-grid">
                <div className="contact-page__field">
                  <label htmlFor="name">Name</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-page__field">
                  <label htmlFor="company">Company</label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    autoComplete="organization"
                  />
                </div>

                <div className="contact-page__field">
                  <label htmlFor="phone">Phone</label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="contact-page__field">
                  <label htmlFor="email">Email</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="contact-page__field">
                <label htmlFor="service">Service Interest</label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>

                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}

                  <option value="not-sure">Not Sure</option>
                </select>
              </div>

              <div className="contact-page__field">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us briefly what you need support with."
                  rows="6"
                  required
                />
              </div>

              <button type="submit" className="contact-page__submit">
                Send Enquiry
                <MoveRight size={20} strokeWidth={1} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-page__note" data-reveal-group>
        <div className="container-wide contact-page__note-inner">
          <p className="eyebrow" data-reveal>
            Start Simple
          </p>

          <div>
            <h2 className="section-title" data-reveal>
              You don’t need to know exactly which service you need.
            </h2>

            <p className="section-description" data-reveal>
              Tell us what you’re trying to manage or improve, and we can help
              you understand which type of support may be appropriate.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
