import { PageURLType } from './url';

export interface NavItem {
  label: string;
  to: PageURLType;
  partiallyActive?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: '홈',
    to: 'HOME',
  },
  {
    label: '포스트',
    to: 'POST',
    partiallyActive: true,
  },
  {
    label: '태그',
    to: 'TAG',
    partiallyActive: true,
  },
  {
    label: '소개',
    to: 'ABOUT',
    partiallyActive: true,
  },
];
