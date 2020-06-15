import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'

import { useFirestore, useAuth } from '../services';
import { Chat, Loading, EditModal, DeleteModal } from '../components';

import './SpecificStreamPage.scss';

const SpecificStreamPage = () => {
  const [streamData, setStreamData] = useState(false);
  let { streamID } = useParams();
  const {getSpecificStream} = useFirestore();
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

  return(
    <div className="page specStream">
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
                  <span data-toggle="modal" data-target="#editModal" className="dropdown-item">Edit</span>
                  <span data-toggle="modal" data-target="#deleteModal" className="dropdown-item" style={{color: 'var(--yt-red)'}}>Delete</span>
                </div>
              </div>
            : 
              ''
            }

            {(!!streamData) ? <DeleteModal streamID={streamID} /> : '' }
            
            {(!!streamData) ? <EditModal streamID={streamID} content={streamData} /> : '' }

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