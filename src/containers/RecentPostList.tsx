import React from 'react';
import useRecentPostsQuery from 'hooks/useRecentPostsQuery';
import { Post } from 'components/common';

export default function RecentPostList() {
  const recentPosts = useRecentPostsQuery();

  return (
    <div>
      <h1 className="title">최근 포스트</h1>
      <ul className="post-list">
        {recentPosts.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter,
            },
          }) => (
            <li key={id}>
              <Post slug={slug} frontmatter={frontmatter} />
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
