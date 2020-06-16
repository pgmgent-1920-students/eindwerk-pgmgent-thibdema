import React, { useState } from 'react';

import {Account, Personalize} from '../components';

import './SettingsPage.scss';

const SettingsPage = () => {
  const [activePage, setActivePage] = useState('account');
  
  const changePage = (e) => {
    setActivePage(e.target.innerHTML);
  };

  const getContent = () => {
    switch (activePage) {
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
      <div className="settings__nav">
        <div className="container">
          <span onClick={(e) => changePage(e)} className={(activePage === 'account') ? "settings__nav__item active" : "settings__nav__item" }>account</span>
          <span onClick={(e) => changePage(e)} className={(activePage === 'personalize') ? "settings__nav__item active" : "settings__nav__item" }>personalize</span>
        </div>
      </div>
      <div className="container settings__content">
        {getContent()}
      </div>
    </div>
  );
};

export default SettingsPage;