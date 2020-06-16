import React, {useState} from 'react';

import { useHistory} from 'react-router-dom';

import {useAuth} from '../../../services';

const ChangeThumbnail = () => {
  const {currentUser, updateUserThumbnail} = useAuth();
  const [error, setError] = useState();
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(inputValue !== currentUser.photoURL && !!inputValue) {
      const updateThumbnail = await updateUserThumbnail(inputValue);
      if(!!updateThumbnail) {
        setError(updateThumbnail);
      } else {
        setError(false);
        history.go();
      }
    } else {
      setError("You didn't change the thumbnail link.");
    }
  };

  const handleChanges = (e) => {
    setInputValue(e.target.value);
  };

  return(
    <div className="changeThumbnail">
      <div className="account__section">
        <h5 className="account__section__title">Change thumbnail</h5>
        <form onSubmit={(e) => handleSubmit(e)} id="changeThumbnail" className="account__section__box d-flex flex-column">
          {(!!error) ? <p style={{color:'var(--yt-red)', textAlign:'center'}}>{error}</p> : '' }
          <div className="form-group">
            <label htmlFor="newThumbnail">Thumbnail link:</label>
            <input onChange={(e) => handleChanges(e)} required type="text" name="newThumbnail" className="form-control" placeholder={currentUser.photoURL} value={inputValue} />
          </div>
          <button type="submit" className="btn btn-primary align-self-center">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangeThumbnail;