import React from 'react';

import { HREF_ORIGIN } from '../../routes';

import './Logo.scss';

const Logo = ({type}) => {
  return(
      <img className="logo" src={(type == "text") ? HREF_ORIGIN + "/logo+text.png" : HREF_ORIGIN + "/logo.png"} alt="logo Corona Festival"></img>
  );
};

export default Logo;