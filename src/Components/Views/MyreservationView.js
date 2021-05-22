import React from 'react';
import './MyreservationView.css';
import OptionsItem from '../Items/OptionsItem.js'

const _modify = () => {
    // 예약정보 가지고 수정하러 수정페이지(=예약페이지로)
    return;
}

const _cancel = () => {
    // 예약정보 삭제(db에서도, reducer에서도(?)
    return;
}

const getFormateDate = (date) => {
    var year = date.getFullYear();
    var month = (1 + date.getMonth());
    month = month >= 10 ? month : '0' + month;
    var day = date.getDate();
    day = day >= 10 ? day : '0' + day;
    return  year + '' + month + '' + day;
}

const MyreservationBox = ({name, date, ingredients, time}) => {    
    let temp = getFormateDate(date);

    return (
        time == "Future" ? 
        (
            <div className ="reservation_box_future">
                <div className="reservationWrapper">
                    <h3>{name}</h3>
                    <h4>date : {temp}</h4>
                    <h4 className="options">Ingredients : {ingredients.map((item) => {
                                    return <OptionsItem key={item.name} item={item} />
                                })}
                    </h4>
                </div>
                {time == "Future" && 
                <div className="reservationButtons">
                    <button className="modify" onClick={_modify}>MODIFY</button>
                    <button className="cancel" onClick={_cancel}>CANCEL</button>
                </div>
                }
            </div>
        ) :
        (
            <div className ="reservation_box_past">
                <div className="reservationWrapper">
                    <h3>{name}</h3>
                    <h4>date : {temp}</h4>
                    <h4 className="options">Ingredients : {ingredients.map((item) => {
                                    return <OptionsItem key={item.name} item={item} />
                                })}
                    </h4>
                </div>
            </div>
        )
    )
}

const MyreservationView = (props) => {
    const {ups, pasts} = props
    return <div className ='reservation'>
                {ups.length != 0 && 
                    <div>
                        <h3>Upcoming Reservations</h3>
                        <div>
                            {ups.map((item, index) => {
                                return <MyreservationBox key={index} name={item.name} date={item.date} ingredients={item.ingredients} time={"Future"} />
                            })}
                        </div>
                    </div>
                }
                { pasts.length != 0 && 
                    <div>
                        <h3>Past Reservations</h3>
                        <div>
                            {pasts.map((item, index) => {
                                return <MyreservationBox key={index} name={item.name} date={item.date} ingredients={item.ingredients} time={"Past"} />
                            })}
                        </div>
                    </div>
                }
            </div>
}

export default MyreservationView;
