import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'

const MyPage = () => {
  const history = useHistory();
  const jwtToken = useSelector((state) => state.user.jwtToken);

  return <div>
    <Link to="/daily">to daily!</Link>
    <div>{jwtToken}</div>
    <div onClick={(e) => {
      history.push("/daily");
    }}>Another way to go daily</div>
  </div>
}

export default MyPage