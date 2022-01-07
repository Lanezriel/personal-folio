import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import FrontView from './front-view/FrontView';
import Router from './views/Router';

function App() {
  return (
    <BrowserRouter>
      <FrontView />
      <Router />
    </BrowserRouter>
  );
}

export default App;
