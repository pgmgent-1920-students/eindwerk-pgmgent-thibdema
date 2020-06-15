import React from 'react';
import {Link} from 'react-router-dom';

import './BrowseCard.scss';

const BrowseCard = (data) => {
  const content = data.data;
  return(
    <Link to={`/stream/specific/${content.id}`} className="browseCard d-flex flex-column">
      <div className="browseCard__image" style={{backgroundImage: `url(${content.thumbnail})`}}>
      </div>
      <h5 className="browseCard__title">
        {content.genre}
      </h5>
    </Link>
  );
}

export default BrowseCard;