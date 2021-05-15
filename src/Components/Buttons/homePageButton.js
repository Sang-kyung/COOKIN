import React from 'react';
import { Link } from 'react-router-dom';

import imgfile from '../../images/homePageButton.png';

import './MyPageButton.css'


const HomePageButton = () => {

  return <div style={{height: "100%", width:'auto', backgroundColor:'black', float: 'left'}}>
    <Link to="/home"><img style={{width: 'auto'}} src={imgfile}/></Link>
    </div>
}

export default HomePageButton
