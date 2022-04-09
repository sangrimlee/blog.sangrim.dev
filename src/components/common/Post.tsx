import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PostFrontmatterData } from 'types';
import TagBadgeList from './TagBadgeList';

interface PostProps {
  slug: string;
  frontmatter: PostFrontmatterData;
}

export default function Post({
  frontmatter: { title, description, tags, date, thumbnail },
  slug,
}: PostProps) {
  return (
    <div className="post-item">
      <div className="post-img-wrap">
        <Link to={slug}>
          <GatsbyImage
            className="post-img"
            image={thumbnail.childImageSharp.gatsbyImageData}
            alt="포스트 썸네일"
          />
        </Link>
      </div>
      <div>
        <span className="post-date">{date}</span>
        <Link to={slug}>
          <h2 className="post-title">{title}</h2>
        </Link>
        <p className="post-description">{description}</p>
        <TagBadgeList tags={tags} />
      </div>
    </div>
  );
}
