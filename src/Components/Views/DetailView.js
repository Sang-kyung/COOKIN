import React, { useState, useEffect, useCallback } from 'react';
import db from '../../firebase';

//view
import UtensilItem from '../Items/UtensilItem';
import IngredientItem from '../Items/IngredientItem';
import OrangeButton from '../Buttons/OrangeButton';

// style
import './DetailView.css';

const DetailView = () => {

    const [kitchenInfo, onLoad] = useState({});
    const [options, onChangeOptions] = useState({});

    // handling click +, - buttons in ingredients
    const onClickPlus = ({name}) => {
        // if there exist ingredient, increase amount
        // else make new ingredient with amount 1
        if (options.find(x => x.name == name)) {
            options.map(item => {
                if (item.name == name) {
                    item.amount += 1
                }
            })
        } else {
            var append_item = {
                name: name,
                amount: 1
            }
            options.push(append_item);
        }
        onChangeOptions(options);
    }

    const onClickMinus = (name) => {
        options.map(item => {
            if (item.name == name) {
                item.amount -= 1
            }
        })
        options.filter(item => item.amount > 0)
        onChangeOptions(options);
    }

    const fetchData = (() => {
        let datas = []
        db.collection('ingredient_list')
        .get()
        .then(query => {
            query.forEach((doc) => {
            datas.push(doc.data().name)
            console.log(datas)
            })}
        );
    });

    useEffect(() => {
        // Update the document title using the browser API
        loadKitchenInfo();
      }, []);



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

    const current_options = [
        {name: "Bok choy", amount: 3, price: 2520},
        {name: "Onion", amount: 4, price: 1360},
    ]

    const onClickReserve = () => {

    }

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
                {kitchenInfo.utensils && kitchenInfo.utensils.map((item, index) => {
                    return <UtensilItem 
                            key={index} 
                            item={item} 
                            />
                })}
            </div> 
            <div className={"detailIngredients"}>
                <p>Ingredients</p>
                {Ingredients.map((item, index) => {
                    return <IngredientItem 
                            key={index} 
                            item={item}                
                            onClickPlus={onClickPlus} 
                            onClickMinus={onClickMinus}
                            />
                })}
            </div>
        </div>
        <div className={"reservationInfoWrapper"}>
            <div className={"totalPriceWrapper"}>
                {options.map((item) => {
                    
                })}
            </div>
            <div className={"dateWrapper"}>


            </div>
            <OrangeButton text={"Reserve"} onClickBtn={onClickReserve}/>
        </div>
    </div>
    
}

export default DetailView
