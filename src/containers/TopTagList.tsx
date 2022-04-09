import React, { useMemo } from 'react';
import { Link } from 'gatsby';
import { Tag } from 'components/common';
import useTagsQuery from 'hooks/useTagsQuery';

export default function TopTagList() {
  const tags = useTagsQuery();
  const topTags = useMemo(() => tags.slice(0, 10), [tags]);

  return (
    <div className="xl:sticky xl:top-24">
      <h2 className="title xl:text-base">자주 사용된 태그</h2>
      <ul className="mb-4">
        {topTags.map(({ fieldValue: tag }) => (
          <li key={tag} className="inline-block">
            <Tag tagType="default" tag={tag} />
          </li>
        ))}
      </ul>
      <Link to="/tags" className="text-link">
        모든 태그 보기
      </Link>
    </div>
  );
}
