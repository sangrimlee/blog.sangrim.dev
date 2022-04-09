import React from 'react';
import { Link } from 'gatsby';
import { PostNavigationData } from 'types';
import { SVGIcon } from 'components/common';

interface PostNavigationProps {
  previous?: PostNavigationData;
  next?: PostNavigationData;
}

export default function PostNavigation({
  previous,
  next,
}: PostNavigationProps) {
  return (
    <div className="post-nav-wrap">
      <div className="post-nav">
        {previous && (
          <Link
            to={previous.fields.slug}
            className="post-nav-link post-nav-prev"
          >
            <div className="post-nav-icon">
              <SVGIcon icon="ArrowBackwardCircleIcon" size={24} />
            </div>
            <div className="post-nav-content">
              <span>이전 포스트</span>
              <strong>{previous?.frontmatter.title}</strong>
            </div>
          </Link>
        )}
      </div>
      <div className="post-nav">
        {next && (
          <Link to={next.fields.slug} className="post-nav-link post-nav-next">
            <div className="post-nav-icon">
              <SVGIcon icon="ArrowForwardCircleIcon" size={24} />
            </div>
            <div className="post-nav-content">
              <span className="text-right">다음 포스트</span>
              <strong>{next?.frontmatter.title}</strong>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
