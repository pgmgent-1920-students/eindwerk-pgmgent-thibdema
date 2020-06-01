import React, { } from 'react';

import './HomePage.scss';

const HomePage = ({children}) => {
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
                Welcome to <span className="font-weight-bold">Firebase React Boilerplate</span>. <br />
                Firebase everything.
              </h1>              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;