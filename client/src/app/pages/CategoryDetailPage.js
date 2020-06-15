import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';

import {useFirestore} from '../services';
import {DisplayCard, Loading} from '../components';
import * as Routes from '../routes';

const CategoryDetailPage = () => {
  const {getGenre, getLivestreamsFromGenre} = useFirestore();
  const params = useParams();
  const id = params.id;

  const [inputValue, setInputValue] = useState('');
  const [totalLivestreams, setTotalLivestreams] = useState();
  const [livestreams, setLivestreams] = useState();
  const [genre, setGenre] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      const genreData = await getGenre(id);
      const getLivestreams = await getLivestreamsFromGenre(genreData.genre);
      setGenre(genreData);
      setTotalLivestreams(getLivestreams);
      setLivestreams(livestreams);
    }
    fetchData();
  }, [getGenre, id, livestreams, getLivestreamsFromGenre]);

  const handleChanges = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    const overigeLivestreams = totalLivestreams.filter((ev) => ev.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setLivestreams(overigeLivestreams);
  }


  const showContent = () => {
    switch (inputValue) {
      case '':
        if(!!totalLivestreams && totalLivestreams.length > 0) {
          return(totalLivestreams.map((e, index) => <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"><DisplayCard data={e} /></div>));
        } else if (!!totalLivestreams && totalLivestreams.length === 0) {
          return(<h3 className="d-flex justify-content-center align-items-center" style={{textAlign: 'center', width: '100%', margin: '3rem 0rem'}}>This category has no livestreams at the moment.</h3>);
        } else {
          return(<Loading />);
        }    
      default:
        if(!!livestreams && livestreams.length > 0) {
          return(livestreams.map((e, index) => <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"><DisplayCard data={e} /></div>));
        } else if (!!livestreams && livestreams.length === 0) {
          return(<h3 className="d-flex justify-content-center align-items-center" style={{textAlign: 'center', width: '100%', margin: '3rem 0rem'}}>This category has no livestreams at the moment.</h3>);
        } else {
          return(<Loading />);
        }
    }
  }
 
  return(
    <div className="page CategoryDetailPage">
      <form className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to={Routes.CATEGORIES}>Categories</Link></li>
            <li className="breadcrumb-item active" aria-current="page"><Link to={`/category/detail/${genre.id}`}>{genre.genre}</Link></li>
          </ol>
        </nav>
        <label>Search livestream</label>
        <input onChange={(e) => handleChanges(e)} className="form-control" id="searchStream" name="searchStream" type="text" placeholder="Search.." value={inputValue} />
        <div className="row">
          {showContent()}
        </div>
      </form>
    </div>
  );
};

export default CategoryDetailPage;