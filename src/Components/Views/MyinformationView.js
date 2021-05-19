import React from 'react';
import './MyinformationView.css';
import { useSelector } from 'react-redux';


const MyinformationView = ({Upcoming}) => {
  const user = useSelector(state => state.user);
  const res = useSelector(state => state.reservation);

  return <div className = "grid">
            <div className="information_box">
              <h3>{user.name}</h3>
              <h4>My Reservation : {res.number}</h4>
              <h4>Upcoming : {Upcoming}</h4>
            </div>
          </div>
}

export default MyinformationView;