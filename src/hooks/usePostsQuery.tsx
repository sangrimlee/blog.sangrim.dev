import { graphql, useStaticQuery } from 'gatsby';
import { PostData } from 'types';

interface PostsQueryData {
  posts: {
    edges: {
      node: PostData;
    }[];
  };
}

export default function usePostsQuery() {
  const { posts } = useStaticQuery<PostsQueryData>(postsQuery);
  return posts.edges;
}

const postsQuery = graphql`
  query PostsQuery {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
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
              publicURL
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
