import React from 'react';
import '../../static/static.css';

const fundraise = () => {
  return (
    <div className='container mt-3 mb-4'>
      <div className='row mt-5'>
        <div className='col-lg-12 col-sm-12 text-center'>
          <h3 className='whatwe'>The leader in helping the young</h3>
        </div>
      </div>
      <div className='row  justify-content-center '>
        <div className='col-lg-3 col-sm-12 mt-5 '>
          <div className='row'>
            <div className='col-2 icon-div'>
              <i className='fas fa-globe fa-2x'></i>
            </div>
            <div className='col-10'>
              <h6 className='wewhat-title'>Worldwide leader</h6>
              <p>
                S.H.E.W is trusted around the world for its simple,
                reliable Helping schemes.
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-sm-12 mt-5'>
          <div className='row'>
            <div className='col-2 icon-div'>
              <i class='fas fa-headset fa-2x'></i>>
            </div>
            <div className='col-10'>
              <h6 className='wewhat-title'>24/7 expert advice</h6>
              <p>
                Our best-in-class Customer Happiness agents will answer your
                questions, day or night
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-sm-12 mt-5'>
          <div className='row'>
            <div className='col-2 icon-div'>
              <i class='fas fa-hand-holding-usd fa-2x'></i>
            </div>
            <div className='col-10'>
              <h6 className='wewhat-title'>Social reach</h6>
              <p>
               We harness the power of social media to spread your story and get
                more support.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center">
      <a href="/About" className="btn btn-lg donate-btn px-5">Donate Today!</a>
      </div>
    </div>
  );
};

export default fundraise;
