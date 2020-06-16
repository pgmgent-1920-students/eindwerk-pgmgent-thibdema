import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import {Account, Personalize} from '../components';
import {useAuth} from '../services';
import * as Routes from '../routes';

import './SettingsPage.scss';

const SettingsPage = () => {
  const [activePage, setActivePage] = useState('account');
  const {currentUser} = useAuth();

  const changePage = (e) => {
    setActivePage(e.target.innerHTML);
  };

  const getContent = () => {
    switch (activePage.toLowerCase()) {
      case 'account':
        return <Account />;
      case 'personalize':
        return <Personalize />; 
      default:
        return <Account />;
    };
  };

  return(
    <div className="settings">
      {(!currentUser) ? <Redirect to={Routes.LANDING} /> : ''}
      <div className="settings__nav">
        <div className="container d-flex">
          <p onClick={(e) => changePage(e)} className={(activePage === 'account') ? "settings__nav__item active" : "settings__nav__item" }>account</p>
          <p onClick={(e) => changePage(e)} className={(activePage === 'personalize') ? "settings__nav__item active" : "settings__nav__item" }>personalize</p>
        </div>
      </div>
      <hr style={{margin: '-4px 0 2rem 0', borderTop: '4px solid rgba(255, 255, 255, 0.5)', zIndex: '998'}} />
      <div className="container settings__content">
        {getContent()}
      </div>
    </div>
  );
};

export default SettingsPage;