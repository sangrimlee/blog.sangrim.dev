import React from 'react';
import { Link } from 'gatsby';
import { SVGIcon, ThemeSwitch } from 'components/common';
import { PAGE_URL } from 'constants/url';
import { NAV_ITEMS } from 'constants/nav';

import MobileNavigation from './MobileNavigation';
import useMobileNavigation from 'hooks/useMobileNavigation';

export default function Header() {
  const [onMobileNavigationOpen, onMobileNavigationClose] =
    useMobileNavigation();
  return (
    <header className="header">
      <div className="header-inner">
        <div>
          <Link to={PAGE_URL.HOME}>
            <span className="font-['D2Coding']">blog.sangrim.dev</span>
          </Link>
        </div>
        <nav className="header-nav">
          <ul className="header-nav-list">
            {NAV_ITEMS.map(({ label, to, partiallyActive }, index) => (
              <li key={index}>
                <Link
                  to={PAGE_URL[to]}
                  className="nav-link"
                  activeClassName="active"
                  partiallyActive={partiallyActive}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="desktop">
          <div className="header-util">
            <a
              href="https://github.com/sangrimlee"
              target="_blank"
              aria-label="Github 열기"
            >
              <SVGIcon icon="GithubIcon" size={24} />
            </a>
            <ThemeSwitch />
          </div>
        </div>
        <div className="mobile">
          <div className="header-util">
            <button
              aria-label="모바일 메뉴 열기"
              onClick={onMobileNavigationOpen}
            >
              <SVGIcon icon="HamburgerIcon" size={24} />
            </button>
          </div>
        </div>
      </div>
      <MobileNavigation onClose={onMobileNavigationClose} />
    </header>
  );
}
