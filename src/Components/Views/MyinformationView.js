import React from 'react';
import './MyinformationView.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../reducers/user';

const MyinformationView = ({res_num ,Upcoming}) => {

  const history = useHistory();
  const dispatch = useDispatch();

  const _logout = () => {
    dispatch(logout());
    history.push("/");
  }

  const user = useSelector(state => state.user);

  return <div className="grid">
          <div>
            <h3>{user.name}</h3>
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