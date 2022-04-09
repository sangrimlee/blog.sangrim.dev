import React from 'react';
import Layout from 'components/layouts/Layout';
import SiteHead from 'containers/SiteHead';
import About from 'containers/About';

export default function AboutPage() {
  return (
    <Layout>
      <SiteHead />
      <About />
    </Layout>
  );
}
