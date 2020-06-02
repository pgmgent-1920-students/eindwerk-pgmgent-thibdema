import React, { useState } from 'react';

import { useAuth } from '../../services/firebase/auth.services';

const ForgotPasswordPopup = () => {
  const [error, setError] = useState(false);
  const [confirmation, setConfirmation] = useState(false);


  const [forgotPasswordForm, setForgotPasswordForm] = useState({
    txtForgotEmail: '',
  });
  const {resetPassword} = useAuth();

  const handleSubmitForgotPassword = async (ev) => {
    ev.preventDefault();

    const result = await resetPassword(forgotPasswordForm.txtForgotEmail);console.log(result);
    (result) ? setConfirmation(false) : setError(false) ;
    (result) ? setError(result.content) : setConfirmation(`Your new password is sended to you're emailaddress.`);
  }

  const handleInputChangeForgotPassword = async (ev) => {
    setForgotPasswordForm({
      ...forgotPasswordForm,
      [ev.target.name]: ev.target.value
    })
  };

  return(
    <div className="modal fade" id="forgotPassword" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Forgot password</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={(ev) => handleSubmitForgotPassword(ev)}>
            <div className="form-group">
              {(confirmation && !error) ? <div className="alert alert-success" role="alert">{confirmation}</div> : '' }
              {(error && !confirmation) ? <div className="alert alert-danger" role="alert">{error}</div> : '' }
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="txtForgotEmail">Email address</label>
                <input type="email" className="form-control" id="txtForgotEmail" name="txtForgotEmail"  aria-describedby="forgotEmailHelp" onChange={handleInputChangeForgotPassword} value={forgotPasswordForm.txtForgotEmail} />
              </div>
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
            <button type="submit" className="btn btn-primary">Send new password</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPopup;