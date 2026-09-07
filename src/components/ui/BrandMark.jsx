import "./BrandMark.css";

const BrandMark = ({ variant = "light", className = "" }) => {
  return (
    <span
      className={`brand-mark brand-mark--${variant} ${className}`.trim()}
      aria-hidden="true"
    >
      <span className="brand-mark__main">
        <span>a</span>
        <span className="brand-mark__dot">.</span>
        <span>k</span>
        <span className="brand-mark__dot">.</span>
      </span>

      <span className="brand-mark__name">and associates</span>
    </span>
  );
};

export default BrandMark;
