import React from 'react';
import Layout from 'components/layouts/Layout';
import NotFound from 'containers/NotFound';
import Seo from 'containers/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <NotFound />
    </Layout>
  );
}

export const Head = () => {
  return <Seo slug="/404" title="찾을 수 없는 페이지입니다." />;
};
