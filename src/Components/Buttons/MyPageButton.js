import React, { useState } from 'react';
import './MyPageButton.css'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginModalView from '../Views/LoginModalView';

const MyPageButton = () => {
  const [show, setShow] = useState(false); //
  const history = useHistory();
  const isloggedIn = useSelector(state => state.user.isloggedIn);

  const handleModalOpen = () => { // 밑에 onClick={handleModalOpen} 까지.
    console.log("aa")
    isloggedIn === false ? (
      setShow(true)
    ) : (
      history.push("/mypage")
    )
  };

  const onCloseModal = () => {
    console.log("bb")
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
        <img className="userIcon" src={require('../../img/Main/user.png').default}/>
      </div>
    </div>
  )
}

export default MyPageButton;