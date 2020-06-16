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
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
              <div className="img-fluid rounded-circle round-img" style={{backgroundImage: 'url(https://s3-storage.textopus.nl/wp-content/uploads/2018/03/05134926/apple-music-muzieknoot-neon.jpg)'}}>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4">Let there be some music!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
              <div className="img-fluid rounded-circle round-img" style={{backgroundImage: 'url(https://static1.qmusic.medialaancdn.be/3/fd/0d/85/1425046/DSC06741__1_.jpg)'}}>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4">Perform as artist !</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gradient-primary-to-secondary py-10" style={{backgroundColor: 'var(--dark-blue)'}}>
        <div className="container">
            <div className="row text-center justify-content-center">
                <div className="col-lg-8" style={{marginTop: '5rem'}}>
                    <h2 className="display-4 text-white font-weight-500">Get the app!</h2>
                    <p className="lead text-white-50 mb-5">Watch and listen livestreams on your device with our new mobile app!</p>
                    <div className="mb-5 mb-lg-0">
                        <a className="mr-3" href="/linktoapp" target="_blank" rel="noopener noreferrer"><img src="https://themes.startbootstrap.com/sb-ui-kit-pro/assets/img/app-store-badge.svg" alt="ios app" style={{height: '3rem'}} /></a><a href="/linktoapp" target="_blank" rel="noopener noreferrer"><img src="https://themes.startbootstrap.com/sb-ui-kit-pro/assets/img/google-play-badge.svg" alt="android app" style={{height: '3rem'}} /></a>
                        <div className="page-header-text mt-2 text-xs font-italic text-white-50">* Requires Android OS 4.3+ or Apple iOS 9.3+</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="svg-border-rounded text-light">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
        </div>
      </section>
    </div>
  );
};

export default HomePage;