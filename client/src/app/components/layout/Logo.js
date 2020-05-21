import React from 'react';

import './Logo.scss';

const Logo = ({type}) => {
  return(
      <img className="logo" src={(type == "text") ? window.location.origin+"/logo+text.png" : window.location.origin+"/logo.png"} alt="logo Corona Festival"></img>
  );
};

export default Logo;