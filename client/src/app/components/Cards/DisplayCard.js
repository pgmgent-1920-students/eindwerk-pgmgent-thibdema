import React from 'react';
import {Link} from 'react-router-dom';

import './DisplayCard.scss';

const DisplayCard = ({data}) => {
  return(
    <Link to={`/stream/specific/${data.id}`} className="displayCard d-flex flex-column">
      <div className="displayCard__image" style={{backgroundImage: `url(${data.thumbnail})`}}>
      </div>
      <h5 className="displayCard__title">
        {data.title}
      </h5>
    </Link>
  );
}

export default DisplayCard;