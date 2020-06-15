import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import * as Routes from '../../routes';
import {useFirestore} from '../../services';

const DeleteModal = ({streamID}) => {
  const {deleteLivestream} = useFirestore();
  const [redirecter, setRedirecter] = useState();

  const deleteStream = async () => {
    await deleteLivestream(streamID);
    await setRedirecter(<Redirect to={Routes.HOME} />);
  };

  return(
    <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      {(!!redirecter) ? redirecter : ''}
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Are you sure you want to delete this stream ?</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-footer d-flex justify-content-center align-items-center">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">No thanks</button>
            <button onClick={(e) => deleteStream(e)} type="button" className="btn btn-danger" data-dismiss="modal">Delete stream</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;