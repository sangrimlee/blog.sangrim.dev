import React from 'react';
import Layout from 'components/layouts/Layout';
import AllPostList from 'containers/AllPostList';
import Seo from 'containers/Seo';

export default function PostPage() {
  return (
    <Layout>
      <Seo title="포스트" slug="/posts" />
      <AllPostList />
    </Layout>
  );
}
