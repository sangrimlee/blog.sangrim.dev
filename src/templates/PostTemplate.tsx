import React from 'react';
import { graphql } from 'gatsby';
import { PostTemplateData, PostPageContextData } from 'types';
import Seo from 'containers/Seo';
import Bio from 'containers/Bio';
import Share from 'containers/Share';
import Utterances from 'containers/Utterances';
import Layout from 'components/layouts/Layout';
import TableOfContents from 'components/common/TableOfContents';
import {
  PostHeader,
  PostBody,
  PostFooter,
  PostNavigation,
} from 'components/common';

interface PostTemplateProps {
  data: {
    postTemplate: PostTemplateData;
  };
  pageContext: PostPageContextData;
}

export default function PostTemplate({
  data: { postTemplate },
  pageContext,
}: PostTemplateProps) {
  const {
    html,
    fields: { slug },
    headings,
    frontmatter: {
      title,
      date,
      description,
      tags,
      thumbnail: {
        childImageSharp: { gatsbyImageData },
        publicURL,
      },
    },
  } = postTemplate;
  const { previous, next } = pageContext;

  return (
    <Layout size="md">
      <Seo
        type="article"
        title={title}
        description={description}
        slug={slug}
        keywords={tags}
        image={publicURL}
      />
      <PostHeader title={title} date={date} gatsbyImageData={gatsbyImageData} />
      <TableOfContents headings={headings} />
      <PostBody html={html} />
      <PostFooter tags={tags} />
      <Share slug={slug} />
      <Bio />
      <PostNavigation previous={previous} next={next} />
      <Utterances />
    </Layout>
  );
}

export const queryPostBySlug = graphql`
  query queryPostBySlug($slug: String) {
    postTemplate: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      headings {
        id
        depth
        value
      }
      fields {
        slug
      }
      frontmatter {
        title
        description
        tags
        date(formatString: "YYYY년 MM월 DD일")
        thumbnail {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
