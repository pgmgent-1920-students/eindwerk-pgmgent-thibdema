import React, { useState } from 'react';
import { useProxyContext, useFirestore } from '../services';

function SEOSearchForm({searchResult}) {
  const [url, setUrl] = useState('');
  const {getSEOFromUrl} = useProxyContext();
  const {addBookmark} = useFirestore();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const result = await getSEOFromUrl(url);
    searchResult(result);

    if (result) {
      const docRef = await addBookmark(result);
      console.log(docRef);
    }
  };

  return (
    <div className="row seo-search-form">
      <div className="col-12 col-lg-6">
        <form onSubmit={handleSubmit}>
          <input type="text" value={url} onChange={(ev) => setUrl(ev.target.value)} />
          <input type="submit" value="Get SEO Information" />
        </form>
      </div>
    </div>
  );
}

export default SEOSearchForm;
