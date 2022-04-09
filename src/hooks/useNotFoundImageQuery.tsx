import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface NotFoundImageQueryData {
  notFoundImage: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

export default function useNotFoundImageQuery() {
  const data = useStaticQuery<NotFoundImageQueryData>(notFoundImageQuery);
  return data.notFoundImage.childImageSharp.gatsbyImageData;
}

const notFoundImageQuery = graphql`
  query NotFoundImageQuery {
    notFoundImage: file(absolutePath: { regex: "/404.png/" }) {
      childImageSharp {
        gatsbyImageData(
          width: 512
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          quality: 95
        )
      }
    }
  }
`;
