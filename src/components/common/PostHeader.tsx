import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface PostHeaderProps {
  title: string;
  date: string;
  gatsbyImageData: IGatsbyImageData;
}

export default function PostHeader({
  title,
  date,

  gatsbyImageData,
}: PostHeaderProps) {
  return (
    <div className="post-header-wrap">
      <div className="post-header">
        <h1>{title}</h1>
        <span>{date}</span>
      </div>
      <div>
        <GatsbyImage image={gatsbyImageData} alt="thumbnail" />
      </div>
    </div>
  );
}
