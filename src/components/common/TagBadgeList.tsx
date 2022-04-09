import React from 'react';
import Tag from './Tag';

interface TagBadgeListProps {
  tags: string[];
}

export default function TagBadgeList({ tags }: TagBadgeListProps) {
  return (
    <div>
      <ul className="flex">
        {tags.map((tag) => (
          <li key={tag} className="mr-2 last:mr-0">
            <Tag tagType="badge" tag={tag} />
          </li>
        ))}
      </ul>
    </div>
  );
}
