import React from 'react';

// style

const SearchResult = ({item}) => {

  return <div style={{height:"50%", width:"auto", backgroundColor:"rgb(220,220,220)", marginTop:"10%", borderRadius:"5px"}}>
        <div style={{height:"50%", width:"auto", float:'left'}}>{item.city} </div>
        <button style= {{height:"100%", width:"auto", fontSize: '70%', color:"gray",
        float:'right', textAlign:"center", border:"none", backgroundColor:"transparent"}} onClick = {item.func}>X</button>
      </div>
}

export default SearchResult