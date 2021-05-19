import React, { useState } from 'react';
import imgfile from '../../images/myPageButton.png';
import cancel from '../../images/cancel.png';
import './MyPageButton.css'
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../../reducers/user';
import { useHistory } from 'react-router';

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
      case 'cancel': {
        setShow(false);
      }
      case 'modal-background': {
        return;
      }
      case 'modal-card': {
        return;
      }
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
            <div className="modal-background" onClick={handleModalClose} >
              <div className="modal-card">
                <input className="modal-input" type="text" value={phone} onChange={onPhoneChange} placeholder="Phone Number" />
                <img style={{height: '20px', width: '20px'}} className="cancel" src={cancel} />
                <input className="modal-input" type="text" value={name} onChange={onNameChange} placeholder="Username" />
                <input className="modal-loginbtn" type="button" value="Log In" onClick={_login} />            
              </div>
            </div>
          </div>    
          <button className="button" onClick={handleModalOpen}>
            <img style={{height: '100%', width: 'auto'}} src={imgfile}/>
          </button>
    </div>
}

export default MyPageButton;