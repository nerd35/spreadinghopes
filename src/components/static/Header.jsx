import React from 'react';
import './static.css';

const Header = () => {
  return (
    <div className='container-fluid hearder-hero'>
      <div className='container'>
        <div className=' row'>
          <div className='col-lg-5 mt-5 ml-auto mr-5 col-sm-12'>
            <div className=' mt-5 hero-title bg-light'>
              <div className='mt-5 '>
                <h1 className='mt-5 ml-3'>
                  <span className='mt-5 '>
                    TOGETHER, WE CAN CHANGE THE WORLD
                  </span>
                  <strong className='text-danger'>
                    <br /> WITH S.H.E.W{' '}
                  </strong>
                </h1>
              </div>
            </div>
            <div>
              <a
                href='/'
                className='btn btn-danger btn-lg px-3 text-light px-5 text-center'
              >
                Donate Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
