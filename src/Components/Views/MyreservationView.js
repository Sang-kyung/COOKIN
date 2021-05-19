import React from 'react';
import './MyreservationView.css';
import { useSelector } from 'react-redux';

import OptionsItem from '../Items/OptionsItem.js'


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
                <p>MODIFY</p>
                <p>CANCEL</p>
            </div>
            }
        </div>
    </div>
}

const MyreservationView = ({Ups, Pasts}) => {
    return <div className ='reservation'>
                <h3>Upcoming Reservations</h3>
                <div>
                    {Ups.map((item, index) => {
                        return <MyreservationBox key={index} res={item} time={"Future"} />
                    })}
                </div>
                <h3>Past Reservations</h3>
                <div>
                    {Pasts.map((item, index) => {
                        return <MyreservationBox key={index} res={item} time={"Past"} />
                    })}
                </div>
            </div>
}

export default MyreservationView;
