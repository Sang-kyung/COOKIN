import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import MyPage from '../Page/MyPage';
import imgfile from '../images/homePageButton.png';
import './MyPageButton.css'
const HomePageButton = () => {

  return <div style={{height: "100%", width:'auto', backgroundColor:'black', float: 'left'}}>
    <Link to="/home"><img style={{width: 'auto'}} src={imgfile}/></Link>
    </div>
}

export default HomePageButton
