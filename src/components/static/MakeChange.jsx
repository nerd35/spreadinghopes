import React from 'react';
import './static.css';

const MakeChange = () => {
  return (
    <div className='container mt-5 bg-dark change-section'>
      <div className=' row mt-5'>
        <div className=' col-lg-12 col-sm-12 mt-3 '>
          <h1 className='text-light  change-title'>
            MAKING CHANGES FOR EVERYONE
          </h1>
          <p className='text-light mt-3'>
            When you give to Spreading Hope Foundation,{' '}
            <span className='text-warning'>87% of every dollar </span>goes
            straight to our mission — changing the lives of millions of people
            in the
            <span className='text-warning'> U.S. and around the world.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MakeChange;
