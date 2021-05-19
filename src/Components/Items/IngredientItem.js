import React from 'react';
// import db from '../../firebase';

// style
import './IngredientItem.css';

const IngredientItem = ({item, onClickPlus, onClickMinus}) => {

  return <div className={"itemWrapper"}>
          <img className="utensilImg" src={require(`../../img/Utensils/${item.imgUrl}.png`).default}/> 
          <br />
          <span>{item.name}</span>
          <br/>
          <span>{item.price}</span>  
        <div className="buttonWrapper">
          <img 
            className="plusIcon" 
            src={require(`../../img/Buttons/plus.png`).default}
            onClick={onClickPlus(item.name)}/>
          <img 
            className="minusIcon" 
            src={require(`../../img/Buttons/minus.png`).default}
            onClick={onClickMinus(item.name)}/>  
        </div>
      </div>
}

export default IngredientItem
