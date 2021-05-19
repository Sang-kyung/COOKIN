import React from 'react';
import './SearchTagItem.css';

// style

const SearchTagItem = ({item}) => {

  return <div className="tagContainer">
        <div className="tagText">{item.city} </div>
        <button className="tagBtn" onClick = {item.func}>X</button>
      </div>
}

export default SearchTagItem