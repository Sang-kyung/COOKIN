import React, { useState } from 'react';
import './MyreservationView.css';
import OptionsItem from '../Items/OptionsItem.js';
import db from '../../firebase';
import { useSelector } from 'react-redux';

const _cancel = ({res, phone}) => {
    let reservations = new Array();
    db.collection("reservation_list").doc(phone).get()
            .then((doc) => {
                reservations = doc.data().reservations;
                const idx = reservations.findIndex(e => e.name === res.name && new Date(e.date.toDate()).getTime() === new Date(res.date).getTime());
                if (idx > -1) reservations.splice(idx, 1);
                console.log("After reservations");
                console.log(reservations)
                db.collection("reservation_list").doc(phone).set({reservations})
                .then(() => {
                    console.log("canceled")
                    console.log(reservations);
                    window.location.reload();
                })
                .catch((error) => {
                    console.error("database cancel reservation failed", error);
                })
            })
            .catch((error) => {
                console.error("database load reservation failed", error);
            });
    return;
}

const getFormateDate = (date) => {
    var year = date.getFullYear();
    var month = (1 + date.getMonth());
    month = month >= 10 ? month : '0' + month;
    var day = date.getDate();
    day = day >= 10 ? day : '0' + day;
    return  year + '-' + month + '-' + day;
}

const MyreservationBox = ({res, phone, time}) => {
    let date = getFormateDate(res.date);
    return (
        time == "Future" ? 
        (
            <div className ="reservation_box_future">
                <div className="reservationWrapper">
                    <h3 className="kitchen_name">{res.name}</h3>
                    <h4 className="h4-res">date : {date} {res.time}</h4>
                    <h4 className="h4-res">Ingredients : {res.ingredients.map((item, index) => {
                                    return <OptionsItem key={index} item={item} />
                                })}
                    </h4>
                </div>
                <button className="cancelbtn" onClick={() => _cancel({res, phone})}>CANCEL</button>
            </div>
        ) :
        (
            <div className ="reservation_box_past">
                <div className="reservationWrapper">
                    <div className="kitchen_name">{res.name}</div>
                    <h4 className="h4-res">date : {date}</h4>
                    <h4 className="h4-res">Ingredients : {res.ingredients.map((item, index) => {
                                    return <OptionsItem key={index} item={item} />
                                })}
                    </h4>
                </div>
            </div>
        )
    )
}

const MyreservationView = (props) => {
    const phone = useSelector(state => state.user.phone);
    const {ups, pasts} = props

    return <div className ='reservation'>
                {ups.length != 0 && 
                    <div>
                        <h3>Upcoming Reservations</h3>
                        <div>
                        {/* name={item.name} date={item.date} ingredients={item.ingredients} */}
                            {ups.map((item, index) => {
                                return <MyreservationBox key={index} res={item} phone={phone} time="Future" />
                            })}
                        </div>
                    </div>
                }
                { pasts.length != 0 && 
                    <div>
                        <h3>Past Reservations</h3>
                        <div>
                            {pasts.map((item, index) => {
                                return <MyreservationBox key={index} res={item} phone={phone} time="Past"/>
                            })}
                        </div>
                    </div>
                }
            </div>
}

export default MyreservationView;
