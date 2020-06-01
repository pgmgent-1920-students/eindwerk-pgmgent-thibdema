import React, { } from 'react';

import { Link } from 'react-router-dom';
import * as Routes from '../../routes';

import { useAuth } from '../../services/firebase/auth.services';

import './CourtesyNavigation.scss';

const CourtesyNavigation = ({children}) => {
  const {currentUser, signOut} = useAuth();

  return (
    <ul className="navbar-nav courtesy-navigation">
      <li className="nav-item">
        {!!currentUser
        ? <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="profile__picture" src={currentUser.photoURL} />
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <Link to={Routes.SETTINGS} className="dropdown-item">Settings</Link>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#" onClick={signOut}>Logout</a>
            </div>
          </div>
        : 
          <div className="navbar-nav align-items-center">
            <Link className="nav-link" to={Routes.AUTH_SIGN_IN}>Sign In</Link>
            /
            <Link className="nav-link" to={Routes.REGISTER}>Register</Link>
          </div>
        }        
      </li>
    </ul>
  );
};

export default CourtesyNavigation;
