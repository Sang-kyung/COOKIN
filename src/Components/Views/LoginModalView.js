import React, { useState } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
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
                setPhone("");
                setName("");
                break;
            }
            case 'modal-input': {
                return;
            }
        }
    };





    // <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
    // <Tab eventKey="home" title="Home">
    //     <Sonnet />
    // </Tab>
    // <Tab eventKey="profile" title="Profile">
    //     <Sonnet />
    // </Tab>
    // <Tab eventKey="contact" title="Contact" disabled>
    //     <Sonnet />
    // </Tab>
    // </Tabs>

                // {/* <span>{"If you are first here, sign up with phone number and name"}</span>
                // <span>{"If you had logged in before, enter your phone number and name"}</span> */}
    return <div hidden={!show}>
            <div className="modal">
                <div className="modal-login">                
                <div className="close">
                    <span className="modal-close" onClick={handleModalClose}>&times;</span>
                </div>
                <div className="modal-title">
                    COOKIN
                </div>
                {/* <Tabs defaultActiveKey="Log In" id="" */}
                <input className="modal-input" value={phone} type="text" onChange={onPhoneChange} placeholder="Phone Number" />
                <input className="modal-input" value={name} type="text" onChange={onNameChange} placeholder="Username" />
                <button className="modal-loginbtn" onClick={_login}>
                    {" "}
                    Log In{" "}
                </button>
                </div>
            </div>
        </div>
}

export default LoginModalView;