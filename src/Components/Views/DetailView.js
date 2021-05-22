import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import db from '../../firebase';

//view
import UtensilItem from '../Items/UtensilItem';
import IngredientItem from '../Items/IngredientItem';
import LoginModalView from './LoginModalView';
import SearchHeaderView from './SearchHeaderView';

// style
import './DetailView.css';
import GrayButton from '../Buttons/GrayButton';


const DetailView = () => {

    const user = useSelector(state => state.user);

    const [kitchenInfo, onKitchenInfoLoad] = useState({});
    const [reserveInfo, onChangeReserveInfo] = useState({});
    const [totalPrice, onChangePrice] = useState(0);

    const [loginModalOpen, onLoginModalUpdate] = useState(false);
    const [reserveModalOpen, onReserveModalUpdate] = useState(false);

    useEffect(() => {
        fetchKitchenInfo();
        onChangePrice(kitchenInfo.price);
        onChangeReserveInfo({
            name: "",
            price: 0,
            datae: "",
            ingredients: []
        });
    }, []);

    // load kitchen data from firebase
    const fetchKitchenInfo = () => {
        db.collection('kitchen_list').doc("Din Tai Fung").get()
        .then(doc => {
            onKitchenInfoLoad(doc.data());
        })
        .catch((error) => {
            console.error("database load data failed", error);
        })
    }

    // make reserve object for databse
    const makeReserveObj = (kitchen) => {
        reserveInfo.name = kitchen.name;
        reserveInfo.price = kitchen.price;
        reserveInfo.date = "2021-06-01";
        onChangeReserveInfo(reserveInfo);
    }

    const onCloseLoginModal = () => {
        onLoginModalUpdate(false);
    }

    const onCloseReserveModal = () => {
        onReserveModalUpdate(false);
    }

    const onClickPlus = (name) => {
        if (reserveInfo.ingredients.find(x => x.name == name)) {
            reserveInfo.ingredients.map(item => {
                if (item.name == name) {
                    item.amount += 1
                }
            })
        } else {
            let append_item = {
                name: name,
                amount: 1
            }
            reserveInfo.ingredients.push(append_item);
        }
        // onChangeReserveInfo(reserveInfo);
    }

    const onClickMinus = (name) => {
        reserveInfo.ingredients.map(item => {
            if (item.name == name) {
                item.amount -= 1
            }
        })
        reserveInfo.ingredients.filter(item => item.amount > 0)
        // onChangeReserveInfo(reserveInfo);
    }

    const onClickReserve = () => {
        makeReserveObj(kitchenInfo)
        if (user.isloggedIn) {
            let reservations = []
            db.collection("reservation_list").doc(user.phone).get()
            .then((doc) => {
                if (doc.exists) {
                    reservations = doc.data();
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
            {kitchenInfo.name && 
                <div className={"detailViewWrapper"}>
    `                <div className={"detailInfoWrapper"}>
                        <div className={"detailHeaderWrapper"}>
                            <h1>{kitchenInfo.name}</h1>
                            <span>{kitchenInfo.address}</span>
                            <h2>{kitchenInfo.price}</h2>
                            <div className={"detailPicture"}>
                            <img className={"kitchenImg"} src={require('../../img/Kitchen/dintaifung_1.png').default} />
                            </div>
                        </div>

                        <div className={"detailUtensil"}>
                            <hr />
                            <p>Utensils</p>
                            {kitchenInfo.utensils && kitchenInfo.utensils.map((item, index) => {
                                return <UtensilItem key={index} item={item} />
                            })}
                        </div> 

                        <div className={"detailIngredients"}>
                            <hr />
                            <p>Ingredients</p>
                            {kitchenInfo.ingredients && kitchenInfo.ingredients.map((item, index) => {
                                return <IngredientItem key={index} item={item} onClickPlus={onClickPlus} onClickMinus={onClickMinus} />
                            })}
                        </div>
                    </div>
                    <div className={"floatingViewWrapper"}>  
                        <div className={"reservationInfoWrapper"}>
                            <div className={"totalPriceWrapper"}>
                                {reserveInfo.ingredients && reserveInfo.ingredients.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            {item.name}
                                            {item.amount}
                                        </div>
                                    )    
                                })}
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
                            <div className="reserveBtn" onClickBtn={onClickReserve}>
                                {"Reserve"}
                            </div>
                        </div>
                    </div>
                </div>
            }
            {loginModalOpen && <LoginModalView isReservePage={true} onCloseModal={onCloseLoginModal}/>}
            {reserveModalOpen && <reserveModalOpen />}
        </div>
    )
}

export default DetailView