import React from 'react';
import './MyinformationView.css';

// view

const MyinformationView = ({nickname}) => {

  return <div>
            <div className = "grid">
              <div></div>
              <div className="information_box">
                <h3>{nickname}</h3>
                <h4>My Reservation : </h4>
                <h4>Upcoming : </h4>
              </div>
            </div>
          </div>
}

export default MyinformationView
