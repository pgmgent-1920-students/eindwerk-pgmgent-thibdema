import React, { } from 'react';
import { Link, NavLink  } from 'react-router-dom';

import CourtesyNavigation from './CourtesyNavigation';

import * as Routes from '../../routes';

import './Header.scss';

const Header = ({children}) => {

  return (
    <header className="app-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
        <h1 className="navbar-brand">
          <Link to={Routes.LANDING} className="logo__link">Graduaat Programmeren</Link>
        </h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto justify-content-end flex-grow-1">
            <li className="nav-item">
              <NavLink to={Routes.HOME} className="nav-link" activeClassName="active">Home</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink to={Routes.MESSAGES} className="nav-link" activeClassName="active">Messages</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink to={Routes.BOOKMARKS} className="nav-link" activeClassName="active">Bookmarks</NavLink>
            </li>          
            <li className="nav-item">
              <NavLink to={Routes.POKEMONS} className="nav-link" activeClassName="active">Pokemons</NavLink>
            </li> 
          </ul>
          <CourtesyNavigation />
        </div>
      </nav>
    </header>
  );
};

export default Header;
