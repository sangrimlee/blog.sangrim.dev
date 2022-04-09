import React from 'react';
import { PAGE_URL } from 'constants/url';
import { NAV_ITEMS } from 'constants/nav';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="container">
          <div>
            <strong>사이트맵</strong>
            <ul className="site-list">
              {NAV_ITEMS.map(({ label, to }) => (
                <li key={label} className="mt-3 md:mr-6">
                  <Link to={PAGE_URL[to]} className="text-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom-wrap">
        <div className="container">
          <p className="copyright">
            © {new Date().getFullYear()} sangrimlee, Built with Gatsby
          </p>
        </div>
      </div>
    </footer>
  );
}
