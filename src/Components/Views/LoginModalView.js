import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './LoginModal.css'
import { useDispatch } from 'react-redux';
import db from '../../firebase';
import { signup, login } from '../../reducers/user';
import { show, setShow } from '../Buttons/MyPageButton';
import { useHistory } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';

const LoginModalView = (props) => {
    const show = props.show;
    const setShow = props.setShow;
    const dispatch = useDispatch();
    const history = useHistory();
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    const _signup = () => {
        if(phone === "" || name === ""){
            return;
        }
        db.collection("user_list").doc(phone).set({
            phone: phone,
            name: name
        }).then(() => {
            dispatch(signup({phone, name}));
            history.push("/mypage");

        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
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
                history.push("/mypage");
            }
            else{
                alert("No phone number")
                return;
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

    return <div hidden={!show}>
            <div className="modal">
                <div className="modal-login">                
                <div className="close">
                    <span className="modal-close" onClick={handleModalClose}>&times;</span>
                </div>
                <div className="modal-title">
                    COOKIN
                </div>
                <Tabs>
                <TabList>
                    <Tab>Sign Up</Tab>
                    <Tab>Log In</Tab>
                </TabList>
                <TabPanel>
                    <input className="modal-input" value={phone} type="text" onChange={onPhoneChange} placeholder="Phone Number" />
                    <input className="modal-input" value={name} type="text" onChange={onNameChange} placeholder="Username" />
                    <button className="modal-loginbtn" onClick={_signup}>
                        {" "}
                        Sign Up{" "}
                    </button>
                </TabPanel>
                <TabPanel>
                    <input className="modal-input" value={phone} type="text" onChange={onPhoneChange} placeholder="Phone Number" />
                    <button className="modal-loginbtn" onClick={_login}>
                        {" "}
                        Log In{" "}
                    </button>
                </TabPanel>
                </Tabs>
                </div>
            </div>
        </div>
}

export default LoginModalView;