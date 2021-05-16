import React from 'react';
import { useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'


// view
import MyinformationView from '../Components/Views/MyinformationView';
import MyreservationView from '../Components/Views/MyreservationView';
import MainHeaderViewLeft from '../Components/Views/MainHeaderViewLeft';

const MyPage = () => {
  const history = useHistory();
  const jwtToken = useSelector((state) => state.user.jwtToken);
  const userInfo = useSelector((state) => state.user.userInfo);
  const resInfo = useSelector((state) => state.user.resInfo);

  return <div>
    <MainHeaderViewLeft />
    <MyinformationView userInfo={userInfo}/>
    <MyreservationView resInfo={resInfo}/>
  </div>
}

export default MyPage