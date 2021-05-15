import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import MyPage from '../Page/MyPage';

const MyPageButton = () => {

  return <div>
    <Link to="/mypage"><div>click to go to mypage</div></Link>
  </div>
}

export default MyPageButton
