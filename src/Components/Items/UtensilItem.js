import React from 'react';

// style
import './UtensilItem.css';

const UtensilItem = ({item}) => {

  return <div className={"utensilItemWrapper"}>
        <img className="utensilImg" src={require(`../../img/Utensils/${item.imgUrl}.png`).default}/> 
        <br />
        <span>{item.name}: </span>
        <span>{item.num}</span>  
      </div>
}

export default UtensilItem
