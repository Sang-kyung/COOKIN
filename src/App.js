import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './Page/HomePage';
import MyPage from './Page/MyPage';
import SearchPage from './Page/SearchPage';
import DetailPage from './Page/DetailPage';

import './App.css';



function App() {
  return (
    <div className="App">
      <Route path="/home" component={HomePage} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/detail" component={DetailPage} />
    </div>
  );
}

export default App;
