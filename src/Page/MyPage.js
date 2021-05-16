import React from 'react';
import { useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'

import './Mypage.css';

// view
import MyinformationView from '../Components/Views/MyinformationView';
import MyreservationBox from '../Components/Views/MyreservationBox';

const MyPage = () => {
  const history = useHistory();
  const jwtToken = useSelector((state) => state.user.jwtToken);

  const nickname = useSelector((state) => state.user.nickname);

  return <div>
    <MyinformationView nickname={nickname}/>
    <div className ='reservation'>
      <h3>Upcoming Reservations</h3>
      <MyreservationBox />
      <h3>Past Reservations</h3>
      <MyreservationBox />
    </div>
  </div>
}

export default MyPage