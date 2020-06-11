import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';

import { useAuth } from '../services/firebase/auth.services';
import * as Routes from '../routes';

import { ForgotPasswordPopup } from '../components';

import './SigninPage.scss';

const SignInPage = ({children}) => {

  const [loginError, setLoginError] = useState('');

  const [signInForm, setSignInForm] = useState({
    txtEmail: '',
    txtPassword: ''
  });
  const {currentUser,signInWithEmailAndPassword} = useAuth();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const result = await signInWithEmailAndPassword(signInForm.txtEmail, signInForm.txtPassword);
    (result.content) ? setLoginError(result.content) : setLoginError(false);
  }

  const handleInputChange = async (ev) => {
    setSignInForm({
      ...signInForm,
      [ev.target.name]: ev.target.value
    })
  };

  return (
    <div className="page big-padding signin">
      {(!!currentUser) ? <Redirect from={Routes.HOME} to={Routes.LANDING}/> : '' }
      <div className="container">
        <div className="row">
          <div className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
            <form className="signin__form niceDesignedForm" onSubmit={(ev) => handleSubmit(ev)}>
              {(loginError) ? <div className="alert alert-danger" role="alert">{loginError}</div> : ''}
              <div className="form-group">
                <label htmlFor="txtEmail">Email address</label>
                <input type="email" className="form-control" id="txtEmail" name="txtEmail"  aria-describedby="emailHelp" onChange={handleInputChange} value={signInForm.txtEmail} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="txtPassword">Password</label>
                <input type="password" className="form-control" id="txtPassword" name="txtPassword" onChange={handleInputChange} value={signInForm.txtPassword} />
              </div>
              <button type="submit" className="btn btn-primary">Sign In</button>
              <span className="forgot-password text-info" data-toggle="modal" data-target="#forgotPassword">
                Forgot password ?
              </span>
            </form>
            <ForgotPasswordPopup/>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default SignInPage;