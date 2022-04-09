import React from 'react';
import { TagBadgeList } from 'components/common';

interface PostFooterProps {
  tags: string[];
}

export default function PostFooter({ tags }: PostFooterProps) {
  return (
    <div className="post-footer">
      <TagBadgeList tags={tags} />
    </div>
  );
}
