import React from 'react';
import useConfigQuery from 'hooks/useConfigQuery';
import useProfileQuery from 'hooks/useProfileQuery';
import useSiteMetadataQuery from 'hooks/useSiteMetadataQuery';

interface SeoProps {
  title: string;
  slug?: string;
  type?: string;
  description?: string;
  keywords?: string[];
  image?: string;
}

export default function Seo({
  title,
  description,
  keywords,
  image,
  slug = '/',
  type = 'website',
}: SeoProps) {
  const siteMetadata = useSiteMetadataQuery();
  const { facebookAppId, twitterId } = useConfigQuery();
  const { profileImage } = useProfileQuery();

  const metaDescription = description ?? siteMetadata.description;
  const metaKeywords = keywords ?? siteMetadata.keywords;
  const metaURL = `${siteMetadata.siteUrl}${slug}`;
  const metaImage = siteMetadata.siteUrl + (image ?? profileImage.publicURL);

  return (
    <>
      <title>
        {title} | {siteMetadata.title}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords.join(',')} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={metaURL} />
      <meta property="og:image" content={metaImage} />
      <meta property="fb:app_id" content={facebookAppId} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={twitterId} />
      <meta property="twitter:creator" content={twitterId} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:url" content={metaURL} />
      <meta property="twitter:image" content={metaImage} />
    </>
  );
}
