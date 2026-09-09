import { Helmet } from "react-helmet-async";

import { siteConfig } from "../../config/site";

const BusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    "@id": `${siteConfig.url}/#organization`,

    name: siteConfig.name,

    url: siteConfig.url,

    description: siteConfig.description,

    telephone: "+9779847031266",

    email: "akandassociates@gmail.com",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Siddharthanagar-06",
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
