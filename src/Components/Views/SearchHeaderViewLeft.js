import React from 'react';
import './HeaderView.css'
import HomePageButton from '../Buttons/homePageButton';
import { Route, Link, Switch } from 'react-router-dom';
const SearchHeaderViewLeft = () => {
  var this_div = 
  <div id= "HeaderLeft">
      <div style={{height: "100%", width:'100%', backgroundColor:'black', float: 'left'}}>
        <div style={{height: "100%",  backgroundColor:'purple', float: 'left'}}>
        <HomePageButton />
        </div>
        <div style={{height: "50%", width:'100%', backgroundColor:'orange'}}>

        </div>
        <div style={{height: "50%", width:'100%', backgroundColor:'red'}}>
          <input style={{height: "80%", width: '50%'}}></input>
          <button style= {{height:'80%', width: '10%'}}></button>
        </div>
      
      </div>
  </div>
  return this_div
}

export default SearchHeaderViewLeft
