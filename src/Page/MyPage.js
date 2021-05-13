import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'

const MyPage = () => {
  const history = useHistory();
  const jwtToken = useSelector((state) => state.user.jwtToken);

  return <div>
    mypage
  </div>
}

export default MyPage