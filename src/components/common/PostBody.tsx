import React from 'react';

interface PostBodyProps {
  html: string;
}

export default function PostBody({ html }: PostBodyProps) {
  return (
    <article
      className="post-body"
      dangerouslySetInnerHTML={{ __html: html }}
    ></article>
  );
}
