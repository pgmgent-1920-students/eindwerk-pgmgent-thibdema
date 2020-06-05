import React, { useEffect } from 'react';

import {useAuth, useFirestore} from '../services';

import './Home.scss';

const Home = ({children}) => {
  const {getLivestreams} = useFirestore();

  useEffect(() => {
    const fetchLivestreams = async () => {
      const data = await getLivestreams();
      console.log(data)
    }

    fetchLivestreams();
  }, []);



  return (
    <div className="page page--home">
      <section className="pt-4 pt-md-11 featured">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-2">
              Iets anders              
            </div>
            <div className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate">
              <h1 className="display-3 text-center text-md-left">
                 <span className="font-weight-bold">Firebase React Boilerplate</span>. <br />
                Firebase everything.
              </h1>              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;