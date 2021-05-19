import React from 'react';
import "./ListMapView.css";

const ListMapView = ({restaurant}) => {
    var this_div = 
    <div id="body">
        <div id="photo">
            <img src={require('../../img/Kitchen/${restaurant.img}.png').default}/>
        </div>
        <div id="content">
            <div id="name">
                {restaurant.place}
            </div>
            <div id="information">
            <p id="price">
                {restaurant.price}
            </p>
            <p id="utensils">
                {restaurant.utensils}
            </p>
            <p id="ingredients">
                {restaurant.ingredients}
            </p>
            </div>
        </div>    
    </div>
    return this_div;
}

export default ListMapView;