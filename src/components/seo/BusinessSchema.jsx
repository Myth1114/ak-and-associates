import { Helmet } from "react-helmet-async";

import { siteConfig } from "../../config/site";

const BusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AK and Associates",
    url: siteConfig.url,
    description:
      "Accounting, payroll, tax advisory, financial guidance and business consulting support for businesses in Nepal.",

    telephone: "+9779847031266",

    email: "akandassociates@gmail.com",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhairahawa",
      addressRegion: "Lumbini Province",
      addressCountry: "NP",
    },

    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },

    serviceType: [
      "Accounting",
      "Payroll Management",
      "Tax Advisory",
      "Financial Advisory",
      "Business Consulting",
      "Outsourcing Services",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default BusinessSchema;
