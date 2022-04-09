export const PAGE_URL = {
  HOME: '/',
  POST: '/posts',
  TAG: '/tags',
  ABOUT: '/about',
} as const;

export type PageURLType = keyof typeof PAGE_URL;
