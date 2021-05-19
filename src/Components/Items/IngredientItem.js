import React from 'react';
// import db from '../../firebase';

// style
import './IngredientItem.css';

const IngredientItem = ({item}) => {

  return <div>
      <div className="itemWrapper">
        <div>
          <img src={require(`../../img/Utensils/${item.imgUrl}.png`).default}/> 
        </div>
        <span>{item.name}</span>
        <span>{item.price}</span>  
      </div>
      <div className="buttonWrapper">

      </div>
  </div>
}

export default IngredientItem
