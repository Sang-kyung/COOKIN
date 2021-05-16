import React from 'react';
import './MyreservationBox.css';

// view

const MyreservationBox = () => {
    if( true ) { // Upcoming reservation
        return <div className ="reservation_box">
            <div className ="inform">
                <div>
                    <h3>Din Tai Fung</h3>
                    <h4>date : </h4>
                    <h4>options : </h4>
                </div>
                <div>
                    <p>MODIFY</p>
                    <p>CANCEL</p>
                </div>
            </div>
        </div>
    }   //past reservation
    return <div className ="reservation_box">
                <div className ="inform">
                    <h3>Din Tai Fung</h3>
                    <h4>date : </h4>
                    <h4>options : </h4>
                </div>
            </div>
}

export default MyreservationBox
