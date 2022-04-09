import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  size?: 'md' | 'lg' | 'xl';
}

export default function Layout({ children, size = 'xl' }: LayoutProps) {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <div className={`layout container ${size}`}>{children}</div>
      </main>
      <Footer />
    </React.Fragment>
  );
}
