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

const MyPage = () => {
  const history = useHistory();
  // const [phone, setPhone] = useState("");
  // const [name, setName] = useState("");

  const dispatch = useDispatch();
  const isloggedIn = useSelector(state => state.user.isloggedIn);

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

  const res = useSelector(state => state.reservation.reservations);
  const now = new Date();

  let Ups = new Array();
  let Pasts = new Array();
  res.map(item => {
    var date = new Date(item.date)
    date >= now ? (
      Ups.push(item)
    ) : (
      Pasts.push(item)
    )
  })

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