import React from 'react';
import { Helmet } from 'react-helmet';

interface HeadProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string[];
  lang?: string;
}

export default function Head({
  title,
  description,
  url,
  image,
  keywords,
  lang = 'ko',
}: HeadProps) {
  return (
    <Helmet>
      <html lang={lang} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="keywords" content={keywords?.join(',')} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}
