import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import useTagsQuery from 'hooks/useTagsQuery';

export default function TagList() {
  const tags = useTagsQuery();

  return (
    <ul className="tag-list">
      {tags.map(({ fieldValue, totalCount }) => (
        <li key={fieldValue}>
          <Link
            to={`/tags/${kebabCase(fieldValue)}/`}
            className="tag-list-link"
          >
            #{fieldValue}
            <span>({totalCount})</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
