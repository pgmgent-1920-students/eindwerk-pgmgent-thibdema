import React, { useEffect, useState } from 'react';

import {Loading, BrowseCard} from '../components';
import {useFirestore} from '../services';

import './BrowsePage.scss';

const BrowsePage = () => {
  const {getLivestreams} = useFirestore(); 
  const [totalLivestreams, setTotalLivestreams] = useState();
  const [currentLivestreams, setCurrentLivestreams] = useState();
  const [inputValue, setInputValue] = useState('');


  useEffect(() => {
    const fetchLivestreams = async () => {
      const data = await getLivestreams();
      setTotalLivestreams(data);
      setCurrentLivestreams(data);
    };

    fetchLivestreams();
  }, [getLivestreams]);

  const handleChanges = (e) => {
    e.preventDefault();
    const val = e.target.value;
    setInputValue(val);
    const overigeLivestreams = totalLivestreams.filter((ev) => ev.title.toLowerCase().includes(val.toLowerCase()) || ev.description.toLowerCase().includes(val.toLowerCase()) || ev.owner.toLowerCase().includes(val.toLowerCase()));
    setCurrentLivestreams(overigeLivestreams);
  };

  return(
    <div className="page browsePage">
      <div className="container">
        <form className="browsePage__header d-flex justify-content-between align-items-center">
          <h4>Popular streams</h4>
          <input onChange={(e) => handleChanges(e)} className="form-control col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" type="text" name="Search" id="Search" placeholder="Search stream" value={inputValue} />
        </form>
        <div className="row browsePage__content">
          {
            (!!currentLivestreams) ?
              currentLivestreams.map((e, index) => <div key={index} className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 browsepad"><BrowseCard data={e} /></div>)
            :
              <Loading />
          }
        </div>
      </div>
    </div>
  );
}

export default BrowsePage;