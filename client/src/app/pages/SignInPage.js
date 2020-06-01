import React, {useState} from 'react';
import { useAuth } from '../services/firebase/auth.services';

const SignInPage = ({children}) => {
  const [signInForm, setSignInForm] = useState({
    txtEmail: '',
    txtPassword: ''
  });
  const {currentUser,signInWithEmailAndPassword,signOut} = useAuth();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const result = await signInWithEmailAndPassword(signInForm.txtEmail, signInForm.txtPassword);
    console.log(result);
  }

  const handleInputChange = async (ev) => {
    setSignInForm({
      ...signInForm,
      [ev.target.name]: ev.target.value
    })
  };

  return (
    <div className="page page--sign-in">
      <div className="container">
        <div className="row">
          <div className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
            <form onSubmit={(ev) => handleSubmit(ev)}>
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
            </form>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default SignInPage;