import React from 'react';

// style
import './UtensilItem.css';

const UtensilItem = ({item}) => {

  return <div>
      <span>{item.name}</span>
      <span>{item.num}</span>  
      <img src={require(`../../img/Utensils/${item.imgUrl}.png`).default}/> 

  </div>
}

export default UtensilItem
