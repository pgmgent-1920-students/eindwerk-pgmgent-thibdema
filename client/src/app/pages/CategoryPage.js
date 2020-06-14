import React, { useEffect, useState } from 'react';

import {CategoryCard} from '../components';
import {useFirestore} from '../services';

const CategoryPage = () => {
  const [totalGenres, setTotalGenres] = useState();
  const [genres, setGenres] = useState();
  const [inputValue, setInputValue] = useState('');
  
  const {getGenres} = useFirestore();

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await getGenres();
      setGenres(data);
      setTotalGenres(data);
    }
    fetchGenres();
  }, []);

  const handleChanges = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    const overigeGenres = totalGenres.filter((ev) => ev.genre.toLowerCase().includes(e.target.value.toLowerCase()));
    setGenres(overigeGenres);
  };

  return(
    <div className="page categoryPage">
      <form className="container">
        <label>Search genre</label>
        <input onChange={(e) => handleChanges(e)} className="form-control" id="searchGenres" name="searchGenres" type="text" placeholder="Search.." value={inputValue} />
        <div className="categories row">
          {(!!genres) ? 
            genres.map((e, index) => <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">{CategoryCard(e)}</div>) 
            : 
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          }
        </div>
      </form>
    </div>
  );
};

export default CategoryPage;