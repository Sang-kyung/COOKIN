import React, { useState } from 'react';

//view
import DatePicker from "react-datepicker";
import UtensilItem from './Items/UtensilItem';

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
        {name: "Sink", num: 1, imgUrl: 'sink'}]

    return <div className={"detailViewWrapper"}>
        <div className={"detailInfoWrapper"}>
            <h2>Din Tai Fung</h2>
            <span>12, Seocho-daero 73-gil, Seocho-gu, Seoul, Republic of Korea</span>
            <div className={"detailPicture"}>
                <img src={require('../img/Kitchen/Dintaifung_1.png')} />
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
            </div>
        </div>
        <div className={"rightWrapper"}>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        </div>
    </div>
}

export default DetailView
