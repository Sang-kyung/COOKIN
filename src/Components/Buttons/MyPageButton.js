import React, { useState } from 'react';
import './MyPageButton.css'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginModalView from '../Views/LoginModalView';

const MyPageButton = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const isloggedIn = useSelector(state => state.user.isloggedIn);

  const handleModalOpen = () => {
    isloggedIn === false ? (
      setShow(true)
    ) : (
      history.push("/mypage")
    )
  };

  const onCloseModal = () => {
    setShow(false);
  }

  return (
    <div className="myPageBtnWrapper">
      {show && 
        <LoginModalView 
          isReservePage={false}
          onCloseModal={onCloseModal}
        />}
      <div className="btnWrapper" onClick={handleModalOpen}>
        {isloggedIn ? (
          <div>
            <img className="userIcon" src={require('../../img/Main/user.png').default}/>
            <div className="userPageText">My Page</div>
          </div>
        ) : (
          <div className="signupLoginText">Sign Up / Log In</div>
        )}
        
      </div>
    </div>
  )
}

export default MyPageButton;