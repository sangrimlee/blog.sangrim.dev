import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetadata } from 'types';

interface SiteMetadataQueryData {
  site: {
    siteMetadata: SiteMetadata;
  };
}

export default function useSiteMetadataQuery() {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteMetadataQueryData>(siteMetadataQuery);
  return siteMetadata;
}

const siteMetadataQuery = graphql`
  query SiteMetadatQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author
        icon
        keywords
      }
    }
  }
`;
