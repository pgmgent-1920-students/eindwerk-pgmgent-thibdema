import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAuth, useFirestore } from '../../services';
import { Message } from '../Chat';

import './Chat.scss';

const Chat = (docID) => {
  const [messages, setMessages] = useState(false);
  const [inputVal, setInputVal] = useState('');

  const { getChatMessages, sendMessage } = useFirestore();
  const { currentUser } = useAuth();

  const reloadChatMessagesSeconds = 5;

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await getChatMessages(docID.docID);
      setMessages(data);
    };

    fetchMessages()
    const msgInt = setInterval(() => {
      fetchMessages();
    }, reloadChatMessagesSeconds*1000);

    return () => {
      clearInterval(msgInt);
    };
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = document.querySelector('form');
    let formData = new FormData(form);
    const msg = formData.get('txtMessage');
    const sendData = {
      message: msg,
      created_At: Date.now(),
      displayName:  currentUser.displayName,
      ownerThumbnail: currentUser.photoURL,
      userID: currentUser.uid
    };
    if(msg) {
      sendMessage(sendData, docID.docID);
      setInputVal('');
    }  
  };

  const handleChange = (ev) => {
    setInputVal(ev.target.value);
  };

  return(
    <div className="chat">
      <div className="chat__title">
        Chat
      </div>
      <div className="chat__messages">
        {(!!messages) ? messages.map((e) => <Message content={e} key={uuidv4()} />) : <Message content={false}/>}
      </div>
      <form onSubmit={(ev) => handleSubmit(ev)} className="chat__input">
        <input required type="text" className="form-control" id="textMessage" name="txtMessage" placeholder="Message" value={inputVal} onChange={(ev) => {handleChange(ev)}}/>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;