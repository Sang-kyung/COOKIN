import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import HomePage from './Page/HomePage';
import MyPage from './Page/MyPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/mypage">mypage</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={HomePage} />
      <Route path="/mypage" component={MyPage} />
    </div>
  );
}

export default App;
