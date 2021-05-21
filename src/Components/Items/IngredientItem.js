import React from 'react';

// style
import './IngredientItem.css';

const IngredientItem = (props) => {
  const { item, onClickPlus, onClickMinus } = props;

  return (
    <div className="ingredientItemWrapper">
      <div className="ingredientImgWrapper">
        <img className="ingredientImg" src={require(`../../img/Ingredients/${item.imgUrl}.png`).default}/>
      </div>
      <div className="ingredientOptionWrapper">
        <div>{item.name}</div>
        <div>{item.price}</div>  
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
  )
}

export default IngredientItem
