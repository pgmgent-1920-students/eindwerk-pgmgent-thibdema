import React, { useEffect, useState } from 'react';
import { useFirestore } from '../../services';

import './MessagesList.scss';

const MessagesList = () => {
  const [messages, setMessages] = useState();
  const {getMessages} = useFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMessages();
      setMessages(data);
    }

    fetchData();    
  }, [getMessages]);

  return (
    <div className="row messages-list">
    {!!messages 
      ? messages.map((msg) => {
        return (
          <div className="col-12" key={msg.uid}>
            <article className="row message" data-id={msg.uid}>
              <span className="col-3 message__sender">
                {msg.sender}
              </span>
              <div className="col-9 message__body">
                {msg.content}
              </div>            
            </article>
          </div>
        )
      })
      : <p>No messages</p>
    }
    </div>
  );
};

export default MessagesList;