import React, { } from 'react';
import { Link  } from 'react-router-dom';

import * as Routes from '../../routes';

import './Footer.scss';

const Footer = ({children}) => {
  return (
    <footer className="app-footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to={Routes.HOME} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={Routes.MESSAGES} className="nav-link">Messages</Link>
              </li>
              <li className="nav-item">
                <Link to={Routes.BOOKMARKS} className="nav-link">Bookmarks</Link>
              </li>
              <li className="nav-item">
                <Link to={Routes.AUTH_SIGN_IN} className="nav-link">Sign-In</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-3">3</div>
          <div className="col-12 col-md-4 col-lg-6">6</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
