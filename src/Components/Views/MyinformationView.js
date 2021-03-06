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

  return <div className="InfoBox">
          <div className="myInfoWrapper">
            <img className="myPageUserIcon" src={require('../../img/Main/user.png').default}/>
            <div className="userName">{name}</div><br/>
            <div className="h4-Info">My Reservation: {res_num}</div><br/>
            <div className="h4-Info">Upcoming: {Upcoming}</div>
          </div>
          <button className="logoutbtn" onClick={_logout}>
            {" "}
            Log Out{" "}
          </button>
        </div>
}

export default MyinformationView;

{/* <img src={require('../../images/logout.png').default}/> */}