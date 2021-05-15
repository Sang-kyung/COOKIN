import React, { useState } from 'react';

//view
import DatePicker from "react-datepicker";
import UtensilItem from './Items/UtensilItem';
import IngredientItem from './Items/IngredientItem';

// style
import './DetailView.css';

const DetailView = () => {

    const [startDate, setStartDate] = useState(new Date());

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

    return <div className={"detailViewWrapper"}>
        <div className={"detailInfoWrapper"}>
            <h2>"Din Tai Fung"</h2>
            <p>12, Seocho-daero 73-gil, Seocho-gu, Seoul, Republic of Korea</p>
            <div className={"detailPicture"}>
                <img className={"kitchenImg"} src={require('../img/Kitchen/Dintaifung_1.png').default} />
            </div>
            <hr />
            <div className={"detailUtensil"}>
                <p>Utensils</p>
                {Utensils.map((item) => {
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
        <div className={"rightWrapper"}>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        </div>
    </div>
}

export default DetailView
