import React from  'react'
import "./ListMapView.css";

const ListMapView = () => {
    // hard coded => should be fixed with database
    const Utensils = [
        {name: "Stove", num: 6, imgUrl: 'stove'},
        {name: "Pan", num: 5, imgUrl: 'pan'},
        {name: "Wok", num: 3, imgUrl: 'wok'},
        {name: "Oven", num: 1, imgUrl: 'oven'},
        {name: "Sink", num: 1, imgUrl: 'sink'}
    ]
    
    const Ingredients = [
        {name: "Bok choy", price: 860, unit: "100g", imgUrl: 'stove'},
        {name: "Cilantro", price: 1200, unit: "100g", imgUrl: 'pan'},
        {name: "Onion", price: 340, unit: "100g", imgUrl: 'wok'},
        {name: "Gree Onion", price: 870, unit: "100g", imgUrl: 'oven'},
    ]

    var this_div = 
    <div id="body">
        <div id="photo">
            hi
            {/* <img className={"kitchenImg"} src={require('../img/Kitchen/Dintaifung_1.png').default} /> */}
        </div>
        <div id="content">
            <div id="name">
                Restaurant name
            </div>
            <div id="information">
            <p id="price">
                Price
            </p>
            <p id="utensils">
                Utensils
            </p>
            <p id="ingredients">
                Ingredients
            </p>
            </div>
        </div>    
    </div>
    return this_div;
}

export default ListMapView;