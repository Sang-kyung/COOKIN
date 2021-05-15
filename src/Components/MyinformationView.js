import React from 'react';
import './Mypage.css';

// view

const MyinformationView = ({nickname}) => {

  return <div>
            <div class = "grid">
              <div></div>
              <div class="information_box">
                <h3>{nickname}</h3>
                <h4>My Reservation : </h4>
                <h4>Upcoming : </h4>
              </div>
            </div>
          </div>
}

export default MyinformationView
