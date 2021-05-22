import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import db from '../../firebase';

//view
import UtensilItem from '../Items/UtensilItem';
import IngredientItem from '../Items/IngredientItem';
import LoginModalView from './LoginModalView';
import SearchHeaderView from './SearchHeaderView';
import ReserveModalView from './ReserveModalView';

// style
import './DetailView.css';
import GrayButton from '../Buttons/GrayButton';


const DetailView = () => {

    const kitchen = useLocation().state.data;

    const user = useSelector(state => state.user);
    const [reserveInfo, onChangeReserveInfo] = useState({name: kitchen.name, price: kitchen.price, date: "", ingredients: []});
    const [totalPrice, onChangePrice] = useState(kitchen.price);

    const [loginModalOpen, onLoginModalUpdate] = useState(false);
    const [reserveModalOpen, onReserveModalUpdate] = useState(false);

    const onCloseLoginModal = () => {
        onLoginModalUpdate(false);
    }

    const onCloseReserveModal = () => {
        onReserveModalUpdate(false);
    }

    const onClickPlus = (name) => {
        const _ = require("lodash");
        let res_copy = _.cloneDeep(reserveInfo);
        // let current_price = totalPrice;

        const ind = kitchen.ingredients.find(e => e.name == name);

        if (res_copy.ingredients.find(x => x.name == name)) {
            res_copy.ingredients.map(item => {
                if (item.name == name) {
                    item.amount += 1;
                    item.myPrice += ind.price;
                }
            })
        } else {
            let append_item = {
                name: name,
                amount: 1,
                myPrice: ind.price
            }
            res_copy.ingredients.push(append_item);
        }

        res_copy.price += ind.price;
        onChangeReserveInfo(res_copy);
        // onChangePrice(current_price);
    }

    const onClickMinus = (name) => {
        const _ = require("lodash");
        let res_copy = _.cloneDeep(reserveInfo);
        // let current_price = totalPrice;
        const ind = kitchen.ingredients.find(e => e.name == name);

        res_copy.ingredients.map(item => {
            if (item.name == name && item.amount > 0) {
                item.amount -= 1;
                item.myPrice -= ind.price;
                res_copy.price -= ind.price;
            }
        })
        res_copy.ingredients = res_copy.ingredients.filter(item => item.amount > 0);
        onChangeReserveInfo(res_copy);
        // onChangePrice(current_price);
    }

    const onIngDelete = (name) => {
        const _ = require("lodash");
        let res_copy = _.cloneDeep(reserveInfo);
        let current_price = totalPrice;
        const ind = kitchen.ingredients.find(e => e.name == name);

        res_copy.ingredients.map(item => {
            if (item.name == name && item.amount > 0) {
                item.myPrice -= ind.price * item.amount;
                current_price -= ind.price * item.amount;
                res_copy.price -= ind.price * item.amount;
                item.amount = 0;
            }
        })
        res_copy.ingredients = res_copy.ingredients.filter(item => item.amount > 0);
        onChangeReserveInfo(res_copy);
        // onChangePrice(current_price);
    }

    const onClickReserve = () => {
        if (user.isloggedIn) {
            let reservations = []
            db.collection("reservation_list").doc(user.phone).get()
            .then((doc) => {
                if (doc.exists) {
                    reservations = doc.data().reservations;
                    console.log(reservations);
                    console.log(user);
                    reservations.push(reserveInfo);
                } else {
                    reservations.push(reserveInfo);
                }
                db.collection("reservation_list").doc(user.phone).set({reservations})
                .then(() => {
                    console.log("updated")
                })
                .catch((error) => {
                    console.error("database update data failed", error);
                })
            })
            .catch((error) => {
                console.error("database load data failed", error);
            });
            onReserveModalUpdate(true);
        } else {
            onLoginModalUpdate(true);
        }
    }


    return (
        <div>
            <SearchHeaderView />
            {kitchen.name && 
                <div className={"detailViewWrapper"}>
    `                <div className={"detailInfoWrapper"}>
                        <div className={"detailHeaderWrapper"}>
                            <h1>{kitchen.name}</h1>
                            <span>{kitchen.address}</span>
                            <div className={"detailPicture"}>
                                <img className={"kitchenImg"} src={require('../../img/Kitchen/dintaifung_1.png').default} />
                            </div>
                        </div>

                        <div className={"detailUtensil"}>
                            <hr />
                            <p>Utensils</p>
                            {kitchen.utensils && kitchen.utensils.map((item, index) => {
                                return <UtensilItem key={index} item={item} />
                            })}
                        </div> 

                        <div className={"detailIngredients"}>
                            <hr />
                            <p>Ingredients</p>
                            {kitchen.ingredients && kitchen.ingredients.map((item, index) => {
                                return <IngredientItem key={index} item={item} onClickPlus={onClickPlus} onClickMinus={onClickMinus} />
                            })}
                        </div>
                    </div>
                    <div className={"floatingViewWrapper"}>  
                        <div className={"reservationInfoWrapper"}>
                            <div className={"totalPriceWrapper"}>
                                {reserveInfo.ingredients.map((item, index) => {
                                    return <div key={index} className={"ingOptions"}>
                                                <p className={"ingAmount"}>{item.amount}</p>
                                                <p>{item.name}</p>
                                                <div>{item.myPrice} KRW</div>
                                                <div className={"ingCancelBtn"} onClick={() => onIngDelete(item.name)}>X</div>
                                        </div>  
                                })}
                                <hr />
                                <div className={"totalPrice"}>
                                    <p>Total</p>
                                    <div>{reserveInfo.price} KRW</div>
                                </div>
                            </div>
                            <div className={"infoWrapper"}>
                                <div className={"people"}>
                                </div>
                                <div className={"date"}>
                                    <p>Date</p>
                                    <GrayButton text={"May"}/>
                                    <GrayButton text={"5"}/>
                                </div>
                                <div className={"time"}>
                                    <p>Time</p>
                                    <GrayButton text={"14:00"}/>
                                    <GrayButton text={"17:30"}/>
                                </div>
                            </div>
                            <div className="reserveBtn" onClick={onClickReserve}>
                                {"Reserve"}
                            </div>
                        </div>
                    </div>
                </div>
            }
            {loginModalOpen && <LoginModalView isReservePage={true} onCloseModal={onCloseLoginModal} />}
            {reserveModalOpen && <ReserveModalView onCloseModal={onCloseReserveModal} />}
        </div>
    )
}

export default DetailView