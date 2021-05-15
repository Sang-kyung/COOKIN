import React from 'react';
import './HeaderView.css'
import imgfile from '../images/homePageButton.png';
import { Route, Link, Switch } from 'react-router-dom';
const MainHeaderViewLeft = () => {
  var this_div = 
  <div id= "HeaderLeft">
      <div style={{height: "100%", width:'10%', backgroundColor:'black', float: 'right'}}>
      <Link to="/home"><img src={imgfile}/></Link>
      </div>
  </div>
  return this_div
}

export default MainHeaderViewLeft
