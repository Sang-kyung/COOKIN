import React from 'react';
import './MyinformationView.css';


const MyinformationView = ({userInfo}) => {
  return <div className = "grid">
            <div className="information_box">
              <h3>{userInfo.name}</h3>
              <h4>My Reservation : {userInfo.Books}</h4>
              <h4>Upcoming : {userInfo.Upcoming}</h4>
            </div>
          </div>
}

export default MyinformationView;