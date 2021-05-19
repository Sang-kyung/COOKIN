import React from 'react';
import { Link } from 'react-router-dom';

import imgfile from '../../images/myPageButton.png';
import './MyPageButton.css'

const MyPageButton = () => {

  return <div className="myPageBtnWrapper">
      <Link to="/mypage"><img src={imgfile}/></Link>
    </div>
}

export default MyPageButton
