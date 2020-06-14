import React from 'react';
import {Link} from 'react-router-dom';

import './CategoryCard.scss';

const CategoryCard = (data) => {
  
  return(
    <Link to={`/category/detail/${data.id}`} className="categoryCard d-flex flex-column">
      <div className="categoryCard__image" style={{backgroundImage: `url(${data.picture_big})`}}>
      </div>
      <h5 className="categoryCard__title">
        {data.genre}
      </h5>
    </Link>
  );
}

export default CategoryCard;