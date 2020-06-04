import React from 'react';

import CoronaFestivalLogo from '../../images/logo.png';
import CoronaFestivalLogoTekst from '../../images/logo+text.png';

import './Logo.scss';

const Logo = ({type}) => {
  return(
      <img className="logo" src={(type === "text") ? CoronaFestivalLogoTekst : CoronaFestivalLogo } alt="logo Corona Festival"/>
  );
};

export default Logo;