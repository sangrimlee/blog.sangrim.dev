import { graphql, useStaticQuery } from 'gatsby';
import { ProfileData } from 'types';

interface ProfileQueryData {
  profileYaml: ProfileData;
}

export default function useProfileQuery() {
  const { profileYaml: profile } =
    useStaticQuery<ProfileQueryData>(profileQuery);
  return profile;
}

const profileQuery = graphql`
  query ProfileQuery {
    profileYaml {
      name
      job
      short
      introduction
      profileImage {
        publicURL
        childImageSharp {
          gatsbyImageData(
            height: 192
            width: 192
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 95
          )
        }
      }
      skills {
        name
        image {
          childImageSharp {
            gatsbyImageData(
              height: 256
              width: 256
              placeholder: BLURRED
              formats: [AUTO, WEBP]
              quality: 95
            )
          }
        }
      }
      social {
        facebook
        github
        linkedin
        mail
        twitter
      }
    }
  }
`;
