import React from 'react';
import Layout from 'components/layouts/Layout';
import About from 'containers/About';
import Seo from 'containers/Seo';

export default function AboutPage() {
  return (
    <Layout>
      <Seo title="소개" slug="/about" />
      <About />
    </Layout>
  );
}
