import React from 'react';
import Layout from 'components/layouts/Layout';
import About from 'containers/About';
import Seo from 'containers/Seo';

export default function AboutPage() {
  return (
    <Layout>
      <About />
    </Layout>
  );
}

export const Head = () => {
  return <Seo title="소개" slug="/about" />;
};
