import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MyreservationView.css';
import OptionsItem from '../Items/OptionsItem.js';
import { reserve } from '../../reducers/reservation';

const onClickCancel = (props) => {
    const {res, phone, _cancel, dispatch} = props;
    dispatch(reserve({phone, res}));
    _cancel();
}

const getFormateDate = (date) => {
    var year = date.getFullYear();
    var month = (1 + date.getMonth());
    month = month >= 10 ? month : '0' + month;
    var day = date.getDate();
    day = day >= 10 ? day : '0' + day;
    return  year + '-' + month + '-' + day;
}

const MyreservationBox = (props) => {
    const {res, phone, time, _cancel, dispatch} = props;
    let date = getFormateDate(res.date);
    return (
        time == "Future" ? 
        (
            <div className ="reservation_box_future">
                <div className="reservationWrapper">
                    <h3 className="kitchen_name">{res.name}</h3>
                    <div className="DateIngredients">date:</div>
                    <div className="value_DateIngredients">&nbsp;{date}, &nbsp;{res.time}</div><br/>
                    <div className="DateIngredients">Ingredients:</div>
                    <div className="value_DateIngredients">&nbsp;{res.ingredients.map((item, index) => {
                                    return <OptionsItem key={index} item={item} />
                                })}
                    </div>
                </div>
                <button className="cancelbtn" onClick={() => onClickCancel({res, phone, _cancel, dispatch})}>CANCEL</button>
            </div>
        ) :
        (
            <div className ="reservation_box_past">
                <div className="reservationWrapper">
                    <h3 className="kitchen_name">{res.name}</h3>
                    <div className="DateIngredients">date: </div>
                    <div className="value_DateIngredients">&nbsp;{date}, &nbsp;{res.time}</div><br/>
                    <div className="DateIngredients">Ingredients: </div>
                    <div className="value_DateIngredients">&nbsp;{res.ingredients.map((item, index) => {
                                    return <OptionsItem key={index} item={item} />
                                })}
                    </div>
                </div>
            </div>
        )
    )
}

const MyreservationView = (props) => {
    const {ups, pasts, _cancel} = props
    const phone = useSelector(state => state.user.phone);
    const dispatch = useDispatch();

    return <div className ='reservation'>
                {ups.length != 0 && 
                    <div>
                        <h3 className="UporPasts">Upcoming Reservations</h3>
                        <div>
                        {/* name={item.name} date={item.date} ingredients={item.ingredients} */}
                            {ups.map((item, index) => {
                                return <MyreservationBox key={index} res={item} phone={phone} time="Future" _cancel={_cancel} dispatch={dispatch}/>
                            })}
                        </div>
                    </div>
                }
                { pasts.length != 0 && 
                    <div>
                        <h3 className="UporPasts">Past Reservations</h3>
                        <div>
                            {pasts.map((item, index) => {
                                return <MyreservationBox key={index} res={item} phone={phone} time="Past" _cancel={_cancel} dispatch={dispatch}/>
                            })}
                        </div>
                    </div>
                }
            </div>
}

export default MyreservationView;
