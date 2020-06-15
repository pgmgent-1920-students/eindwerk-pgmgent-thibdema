import React from 'react';
import {Link} from 'react-router-dom';

import './BrowseCard.scss';

const BrowseCard = (data) => {
  const content = data.data;
  return(
    <Link to={`/stream/specific/${content.id}`} className="browseCard d-flex flex-column">
      <div className="browseCard__image" style={{backgroundImage: `url(${content.thumbnail})`}}>
      </div>
      <div className="browseCard__info d-flex align-items-center">
        <img className="browseCard__info__thumbnail" src={content.ownerThumbnail} alt={`thumbnail ${content.owner}`} />
        <div className="browseCard__info__text d-flex flex-column">
          <span className="browseCard__info__text__title">
            {content.title}
          </span>
          <span className="browseCard__info__text__owner">
            {content.owner}
          </span>
          <span className="browseCard__info__text__genre">
            {content.genre}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default BrowseCard;