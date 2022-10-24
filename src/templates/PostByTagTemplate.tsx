import React from 'react';
import type { HeadProps } from 'gatsby';
import Layout from 'components/layouts/Layout';
import InfinitePostList from 'containers/InfinitePostList';
import Seo from 'containers/Seo';

interface PostByTagTemplateProps {
  pageContext: {
    tag: string;
  };
}

export default function PostByTagTemplate({
  pageContext,
}: PostByTagTemplateProps) {
  const { tag } = pageContext;

  return (
    <Layout size="md">
      <h1 className="title">
        Tag / <span className="highlight">#{tag}</span>
      </h1>
      <InfinitePostList selectedTag={tag} />
    </Layout>
  );
}

export const Head = ({
  pageContext: { tag },
}: HeadProps<object, { tag: string }>) => {
  return <Seo title={`#${tag}`} slug={`/tags/${tag}`} />;
};
