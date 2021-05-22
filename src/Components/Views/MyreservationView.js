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

const MyreservationBox = ({res, time}) => {
    return <div className ="reservation_box">
        <div className ="inform">
            <div>
                <h3>{res.name}</h3>
                <h4>date : {res.date}</h4>
                <h4 className="options">options : {res.options.map((item) => {
                                return <OptionsItem key={item.name} item={item} />
                            })}
                </h4>
            </div>
            {time == "Future" && 
            <div>
                <p className="modify" onClick={_modify}>MODIFY</p>
                <p className="cancel" onClick={_cancel}>CANCEL</p>
            </div>
            }
        </div>
    </div>
}

const MyreservationView = ({reservations}) => {
    return <div className ='reservation'>
                <h3>Upcoming Reservations</h3>
                <div>
                    {reservations.map((item, index) => {
                        return new Date(item.date) >= new Date() && <MyreservationBox key={index} res={item} time={"Future"} />
                    })}
                </div>
                <h3>Past Reservations</h3>
                <div>
                    {reservations.map((item, index) => {
                        return new Date(item.date) < new Date() && <MyreservationBox key={index} res={item} time={"Past"} />
                    })}
                </div>
            </div>
}

export default MyreservationView;
