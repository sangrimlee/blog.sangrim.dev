import React from 'react';
import Layout from 'components/layouts/Layout';
import SiteHead from 'containers/SiteHead';
import TagList from 'containers/TagList';

export default function TagsPage() {
  return (
    <Layout>
      <SiteHead />
      <TagList />
    </Layout>
  );
}
