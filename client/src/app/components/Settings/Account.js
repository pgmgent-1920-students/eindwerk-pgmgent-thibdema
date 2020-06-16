import React from 'react';

import * as Box from './Boxes';

import './Account.scss';

const Account = () => {
  return(
    <div className="account row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        {Box.ChangeEmail()}
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        {Box.ChangePassword()}
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        {Box.ChangeThumbnail()}
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        {Box.ChangeUsername()}
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        {Box.DeleteAccount()}
      </div>
    </div>
  );
};

export default Account;