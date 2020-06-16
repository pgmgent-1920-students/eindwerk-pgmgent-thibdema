import React, {useState} from 'react';

import { useHistory} from 'react-router-dom';

import {useAuth} from '../../../services';

const ChangeUsername = () => {
  const {currentUser, updateUserUsername} = useAuth();
  const [error, setError] = useState();
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(inputValue !== currentUser.displayName && !!inputValue) {
      const updateUsername = await updateUserUsername(inputValue);
      if(!!updateUsername) {
        setError(updateUsername);
      } else {
        setError(false);
        history.go();
      }
    } else {
      setError("You didn't change your username.");
    }
  };

  const handleChanges = (e) => {
    setInputValue(e.target.value);
  };

  return(
    <div className="changeUsername">
      <div className="account__section">
        <h5 className="account__section__title">Change username</h5>
        <form onSubmit={(e) => handleSubmit(e)} id="changeUsername" className="account__section__box d-flex flex-column">
          {(!!error) ? <p style={{color:'var(--yt-red)', textAlign:'center'}}>{error}</p> : '' }
          <div className="form-group">
            <label htmlFor="newUsername">New username:</label>
            <input onChange={(e) => handleChanges(e)} required type="text" name="newUsername" className="form-control" placeholder={currentUser.displayName} value={inputValue} />
          </div>
          <button type="submit" className="btn btn-primary align-self-center">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangeUsername;