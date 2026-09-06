import { Helmet } from "react-helmet-async";

import { siteConfig } from "../../config/site";

const SEO = ({
  title,
  description,
  path = "/",
  image = siteConfig.ogImage,
  noIndex = false,
}) => {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Accounting & Business Advisory`;

  const canonicalUrl =
    siteConfig.url && !noIndex ? `${siteConfig.url}${path}` : null;

  const imageUrl =
    siteConfig.url && !image.startsWith("http")
      ? `${siteConfig.url}${image}`
      : image;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:type" content="website" />

      <meta property="og:site_name" content={siteConfig.name} />

      <meta property="og:title" content={fullTitle} />

      <meta property="og:description" content={description} />

      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={fullTitle} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;
