import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'
import '../Components/Mypage.css';
import MyinformationView from '../Components/MyinformationView';
import MyreservationBox from '../Components/MyreservationBox';

const MyPage = () => {
  const history = useHistory();
  const jwtToken = useSelector((state) => state.user.jwtToken);

  //const nickname = useSelector((state) => state.users.nickname);
  const nickname = "MISS Team";
   

  return <div>
    <MyinformationView nickname={nickname}/>
    <div class='reservation'>
      <h3>Upcoming Reservations</h3>
      <MyreservationBox />
      <h3>Past Reservations</h3>
      <MyreservationBox />
    </div>
  </div>
}

export default MyPage