import React, { Fragment } from 'react';

function SEOSearchResult({data}) {
  return (
    <div className="seo-search-result">
      {!!data
      ? <div className="">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <picture>
            <img src={data.image} alt={data.title} />
          </picture>
        </div>
      : <Fragment></Fragment>}
    </div>
  );
}

export default SEOSearchResult;
