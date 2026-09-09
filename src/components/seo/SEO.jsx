import { Helmet } from "react-helmet-async";

import { siteConfig } from "../../config/site";

const SEO = ({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
  noIndex = false,
}) => {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Accounting & Business Advisory`;

  const canonicalUrl = new URL(path, siteConfig.url).toString();

  const imageUrl = image.startsWith("http")
    ? image
    : new URL(image, siteConfig.url).toString();

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />

      {!noIndex && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />

      {!noIndex && <meta property="og:url" content={canonicalUrl} />}

      <meta property="og:image" content={imageUrl} />

      <meta
        property="og:image:alt"
        content="AK and Associates - Accounting and Business Advisory"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;
