import React from 'react';
import Layout from 'components/layouts/Layout';
import TagList from 'containers/TagList';
import Seo from 'containers/Seo';

export default function TagsPage() {
  return (
    <Layout>
      <Seo title="태그" slug="/tags" />
      <TagList />
    </Layout>
  );
}
