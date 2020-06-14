import React, { useEffect, useState } from 'react';

import { useFirestore} from '../services';

import { DefaultCard } from '../components';

import './HomePage.scss';

const HomePage = ({children}) => {
  const {getLivestreams} = useFirestore();

  const [livestreams, setLivestreams] = useState(false);

  useEffect(() => {
    const fetchLivestreams = async () => {
      const data = await getLivestreams();
      setLivestreams(data);
    }
    fetchLivestreams();
  }, [getLivestreams]);

  const bg = {
    bg1: 'https://images.unsplash.com/photo-1500305614571-ae5b6592e65d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80',
    bg2: 'https://images.unsplash.com/photo-1507120410856-1f35574c3b45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    bg3: 'https://images.unsplash.com/photo-1544194215-541c2d3561a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  };

  return (
    <div className="page--home">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" data-interval="10000">
          <div className="carousel-item active" style={{backgroundImage: `url(${bg.bg1})`}}>
            {/* <img className="d-block w-100" src={bg.bg1} alt="First slide"/> */}
            <div className="carousel-caption d-none d-md-block">
              {(livestreams[0]) ? <DefaultCard data={livestreams[0]} /> : 'Loading'}
            </div>
          </div>
          <div className="carousel-item" style={{backgroundImage: `url(${bg.bg2})`}}>
            {/* <img className="d-block w-100" src={bg.bg2} alt="Second slide"/> */}
            <div className="carousel-caption d-none d-md-block">
              {(livestreams[1]) ? <DefaultCard data={livestreams[1]} /> : 'Loading'}
            </div>
          </div>
          <div className="carousel-item" style={{backgroundImage: `url(${bg.bg3})`}}>
            {/* <img className="d-block w-100" src={bg.bg3} alt="Third slide"/> */}
            <div className="carousel-caption d-none d-md-block">
              {(livestreams[2]) ? <DefaultCard data={livestreams[2]} /> : 'Loading'}
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default HomePage;