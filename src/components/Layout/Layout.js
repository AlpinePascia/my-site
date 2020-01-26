import React from 'react';
import { root } from './Layout.module.scss';
import Header from '../Header';
import Footer from '../Footer';


const Layout = ( { children }) => {
  return (
    <div className={root}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
