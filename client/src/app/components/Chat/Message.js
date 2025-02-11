import React, { useEffect, useState } from 'react';
import {Redirect} from 'react-router-dom';

import { useAuth } from '../../services';
import Bot from '../../images/bot.png';

import './Message.scss';

const Message = (content) => {
  const { currentUser } = useAuth();
  const data = content.content;
  const date = new Date(data.created_At);
  const [userID, setUserID] = useState();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (!!currentUser) ? setUserID(currentUser.uid) : setUserID(false);
  }, [currentUser]);

  const timeTwoDigits = (number) => {
    let Val;
    (number < 10) ? Val = `0${number}` : Val = number;
    return Val;
  }

  return(
    <div>
      {(!!redirect) ? <Redirect to={`/user/${data.uid}`}> </Redirect> : '' }
      {(!!data) ?
        <div className={(userID === data.userID) ? 'message yourself' : 'message'}>
          <span className="message__time">{timeTwoDigits(date.getHours())}:{timeTwoDigits(date.getMinutes())}</span>
          <span className="message__content">{data.message}</span>
          <img className="thumbnail" onClick={() => setRedirect(true)} style={{cursor: 'pointer'}} src={data.ownerThumbnail} alt={data.displayName} title={data.displayName}/>
        </div>
        : 
        <div className="message">
          <span className="message__time">Now</span>
          <span className="message__content">No messages yet</span>
          <abbr title="Bot"><img className="thumbnail" src={Bot} alt="Bot" title="Bot"/></abbr>
        </div>
      }  
    </div>
  );
}

export default Message;