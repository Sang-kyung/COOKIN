import React from 'react';
import './MyreservationView.css';

// view
import OptionsItem from '../Items/OptionsItem.js'

const MyreservationBox = ({resInfo}, time) => {
    if(time === "Future"){
        return <div className ="reservation_box">
        <div className ="inform">
            <div>
                <h3>{resInfo.name}</h3>
                <h4>date : {resInfo.date}</h4>
                <h4 className="options">options : {resInfo.options.map((item) => {
                                return <OptionsItem key={item.name} item={item} />
                            })}
                </h4>
            </div>
            <div>
                <p>MODIFY</p>
                <p>CANCEL</p>
            </div>
        </div>
    </div>
    }
    else{
        return <div className ="reservation_box">
        <div className ="inform">
            <div>
                <h3>{resInfo.name}</h3>
                <h4>date : {resInfo.date}</h4>
                <h4 className="options">options : {resInfo.options.map((item) => {
                                return <OptionsItem key={item.name} item={item} />
                            })}
                </h4>
            </div>
        </div>
    </div>
    }
}

const MyreservationView = ({resInfo}) => {
    var now = new Date().getTime();
    return <div className ='reservation'>
                <h3>Upcoming Reservations</h3>
                <div className="reservationScroll">
                    {resInfo.map((item) => {
                        var date = new Date(item.date).getTime();
                        if(date >= now) return <MyreservationBox key={item.date} resInfo={item} time={"Future"}/>
                    })}
                </div>
                <h3>Past Reservations</h3>
                <div className="reservationScroll">
                    {resInfo.map((item) => {
                        var date = new Date(item.date).getTime();
                        if(date < now) return <MyreservationBox key={item.date} resInfo={item} time={"Past"}/>
                    })}
                </div>
            </div>
}

export default MyreservationView;
