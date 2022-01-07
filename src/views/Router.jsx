import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './home/Home';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/experience' element={<h1 style={{marginTop: '300px', textAlign: 'center'}}>Experiences (to be created)</h1>} />
      <Route path='/contact' element={<h1 style={{marginTop: '300px', textAlign: 'center'}}>Contact (to be created)</h1>} />
    </Routes>
  );
};

export default Router;
