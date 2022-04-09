import React from 'react';
import Layout from 'components/layouts/Layout';
import SiteHead from 'containers/SiteHead';
import AllPostList from 'containers/AllPostList';

export default function PostPage() {
  return (
    <Layout>
      <SiteHead />
      <AllPostList />
    </Layout>
  );
}
