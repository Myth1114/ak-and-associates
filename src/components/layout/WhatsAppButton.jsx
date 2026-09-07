import { MessageCircle } from "lucide-react";

import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "9779847031266";

  const message =
    "Hello AK and Associates, I would like to know more about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AK and Associates on WhatsApp"
    >
      <MessageCircle
        className="whatsapp-button__icon"
        size={21}
        strokeWidth={1.7}
        aria-hidden="true"
      />

      <span className="whatsapp-button__text">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
