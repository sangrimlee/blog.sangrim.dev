import React from 'react';
import { Helmet } from 'react-helmet';
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
  lang?: string;
  meta?: React.DetailedHTMLProps<
    React.MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement
  >[];
}

export default function Seo({
  title,
  description,
  keywords,
  image,
  slug = '/',
  type = 'website',
  lang = 'ko',
  meta = [],
}: SeoProps) {
  const siteMetadata = useSiteMetadataQuery();
  const { facebookAppId, twitterId } = useConfigQuery();
  const { profileImage } = useProfileQuery();

  const metaDescription = description ?? siteMetadata.description;
  const metaKeywords = keywords ?? siteMetadata.keywords;
  const metaURL = `${siteMetadata.siteUrl}${slug}`;
  const metaImage = siteMetadata.siteUrl + (image ?? profileImage.publicURL);

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { httpEquiv: 'Content-Type', content: 'text/html; charset=UTF-8' },
        { name: 'description', content: metaDescription },
        { name: 'keywords', content: metaKeywords.join(',') },
        { property: 'og:title', content: title },
        { property: 'og:description', content: metaDescription },
        { property: 'og:type', content: type },
        { property: 'og:url', content: metaURL },
        { property: 'og:image', content: metaImage },
        { property: 'fb:app_id', content: facebookAppId },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: twitterId },
        { property: 'twitter:creator', content: twitterId },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: metaDescription },
        { property: 'twitter:url', content: metaURL },
        { property: 'twitter:image', content: metaImage },
        ...meta,
      ]}
    />
  );
}
