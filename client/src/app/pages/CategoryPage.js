import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import {CategoryCard, Loading} from '../components';
import {useFirestore} from '../services';
import * as Routes from '../routes';

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
  }, [getGenres]);

  const handleChanges = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    const overigeGenres = totalGenres.filter((ev) => ev.genre.toLowerCase().includes(e.target.value.toLowerCase()));
    setGenres(overigeGenres);
  };

  return(
    <div className="page categoryPage">
      <form className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page"><Link to={Routes.CATEGORIES}>Categories</Link></li>
          </ol>
        </nav>
        <label>Search genre</label>
        <input onChange={(e) => handleChanges(e)} className="form-control" id="searchGenres" name="searchGenres" type="text" placeholder="Search.." value={inputValue} />
        <div className="categories row">
          {(!!genres) ? 
            genres.map((e, index) => <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">{CategoryCard(e)}</div>) 
            : 
            <Loading />
          }
        </div>
      </form>
    </div>
  );
};

export default CategoryPage;