import React from 'react';
import Layout from 'components/layouts/Layout';
import SiteHead from 'containers/SiteHead';
import NotFound from 'containers/NotFound';

export default function NotFoundPage() {
  return (
    <Layout>
      <SiteHead />
      <NotFound />
    </Layout>
  );
}
