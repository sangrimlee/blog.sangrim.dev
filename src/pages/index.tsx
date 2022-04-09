import React from 'react';
import Layout from 'components/layouts/Layout';
import SiteHead from 'containers/SiteHead';
import Bio from 'containers/Bio';
import RecentPostList from 'containers/RecentPostList';

export default function IndexPage() {
  return (
    <Layout size="md">
      <SiteHead />
      <Bio />
      <RecentPostList />
    </Layout>
  );
}
