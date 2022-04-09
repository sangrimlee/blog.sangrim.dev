import { graphql, useStaticQuery } from 'gatsby';
import { PostData } from 'types';

interface RecentPostsQueryData {
  recentPosts: {
    edges: {
      node: PostData;
    }[];
  };
}

export default function useRecentPostsQuery() {
  const { recentPosts } =
    useStaticQuery<RecentPostsQueryData>(recentPostsQuery);
  return recentPosts.edges;
}

const recentPostsQuery = graphql`
  query RecentPostsQuery {
    recentPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      limit: 10
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
            date(formatString: "YYYY년 MM월 DD일")
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
