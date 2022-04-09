import React from 'react';
import { kebabCase } from 'lodash';
import { Link } from 'gatsby';

interface TagProps {
  tagType: 'default' | 'badge';
  tag: string;
}

export default function Tag({ tagType, tag }: TagProps) {
  const className = {
    default: 'tag',
    badge: 'tag-badge',
  };
  return (
    <Link
      className={className[tagType]}
      to={`/tags/${kebabCase(tag)}`}
      rel="tag"
    >
      #{tag}
    </Link>
  );
}
