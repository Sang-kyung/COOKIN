import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import MyPage from '../Page/MyPage';
import imgfile from '../images/myPageButton.png';
import './MyPageButton.css'
const MyPageButton = () => {

  return <div style={{height: "100%", width:'auto', backgroundColor:'black', float: 'right'}}>
    <Link to="/mypage"><img style={{width: 'auto'}} src={imgfile}/></Link>
    </div>
}

export default MyPageButton
