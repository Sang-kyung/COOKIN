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