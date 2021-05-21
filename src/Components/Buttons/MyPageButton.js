import React, { useState } from 'react';
import imgfile from '../../images/myPageButton.png';
import './MyPageButton.css'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginModalView from '../Views/LoginModalView';

const MyPageButton = () => {
  const [show, setShow] = useState(false); //
  const history = useHistory();
  const isloggedIn = useSelector(state => state.user.isloggedIn);

  const handleModalOpen = () => { // 밑에 onClick={handleModalOpen} 까지.
    isloggedIn === false ? (
      setShow(true)
    ) : (
      history.push("/mypage")
    )
  };

  return <div style={{height: "100%", width:'auto', backgroundColor:'black', float: 'right'}}>
          <LoginModalView show = {show} setShow={setShow}/>
          <button className="button" onClick={handleModalOpen}>
            <img style={{height: '100%', width: 'auto'}} src={imgfile}/>
          </button>
    </div>
}

export default MyPageButton;