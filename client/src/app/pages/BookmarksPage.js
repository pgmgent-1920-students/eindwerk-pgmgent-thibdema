import React, { } from 'react';

import { BookmarksList } from '../components/bookmark';

const BookmarksPage = ({children}) => {
  return (
    <div className="page page--bookmarks">
      <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Bookmarks</h1>
            </div>
          </div>
        <BookmarksList />
      </div>
    </div>
  );
};

export default BookmarksPage;