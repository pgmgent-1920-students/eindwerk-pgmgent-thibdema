import React from 'react';
import {Link} from 'react-router-dom';

import './DefaultCard.scss';

const DefaultCard = ({data}) => {
  return(
    <Link to={`/stream/specific/${data.id}`} className="DefaultCard">
      <div className="left-part">
        <div className="thumbnail" style={{backgroundImage: `url(${data.thumbnail})`}}>
          
        </div>
      </div>
      <div className="stream">
        <div className="owner">
          <img src={data.ownerThumbnail} className="owner__thumbnail"/>
          <span className="owner__displayName">{data.owner}</span>
        </div>
        <h4 className="stream__title">{data.title}</h4>
        <h5 className="stream__genre">{data.genre}</h5>
        <p className="stream__description">{data.description}</p>
      </div>
    </Link>
  );
}

export default DefaultCard;