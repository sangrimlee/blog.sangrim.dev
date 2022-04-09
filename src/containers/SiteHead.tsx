import React from 'react';
import useSiteMetadataQuery from 'hooks/useSiteMetadataQuery';
import { Head } from 'components/common';

export default function SiteHead() {
  const { title, description, siteUrl, keywords, icon } =
    useSiteMetadataQuery();

  return (
    <Head
      title={title}
      description={description}
      url={siteUrl}
      image={siteUrl + icon}
      keywords={keywords}
    />
  );
}
