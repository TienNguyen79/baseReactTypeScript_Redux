import React, { ReactNode } from 'react';
import Header from './Header/Header';

export type PropsLayout = {
  children: ReactNode;
};

function Layout({ children }: PropsLayout) {
  return (
    <div className="layout">
      <Header />
      <div className="wrapper">{children}</div>
    </div>
  );
}

export default Layout;
