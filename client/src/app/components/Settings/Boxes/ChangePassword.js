import React, {useState} from 'react';

import { useHistory} from 'react-router-dom';

import {useAuth} from '../../../services';

const ChangePassword = () => {
  const {currentUser, updateUserPassword} = useAuth();
  const [error, setError] = useState();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector('#changePassword');
    let formData = new FormData(form);
    const newPassword = formData.get('newPassword'), confirmPassword = formData.get('confirmPassword');
    if(newPassword === confirmPassword) {
      const updatePassword = await updateUserPassword(newPassword);
      if(!!updatePassword) {
        setError(updatePassword);
      } else {
        setError(false);
        history.go();
      }
    } else {
      setError('You gave up 2 different passwords.')
    }
    console.log(currentUser);
  };

  return(
    <div className="changePassword">
      <div className="account__section">
        <h5 className="account__section__title">Change password</h5>
        <form onSubmit={(e) => handleSubmit(e)} id="changePassword" className="account__section__box d-flex flex-column">
          {(!!error) ? <p style={{color:'var(--yt-red)', textAlign:'center'}}>{error}</p> : '' }
          <div className="form-group">
            <label htmlFor="newPassword">New password:</label>
            <input required type="password" name="newPassword" className="form-control" placeholder="New password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input required type="password" name="confirmPassword" className="form-control" placeholder="Confirm password" />
          </div>
          <button type="submit" className="btn btn-primary align-self-center">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;