import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';

import {useFirestore} from '../services';
import {DisplayCard} from '../components';

const CategoryDetailPage = () => {
  const {getGenre, getLivestreamsFromGenre} = useFirestore();
  const params = useParams();
  const id = params.id;

  const [inputValue, setInputValue] = useState('');
  const [totalLivestreams, setTotalLivestreams] = useState();
  const [livestreams, setLivestreams] = useState();


  useEffect(() => {
    const fetchData = async () => {
      const genreData = await getGenre(id);
      const getLivestreams = await getLivestreamsFromGenre(genreData.genre);
      setTotalLivestreams(getLivestreams);
      setLivestreams(livestreams);
    }
    fetchData();
  }, []);

  const handleChanges = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    const overigeLivestreams = totalLivestreams.filter((ev) => ev.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setLivestreams(overigeLivestreams);
  }


  const showContent = () => {
    switch (inputValue) {
      case '':
        if(!!totalLivestreams) {
          return(totalLivestreams.map((e, index) => <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"><DisplayCard data={e} /></div>));
        } else {
          return(<div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div>);
        }
        break;
    
      default:
        if(!!livestreams) {
          return(livestreams.map((e, index) => <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"><DisplayCard data={e} /></div>));
        } else {
          return(<div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div>);
        }
        break;
    }
  }
 
  return(
    <div className="page CategoryDetailPage">
      <form className="container">
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