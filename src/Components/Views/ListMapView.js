import React from 'react';
import { Link } from 'react-router-dom';
import "./ListMapView.css";

const ListMapView = ({kitchen}) => {
    var this_div = 
    <div id="body">
        <Link to="/detail/${restaurant.place}">
        <div id="photo">
            hello
        </div>
        <div id="content">
            <div id="name">
                {kitchen.name}
            </div>
            <div id="information">
            <p id="price">
                {kitchen.price}
            </p>
            <p id="utensils">
                {kitchen.utensils}
            </p>
            <p id="ingredients">
                {kitchen.ingredients}
            </p>
            </div>
        </div>
        </Link>    
    </div>
    return this_div;
}

export default ListMapView;