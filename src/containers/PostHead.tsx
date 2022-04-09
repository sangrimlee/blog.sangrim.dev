import React from 'react';
import useSiteMetadataQuery from 'hooks/useSiteMetadataQuery';
import { Head } from 'components/common';

interface PostHeadProps {
  title: string;
  description: string;
  slug: string;
  tags?: string[];
  thumbnail?: string;
}

export default function PostHead({
  title,
  description,
  slug,
  tags,
  thumbnail,
}: PostHeadProps) {
  const { siteUrl } = useSiteMetadataQuery();

  return (
    <Head
      title={title}
      description={description}
      url={siteUrl + slug}
      image={siteUrl + thumbnail}
      keywords={tags}
    />
  );
}
