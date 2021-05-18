import React from 'react';
import './HeaderView.css'
import HomePageButton from '../Buttons/homePageButton';
import { Route, Link, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { deleteFirstCity, setFirstCity } from '../../reducers/searchCity';
import * as SearchMap from './SearchMap'


const SearchHeaderViewLeft = () => {
  const firstCity = useSelector((state:any) => state.searchCity.firstCity);
  
  const dispatch = useDispatch();
  const updateFirstCity = () => {
    var thisInput = document.getElementById("searchInput")
    var thisInputValue = thisInput.value;
    dispatch(setFirstCity(thisInputValue));
    //SearchMap.setMapCenter(35.166668,129.066666);
    SearchMap.searchMapKeyWord(thisInputValue);
    //dispatch(deleteFirstCity())
  }
  var this_div = 
  <div id= "HeaderLeft">
      <div style={{height: "100%", width:'100%', backgroundColor:'black', float: 'left'}}>
        <div style={{height: "100%",  backgroundColor:'purple', float: 'left'}}>
        <HomePageButton />
        </div>
        <div style={{height: "50%", width:'100%', backgroundColor:'orange'}}>
          {firstCity}
        </div>
        <div style={{height: "50%", width:'100%', backgroundColor:'red'}}>
          <input id="searchInput" style={{height: "80%", width: '50%'}}></input>
          <button style= {{height:'80%', width: '10%'}} onClick={(e:any) => {updateFirstCity()}}></button>
        </div>
      
      </div>
  </div>
  return this_div
}

export default SearchHeaderViewLeft
