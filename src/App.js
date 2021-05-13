import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import HomePage from './Page/HomePage';
import MyPage from './Page/MyPage';
import './App.css';

function App() {
  return (
    <div className="App">

      <Route path="/home" component={HomePage} />
      <Route path="/mypage" component={MyPage} />
    </div>
  );
}

export default App;
