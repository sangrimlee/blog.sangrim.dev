import { graphql, useStaticQuery } from 'gatsby';
import { useMemo } from 'react';
import { TagData } from 'types';

interface TagsQueryData {
  tags: {
    group: TagData[];
  };
}

export default function useTagsQuery() {
  const {
    tags: { group: tags },
  } = useStaticQuery<TagsQueryData>(tagsQuery);

  const sortedTags = useMemo(
    () => tags.sort((a, b) => b.totalCount - a.totalCount),
    [tags],
  );

  return sortedTags;
}

const tagsQuery = graphql`
  query TagsQuery {
    tags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
