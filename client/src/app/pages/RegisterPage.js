import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';

import { useAuth } from '../services/firebase/auth.services';

import * as Routes from '../routes';

import './RegisterPage.scss';

const RegisterPage = ({children}) => {
  const [error, setError] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    txtUsername: '',
    txtEmail: '',
    txtPassword: '',
    txtConfirmPassword: ''
  });

  const {currentUser, registerWithEmailAndPassword} = useAuth();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    (registerForm.txtPassword === registerForm.txtConfirmPassword) ? registerData()
      : setError('You gave in 2 different passwords.');
  }

  const registerData = async () => {
    const dataProcess = await registerWithEmailAndPassword(registerForm.txtEmail, registerForm.txtPassword, registerForm.txtUsername);
    (dataProcess === 'succes') ? setConfirmation(`You're account is made. Activate you're account with your email address.`) : setError(dataProcess.message) ;
  }

  const handleInputChange = async (ev) => {
    setRegisterForm({
      ...registerForm,
      [ev.target.name]: ev.target.value
    })
  };

  return (
    <div className="page big-padding sign-up">
      {(!!currentUser) ? <Redirect from={Routes.HOME} to={Routes.LANDING}/> : '' }
      <div className="container">
        <div className="row">
          <div className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
            <form onSubmit={(ev) => handleSubmit(ev)}>
              {(confirmation && !error) ? <div className="alert alert-success" role="alert">{confirmation}</div> : '' }
              {(error && !confirmation) ? <div className="alert alert-danger" role="alert">{error}</div> : '' }
              <div className="form-group">
                <label htmlFor="txtUsername">Username</label>
                <input required type="text" className="form-control" id="txtUsername" name="txtUsername" onChange={handleInputChange} value={registerForm.txtUsername} />
              </div>
              <div className="form-group">
                <label htmlFor="txtEmail">Email address</label>
                <input required type="email" className="form-control" id="txtEmail" name="txtEmail"  aria-describedby="emailHelp" onChange={handleInputChange} value={registerForm.txtEmail} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="txtPassword">Password</label>
                <input required type="password" className="form-control" id="txtPassword" name="txtPassword" onChange={handleInputChange} value={registerForm.txtPassword} />
              </div>
              <div className="form-group">
                <label htmlFor="txtPassword">Confirm password</label>
                <input required type="password" className="form-control" id="txtConfirmPassword" name="txtConfirmPassword" onChange={handleInputChange} value={registerForm.txtConfirmPassword} />
              </div>
              <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default RegisterPage;