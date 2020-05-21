import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import * as Routes from '../../routes';

import { useAuth } from '../../services/firebase/auth.services';

const Register = ({children}) => {
  const {currentUser, signOut} = useAuth();

  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        {!!currentUser
        ? <Fragment></Fragment>
        : <Link className="nav-link" to={Routes.REGISTER}>Register</Link>
        }        
      </li>
    </ul>
  );
};

export default Register;
