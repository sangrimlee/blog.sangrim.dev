import { IconType } from 'types';

interface SocialInfo {
  icon: IconType;
  color: string;
  url: (username: string) => string;
}

export const SOCIAL_ORDER = [
  'mail',
  'github',
  'linkedin',
  'twitter',
  'facebook',
];

export const SOCIAL_INFO: { [key: string]: SocialInfo } = {
  mail: {
    icon: 'MailIcon',
    color: '#333',
    url: (username: string) => `mailto:${username}`,
  },
  twitter: {
    icon: 'TwitterIcon',
    color: '#1da1f2',
    url: (username: string) => `https://twitter.com/${username}`,
  },
  github: {
    icon: 'GithubIcon',
    color: '#333',
    url: (username: string) => `https://github.com/${username}`,
  },
  facebook: {
    icon: 'FacebookIcon',
    color: '#1877f2',
    url: (username: string) => `https://www.facebook.com/${username}`,
  },
  linkedin: {
    icon: 'LinkedInIcon',
    color: '#0077b5',
    url: (username: string) => `https://www.linkedin.com/in/${username}`,
  },
} as const;
