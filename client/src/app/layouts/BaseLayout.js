import React, { Fragment } from 'react';

import { Header, Footer } from '../components/layout';

const BaseLayout = ({children}) => (
  <Fragment>
    <Header />
    <main className="app-main" style={{backgroundColor: 'var(--bg-light-green)'}}>
      {children}      
    </main>
    <Footer />
  </Fragment>
);
export default BaseLayout;