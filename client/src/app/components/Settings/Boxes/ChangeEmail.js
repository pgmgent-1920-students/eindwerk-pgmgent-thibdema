import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';

import {useAuth} from '../../../services';

const ChangeEmail = () => {
  const {currentUser, updateUserEmail} = useAuth();
  const [error, setError] = useState();
  const history = useHistory();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = document.querySelector('#changeEmail');
    let formData = new FormData(form);
    const newEmail = formData.get('newEmail'), currentEmail = formData.get('currentEmail');
    if(currentEmail === currentUser.email) {
      const updateEmail = await updateUserEmail(newEmail);
      console.log(updateEmail);
      if(!!updateEmail) {
        setError(updateEmail);
      } else {
        setError(false);
        history.go();
      }
    } else {
      setError('You gave in a wrong email address');
    }
  };

  return(
    <div className="changeEmail">
      <div className="account__section">
        <h5 className="account__section__title">Change email</h5>
        <form onSubmit={(e) => handleSubmit(e)} id="changeEmail" className="account__section__box d-flex flex-column">
          {(!!error) ? <p style={{color:'var(--yt-red)', textAlign:'center'}}>{error}</p> : '' }
          <div className="form-group">
            <label htmlFor="currentEmail">Current email:</label>
            <input required type="email" name="currentEmail" className="form-control" placeholder={(!!currentUser) ? currentUser.email : ''}></input>
          </div>
          <div className="form-group">
            <label htmlFor="newEmail">New email:</label>
            <input required type="email" name="newEmail" className="form-control" placeholder="New email address"></input>
          </div>
          <button type="submit" className="btn btn-primary align-self-center">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangeEmail;