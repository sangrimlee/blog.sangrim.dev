import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import useNotFoundImageQuery from 'hooks/useNotFoundImageQuery';

export default function NotFound() {
  const notFoundImage = useNotFoundImageQuery();
  return (
    <div className="not-found-wrap">
      <div className="max-w-xs md:max-w-lg mx-auto">
        <GatsbyImage image={notFoundImage} alt="404" />
      </div>
      <h2>찾으시는 페이지가 없습니다.</h2>
      <p>
        잘못된 접근이거나 요청하신 페이지를 찾을 수 없습니다.
        <br />
        입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
      </p>
      <Link to="/">홈으로</Link>
    </div>
  );
}
