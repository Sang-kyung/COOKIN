import React from 'react';
import { Link } from 'react-router-dom';

import imgfile from '../../images/homePageButton.png';

import './MyPageButton.css'


const HomePageButton = () => {

  return <div style={{height: '90px', width:'290px', backgroundColor:'white', float: 'left'}}>
    <Link to="/"><img style={{width: 'auto'}} src={imgfile}/></Link>
    </div>
}

export default HomePageButton
