import React from 'react';
import { Link } from 'react-router-dom';
import "./ListMapView.css";

const ListMapView = ({restaurant}) => {
    var this_div = 
    <div id="body">
        <Link to="/detail/${restaurant.place}">
        <div id="photo">
            hello
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
        </Link>    
    </div>
    return this_div;
}

export default ListMapView;