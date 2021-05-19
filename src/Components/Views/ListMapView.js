import React from 'react';
import { Link } from 'react-router-dom';
import "./ListMapView.css";

const ListMapView = ({kitchen}) => {

    return <div>
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
                        {kitchen.price}
                    </p>
                    {kitchen.utensils.map((item, index) => {
                        return (<div key={index}>
                                    <p>{item.name}</p>
                                    <p>{item.num}</p>
                                </div>)
                    })}
                    <p id="utensils">
                    </p>
                    <p id="ingredients">
                        {kitchen.ingredients}
                    </p>
                    </div>
                </div>  
            </div>
    </div>
}

export default ListMapView;