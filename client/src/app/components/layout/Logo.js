import React from 'react';

import { PREFIX } from '../../routes';

import './Logo.scss';

const Logo = ({type}) => {
  console.log(PREFIX)
  return(
      <img className="logo" src={(type == "text") ? PREFIX + "/logo+text.png" : PREFIX + "/logo.png"} alt="logo Corona Festival"></img>
  );
};

export default Logo;