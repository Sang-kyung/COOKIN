//import React, {useCallback} from 'react';
// import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../reducers/user';
import {logout} from '../reducers/user';
import React, { useState } from 'react';

// view
import MyinformationView from '../Components/Views/MyinformationView';
import MyreservationView from '../Components/Views/MyreservationView';
import MainHeaderViewLeft from '../Components/Views/MainHeaderViewLeft';

const MyPage = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const isloggedIn = useSelector(state => state.user.isloggedIn);

  console.log(isloggedIn);
  const _login = () => {
    dispatch(login({phone, name}));
  }

  const _logout = () => {
    dispatch(logout());
  }

  const onPhoneChange = (e) => {
    console.log(e.target.value);
    setPhone(e.target.value);
  }

  const onNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }

  return <div>
    {
      isloggedIn ? (
        <div>
          <MainHeaderViewLeft />
          <input type="button" value="Log Out" onClick={_logout} />
          <MyinformationView />
          <MyreservationView />
        </div>
      ) : (
        <div>
          <MainHeaderViewLeft />
          <input type="text" value={phone} onChange={onPhoneChange} placeholder="Phone Number" />
          <input type="text" value={name} onChange={onNameChange} placeholder="Username" />
          <input type="button" value="Log In" onClick={_login} />
        </div>
      )
    }
    </div>
}

export default MyPage