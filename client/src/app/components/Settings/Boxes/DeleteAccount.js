import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import * as Routes from '../../../routes';
import {useAuth} from '../../../services';

const DeleteAccount = () => {
  const {deleteUserAccount} = useAuth();
  const [error, setError] = useState();
  const [redirecter, setRedirecter] = useState();
  const [inputValue, setInputValue] = useState('');

  const handleChanges = (e) => {
    setInputValue(e.target.value);
  };

  const deleteAccount = async (e) => {
    const deleteAcc = await deleteUserAccount();
    if(!deleteAcc) {
      setRedirecter(<Redirect to={Routes.LANDING} />)
    } else {
      setError(deleteAcc);
    }
  };

  return(
    <div className="deleteAccount">
      {(!!redirecter) ? redirecter : '' }
      <div className="account__section">
        <h5 className="account__section__title">Delete account</h5>
        <form id="deleteAccount" className="account__section__box d-flex flex-column">
          {(!!error) ? <p style={{color:'var(--yt-red)', textAlign:'center'}}>{error}</p> : '' }
          <div className="form-group">
            <label htmlFor="del">Type DELETE:</label>
            <input onChange={(e) => handleChanges(e)} required type="text" name="del" className="form-control" placeholder="DELETE" value={inputValue} />
          </div>
          {(inputValue === 'DELETE') ? 
            <button type="button" className="btn btn-danger align-self-center" data-toggle="modal" data-target="#deleteAccountModal">Delete account</button> 
          :
            ''
          }
        </form>
      </div>

      {/* Delete Modal */}
      <div className="modal fade" id="deleteAccountModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle" style={{color: 'var(--dark)'}}>Are you sure you want to delete this account ?</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-footer d-flex justify-content-center align-items-center">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">No thanks</button>
              <button onClick={(e) => deleteAccount(e)} type="button" className="btn btn-danger" data-dismiss="modal">Delete account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;