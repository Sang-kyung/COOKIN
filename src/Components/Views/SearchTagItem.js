import React from 'react';
import './SearchTagItem.css';

// style

const SearchTagItem = ({item}) => {
  var visibilityOption = {display: ""};
  if(item.city == '-'){
    visibilityOption = {display: "None"};
  }


  return <div className="tagContainer" style={visibilityOption}>
        <div className="tagText">{item.city} </div>
        <button className="tagBtn" onClick = {item.func}>X</button>
      </div>
}

export default SearchTagItem