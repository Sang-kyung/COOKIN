import React from 'react';


const SearchView = () => {
  var buttonStyle = {width:200, height:50, margin:'auto', backgroundColor:'white'}
  var this_div = 
  <div>
  <div id="inputContainer" style={{display:'block', width:930, height:100,display:'flex',margin:'auto', backgroundColor:'orange', borderRadius:15}}>
    <input placeholder="Enter your locations!" style={{width: 900, height:70, fontSize:50, margin:'auto', textAlign:"center", borderRadius:15}}>
    </input>
  </div>
  <div id="buttonContainer" style={{width:930, height:100, display:'flex',margin:'auto'}}>
    <button id="buttonSearch" style={buttonStyle}>Search</button>
    <button id="buttonRecommendation" style={buttonStyle}>Search</button>
  </div>
  </div>
  return this_div
}

export default SearchView
