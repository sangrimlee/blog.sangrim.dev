import React from 'react';
import { Link } from 'gatsby';
import { SVGIcon, ThemeSwitch } from 'components/common';
import { PAGE_URL } from 'constants/url';
import { NAV_ITEMS } from 'constants/nav';

interface MobileNavigationProps {
  onClose: () => void;
}

export default function MobileNavigation({ onClose }: MobileNavigationProps) {
  return (
    <nav className="mobile-nav">
      <div className="mobile-nav-inner">
        <div className="header-util py-4">
          <button onClick={onClose} aria-label="모바일 메뉴 닫기">
            <SVGIcon icon="CloseIcon" size={24} />
          </button>
        </div>
        <div className="mobile-list-wrap">
          <ul>
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
        </div>
        <div className="mobile-nav-util">
          <a href="https://github.com/sangrimlee" target="_blank">
            <SVGIcon icon="GithubIcon" size={24} />
          </a>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
