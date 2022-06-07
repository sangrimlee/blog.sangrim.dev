import React from 'react';
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
      <Seo title={`#${tag}`} slug={`/tags/${tag}`} />
      <h1 className="title">
        Tag / <span className="highlight">#{tag}</span>
      </h1>
      <InfinitePostList selectedTag={tag} />
    </Layout>
  );
}
