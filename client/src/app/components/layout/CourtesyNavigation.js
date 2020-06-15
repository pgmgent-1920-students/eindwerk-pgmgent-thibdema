import React, { } from 'react';

import { Link } from 'react-router-dom';
import * as Routes from '../../routes';

import { useAuth } from '../../services/firebase/auth.services';

import './CourtesyNavigation.scss';

const CourtesyNavigation = ({children}) => {
  const {currentUser, signOut} = useAuth();

  return (
    <ul className="navbar-nav courtesy-navigation">
      <li className="nav-item mobile-pad">
        {!!currentUser
        ? <div className="btn-group">
            <button type="button" className="btn dropdown-toggle flexing cts-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="profile__picture" src={currentUser.photoURL} alt={currentUser.displayName} />
              <span className="displayName">{currentUser.displayName}</span>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <Link to={Routes.ACCOUNT} className="dropdown-item">Account</Link>
              <Link to={Routes.SETTINGS} className="dropdown-item">Settings</Link>
              <div className="dropdown-divider"></div>
              <Link to={Routes.HOME} className="dropdown-item" onClick={signOut}>Logout</Link>
            </div>
          </div>
        : 
          <div className="navbar-nav flexing">
            <Link className="nav-link" to={Routes.AUTH_SIGN_IN}>Login</Link>
            /
            <Link className="nav-link" to={Routes.REGISTER}>Register</Link>
          </div>
        }        
      </li>
    </ul>
  );
};

export default CourtesyNavigation;
