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
        <div className="ingredientName">{item.name}</div>
        <div className="ingredientPrice">{item.price}KRW / {item.unit}</div>
          <img 
              className="minusIcon" 
              src={require(`../../img/Buttons/minus.png`).default}
              onClick={onClickMinus(item.name)}/> 
          <img 
            className="plusIcon" 
            src={require(`../../img/Buttons/plus.png`).default}
            onClick={onClickPlus(item.name)}/> 
      </div> 
    </div>
  )
}

export default IngredientItem
