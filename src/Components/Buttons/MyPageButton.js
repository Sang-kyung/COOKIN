import React, { useState } from 'react';
import imgfile from '../../images/myPageButton.png';
import cancel from '../../images/cancel.png';
import './MyPageButton.css'
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../reducers/user';
import { useHistory } from 'react-router-dom';

const MyPageButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isloggedIn = useSelector(state => state.user.isloggedIn);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const _login = () => {
    if(phone === "" || name === ""){
      return;
    }
    dispatch(login({phone, name}));
    history.push("/mypage")
  }

  const onPhoneChange = (e) => {
    console.log(e.target.value);
    setPhone(e.target.value);
  }

  const onNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }

  const handleModalClose = (e) => {
    const currentClass = e.target.className;
    switch (currentClass) {
      case 'modal-title': {
        setShow(false);
      }
      case 'modal-close': {
        setShow(false);
      }
      // case 'modal-background': {
      //   return;
      // }
      // case 'modal-card': {
      //   return;
      // }
      case 'modal-input': {
        return;
      }
      case 'modal-loginbtn': {
        setShow(false);
        break;
      }
    }
  };

  const handleModalOpen = () => {
    isloggedIn === false ? (
      setShow(true)
    ) : (
      history.push("/mypage")
    )
  };

  return <div style={{height: "100%", width:'auto', backgroundColor:'black', float: 'right'}}>
          <div hidden={!show}>
            <div className="modal">
              <div className="modal-login">
                

                
                {/* x를 눌러 modal close */}
                <div className="close">
                  <span className="modal-close" onClick={handleModalClose}>&times;</span>
                </div>
                {/* title 표시 */}
                <div className="modal-title">
                  COOKIN
                </div>
                

                <input className="modal-input" type="text" onChange={onPhoneChange} placeholder="Phone Number" />
                {/* <img style={{height: '20px', width: '20px'}} className="cancel" src={cancel} onClick={handleModalClose}/> */}
                <input className="modal-input" type="text" onChange={onNameChange} placeholder="Username" />

                <button className="modal-loginbtn" onClick={_login}>
                  {" "}
                  Log In{" "}
                </button>
              
              </div>
            </div>
          </div>

          <button className="button" onClick={handleModalOpen}>
            <img style={{height: '100%', width: 'auto'}} src={imgfile}/>
          </button>
    </div>
}

export default MyPageButton;