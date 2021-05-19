//import React, {useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../reducers/user';
import {logout} from '../reducers/user';
import React, { useState } from 'react';

// view
import MyinformationView from '../Components/Views/MyinformationView';
import MyreservationView from '../Components/Views/MyreservationView';
import MainHeaderViewLeft from '../Components/Views/MainHeaderViewLeft';

var Ups = new Array();
var Pasts = new Array();

const upsandpasts = (_res, present) => {
  console.log('upsandpasts');
  console.log(_res, present);
  var date = new Date(_res.date);
  date >= present ? (
    Ups.push(_res)
  ) : (
    Pasts.push(_res)
  )
  return;
}

const UpsandPasts = (res) => {
  console.log('UpsandPasts');
  console.log(res);
  const now = new Date();
  res.map((item, index) => (upsandpasts(item, now))) 
  return Ups, Pasts
}

const MyPage = () => {
  const history = useHistory();
  // const [phone, setPhone] = useState("");
  // const [name, setName] = useState("");
  const res = useSelector(state => state.reservation.reservations);
  const dispatch = useDispatch();
  // const isloggedIn = useSelector(state => state.user.isloggedIn);

  // const _login = () => {
  //   dispatch(login({phone, name}));
  // }

  // const _logout = () => {
  //   dispatch(logout());
  //   history.push("/");
  // }

  // const onPhoneChange = (e) => {
  //   console.log(e.target.value);
  //   setPhone(e.target.value);
  // }

  // const onNameChange = (e) => {
  //   console.log(e.target.value);
  //   setName(e.target.value);
  // }

  UpsandPasts(res);
  var Upcoming = Ups.length;

  // var condition = Ups.length > 0 && Pasts.length > 0;

  return <div>
          <MainHeaderViewLeft />
          <MyinformationView Upcoming={Upcoming}/>
          {/* {condition ? */}
          <MyreservationView Ups={Ups} Pasts={Pasts}/>
             {/* :
             <div>"No reservation"</div>
           } */}
        </div>
}

export default MyPage