import React, { useEffect, useState } from 'react';
import { Link, useParams, Redirect} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'

import { useFirestore, useAuth } from '../services';
import { Chat, Loading } from '../components';
import * as Routes from '../routes';

import './SpecificStreamPage.scss';

const SpecificStreamPage = () => {
  const [streamData, setStreamData] = useState(false);
  const [redirecter, setRedirecter] = useState();
  let { streamID } = useParams();
  const {getSpecificStream, deleteLivestream} = useFirestore();
  const {currentUser} = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSpecificStream(streamID);
      setStreamData(data);
    };

    fetchData();
  }, [getSpecificStream, streamID]);

  const displayTime = (time) => {
    const date = new Date(time);
    return `${timeTo2Digits(date.getHours())}:${timeTo2Digits(date.getMinutes())}`
  }

  const timeTo2Digits = (number) => {
    let newNumber;
    (number > 9) ? newNumber = `${number}` : newNumber = `0${number}`;
    return newNumber;
  };

  const deleteStream = async (e) => {
    await deleteLivestream(streamID);
    await setRedirecter(<Redirect to={Routes.HOME} />);
  };

  return(
    <div className="page specStream">
      {(!!redirecter) ? redirecter : ''}
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="specStream__iframe">
              {(streamData) ? 
                ReactHtmlParser(streamData.iframe)
                : 
                <Loading />
              }
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <Chat docID={streamID} />
          </div>
        </div>
        <div className="specStream__usercontent">
          <div className="row specStream__info">
            {(!!streamData && !!currentUser && streamData.ownerID === currentUser.uid) ?
              <div className="dropdown more">
                <i className="fas fa-ellipsis-v" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" to="#">Edit</Link>
                  <Link data-toggle="modal" data-target="#deleteModal" className="dropdown-item" to="#" style={{color: 'var(--yt-red)'}}>Delete</Link>
                </div>
              </div>
            : 
              ''
            }

            {/* <!-- Modal --> */}
            <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                    <button onClick={(e) => deleteStream(e)} type="button" className="btn btn-danger" data-dismiss="modal">Save changes</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
              <h2 style={{textAlign: 'left', margin: '0rem 0rem 0rem 0.1rem'}}>{streamData.title}</h2>
              <p style={{margin: '0.75rem 0.25rem', wordWrap: 'break-word'}}>
                {streamData.description}
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <Link to={`/user/${streamData.ownerID}`} style={{width: '100%', marginBottom:'1rem'}} className="d-flex align-items-center">
                <img className="thumbnail" src={streamData.ownerThumbnail} alt={`thumbnail ${streamData.owner}`} />
                <span className="specStream__info__owner">{streamData.owner}</span>
              </Link>
              <span className="specStream__info__time" style={{width: '100%', marginLeft: '0.25rem'}}>
                <b style={{fontSize: '1.1rem'}}>Time: </b>{displayTime(streamData.startDate)} - {displayTime(streamData.expirationDate)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SpecificStreamPage;