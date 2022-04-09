import React from 'react';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import usePostsQuery from 'hooks/usePostsQuery';
import { Post } from 'components/common';

interface InfinitePostListProps {
  selectedTag: string;
}

export default function InfinitePostList({
  selectedTag,
}: InfinitePostListProps) {
  const posts = usePostsQuery();
  const { containerRef, postList } = useInfiniteScroll({
    selectedTag,
    posts,
  });

  return (
    <div ref={containerRef} className="post-list">
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }) => (
          <Post key={id} slug={slug} frontmatter={frontmatter} />
        ),
      )}
    </div>
  );
}
