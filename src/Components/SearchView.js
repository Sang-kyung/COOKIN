import React from 'react';
import './SearchView.css'

const SearchView = () => {
  var this_div = 
  <div>
  <div className= 'inputWrapper' >
    <input className='input' placeholder="Enter your locations!">
    </input>
  </div>
  <div className='buttonWrapper'>
    <button id="buttonSearch" >Search</button>
    <button id="buttonRecommendation">Recommend Me</button>
  </div>
  </div>
  return this_div
}

export default SearchView
