import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useDispatch, useSelector } from 'react-redux';
import db from '../../firebase';
import { signup, login } from '../../reducers/user';
import { useHistory } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import './LoginModalView.css'

const LoginModalView = (props) => {

    const {isReservePage, onCloseModal } = props;

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [wrongtext, setWrongText] = useState("");
    

    const _signup = () => {
        if(phone === "" || name === ""){
            return;
        }
        db.collection("user_list").doc(phone).set({
            phone: phone,
            name: name
        }).then(() => {
            dispatch(signup({phone, name}));
            !isReservePage && history.push("/mypage");

        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    const _enterUp = (e) => {
        if(e.keyCode == 13){
            _signup();
        }
    }

    const _login = () => {
        if(phone === ""){
            return;
        }
        db.collection("user_list").doc(phone)
        .get().then((doc) => {
            if (doc.exists) {
                let name = doc.data().name;
                console.log("GO LOGIN");
                console.log(name);
                dispatch(login({phone, name}));
                !isReservePage && history.push("/mypage");
            }
            else {
                setWrongText("No phone number in here, please sign up first.");
            }
        }).catch((error) => {
            console.log("Login Firestore error: ", error);
        });
    }

    const _enterIn = (e) => {
        if(e.keyCode == 13){
            _login();
        }
    }

    const onPhoneChange = (e) => {
        console.log(e.target.value);
        setPhone(e.target.value);
        setWrongText("");
    }

    const onNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const onClickTab = (e) => {
        setPhone("");
        setName("");
        setWrongText("");
    }


    const handleModalClose = (e) => { //input value 비워야돼.
        onCloseModal();
        setPhone("");
        setName("");
        setWrongText("");
    };

    return <div>
            <div className="modal">
                <div className="modal-login">           
                    <span className="modal-close" onClick={handleModalClose}>&times;</span>
                    <div className="modal-title">
                        COOKIN
                    </div>
                    {isReservePage && !user.isloggedIn &&
                     <div className="warning-reserve">You have to log in first.</div>
                    }
                    {isReservePage && user.isloggedIn ?
                        (
                            <div className="login-reserve">
                                You're logged in.<br />Reserve the kitchen now!
                            </div> 
                        )
                        :
                        (
                            <Tabs defaultIndex={0}>
                            <TabList>
                                <Tab onClick={onClickTab}>Sign Up</Tab>
                                <Tab onClick={onClickTab}>Log In</Tab>
                            </TabList>
                            <TabPanel>
                                <input className="modal-input" value={phone} type="text" onChange={onPhoneChange} placeholder="Phone Number" />
                                <input className="modal-input" value={name} type="text" onChange={onNameChange} placeholder="Username" onKeyDown={(e) => _enterUp(e)}/>
                                <button className="modal-loginbtn" onClick={_signup}>
                                    {" "}
                                    Sign Up{" "}
                                </button>
                            </TabPanel>
                            <TabPanel>
                                <input className="modal-input" value={phone} type="text" onChange={onPhoneChange} placeholder="Phone Number" onKeyDown={(e) => _enterIn(e)}/>
                                <div className="warning-wrong">{wrongtext}</div>
                                <button className="modal-loginbtn" onClick={_login}>
                                    {" "}
                                    Log In{" "}
                                </button>
                            </TabPanel>
                            </Tabs>
                        )
                    }
                </div>
            </div>
        </div>
}

export default LoginModalView;