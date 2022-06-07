import * as Icon from 'assets/svg';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export type Theme = 'light' | 'dark';

export type IconType = keyof typeof Icon;

export interface ConfigData {
  utterances: {
    repository: string;
    label: string;
  };
  countOfInitialPost: number;
  facebookAppId: string;
  twitterId: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
  author: string;
  icon: string;
  keywords: string[];
}

export interface SocialData {
  mail?: string;
  twitter?: string;
  github?: string;
  facebook?: string;
  linkedin?: string;
}

export interface SkillData {
  name: string;
  image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

export interface ProfileData {
  name: string;
  job: string;
  short: string;
  introduction: string;
  social: SocialData;
  skills: SkillData[];
  profileImage: {
    publicURL: string;
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

export interface PostFrontmatterData {
  title: string;
  description: string;
  tags: string[];
  date: string;
  thumbnail: {
    publicURL: string;
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

export interface PostData {
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: PostFrontmatterData;
}

export interface TagData {
  fieldValue: string;
  totalCount: number;
}

export interface Heading {
  id: string;
  depth: number;
  value: string;
}

export interface PostTemplateData extends PostData {
  html: string;
  headings: Heading[];
}

export interface PostNavigationData {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
}

export interface PostPageContextData {
  slug: string;
  previous?: PostNavigationData;
  next?: PostNavigationData;
}

export interface ProjectData {
  id: string;
  name: string;
  description: string;
  url?: string;
  repository?: string;
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}
