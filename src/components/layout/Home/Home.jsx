import React from 'react';
import '../../static/static.css';
import Header from './Header';
import MakeChange from './MakeChange';
import WhatWe from './WhatWe.js';

const Home = () => {
  return (
    <div>
      <Header />
      <MakeChange />
      <WhatWe />
    </div>
  );
};

export default Home;
