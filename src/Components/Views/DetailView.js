import React, { useState, useEffect } from 'react';

//view
import UtensilItem from '../Items/UtensilItem';
import IngredientItem from '../Items/IngredientItem';
import { db } from '../../firebase';

// style
import './DetailView.css';

const DetailView = () => {

    const [kitchenInfo, onLoad] = useState({});

    useEffect(() => {
        // Update the document title using the browser API
        loadKitchenInfo();
      });

    // load kitchen data from firebase
    const loadKitchenInfo = () => {
        // hard coded -> database loading
        const kitchen = {
            name: "Din Tai Fung",
            address: "12, Seocho-daero 73-gil, Seocho-gu, Seoul, Republic of Korea",
            imgUrl: ["dintaifung-1", "dintaifung-2"],
            price: 40000,
            capacity: 10,
            ingredients: ["Bok choy", "Cilantro", "Onion", "Green Onion"],
            availableDate: "",
            utensils: [
                {name: "Stove", num: 6, imgUrl: 'stove'},
                {name: "Pan", num: 5, imgUrl: 'pan'},
                {name: "Wok", num: 3, imgUrl: 'wok'},
                {name: "Oven", num: 1, imgUrl: 'oven'},
                {name: "Sink", num: 1, imgUrl: 'sink'}
            ]
        };
        onLoad(kitchen);
    }

    const Ingredients = [
        {name: "Bok choy", price: 860, unit: "100g", imgUrl: 'stove'},
        {name: "Cilantro", price: 1200, unit: "100g", imgUrl: 'pan'},
        {name: "Onion", price: 340, unit: "100g", imgUrl: 'wok'},
        {name: "Gree Onion", price: 870, unit: "100g", imgUrl: 'oven'},
    ]

    return <div className={"detailViewWrapper"}>
        <div className={"detailInfoWrapper"}>
            <h1>{kitchenInfo.name}</h1>
            <span>{kitchenInfo.address}</span>
            <h2>{kitchenInfo.price}</h2>
            <div className={"detailPicture"}>
                {/* <img className={"kitchenImg"} src={require('../img/Kitchen/Dintaifung_1.png').default} /> */}
            </div>
            <hr />
            <div className={"detailUtensil"}>
                <p>Utensils</p>
                {kitchenInfo.utensils && kitchenInfo.utensils.map((item) => {
                    return <UtensilItem item={item} />
                })}
            </div> 
            <hr />
            <div className={"detailIngredients"}>
                <p>Ingredients</p>
                {Ingredients.map((item) => {
                    return <IngredientItem item={item} />
                })}

            </div>
        </div>
        <div className={"reservationInfoWrapper"}>
            <div className={"totalPriceWrapper"}>

            </div>
            <div className={"dateWrapper"}>

            </div>
            
        </div>
    </div>
    
}

export default DetailView
