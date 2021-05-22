import React from 'react';
import './MyinformationView.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../reducers/user';

const MyinformationView = ({name, res_num ,Upcoming}) => {

  const history = useHistory();
  const dispatch = useDispatch();

  const _logout = () => {
    dispatch(logout());
    history.push("/");
  }

  return <div className="grid">
          <div className="myInfoWrapper">
            <img className="myPageUserIcon" src={require('../../img/Main/user.png').default}/>
            <div className="userName">{user.name}</div>
            <h4>My Reservation : {res_num}</h4>
            <h4>Upcoming : {Upcoming}</h4>
          </div>
          <button className="logoutbtn" onClick={_logout}>
            {" "}
            Log Out{" "}
          </button>
        </div>
}

export default MyinformationView;