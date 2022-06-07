import React from 'react';
import Layout from 'components/layouts/Layout';
import Bio from 'containers/Bio';
import RecentPostList from 'containers/RecentPostList';
import Seo from 'containers/Seo';

export default function IndexPage() {
  return (
    <Layout size="md">
      <Seo title="홈" />
      <Bio />
      <RecentPostList />
    </Layout>
  );
}
