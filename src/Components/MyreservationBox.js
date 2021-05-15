import React from 'react';
import './Mypage.css';

// view

const MyreservationBox = () => {
    if( true ) { // Upcoming reservation
        return <div class ="reservation_box">
            <div class="inform">
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
    return <div class ="reservation_box">
                <div class="inform">
                    <h3>Din Tai Fung</h3>
                    <h4>date : </h4>
                    <h4>options : </h4>
                </div>
            </div>
}

export default MyreservationBox
