import { useRef, useState } from "react";
import { Download } from "lucide-react";
import { toPng } from "html-to-image";

import BusinessCard from "./BusinessCard";

import "./BusinessCardDownload.css";

const BusinessCardDownload = ({
  variant = "default",
  label = "Download Business Card",
  showIntro = true,
  className = "",
}) => {
  const cardRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!cardRef.current || isDownloading) return;

    try {
      setIsDownloading(true);

      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#F7F8F5",
        width: 1260,
        height: 720,
      });

      const link = document.createElement("a");

      link.download = "AK-and-Associates-Business-Card.png";
      link.href = dataUrl;

      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Unable to download business card:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <div
        className={`business-card-download business-card-download--${variant} ${className}`.trim()}
      >
        {showIntro && (
          <div className="business-card-download__intro">
            <p className="eyebrow">Business Card</p>

            <h2 className="subsection-title">
              Keep our contact details handy.
            </h2>
          </div>
        )}

        <button
          type="button"
          className="business-card-download__button"
          onClick={handleDownload}
          disabled={isDownloading}
        >
          <span>{isDownloading ? "Preparing..." : label}</span>

          <Download size={18} strokeWidth={1.4} aria-hidden="true" />
        </button>
      </div>

      <div className="business-card-download__export" aria-hidden="true">
        <div ref={cardRef}>
          <BusinessCard />
        </div>
      </div>
    </>
  );
};

export default BusinessCardDownload;
