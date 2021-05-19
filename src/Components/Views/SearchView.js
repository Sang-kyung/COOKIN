import React from 'react';
import './SearchView.css'
import * as SearchMap from './SearchMap'
import { setFirstCity } from '../../reducers/searchCity';
import { useDispatch } from 'react-redux'

const SearchView = () => {
  const dispatch = useDispatch();
  const clickfunction = () => {
    var input = document.getElementById("input").value;
    dispatch(setFirstCity(input));
    SearchMap.searchMapKeyWord(input);
    window.location.href="/search";
  }

  var this_div = 
  <div id="mainContainer">
  <div className= 'inputWrapper' >
    <input type="text" id='input' placeholder="Enter your locations!">
    </input>
  </div>
  <div className='buttonWrapper'>
    <button id="buttonSearch" onClick={clickfunction}>Search</button>
    <button id="buttonRecommendation">Recommend Me</button>
  </div>
  </div>
  return this_div
}

export default SearchView
