import React from 'react';
import { Link } from 'react-router-dom';
import "./ListMapView.css";

const ListMapView = ({kitchen}) => {  
    var this_div = 
    <div id="body">
        <div id="photo">
            hello
        </div>
        <div id="content">
            <div id="name">
                {kitchen.name}
            </div>
            <div id="information">
                <p id="price">
                    price: {kitchen.price}
                </p>
                <div id="utensils">
                    utensils:
                    {kitchen.utensils.map((items, index) => {
                        return (<div key={index}>{items.name}: {items.num}</div>)
                    })}
                </div>
                <div id="ingredients">
                    ingredients:
                    {kitchen.ingredients.map((items, index) => {
                        return (<div key={index}>{items.name}</div>)
                    })}
                </div>
            </div>
        </div>
    </div>
    return this_div
}

export default ListMapView;