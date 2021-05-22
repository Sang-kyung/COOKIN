import React from 'react';
import { useHistory } from 'react-router-dom';
import "./ListMapView.css";


const ListMapView = ({kitchen}) => {  
    const history = useHistory();
    const redirectfunction = () => {
        history.push({
          pathname:"/detail",
          state:{
              key: kitchen.name,
              data: kitchen
           }
        });
    }

//kitchen.img[0] = "../img/dintaifung_1.png"
    var this_div = 
    <div id="body" onDoubleClick={(e)=>{redirectfunction()}}>
        <div id="photo">
            <img src={kitchen.img[0]}></img>
        </div>
        <div id="content">
            <div id="name">
                <p onClick={(e)=>{redirectfunction()}}>{kitchen.name}</p>
            </div>
            <div id="information">
                <div id="price">
                    Price: {kitchen.price}
                </div>
                <br/>
                <div id="utensils">
                    Available Utensils:
                    {kitchen.utensils.map((items, index) => {
                        return (<div key={index}>{items.name}: {items.num}</div>)
                    })}
                </div>
                <br/>
                <div id="ingredients">
                    Available Ingredients: {kitchen.ingredients.map((items, index) => {
                        return (<div key={index}>{items.name}</div>)
                    })}
                </div>
            </div>
        </div>
    </div>
    return this_div
}

export default ListMapView;