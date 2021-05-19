import React, { useState } from 'react';
import './LoginModal.css'
import { useDispatch } from 'react-redux';
import db from '../../firebase';
import { login } from '../../reducers/user';
import { show, setShow } from '../Buttons/MyPageButton';
import { useHistory } from 'react-router-dom';

const LoginModalView = (props) => {
    const show = props.show;
    const setShow = props.setShow;
    const dispatch = useDispatch();
    const history = useHistory();
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    const _login = () => {
    if(phone === "" || name === ""){
        return;
    }
    db.collection("user_list").doc(phone)
    .get().then((doc) => {
        if (doc.exists) {
            if(doc.data().name !== name){
                alert("Wrong name");
                setShow(false);
                return;
            }
            else{
                dispatch(login({phone, name}));
                history.push("/mypage");
            }
        }
        else {
            db.collection("user_list").doc(phone).set({
                name: name,
                phone: phone
            }).then(() => {
                dispatch(login({phone, name}));
                history.push("/mypage");
            })
        }
        }).catch((error) => {
            console.log("Login Firestore error: ", error);
        });
    }

    const onPhoneChange = (e) => {
        console.log(e.target.value);
        setPhone(e.target.value);
    }

    const onNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleModalClose = (e) => { //input value 비워야돼.
        const currentClass = e.target.className;
        switch (currentClass) {
            case 'modal-close': {
                setShow(false);
                break;
            }
            case 'modal-input': {
                return;
            }
        }
    };

    return <div hidden={!show}>
            <div className="modal">
                <div className="modal-login">                
                <div className="close">
                    <span className="modal-close" onClick={handleModalClose}>&times;</span>
                </div>
                <div className="modal-title">
                    COOKIN
                </div>
                <input className="modal-input" type="text" onChange={onPhoneChange} placeholder="Phone Number" />
                <input className="modal-input" type="text" onChange={onNameChange} placeholder="Username" />
                <button className="modal-loginbtn" onClick={_login}>
                    {" "}
                    Log In{" "}
                </button>
                </div>
            </div>
        </div>
}

export default LoginModalView;