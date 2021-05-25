import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import db from '../../firebase';

// material ui
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

//view
import UtensilItem from '../Items/UtensilItem';
import IngredientItem from '../Items/IngredientItem';
import LoginModalView from './LoginModalView';
import DetailHeaderView from './DetailHeaderView';
import ReserveModalView from './ReserveModalView';

// style
import './DetailView.css';
import GrayButton from '../Buttons/GrayButton';
import { resetIdCounter } from 'react-tabs';

const materialTheme = createMuiTheme({
    overrides: {
      MuiPickersDay: {
        day: {
          color: "#000000",
        },
        daySelected: {
          backgroundColor: "#fa5000",
        },
        dayDisabled: {
          color: "#c4c4c4",
        },
        current: {
          color: "#fa5000",
        },
      },
      MuiPickersModal: {
        dialogAction: {
          color: "#fa5000",
        },
      },
    },
});

const DetailView = () => {
    const kitchen = useLocation().state.data;
    const user = useSelector(state => state.user);
    const [reserveInfo, onChangeReserveInfo] = useState({name: kitchen.name, price: kitchen.price, date: new Date(), ingredients: [], time: ""});
    const [selectedDate, handleDateChange] = useState(new Date());
    const [selectedTime, handleTimeChange] = useState("");
    const [loginModalOpen, onLoginModalUpdate] = useState(false);
    const [reserveModalOpen, onReserveModalUpdate] = useState(false);
    const [wrongtext, setWrongText] = useState("");

    const onTimeChange = (e) => {
        handleTimeChange(e.target.value);
        setWrongText("");
    }

    const onCloseLoginModal = () => {
        onLoginModalUpdate(false);
    }

    const onCloseReserveModal = () => {
        onReserveModalUpdate(false);
    }

    const onClickPlus = (name) => {
        const _ = require("lodash");
        let res_copy = _.cloneDeep(reserveInfo);
        const ind = kitchen.ingredients.find(e => e.name == name);

        if (res_copy.ingredients.find(x => x.name == name)) {
            res_copy.ingredients.map(item => {
                if (item.name == name) {
                    item.amount += 1;
                    item.myPrice += ind.price;
                    item.unit = ind.unit;
                }
            })
        } else {
            let append_item = {
                name: name,
                amount: 1,
                myPrice: ind.price,
                unit : ind.unit
            }
            res_copy.ingredients.push(append_item);
        }
        res_copy.price += ind.price;
        onChangeReserveInfo(res_copy);
    }

    const onClickMinus = (name) => {
        const _ = require("lodash");
        let res_copy = _.cloneDeep(reserveInfo);
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
    }

    const onIngDelete = (name) => {
        const _ = require("lodash");
        let res_copy = _.cloneDeep(reserveInfo);
        const ind = kitchen.ingredients.find(e => e.name == name);

        res_copy.ingredients.map(item => {
            if (item.name == name && item.amount > 0) {
                item.myPrice -= ind.price * item.amount;
                res_copy.price -= ind.price * item.amount;
                item.amount = 0;
            }
        })
        res_copy.ingredients = res_copy.ingredients.filter(item => item.amount > 0);
        onChangeReserveInfo(res_copy);
    }

    const onClickReserve = () => {
        if (selectedTime == ""){
            setWrongText("Please select the time.");
            return;
        }
        if (user.isloggedIn) {
            let reservations = []
            reserveInfo.date = selectedDate;
            reserveInfo.time = selectedTime;
            db.collection("reservation_list").doc(user.phone).get()
            .then((doc) => {
                if (doc.exists) {
                    reservations = doc.data().reservations;
                    reservations.push(reserveInfo);
                } else {
                    reservations.push(reserveInfo);
                }
                db.collection("reservation_list").doc(user.phone).set({reservations})
                .then(() => {
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
            <DetailHeaderView />
            {kitchen.name && 
                <div className={"detailViewWrapper"}>
                    <div className={"detailInfoWrapper"}>
                        <div className={"detailHeaderWrapper"}>
                            <h1>{kitchen.name}</h1>
                            <span>{kitchen.address}</span>
                            <div className={"detailPicture"}>
                                <img className={"kitchenImg"} src={require(`../../img/Kitchen/${kitchen.img[0]}.png`).default} />
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
                                    <div className="text">Total</div>
                                    <div className="value">{reserveInfo.price} KRW</div>
                                </div>
                            </div>
                            <div className={"infoWrapper"}>
                                <div className={"date"}>
                                    <p>Date</p>
                                    <div className={"datePicker"}>
                                        <ThemeProvider theme={materialTheme}>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                autoOk
                                                disableToolbar
                                                variant="inline"
                                                format="yyyy.MM.dd"
                                                id="date-picker-inline"
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                disablePast
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                                />
                                            </MuiPickersUtilsProvider>
                                        </ThemeProvider>
                                    </div>
                                </div>
                                <div className={"time"}>
                                    <p>Time</p>
                                    <select className={"timeSelect"} onChange={onTimeChange}>
                                        <option value="">Select Time</option>
                                        <option value="09:00-12:00">09:00-12:00</option>
                                        <option value="12:00-15:00">12:00-15:00</option>
                                        <option value="15:00-18:00">15:00-18:00</option>
                                        <option value="18:00-21:00">18:00-21:00</option>
                                    </select>
                                </div>
                            </div>
                            <div className="alert">{alert && wrongtext}</div>
                            <div className="reserveBtn" onClick={onClickReserve}>
                                {"Reserve"}
                            </div>
                        </div>
                    </div>
                </div>
            }
            {loginModalOpen && <LoginModalView isReservePage={true} onCloseModal={onCloseLoginModal} />}
            {reserveModalOpen && <ReserveModalView onCloseModal={onCloseReserveModal} reserveInfo={reserveInfo}/>}
        </div>
    )
}

export default DetailView