import React, { } from 'react';

import { MessagesList } from '../components/message';

const MessagesPage = ({children}) => {
  return (
    <div className="page page--messages">
      <section className="pt-4 pt-md-11">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Messages</h1>
            </div>
          </div>
          <MessagesList />
        </div>
      </section>
    </div>
  );
};

export default MessagesPage;